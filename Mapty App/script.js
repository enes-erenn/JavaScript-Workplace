"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
const btn_deleteAll = document.querySelector(".btn_delete-all");
const btn_addMov = document.querySelector(".container_add-new-workout");
const map_div = document.querySelector("#map");
const btn_delete = document.querySelector(".btn_workout-delete");
const form_btn_ok = document.querySelector(".form__btn-ok");
const form_btn_cancel = document.querySelector(".form__btn-cancel");

let map, mapEvent;

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = "running";

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.type = "cycling";
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

/* const running1 = new Running([12, -23], 3.2, 14, 158);
const cycling1 = new Cycling([12, -23], 32, 44, 358);
console.log(running1, cycling1); */

class App {
  #map;
  #mapZoomLevel = 15;
  #mapEvent;
  #workouts = [];

  constructor() {
    this.btn_Delete_LocalStorage();
    this._getPosition();
    this._getLocalStorage();
    this.checker_Add_Btn();
    this.after_alert();
    this.btn_Add_New_Mov();
    form_btn_ok.addEventListener("click", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Could not get your position");
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, this.#mapZoomLevel);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.addEventListener("click", this._showForm.bind(this));

    this.#workouts.forEach((work) => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
    if (btn_addMov.style.display === "flex") btn_addMov.style.display = "none";
    document.querySelector(".sidebar");

    form_btn_ok.addEventListener("mouseover", () => {
      form_btn_ok.style.transitionDuration = "0.2s";
      form_btn_ok.style.transform = "scale(1.1)";
    });

    form_btn_ok.addEventListener("mouseout", () => {
      form_btn_ok.style.transform = "scale(1)";
    });

    form_btn_ok.addEventListener("click", () => {});

    form_btn_cancel.addEventListener("mouseover", () => {
      form_btn_cancel.style.transitionDuration = "0.2s";
      form_btn_cancel.style.transform = "scale(1.1)";
    });

    form_btn_cancel.addEventListener("mouseout", () => {
      form_btn_cancel.style.transform = "scale(1)";
    });

    form_btn_cancel.addEventListener("click", (e) => {
      e.preventDefault();
      this._hideForm();
      this.checker_Add_Btn();
    });
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";
    form.style.display = "grid";
    form.classList.add("hidden");
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    if (type === "running") {
      const cadence = +inputCadence.value;

      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert("Please fill in the blanks properly.");
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert("Please fill in the blanks properly.");
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workouts.push(workout);
    this._renderWorkout(workout);
    this._renderWorkoutMarker(workout);
    this._hideForm();
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃" : "🚴‍♀️"} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    this.btn_Delete_LocalStorage();

    let html = `
            <li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
    <div class="workout-details">
    <h2 class="workout__title title">${workout.description}</h2>
    <div class="workout__details">
                <span class="workout__icon">${
                  workout.type === "running" ? "🏃" : "🚴‍♀️"
                }</span>
                <span class="workout__value distance">${workout.distance}</span>
                <span class="workout__unit">km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value duration">${workout.duration}</span>
                <span class="workout__unit">min</span>
              </div>
            `;

    if (workout.type === "running")
      html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value pace">${workout.pace.toFixed(
                      1
                    )}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value cadence">${
                      workout.cadence
                    }</span>
                    <span class="workout__unit">spm</span>
                </div>
                </div>
                <div class="workout-btns hidden">
                  <button class="btn_workout-delete">Delete</button>
                  <button class="btn_workout-edit">Edit</button>
                </div>
            </li>
            `;
    if (workout.type === "cycling")
      html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value speed">${workout.speed.toFixed(
                      1
                    )}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value elevationGain">${
                      workout.elevationGain
                    }</span>
                    <span class="workout__unit">m</span>
                </div>
                </div>
                <div class="workout-btns hidden">
                  <button class="btn_workout-delete">Delete</button>
                  <button class="btn_workout-edit">Edit</button>
                </div>
            </li>
            `;
    form.insertAdjacentHTML("afterend", html);
    this.checker_Add_Btn();
    document
      .querySelector(".btn_workout-delete")
      .addEventListener("click", (e) => {
        document
          .querySelector(".btn_workout-delete")
          .parentElement.parentElement.remove();
        const data_id = e.target.closest(".workout").getAttribute("data-id");
        const indexNum = this.#workouts
          .map((workout) => workout.id)
          .indexOf(data_id);
        this.#workouts.splice(indexNum, 1);
        this._setLocalStorage();
        location.reload();
      });

