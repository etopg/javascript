const passwordinput = document.getElementById('password')
const btn = document.getElementById('genBtn')
const reset = document.getElementById('reset')
const chara = document.getElementById('character')
const letters = document.getElementById('alpha')
const num = document.getElementById('number')

num.addEventListener('click', nums)
function nums(){
    const numlength = 10
    const numb = '0123456789'
    let randomnum = ''
    for (let index = 0; index <numlength ; index++) {
        const randomnumb = Math.floor(Math.random()*numb.length)
        randomnum += numb.charAt(randomnumb)
        
    }
    passwordinput.value = randomnum.toUpperCase();
}

letters.addEventListener('click', letter)
function letter(){
    const lenlength = 10;
    const len ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let randomlen ='';
    for (let index = 0; index < lenlength; index++) {
        const randomlet = Math.floor(Math.random()*len.length)
        randomlen += len.charAt(randomlet)
    } 
    passwordinput.value = randomlen.toUpperCase();
}

chara.addEventListener('click', character)
function character(){
    const charaLength = 15;
    const character ='~!@#$%^&*()_+"|'
    let randomCharacter = '';
    for (let index = 0; index < charaLength; index++) {
        const randomchara = Math.floor(Math.random()*character.length)
        randomCharacter += character.charAt(randomchara)
        
    }
    passwordinput.value = randomCharacter.toUpperCase();

 
}
btn.addEventListener('click', generate)
function generate() {
    const PasswordLength = 10;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let RandomPasswords = '';
    for (let index = 0; index < PasswordLength; index++) {
       const randomIndex = Math.floor(Math.random()*charset.length)
       RandomPasswords += charset.charAt(randomIndex)
       //console.log(passwords)
    } 
    passwordinput.value = RandomPasswords.toUpperCase();
}
reset.addEventListener('click', rest)
function rest(){
  passwordinput.value = '';

}