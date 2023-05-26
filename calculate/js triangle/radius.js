const form = document.getElementById('triangle-form');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const radius = parseFloat(form.elements['radius'].value);
    console.log(radius) 
    const area = 3.14 * radius * radius;
    resultElement.innerHTML = `The area of the circle is ${area}.`;

})
