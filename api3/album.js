const container = document.getElementById('container');
const api = 'https://jsonplaceholder.typicode.com/albums';


fetch(api).then((response)=> response.json()).then((posts)=>{
posts.forEach((e)=> {
    const postDiv = document.createElement('div');
    postDiv.classList.add('album');
    postDiv.innerHTML=`
    <h2>${e.userId}</h2>
    <p>${e.title}</p>
    <p>${e.id}</p>
    `;
   
    container.appendChild(postDiv);
});
}).catch(error => console.error(error));