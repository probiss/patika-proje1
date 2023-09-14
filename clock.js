let myName = prompt("Enter your name: ")
let greeting = document.querySelector("#myName")


greeting.innerHTML = `${myName}`
greeting.style.color = "white"

if(!myName){
    body.innerHTML = `We need your name to greet you!`
}

function showTime() {
    let clock = document.querySelector("#myClock")
    let colorClock = document.querySelector(".clock")

    let today = new Date()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[today.getDay()]
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + `${day}`

    clock.innerHTML = time

    setInterval(showTime, 1000)
}

showTime()