// SOURCES:
// https://stackoverflow.com/questions/65410955/how-to-make-button-randomly-change-position-when-clicked
// Copilot

// ========= Start/Stop Button ========= //
//var startStopBtn = document.getElementById('btnStartStop');

// function startStop()
// {
//   var button = document.getElementById("btnStartStop");
//   // document.getElementById("myButton").textContent = "New Button Text";
//   // if (button.textContent = "Start") {
//   //   button.textContent = "Stop";
//   // } else {
//   //   button.textContent = "Start";
//   // }
  
// }


// ============= Move Mole ============= //
var mole = document.querySelector(".mole");
mole.addEventListener("click",moveMole);
function moveMole()
{
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    mole.style.left = i+"px";
    mole.style.top = j+"px";
}

// ================== Time clock =================== //

// function getRandomInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const minInterval = 1000; // 1 second
// const maxInterval = 5000; // 5 seconds

// setInterval(moveMole, getRandomInterval(minInterval, maxInterval));



let intervalId;

function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startRandomInterval() {
    const minInterval = 1000; // 1 second
    const maxInterval = 5000; // 5 seconds
    intervalId = setInterval(moveMole, getRandomInterval(minInterval, maxInterval));
  //setInterval(moveMole, getRandomInterval(minInterval, maxInterval));
}

function stopRandomInterval() {
    clearInterval(intervalId);
}

// Start the interval
startRandomInterval();

// Stop the interval after 10 seconds
setTimeout(stopRandomInterval, 10000);
