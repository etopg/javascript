const wordcount = document.getElementById('word-count')
const characount = document.getElementById('character-count')
const uniword = document.getElementById('unique-words')
const text = document.getElementById('input-text')

window.addEventListener('DOMContentLoaded',()=>{
    text.addEventListener('input',inputs)
    function inputs() {
      const texts = text.value.trim();
      const word = texts ==='' ? (0):(texts.split(/\s+/).length)
       const character = texts.length   
       const unique = new Set(texts.match(/\b\w+b/g)).size 

       wordcount.innerHTML=`word count: ${word}`
       characount.innerHTML=`character count (including spaces): ${character}`
       uniword.innerHTML=`unique count: ${unique}`
    }
})
