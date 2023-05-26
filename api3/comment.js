const container = document.getElementById('container');
const api = 'https://jsonplaceholder.typicode.com/comments';


fetch(api).then((response)=> response.json()).then((posts)=>{
posts.forEach((e)=> {
    const postDiv = document.createElement('div');
    postDiv.classList.add('comment');
    postDiv.innerHTML=`
    <h2>${e.postId}</h2>
    <p>${e.name}</p>
    <p>${e.email}</p>
    <p>${e.body}</p>
    <p>${e.id}</p>
    `;
   
    container.appendChild(postDiv);
});
}).catch(error => console.error(error));