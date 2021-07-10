// grab element
document.getElementById("count-el").innerText = 5

// variables 
let username = "Aisyah"
let myAge = 21
console.log(myAge)
console.log(username)

// variables and mathematical operation
let person = 3
let donut = 12

let per = donut / person
console.log(per)

// example of function #1 called in HTML
function increment() {
    console.log("The button was clicked")
}

// example of function #2 called in JS file
console.log("First Game")
function countdown() {
    console.log("Countdown Start.....")
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    console.log("Race Start!")
}

countdown()

console.log("Second Game")
countdown()

// Combining string
let username = "Aisyah!"
let message = "You have 3 notifications"

console.log(message + ", " + username)

// can store it in variable as well
let u = message + ", " + username

// You can do this:
let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋"

// function in JS
let salary = 30000
let overtime = 10
let rate = 20

function getWage(salary, overtime, rate) {
    return salary + (overtime * rate)
}

getWage()

// ARRAY
let skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "BootStrap",
    "PHP",
    "MySQL"
]

// ARRAY WITH MULTIPLE TYPES
let aisyah = ["Siti Aisyah", "Atirah", 21, true]

// ADDING AND REMOVING LAST ELEMENT IN ARRAY
let numbers = [1, 2]

// adding 6 as the last element to the array numbers 

numbers.push(6)

// removing 2 (the last element) from array numbers

numbers.pop(2)

console.log(numbers)

// FOR LOOP
//    START           FINISH       STEP SIZE
for (let count = 1; count < 11; count += 1) {

    console.log(count)

}

// Other example
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i])
}

// Other example where we concatenate element in array using for loop
let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let w = 0; w < sentence.length; w++) {
    greetingEl.textContent += sentence[w] + " "
}

// LOGICAL OPERATOR AND - && , OR - ||
let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse && givesCertificate) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}

let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

// OBJECT - we store more complex data and has key-value pairs

let castle = {
    name: "Kellie Castle",
    price: 91,
    isAvailable: true,
    details: ["4 guest", "1 bedrooms", "1 bath", "Private half bath"]
}

console.log(castle.name)
console.log(castle.details)
