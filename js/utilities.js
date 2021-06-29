var times;
if (!localStorage.getItem("times")) {
    localStorage.setItem("times", JSON.stringify([]))
}
times = JSON.parse(localStorage.getItem("times"))


function unsaveLastTime() {
    times.pop()
    localStorage.setItem("times", JSON.stringify(times))
    document.getElementById("unsaveTime").style.display = "none"
}
//
function indexOfBestTime() {
    return 0
}

function deleteTimeAtIndex(index) {
    times.splice(index, 1)
    localStorage.setItem("times", JSON.stringify(times))
    showTimes()
}