"use strict";

//BMI CALCULATOR

// BMI FORMULA 
// BMI = weight / height ** 2;

// DATA 
const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

// BMI TEST 1
const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight / johnsHeight ** 2;
console.log(`Mark's BMI is ${marksBMI}.`)
console.log(`John's BMI is ${johnsBMI}.`)

// COMPARING BMI's
const markHigherBMI = (marksBMI, johnsBMI) => {
    if (marksBMI > johnsBMI){
        return `Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})`
    } else {
        return `John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI})`
    }
}
console.log(markHigherBMI(marksBMI, johnsBMI))

// DOLPHINS & KOALAS

// DATA 1
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

// CHOOSING THE WINNER
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

// TIP CALCULATOR

// TIP RATES
// If, bill value is between 50 - 300, tip is 15%.
// Else, It's 20%;

// DATA 1
let bill = 275;

// TIP VALUES
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

// TOTAL
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`)