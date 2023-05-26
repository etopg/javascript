const container = document.getElementById('container');
const api = 'https://fakestoreapi.com/carts';


fetch(api).then((response)=> response.json()).then((posts)=>{
posts.forEach((e)=> {
    const postDiv = document.createElement('div');
    postDiv.classList.add('carts');
    postDiv.innerHTML=`
    <div>${e.id}</div>
    <div>${e.userId}</div>
    <div>${e.date}</div>
   <div>${e.products},${e.products.productId}</div>
  
   

   
   

    `;
   
    container.appendChild(postDiv);
});
}).catch(error => console.error(error));