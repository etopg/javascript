const container = document.getElementById('container');
const api = 'https://jsonplaceholder.typicode.com/todos';


fetch(api).then((response)=> response.json()).then((posts)=>{
posts.forEach((e)=> {
    const postDiv = document.createElement('div');
    postDiv.classList.add('todos');
    postDiv.innerHTML=`
    <h2>${e.userId}</h2>
    <p>${e.title}</p>
    <p>${e.completed}</p>
    <p>${e.id}</p>
    `;
   
    container.appendChild(postDiv);
});
}).catch(error => console.error(error));