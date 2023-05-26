const container = document.getElementById('container');
const api = 'https://jsonplaceholder.typicode.com/posts';


fetch(api).then((response)=> response.json()).then((posts)=>{
posts.forEach((e)=> {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML=`
    <h3>${e.id}</h3>
    <h2>${e.title}</h2>
    <p>${e.body}</p>
    <h4>${e.userId}</h4>
    `;
    container.appendChild(postDiv);
});
}).catch(error => console.error(error));