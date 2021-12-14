"use strict";

// FUNDAMENTALS PART - 1 //
// BMI CALCULATOR

// BMI = weight / height ** 2;

// DATA 
const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

// Challenge 1 - Calculating BMI's
const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight / johnsHeight ** 2;
console.log(`Mark's BMI is ${marksBMI}.`)
console.log(`John's BMI is ${johnsBMI}.`)

// Challenge 2 - Comparing BMI's
const markHigherBMI = (marksBMI, johnsBMI) => {
    if (marksBMI > johnsBMI){
        return `Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI}.)`
    } else {
        return `John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI}.)`
    }
}
console.log(markHigherBMI(marksBMI, johnsBMI))

// DOLPHINS & KOALAS

// DATA
const firstScoreDolphins = 97;
const secondScoreDolphins = 112;
const thirdScoreDolphins = 101;

const firstScoreKoalas = 109;
const secondScoreKoalas = 95;
const thirdScoreKoalas = 123;

// CALCULATING THE AVERAGES
const averageDolphins = (firstScoreDolphins + secondScoreDolphins + thirdScoreDolphins) / 3;
const averageKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;

// COMPARING THE AVERAGES
console.log(`Dolphins' average is ${averageDolphins}.`)
console.log(`Koalas' average is ${averageKoalas}.`)

// Challenge 3 - CHOOSING THE WINNER
const whoIsWinner = (averageDolphins, averageKoalas) => {
    if (averageDolphins > averageKoalas && averageDolphins > 100 ) {
        return `
        Dolphins' score: ${averageDolphins},
        Koalas' score: ${averageKoalas},
        Winner is Dolphins.`
    } else if(averageDolphins === averageKoalas && averageDolphins < 100 && averageKoalas < 100) {
        return `
        Dolphins' score: ${averageDolphins},
        Koalas' score: ${averageKoalas},
        There is no winner.`
    } else {
        return `
        Dolphins' score: ${averageDolphins},
        Koalas' score: ${averageKoalas},
        Winner is Koalas`
    }
}
console.log(whoIsWinner(averageDolphins, averageKoalas))

// Challenge 4 - TIP CALCULATOR

// TIP RATES
// If, bills value is between 50 - 300, tip is 15%.
// Else, It's 20%;

// DATA
let bills = [275, 100];

// TIP VALUES
const tip = bills[0] <= 300 && bills[0] >= 50 ? bills[0] * 0.15 : bills[0] * 0.20;

// TOTAL
console.log(`The bill was ${bills[0]}, the tip was ${tip}, and the total value is ${bills[0] + tip}.`)

// FUNDAMENTALS PART - 2
// DOLPHINS & KOALAS

// DATA
let dolphinsFirstScore = 85;
let dolphinsSecondScore = 54;
let dolphinsThirdScore = 41;

let koalasFirstScore = 23;
let koalasSecondScore = 34;
let koalasThirdcore = 27;

// AVERAGE CALCULATOR
const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
}

const dolphinsAverage = calcAverage(dolphinsFirstScore, dolphinsSecondScore, dolphinsThirdScore)
const koalasAverage = calcAverage(koalasFirstScore, koalasSecondScore, koalasThirdcore)

console.log(`Dolphins average: ${dolphinsAverage},
Koalas average: ${koalasAverage}`)

// Challenge 5 - CHECK WINNER
const checkWinner = (dolphinsAverage, koalasAverage) => {
    if(dolphinsAverage > koalasAverage * 2){
        console.log(`
        "Dolphins Win (${dolphinsAverage} vs. ${koalasAverage})"
        `)
    } else if (koalasAverage > dolphinsAverage * 2) {
        console.log(`
        "Koalas Win (${koalasAverage} vs. ${dolphinsAverage})"
        `)
    } else {
        console.log(`
        "There is no winner, (${koalasAverage} vs. ${dolphinsAverage})
        `)
    }
}
checkWinner(dolphinsAverage, koalasAverage)

