const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

start.addEventListener('click',startTimer)
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
      elapsedTime = Math.floor((Date.now() - startTime) / 100);
      printTime();
    }, 10);
}
stop.addEventListener('click',stopTimer)
function stopTimer() {
    clearInterval(timerInterval);
}
reset.addEventListener('click',resetTimer)
function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    printTime();
  }





let startTime;
let elapsedTime = 0;
let timerInterval;

function printTime() {
  const hours = Math.floor(elapsedTime * 0)
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime - minutes * 60;
  
  const displayhours = hours < 10? '0' + hours : hours
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
  
  document.querySelector('.display').textContent =
    displayhours + ':' + displayMinutes + ':' + displaySeconds;
}

