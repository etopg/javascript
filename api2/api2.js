const container = document.getElementById('container');
const api = 'https://jsonplaceholder.typicode.com/photos';


fetch(api).then((response)=> response.json()).then((photos)=>{
photos.forEach((e)=> {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML=`
    <h2>${e.id}</h2>
    <img src="${e.url}" alt="" width="90%">
    <img src="${e.thumbnailUrl}" alt="" width="90%">
    <p>${e.title}</p>
    <h3>${e.albumId}</h3>
    `;
   
    container.appendChild(postDiv);
});
}).catch(error => console.error(error));