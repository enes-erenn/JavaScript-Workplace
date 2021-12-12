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
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    };

    calcPace(){
        this.pace = this.duration / this.distance;
        return this.pace
        this.calcSpeed();
    };
};

class Cycling extends Workout{
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elasticity = elevationGain;
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
        console.log(`https://www.google.com.tr/maps/@${latitude},${longitude}`);
        
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
    }
    _toggleElevationField(){
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    }
    _newWorkout(e){
        e.preventDefault();

        //Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";

        //Display Marker on Submit
        console.log(this.#mapEvent);
        const {lat, lng} = this.#mapEvent.latlng;
        L.marker([lat, lng]).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: "running-popup"
        })
        .setPopupContent("Workout")
        ).openPopup()
    }
};

const app = new App();