    document
      .querySelector(".btn_workout-edit")
      .addEventListener("click", (e) => {
        const data_id = e.target.closest(".workout").getAttribute("data-id");
        const indexNum = this.#workouts
          .map((workout) => workout.id)
          .indexOf(data_id);
        console.log(this.#workouts);
        if (
          !e.target.closest(".workout").querySelector(".input-edit__distance")
        ) {
          e.target.closest(".workout").querySelector(".workout__title")[
            "outerHTML"
          ] = `<input type=text class="input-edit__title" value=${workout.description} />`;

          e.target.closest(".workout").querySelector(".distance")[
            "outerHTML"
          ] = `<input type=number class="input-edit__distance" value=${workout.distance} />`;

          e.target.closest(".workout").querySelector(".duration")[
            "outerHTML"
          ] = `<input type=number class="input-edit__duration" value=${workout.duration} />`;
          if (e.target.closest(".workout").querySelector(".cadence")) {
            e.target.closest(".workout").querySelector(".cadence")[
              "outerHTML"
            ] = `<input type=number class="input-edit__cadence" value=${workout.cadence} />`;
          } else {
            e.target.closest(".workout").querySelector(".elevationGain")[
              "outerHTML"
            ] = `<input type=number class="input-edit__elevationGain" value=${workout.elevationGain} />`;
          }

          e.target.closest(".btn_workout-edit").textContent = "✔";
        } else {
          this.#workouts[indexNum]["description"] = e.target
            .closest(".workout")
            .querySelector(".input-edit__title").value;
          e.target.closest(".workout").querySelector(".input-edit__title")[
            "outerHTML"
          ] = `<h2 class="workout__title">${workout.description}</h2>`;

          this.#workouts[indexNum]["distance"] = e.target
            .closest(".workout")
            .querySelector(".input-edit__distance").value;
          e.target.closest(".workout").querySelector(".input-edit__distance")[
            "outerHTML"
          ] = `
            <span class="workout__value distance">${
              e.target
                .closest(".workout")
                .querySelector(".input-edit__distance").value
            }</span>
            `;

          this.#workouts[indexNum]["duration"] = e.target
            .closest(".workout")
            .querySelector(".input-edit__duration").value;
          e.target.closest(".workout").querySelector(".input-edit__duration")[
            "outerHTML"
          ] = `
            <span class="workout__value duration">${
              e.target
                .closest(".workout")
                .querySelector(".input-edit__duration").value
            }</span>
            `;

          if (
            e.target.closest(".workout").querySelector(".input-edit__cadence")
          ) {
            this.#workouts[indexNum]["cadence"] = e.target
              .closest(".workout")
              .querySelector(".input-edit__cadence").value;
            e.target.closest(".workout").querySelector(".input-edit__cadence")[
              "outerHTML"
            ] = `
                <span class="workout__value cadence">${workout.cadence}</span>
                `;

            this.#workouts[indexNum]["pace"] =
              this.#workouts[indexNum]["duration"] /
              this.#workouts[indexNum]["distance"];

            e.target.closest(".workout").querySelector(".pace")["outerHTML"] = `
            <span class="workout__value pace">${workout.pace.toFixed(1)}</span>
                `;
          } else {
            this.#workouts[indexNum]["elevationGain"] = e.target
              .closest(".workout")
              .querySelector(".input-edit__elevationGain").value;
            e.target
              .closest(".workout")
              .querySelector(".input-edit__elevationGain")["outerHTML"] = `
                <span class="workout__value elevationGain">${workout.elevationGain}</span>
                `;

            this.#workouts[indexNum]["speed"] =
              this.#workouts[indexNum]["distance"] /
              (this.#workouts[indexNum]["duration"] / 60);

            e.target.closest(".workout").querySelector(".speed")[
              "outerHTML"
            ] = `
                <span class="workout__value speed">${workout.speed.toFixed(
                  1
                )}</span>
                `;
          }
          e.target.closest(".btn_workout-edit").textContent = "Edit";
          this._setLocalStorage();
        }
      });
  }

  _moveToPopup(e) {
    if (!this.#map) return;

    const workoutEl = e.target.closest(".workout");

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      (work) => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 0.5,
      },
    });
    //workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));

    if (!data) return;

    this.#workouts = data;
    this.#workouts.forEach((work) => {
      this._renderWorkout(work);
    });
  }

  btn_Delete_LocalStorage() {
    this.#workouts.length > 0
      ? btn_deleteAll.classList.remove("hidden")
      : btn_deleteAll.classList.add("hidden");

    btn_deleteAll.addEventListener("click", () => {
      this.reset();
    });
  }

  checker_Add_Btn() {
    if (document.getElementsByClassName("workout").length > 0) {
      btn_addMov.style.display = "none";
    } else {
      btn_addMov.style.display = "flex";
    }
  }

  btn_Add_New_Mov() {
    btn_addMov.addEventListener("click", () => {
      map_div.style.border = "3px dotted tomato";

      const alertFunc = () => {
        const alert = document.createElement("li");
        const alertText = document.createTextNode(
          "Please select a location on the map."
        );
        alert.classList.add("alert");
        alert.appendChild(alertText);
        containerWorkouts.appendChild(alert);
        setTimeout(() => {
          alert.remove();
        }, 1000);
      };

      const isAlertExist =
        document.getElementsByClassName("alert").length > 0 ? true : false;
      if (Boolean(isAlertExist) === false) alertFunc();
    });
  }

  after_alert() {
    map_div.addEventListener("click", () => {
      map_div.style.border = "none";
      if (!document.getElementsByClassName("leaflet-dragging")) {
        btn_addMov.classList.add("hidden");
      }
    });
  }

  reset() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}

const app = new App();
