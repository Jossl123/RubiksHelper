var times

window.onload = function() {
    if (!localStorage.getItem("times")) {
        localStorage.setItem("times", JSON.stringify([]))
    }
    times = JSON.parse(localStorage.getItem("times"))
    showTimes()
}

function showTimes() {
    document.getElementById("times").innerHTML = ""
    for (let i = 0; i < times.length; i++) {
        document.getElementById("times").innerHTML += `<li>${times[i]}</li><button onclick="deleteTimeAtIndex(${i})">delete this time</button>`
    }
}