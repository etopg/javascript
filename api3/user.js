const container = document.getElementById('container');
const api = 'https://jsonplaceholder.typicode.com/users';


fetch(api).then((response)=> response.json()).then((posts)=>{
posts.forEach((e)=> {
    const postDiv = document.createElement('div');
    postDiv.classList.add('user');
    postDiv.innerHTML=`
    <div>${e.id}</div>
    <p>${e.name}<p>
    <p>${e.username}</p>
    <p>${e.email}</p>
    <p>${e.address.street},${e.address.suite},${e.address.city},${e.address.zipcode},${e.address.geo.lat},${e.address.geo.lng}</p>
    
    <p>${e.phone}</p>
    <p>${e.website}</p>
    <p>${e.company.name},${e.company.catchPhrase},${e.company.bs}</p>
    
    `;
   
    container.appendChild(postDiv);
});
}).catch(error => console.error(error));