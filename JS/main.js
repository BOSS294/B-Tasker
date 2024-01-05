let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').innerHTML = '<a href="#">Start</a>';
    isRunning = false;
  } else {
    timer = setInterval(runStopwatch, 1000);
    document.getElementById('startStop').innerHTML = '<a href="#">Stop</a>';
    isRunning = true;
  }
}

function runStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime();
}

function displayTime() {
  const format = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById('display').innerHTML = format;
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}
document.getElementById('menuBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarWidth = sidebar.clientWidth;
  
    if (sidebar.style.right === '0px') {
      sidebar.style.right = `-${sidebarWidth}px`;
    } else {
      sidebar.style.right = '0px';
    }
  });
  