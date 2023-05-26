const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const mass = document.getElementById('mass');
const height = document.getElementById('height');
const calculate_BMI= document.getElementById('BMI_btn');
const result = document.getElementById('result')
const clear = document.getElementById('clear-btn')

calculate_BMI.addEventListener('click', calculateBMI);

function calculateBMI () {
   let BMI = (mass.value) / (height.value**2) ;
   BMI = BMI.toFixed(2);
   if (firstname.value == '' || lastname.value == '' || mass.value == '' || height.value == ''){
      setTimeout(()=>{
         result.innerHTML = 'please fill in the input field'
         result.style.color = 'blue'
         result.style.fontStyle ='italic'
         result.style.fontSize ='large'

         setTimeout(()=>{
            result.innerHTML =''
         }, 1000); 
      }, 100)
  
   } else {
     if(BMI >0 && BMI <18.5){
      result.innerHTML =`${firstname.value} ${lastname.value} Your BMI value is ${BMI}kg. you are underweight. you may want to see a doctor`
      result.style.color = 'red'
      result.style.fontStyle ='italic bold'
      result.style.fontSize ='large'

     }else if(BMI > 18.5 && BMI < 24.9){
      result.innerHTML =`${firstname.value} ${lastname.value} Your BMI value is ${BMI}kg. you are Normal or healthy.`
      result.style.color = 'green'
      result.style.fontStyle ='italic bold'
      result.style.fontSize ='large'

     }else if(BMI > 24.9 && BMI < 29.9){
      result.innerHTML =`${firstname.value} ${lastname.value} Your BMI value is ${BMI}kg. you are overweight. slow down`
      result.style.color = 'orange'
      result.style.fontStyle ='italic bold'
      result.style.fontSize ='large'

     }else{
      result.innerHTML =`${firstname.value} ${lastname.value} Your BMI value is ${BMI}kg. you are obessed. `
      result.style.color = 'red'
      result.style.fontStyle ='italic bold'
      result.style.fontSize ='large'
     }
   }
   
}
clear.addEventListener('click', clear_btn);
function clear_btn (){  
    firstname.value = null
   lastname.value = null
   mass.value = null
   height.value = null
   result.innerHTML = null

}

