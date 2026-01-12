
let home = 0
let guest = 0

document.getElementById("home-score").textContent = home
document.getElementById("guest-score").textContent = guest

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// Fuctions for Home
function homeadd1() {
    home = home + 1
    homeScore.textContent = home
    console.log(home)
}

function homeadd2() {
    home = home + 2
    homeScore.textContent = home
    console.log(home)
}

function homeadd3() {
    home = home + 3
    homeScore.textContent = home
    console.log(home)
}



// Fuctions for Guest

function guestadd1() {
    guest = guest + 1
    guestScore.textContent = guest
    console.log(guest)
}

function guestadd2() {
    guest = guest + 2
    guestScore.textContent = guest
    console.log(guest)
}

function guestadd3() {
    guest = guest + 3
    guestScore.textContent = guest
    console.log(guest)
}