// Challenge 6 - TIP CALCULATOR

// TIP RATES
// If, bills value is between 50 - 300, tip is 15%.
// Else, It's 20%;

// TIP VALUES
const calcTip = function(bill){
    if(bill <= 300 && bill >= 50) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

// TOTAL
console.log(`The bill was ${bills[1]}, the tip was ${calcTip(bills[1])}, and the total value is ${bills[1] + calcTip(bills[1])}.`)

// Challenge 7 - BMI CALCULATOR

// BMI FORMULA
// BMI = weight / height ** 2;

// DATA
const mark = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,
    BMI: ""
}
const john = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,
    BMI: ""
}

// BMI TEST
const calcBMI = (weight, height) => {
    return weight / height ** 2;
}

mark.BMI = calcBMI(mark.weight, mark.height)
john.BMI = calcBMI(john.weight, john.height)
console.log(`${mark.fullName}'s BMI is ${mark.BMI}.`)
console.log(`${john.fullName}'s BMI is ${john.BMI}.`)

// COMPARING BMI's
const higherBMI = function(){
    if (mark.BMI > john.BMI){
        return `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`
    } else {
        return `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`
    }
}
console.log(higherBMI(mark.BMI, john.BMI));

// Challenge 8 -  TIP CALCULATOR
const billsToday = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tipsToday = []
const totalsToday = []
let totalToday = []

// TIP VALUES
const calcTips = function(bills){
    if(bills <= 300 && bills >= 50) {
        return bills * 0.15;
    } else {
        return bills * 0.20;
    }
}

// TIPS AND TOTAL
    for (let i = 0; i < billsToday.length; i++) {
        const tip = calcTips(billsToday[i])
        tipsToday.push(tip)
        totalsToday.push(tip + billsToday[i])
    }

    const calcAvg = function (arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return sum / arr.length
    }
console.log(`
Today's bills are ${billsToday},
Today's tips are ${tipsToday},
Today's totals are ${totalsToday},
Today's average is ${calcAvg(totalsToday)}
`)

// Data Structures, Modern Operators and Strings

// FOOTBALL GAME

// DATA
const game = {
    teamA: "Bayern Munich",
    teamB: "Dortmund",
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ]
    ],
    score: "3:0",
    scored: [
        "Lewandowski",
        "Gnarby",
        "Lewandowski"
    ],
    date: "June 12th, 2020",
    odds: {
        teamA: 1.33,
        x: 3.25,
        teamB: 6.5,
    }
}

// Destructuring
const [playersA, playersB] = game.players;
const [gkA, fieldPlayersA] = [playersA];
const [gkB, fieldPlayersB] = [playersB];
const allPlayers = [...playersA, ...playersB];
const playersAFinal = [...playersA, "Thiago", "Coutinho", "Perisic"];

// Function
const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`)
}

printGoals(...game.scored)

// PRINTING ALL PLAYERS
for (const item of game.scored.entries()) {
    console.log(`Goal ${item[0] + 1}: ${item[1]}`)
}

// PRINTING ODDS
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

// FOOTBALL GAME WITH MAP
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// GETTING THE EVENTS (KEYS) IN A MAP
const events = [...new Set(gameEvents.values())]
console.log(events)

// GETTING THE TIME OF THE GAME
const time = [...gameEvents.keys()].pop()
console.log(time)

// DELETING AN EVENT IN A MAP
gameEvents.delete(64);

console.log(`An event happened, on average, every ${time / gameEvents.size} minutes.`)

// PRINTING THE GAME
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? "FIRST" : "SECOND"
    console.log(`[${half} HALF] ${min}: ${event}`)
}

// Strings

// TEST DATA

const testData = [
    "underscore_case",
    " first_name",
    "Some_Variable",
    "  calculate_AGE",
    "delayed_departure",
];

for (const item of testData) {
    const [first, second] = item.toLowerCase().trim().split("_");
    const output = first + second.replace(second[0], second[0].toUpperCase())
    console.log(output)
}

// A Closer Look at Functions

// DATA [1, 5, 3, 9, 6, 1]

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer () {
        const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write Option Number)`))
        console.log(answer)
        typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
        this.displayResults();
        this.displayResults("string")
        console.log(this.answers)
    },
    displayResults(type = "array") {
        if (type === "array"){
            console.log(this.answers)
        } else if (type === "string"){
            console.log(`Poll results are ${this.answers.join(", ")}`)
        }
    }
};
  
  // IIFE
  (function () {

    const header = document.querySelector('h1');
    header.style.color = '#fff';

    document.querySelector('body').addEventListener('click', function () {
        const randomNumber = Math.floor(Math.random() * 1000000)
      header.style.color = `#${randomNumber}`;
    });
  })();

  // Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

  // Extracting Cats and Dogs (This info comes from Tasks.pdf)
    const dogsJulia_ = [3, 5, 2, 12, 7];
    const dogsJulia = dogsJulia_.splice(1, 2);
    const dogsKate = [4, 1, 15, 8, 3];

  // Function
