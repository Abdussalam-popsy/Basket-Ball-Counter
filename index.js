let count = 0;
let gCount = 0;
const homeCount = document.querySelector(".home-count");
const guestCount = document.querySelector(".guest-count");

let countOne = document.querySelector("add-one");
let countTwo = document.querySelector("add-two");
let countThree = document.querySelector("add-three");

function addOne() {
    count += 1
    homeCount.textContent = count
}

function addTwo() {
    count += 2
    homeCount.textContent = count
}

function addThree() {
    count += 3
    homeCount.textContent = count
}


function gOne() {
    gCount += 1
    guestCount.textContent = count
}

function gTwo() {
    gCount += 2
    guestCount.textContent = count
}

function gThree() {
    gCount += 3
    guestCount.textContent = count
}

function reset() {
    count = 0
    gCount = 0
    homeCount.textContent = 0
    guestCount.textContent = 0
}

console.log("Live");