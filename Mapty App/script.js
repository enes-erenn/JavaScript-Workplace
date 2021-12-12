'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

class Workout {
    date = new Date();
    id = (new Date() + "").slice(-10);

    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }
}

class Running extends Workout{
    type = "running";
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.type = "running;"
        this.calcPace();
    };

    calcPace(){
        this.pace = this.duration / this.distance;
        return this.pace
        this.calcSpeed();
    };
};

class Cycling extends Workout{
    type= "cycling";
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.type = "cycling";
        this.calcSpeed();
    };

    calcSpeed(){
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    };
};

/* const running1 = new Running([12, -23], 3.2, 14, 158);
const cycling1 = new Cycling([12, -23], 32, 44, 358);
console.log(running1, cycling1); */

class App{
    #map;
    #mapEvent;
    #workouts = [];

    constructor(){
        this._getPosition();
        form.addEventListener("submit", this._newWorkout.bind(this));
        inputType.addEventListener("change", this._toggleElevationField);
    }

    _getPosition(){
        if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(){
            alert("Could not get your position")
        })
    };

    _loadMap(position){
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        
        const coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.#map);
    
    
        this.#map.on("click", this._showForm.bind(this));
    };

    _showForm(mapE){
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus()
    };

    _toggleElevationField(){
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    };

    _newWorkout(e){
        e.preventDefault();

        const validInputs = (...inputs) => 
        inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat, lng} = this.#mapEvent.latlng;
        let workout;

        if(type === "running"){
            const cadence = +inputCadence.value;
            if(!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence))
            return alert("Inputs have to be positive numbers!");
            workout = new Running([lat, lng], distance, duration, cadence)
        };

        if(type === "cycling"){
            const elevation = +inputElevation.value;
            if(!validInputs(distance, duration, elevation) || !allPositive(distance, duration, elevation))
            return alert("Inputs have to be positive numbers!")
            workout = new Cycling([lat, lng], distance, duration, elevation)
        };

        this.#workouts.push(workout);

        this.renderWorkoutMarker(workout);

        //Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";

    }

    renderWorkoutMarker(workout){
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
        .setPopupContent("workout")
        .openPopup();
    }
};

const app = new App();

