let timer;
let isRunning = false;
let isPaused = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (!isRunning) {
    timer = setInterval(runStopwatch, 10); // Update interval to 10 milliseconds for milliseconds
    document.getElementById("startStopBtn").innerText = "Stop";
    isRunning = true;
  } else {
    clearInterval(timer);
    document.getElementById("startStopBtn").innerText = "Start";
    isRunning = false;
  }
}

function pause() {
  if (isRunning && !isPaused) {
    clearInterval(timer);
    document.getElementById("pauseBtn").innerText = "Resume";
    isPaused = true;
  } else if (isRunning && isPaused) {
    timer = setInterval(runStopwatch, 10); // Update interval to 10 milliseconds for milliseconds
    document.getElementById("pauseBtn").innerText = "Pause";
    isPaused = false;
  }
}

function runStopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  displayTime();
}

function displayTime() {
  const display = document.getElementById("display");
  display.textContent =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds);
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
  document.getElementById("startStopBtn").innerText = "Start";
  document.getElementById("pauseBtn").innerText = "Pause";
}
