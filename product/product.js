const container = document.getElementById('container')
const api = 'https://dummyjson.com/products'


fetch(api).then((response)=>response.json()).then((products)=>{
    products.foreach((e)=> {
        const postDiv = document.createElement('div')
        postDiv.classList.add('product')
        postDiv.innerHTML=`
        <p>${e.product.id}</p>
        `

    })
})
let startTime;
let elapsedTime = 0;
let timerInterval;

function printTime() {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime - minutes * 60;
  const milliseconds = Math.floor((elapsedTime - seconds - minutes * 60) * 100);

  const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
  const displayMilliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;

  document.querySelector('.display').textContent =
    displayMinutes + ':' + displaySeconds + ':' + displayMilliseconds;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function() {
    elapsedTime = Math.floor((Date.now() - startTime) / 100);
    printTime();
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  printTime();
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
