var solving = false
var haveSolved = true
var timer = 0 //in ms

document.addEventListener('keyup', function(key) {
    if (key.keyCode == 32 || key.code == "Space") {
        if (haveSolved) {
            timer = 0
            solving = true
            haveSolved = false
        } else {
            haveSolved = true
        }
    }
})

document.addEventListener('keydown', function(key) {
    if ((key.keyCode == 32 || key.code == "Space")) {
        if (solving) { //solved !
            solving = false
            document.getElementById("timer").innerHTML = timer / 100
            document.getElementById("timer").style.color = "black"
            times.push(timer / 100)
            localStorage.setItem("times", JSON.stringify(times))
            document.getElementById("unsaveTime").style.display = "flex"
        } else {
            document.getElementById("timer").innerHTML = '0.00'
            document.getElementById("unsaveTime").style.display = "none"
            document.getElementById("timer").style.color = "green"
        }
    }
})

setInterval(function() {
    if (solving) {
        timer++
        document.getElementById("timer").innerHTML = timer / 100
    }
}, 10)