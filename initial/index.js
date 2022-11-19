
/*//document.getElementById("count").innerText = 5 *\
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
    //let countEl = document.getElementById("count-el") // pass in arguments

// change the count-el in the HTML to reflect the new count

// camelCase


// 1. Create a function, save(), which logs out the count when it's called
let saveEl = document.getElementById("save-el") //added above let countEl
console.log(saveEl);

let countEl = document.getElementById("count-el") // pass in arguments
console.log(countEl);
let count = 0

//console.log(countEl) to check, yes, move on
//console.log(saveEl) to chec

function increment() {
            count = count + 1
                //shorter version//same command count += 1
            //countEl.innerText = count
           countEl.textContent = count
}



function save() {
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    
     let countStr = count + " - "
    
     // 3. Render the variable in the saveEl using innerText
    /*//saveEl.innerText += countStr ---> format shown to users on the browser is abit off
        // so lets use, */
        saveEl.textContent += countStr // gave a better visual on the browser, better spacing
        /*//let countEl.textContent = 0 // this is to set the recorded count equal to zero again; to reset to zero after each save button
        //count = 0 *\
        countEl.textcontent = 0
        count = 0
    
        

    // NB: Make sure to not delete the existing content of the paragraph

    /*so what did i do here? on index.html, I've id an element by id="name-el"
        then, I've created a variable to link this id by let saveEl = document.getElementById("name-el")
        then, to ultimately set this variable, nameEl.innertext = another variable that I want it to display on the browser
        so above this command, I want to create a variable that conjoins variables/strings needed
            so let newvariable/countStr = count + " - " in this case
*/

        //console.log(count)
}


//*****CHALLENGE*****
//create two sets up code to set back to zero everytime you hit save-btn
    /* needed to think interms of where you should set var/name = 0 like let count =0
    in this case, under your function () {
        you would want to add,
            saveEl.textContent = 0 after recording the counts, which you created a countStr variable to keep track/record

    }






















    /* notes/summary
    /* write html and js at the same time 
1) <link rel="stylesheet" href="index.css">

2) <head> doesn't not show up the browser

3) <body> shows up on the browser
    so in the body: write texts that you want it appear on the browser and change
            then, you can css individually or in groups as needed
                    css you can do later
    so with the texts: break it up using 
            headers,      <h1>Walker counts:</h1> ----------->css h1 {}
                          <h2 id="count-el">   0 </h2> ------>css h2 {}
                    When you create ElementById, on js, create a variable and then function
                        ie. let countEl = document.getElementById("count-el")
                            then, let count = 0 to start at zero
                            creaate a function name() { to count in increments: function increments() {} to call out upon increment-btn being clicked on the browser
                                    count += 1 // this increases by one
                                    countEl.innertext = count // this will display the increment
                                        bc you've linked "count-el" html with countEl, 
                                            and countEl.innertext is set up to equal count, which you also defined
                                                count = count + 1 // same thing as count += 1
                                                        }
                                                        
            paragraph,    <p id="save-el">Previous counts: </p>                                                 
                         ie. let saveEl = document.getElementById("save-el") 
                            set variable as needed
                            create a function save() { to call out upon save-btn being clicked on the browser
                                upon every save-btn click, want to save/show it on the browser
                                    let newname = count + " - "
                                        let countStr = count + " - " // this will display count/# followed by - to keep track on the browser
                                    saveEl.innerText += countStr // this will record previously saved on the browser with # - # - # 
                                        upon every click of the save button
                                                       }                            

           


            add buttons,  <button id="save-btn" onclick="save()">SAVE</button>
    
    
            at the very end, make sure to link by typing: 
            <script src="index.js"></script>

    */
