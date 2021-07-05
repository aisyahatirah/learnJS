
// grab element
// document.getElementById("count-el").innerText = 5

// variables 
// let username = "Aisyah"
// let myAge = 21
// console.log(myAge)
// console.log(username)

// variables and mathematical operation
// let person = 3
// let donut = 12

// let per = donut / person
// console.log(per)

// example of function #1 called in HTML
// function increment() {
//     console.log("The button was clicked")
// }

// example of function #2 called in JS file
// console.log("First Game")
// function countdown() {
//     console.log("Countdown Start.....")
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
//     console.log("Race Start!")
// }

// countdown()

// console.log("Second Game")
// countdown()

// Combining string
// let username = "Aisyah!"
// let message = "You have 3 notifications"

// console.log(message + ", " + username)

// can store it in variable as well
// let u = message + ", " + username

// You can do this:
// let welcomeEl = document.getElementById("welcome-el")

// let name = "Per Harald Borgen"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1

// welcomeEl.innerText += "👋"

// FOR CARD 1
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let saveStr = document.getElementById("save-str")

let count = 0
function increment() {
    count += 1
    countEl.innerText = count
    saveStr.innerText = "" //when 'INCREMENT' is pressed, the save-el is not displayed
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // saveEl.innerText += countStr
    count = 0
    countEl.innerText = count // set back to 0 after press 'Save'
    saveStr.innerText = "Entry is saved." //when 'SAVE' is pressed, the save-el is displayed
}

// FOR CARD 2
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL = document.getElementById("sum-el")

let sum = 0

function add() {
    sum = num1 + num2
    sumEL.innerText = "Answer: " + sum
}

function substract() {
    sum = num1 - num2
    sumEL.innerText = "Answer: " + sum
}

function divide() {
    sum = num1 / num2
    sumEL.innerText = "Answer: " + sum
}

function multiply() {
    sum = num1 * num2
    sumEL.innerText = "Answer: " + sum
}