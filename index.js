let homeScore = document.getElementById("home-scr")
let guestScore = document.getElementById("guest-scr")

let homeScoreCount = 0
let guestScoreCount = 0

let homeWin = document.getElementById("score-bg-home")
let guestWin = document.getElementById("score-bg-guest")

console.log(homeScore)

function incrementHomeOne() {
    homeScoreCount++
    homeScore.textContent = homeScoreCount
    checkWinner()
}

function incrementHomeTwo() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
    checkWinner()
}

function incrementHomeThree() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
    checkWinner()
}

function incrementGuestOne() {
    guestScoreCount++
    guestScore.textContent = guestScoreCount
    checkWinner()
}

function incrementGuestTwo() {
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
    checkWinner()
}

function incrementGuestThree() {
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
    checkWinner()
}

function checkWinner() {
    if(guestScoreCount >= 50) {
        guestWin.style.border = "thick solid green"
        guestScore.textContent = "WINNER"
    }else if(homeScoreCount >= 50) {
        homeWin.style.border = "thick solid green"
        homeScore.textContent = "WINNER"
    }
}

function reset() {
    guestScoreCount = 0
    homeScoreCount = 0
    guestScore.textContent = guestScoreCount
    homeScore.textContent = homeScoreCount
    homeWin.style.border = "none"
    guestWin.style.border = "none"

}