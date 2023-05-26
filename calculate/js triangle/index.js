const form = document.getElementById('triangle-form');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const base = parseFloat(form.elements['base'].value);
    console.log(base) 
    const height = parseFloat(form.elements['height'].value);
    const area = 0.5 * base * height;
    resultElement.innerHTML = `The area of the traingle is ${area}.`;

})

    
