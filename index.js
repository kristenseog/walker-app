//document.getElementById("count").innerText = 5
// to build this passenger counter app --> how do we store?

/*let count = 0
    // this creates variable = count

console.log(count) */

/*

//using JS like a calculator//
//lets use variable!

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

//shortcut to comment out// control+k+c after selecting/// or could use /* code block */

/* 1. create two variable, myAge and humanDogRatio
    2. Multiply the two together and sotre the result in myDogAge
    3. log myDogAge to the console */
// let myAge = 31
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

/* // count +1 to increment by 1
let count = 5
count = count + 1 // should mean 5 +1 = 6
// count = count + 2
// count = count + 5
console.log(count)
// cool, it works! check console (cntrl shift I or by inspect)
*/

/* 1. create a variable, bonus points. Initialize it as 50. Increase it to 100
2. Decrease it down to 25, and then finally increase it to 70
3. console.log the value after each step */

/*let bonusPoints = 50
bonusPoints = bonusPoints + 50
console.log(bonusPoints)
// you've increased it to 100
bonusPoints = bonusPoints -75
// decreased it to 25
bonusPoints =  bonusPoints + 45
console.log(bonusPoints)
// you've successful got 70 as final console.log

/* after creating an increment button
1. intialize the count as 0
listen for clicks on the increment button --> attribute to HTML, add onclick = "increment()"
increment the count variable whent eh button is clicked
change the count-el in the HTML to reflect the new count */

/*
function increment() {
    console.log("The button was clicked")
}


// set up the race car
// countdown console.log 5 --->1 ----> WANT TO CREATE A FUNCITON INSTEAD
function countdown() {
     console.log(5)
     console.log(4)
     console.log(3)
     console.log(2)
     console.log(1)
}
// to call the function, setting up the race
countdown()

//setting up the new race/second race
coundown ()


/// create a function (you decide the name) that logs out the number 42 to the console
/// then call the function by typing function name (you created)

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// countdown() 

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
function myLogger() {
    console.log(42)
}

myLogger()

let lap1 = 34
let lap2 = 33
let lap3 = 36
// Create a function that logs out the sum of all the lap times
function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

logLapTime()


let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)
*/

//---------------------------------------------
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() { 
//     console.log("The button was clicked")
// }
// increment()

// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments

console.log(countEl)

let count = 0

function increment() {
        count = count + 1
        
        countEl.innerText = count
        
}

increment()









