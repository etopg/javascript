const form = document.getElementById('triangle-form');
const resultElement = document.getElementById('result');
const result2Element = document.getElementById('result2');


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const Base = parseFloat(form.elements['Base'].value);
    console.log(Base) 
    const base = parseFloat(form.elements['base'].value);
    console.log(base) 

    const height = parseFloat(form.elements['height'].value);
    const area = 0.5 * (Base + base) * height;
    const area2 = 0.5 * (Base - base) * height;
    resultElement.innerHTML = `The area of a trapezium ${area}.`;
    result2Element.innerHTML = `The area of a trapezium ${area2}.`;


})

    
