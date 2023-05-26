const form = document.getElementById('quadratic-form');
const resultElement = document.getElementById('result');
const result2Element = document.getElementById('result2');


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const A = parseFloat(form.elements['A'].value);

    const B = parseFloat(form.elements['B'].value);
   
    const C = parseFloat(form.elements['C'].value);
    
    const area = (-B + Math.sqrt(Math.pow(B, 2) - 4 * A * C)) /(2 * A);
    const area2 = (-B - Math.sqrt(Math.pow(B, 2) - 4 * A* C)) /(2 * A);

   resultElement.innerHTML = `x = ${area}.`; 
   result2Element.innerHTML = `x = ${area2}.`;


})

    
