
function insert(num){
    const nums = document.getElementById('result').value += num;
   // console.log(nums)
} 
function clearResult() {
 document.getElementById('result').value = null
    
}

function calculate(){
   const result = document.getElementById('result').value
   const calculateResult = eval(result)
   //console.log(calculateResult)
   document.getElementById('result').value = calculateResult
}
