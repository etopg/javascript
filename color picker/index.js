//for (let i =0; i< 5; i++){
    //console.log(i);
//};
//const Names = ['bright', 'john', 'henry', 'chike', 'tinubu', 'wike'];
 
//for(let k = 0; k < Names.length ; k++){
   // console.log(Names[k] + 'emeka')
  //  console.log(`${Names[k]} emeka`)
//} 
const hexbtn = document.getElementById('copy-btn');
const generatebtn = document.getElementById('generate-btn');
const rgbbtn = document.getElementById('copy-RGB');
const resetbtn = document.getElementById('resetBtn');
const colorbox = document.getElementById('color-box')
const colorCode = document.getElementById('colorCode')



generatebtn.addEventListener('click', generate);
rgbbtn.addEventListener('click', copyrgb);
resetbtn.addEventListener('click', reset);
hexbtn.addEventListener('click', copyhex);



function generate() {
    const hexchars ='0123456789ABCDEF';
    let  hexcolour ='#'
    for(i = 0; i < 6; i++){
        hexcolour += hexchars[Math.floor(Math.random() * 16)]; 
    }
    //console.log(hexcolour);
    colorbox.style.backgroundColor = hexcolour;
   colorCode.innerHTML =  hexcolour += hexchars[Math.floor(Math.random() * 16)]; 
}
function copyhex() {
    const colourText = colorbox.style.backgroundColor;
    const hexCode = rgbToHex(hexCode);
    const templeInput = document.createElement('input');
    document.body.appendChild(templeInput);
    templeInput.value = hexCode;
    templeInput.select();
    document.execCommand('copy');
    document.body.removeChild(templeInput);
    alert("colour copied to clipboard: " + hexCode);
   
  
}
function rgbToHex(rgbcolor) {
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const matches = regex.exec(rgbcolor);
    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);
    return "#" + componentToHex(r) + componentToHex(b) + componentToHex(g);

}
function componentToHex(c) {
    const hex = c.tostring(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function copyrgb() {
    const colourText = colorbox.style.backgroundColor;
    const templeInput = document.createElement('input');
    document.body.appendChild(templeInput);
    templeInput.value = colourText;
    templeInput.select();
    document.execCommand('copy')
    document.body.removeChild(templeInput)


    alert('colour copied' + colourText);
    console.log('colourText');

}
function reset() {
   const colourText = colorbox.style.background;
   colorbox.style.background   = 0 
   const replace = colorCode.innerHTML
   colorCode.innerHTML = null
 

}


