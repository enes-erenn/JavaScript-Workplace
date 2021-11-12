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
// If, bills value is between 50 - 300, tip is 15%.
// Else, It's 20%;

// DATA
let bills = [275, 100];

// TIP VALUES
const tip = bills[0] <= 300 && bills[0] >= 50 ? bills[0] * 0.15 : bills[0] * 0.20;

// TOTAL
console.log(`The bill was ${bills[0]}, the tip was ${tip}, and the total value is ${bills[0] + tip}.`)

// DOLPHINS & KOALAS V2

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
Koalas average: ${koalasAverage}
`)
// CHECK WINNER

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

// TIP CALCULATOR V2

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

//BMI CALCULATOR V2

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

// TIP CALCULATOR V3

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
