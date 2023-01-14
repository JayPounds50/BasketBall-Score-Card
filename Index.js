let homescore = document.getElementById("homescore-el")
let guestscore = document.getElementById("guestscore-el")

let oldscore1 = 0

let oldscore2 = 0

function add1home() {
    oldscore1 += 1
    homescore.textContent = oldscore1 
}

function add2home() {
    oldscore1 += 2
    homescore.textContent = oldscore1
}

function add3home() {
    oldscore1 += 3
    homescore.textContent = oldscore1
}

function add1guest() {
    oldscore2 += 1
    guestscore.textContent = oldscore2 
}

function add2guest() {
    oldscore2 += 2
    guestscore.textContent = oldscore2
}

function add3guest() {
    oldscore2 += 3
    guestscore.textContent = oldscore2
}

function reset() {
    guestscore.textContent = 0
    homescore.textContent = 0

    oldscore1 = 0
    oldscore2 = 0

}