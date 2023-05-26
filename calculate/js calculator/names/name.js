const name = document.getElementById('name')
const btn = document.getElementById('new-Names')


const sur =[
    'Zenith',
     'Zaron',
      'Naro', 
      'Temi',
       'Shayo', 
       'Seyi',
        'Mike'
]
const first =[
    'Stella', 
    'Ruth',
     'John', 
     'williams', 
     'Rose', 
     'Bummi',
      'luke'
]
const second =[
    'King', 
    'Jude',
     'Jeff', 
     'Wills', 
     'Trez', 
     'Ola',
    'Henry'
]

btn.addEventListener('click', ()=>{
    const fullName = generateRandomName()
    name.innerHTML = fullName;
  })

  function generateRandomName() {
      const surs = sur[Math.floor(Math.random() *sur.length)];
      const firsts = first[Math.floor(Math.random() *first.length)];
      const seconds = second[Math.floor(Math.random() *second.length)];
      return surs +' '+ firsts +' '+ seconds 
      
  }