const checkDogs = function(a, b) {
    const dogs = a.concat(b)
    dogs.forEach(function (dog, i){
        if(dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
        } else console.log(`Dog number ${i + 1} is still a puppy`);
    })
};

checkDogs(dogsJulia, dogsKate);

const euroToUsd = 1.1

const currensies = dogsKate.map(mov => mov * euroToUsd)
console.log(dogsKate)
console.log(currensies)

dogsKate.forEach(function(mov){
    console.log(mov * euroToUsd);
})

console.log(dogsKate)

// Data [5, 2, 4, 1, 15, 8, 3]
const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    const adults = humanAges.filter(age => age >= 18)
    console.log(humanAges)
    console.log(adults)
    const average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length, 0)
    return average;
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

const calcAverageHumanAge2 = ages => 
ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);


const avg2 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3])
console.log(avg2)

// DATA
const dogs = 
[
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));

const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));

const ownersEatTooMuch = dogs
.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners)
console.log(ownersEatTooMuch)

const ownersEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recFood)
.flatMap(dog => dog.owners)
console.log(ownersEatTooMuch)

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!'`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!'`);

const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);


// Prototype
const car = function(make, speed){
    this.make = make;
    this.speed = speed;
}
const bmw = new car("bmw", 120);
const mercedes = new car("mercedes", 95);

car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
};

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

// Class, Get and Set
class carCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed *= 1.6
    }
};

const ford = new carCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

// Linking the prototypes
const EV = function(make, speed, charge){
    car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(car.prototype);
EV.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
}
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`)
}

const tesla = new EV("Tesla", 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

// ES6 Classes Usage

class EVCl extends carCl {
    #charge;

    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    };
  
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      return this;
    };
  
    accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${
          this.#charge
        }`
      );
      return this;
    };
}

const rivian = new EVCl("Rivian", 100, 20);
rivian.accelerate().accelerate().brake().chargeBattery(230).accelerate();;

// Asynchronous

//Challenge 1
const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then(res => {
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
  
        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
      })
      .then(res => {
        if (!res.ok) throw new Error(`Country not found (${res.status})`);
  
        return res.json();
      })
      .then(data => renderCountry(data[0]))
      .catch(err => console.error(`${err.message} 💥`));
  };
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);

// Usage of; Async - Await - Try and Catch
const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  
const whereAmI2 = async function () {
    try {
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;
  
      const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      if (!resGeo.ok) throw new Error('Problem getting location data');
  
      const dataGeo = await resGeo.json();
      console.log(dataGeo);
  
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
      );
      
      if (!res.ok) throw new Error('Problem getting country');
  
      const data = await res.json();
      console.log(data);
      renderCountry(data[0]);
    } catch (err) {
      console.error(`${err} 💥`);
    }
  };

  whereAmI2();
  whereAmI2();
  whereAmI2();
  console.log('FIRST');