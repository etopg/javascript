
//GREETING APPLICATION
//document.write(date2)
//const date2= Date()

//const min = date.getMinutes();
//console.log(hour);
//console.log(min);


//const date = new Date();
//const hour = date.getHours();

//if(hour>= 16){
    //document.write("Good evening")
//}
//else if( hour >= 12){
   // document.write('Good afternoon')
//}else if( hour === 12){
 //   document.write('it is mid-day')
//}else if( hour >= 0){
  //  document.write('Good morning')
//}else{
 //   document.write('welcome')
//}

//const height = 5;
//const base = 10;
//const area = (height * base)/2;
//document.write(area)

const decreasebtn = document.getElementById('decrease');
const increasebtn = document.getElementById('increase');
const reset = document.getElementById('reset');
const double = document.getElementById('double');
const square = document.getElementById('square');
const count = document.getElementById('count');

let counter = 0;

decreasebtn.addEventListener('click' , ()=>{
  if(counter== 0){
    count = 0
  }else{
  counter = counter -1;
  console.log(counter);
  count.innerHTML = counter;
  }

});
increasebtn.addEventListener('click' , ()=>{
  counter = counter +1;
  console.log(counter);
  count.innerHTML = counter;
});
reset.addEventListener('click' , ()=>{
  counter = 0;
  console.log(counter);
  count.innerHTML = counter;


});
double.addEventListener('click' , ()=>{
  counter += counter;
  console.log(counter);
  count.innerHTML =counter;
});
square.addEventListener('click' , ()=>{
  counter *= counter ;
  console.log(counter);
  count.innerHTML =counter;
});




 

