const firstnameinput = document.getElementById('firstname');
const lastnameinput = document.getElementById('lastname');
const emailinput = document.getElementById('email');
const passwordinput = document.getElementById('Password');
const confirminput = document.getElementById('confirm_Password');
const result = document.getElementById('result')
const clear = document.getElementById('clear-btn')
const calculate_BMI= document.getElementById('BMI_btn');


calculate_BMI.addEventListener("click", calculateBMI )

function calculateBMI () {
  if(firstnameinput.value === "" || lastnameinput.value =='' || emailinput.value == '' || passwordinput.value == '' || confirminput.value == ''){
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
  if(passwordinput.value.length <6 , confirminput.value.length <6){
    setTimeout(()=>{
      result.innerHTML = "Password must be at least 6 character long."
      result.style.color = 'red'
      result.style.fontStyle ='italic'
      result.style.fontSize ='large'

      setTimeout(()=>{
         result.innerHTML =''
      }, 1000); 
   }, 100)
    passwordinput.focus();
    return false;
   
  } else {
  if(confirminput.value !==passwordinput.value ){
    setTimeout(()=>{
      result.innerHTML = ("Incorrect password")
      result.style.color = 'red'
      result.style.fontStyle ='italic'
      result.style.fontSize ='large'
  
      setTimeout(()=>{
         result.innerHTML =''
      }, 1000); 
   }, 100)
   confirminput.focus();
   return false;
    
  }
}
  //if all are valid, submit the form 
  setTimeout(()=>{
    result.innerHTML = ("Form submitted successfully")
    result.style.color = 'green'
    result.style.fontStyle ='italic'
    result.style.fontSize ='large'

    setTimeout(()=>{
       result.innerHTML =''
    }, 1000); 
 }, 100)

}
}
clear.addEventListener('click', clear_btn);
function clear_btn (){  
    firstnameinput.value = null
   lastnameinput.value = null
   emailinput.value = null
   passwordinput.value = null
   confirminput.value = null
   result.innerHTML = null

}

