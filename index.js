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

// FOR CARD 3

// Initial State
let cards = []
let sumCard = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Grab HTML element
// you can use querySelector but it select CSS element instead (prob usesful for hide/show div) 
// let sumEl = document.querySelector("#sum3-el")
let messageEl = document.getElementById("message-el")
let sum3El = document.getElementById("sum3-el")
let card3El = document.getElementById("cards3-el")
let resultEl = document.getElementById("result-el")


// OBJECT
let player = {
    name: "Alex",
    chips: 150,
    sayHello: function () {
        console.log("Hello!")
    }
}

player.sayHello()

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sumCard = firstCard + secondCard
    isAlive = true
    renderGame();
}

// == means it will ignore the type. Example: "100" is equal to 100
// === means it wont ignore the type. Example: "100" is not equal to 100
function renderGame() {
    card3El.textContent = "Cards: "
    for (let c = 0; c < cards.length; c++) {
        card3El.textContent += cards[c] + " "
    }
    sum3El.textContent = "Sum: " + sumCard
    if (sumCard <= 20) {
        message = "Draw a new card. 🙂"
    } else if (sumCard === 21) {
        hasBlackJack = true
        message = "You got a blackjack! 🥳"
        result()
    } else {
        isAlive = false
        message = "You are out of the game 😭"
        result()
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = getRandomCard()
        sumCard += newCard
        cards.push(newCard)
        console.log(cards)
        renderGame()
    }
}

function getRandomCard() {
    let rand = Math.floor(Math.random() * 13) + 1
    console.log(rand)

    if (rand === 1) { // if 1     -> return 11
        return 11
    } else if (rand > 10) { // if 11-13 -> return 10
        return 10
    } else {
        return rand
    }
}

function result() {
    let res = 0
    if (hasBlackJack) {
        res = player.chips + 5
        resultEl.textContent = "Wohoo! You gained $5"
        playerEl.textContent = player.name + ": $" + res
    } else if (!isAlive) {
        res = player.chips - 5
        resultEl.textContent = "You lost $5"
        playerEl.textContent = player.name + ": $" + res
    }
}