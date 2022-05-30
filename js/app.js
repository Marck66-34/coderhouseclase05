let carts = document.querySelectorAll('.add-cart');

let productos = [
  { nombre: "Dragon ball", tag: "goku", precio: 200, inCart: 0 },
  {
    nombre: "One Punch Man",
    tag: "saitama",
    precio: 200,
    inCart: 0,
  },
  { nombre: "Soul Eater ", tag: "soul-eater", precio: 100, inCart: 0 },
  { nombre: "Kimetsu no Yaiba ", tag: "Kimetsu", precio: 200, inCart: 0 },
];

for(let i = 0; i< carts.length; i++){
  //console.log("my loop");
  carts[i].addEventListener('click',()=>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agregado al carraso",
      showConfirmButton: false,
      timer: 1500,
    });
    carritoNombre(productos[i]);
    totalCarro(productos[i]);
  });
};
function cargaCarrito() {
  let productosNombre = localStorage.getItem("carritoNombre");
  // console.log(productosNombre);
  if(productosNombre){
    document.querySelector(".cart span").textContent= productosNombre;
  }
}
function carritoNombre(productos){
   //console.log("el producto click es ", productos)
  let productosNombre = localStorage.getItem('carritoNombre');
  // console.log(productosNombre);
  
  // console.log(typeof productosNombre);
  productosNombre = parseInt(productosNombre);
  //console.log(productosNombre);
  if(productosNombre){
     localStorage.setItem("carritoNombre", productosNombre + 1);
        document.querySelector(".cart span").textContent = productosNombre + 1;
    }else{
    localStorage.setItem("carritoNombre", 1);
    document.querySelector('.cart span').textContent= 1;
  }
 setItem(productos);
}

function setItem(productos) {
  // console.log(" probando el setItem")
  // console.log("el producto click es ", productos);
  let cartItems = localStorage.getItem('productosInCart');
  cartItems = JSON.parse(cartItems);
  //console.log("mi carItems es", cartItems);
  if(cartItems != null){
    if(cartItems[productos.tag]==undefined){
      cartItems={
        ...cartItems,
        [productos.tag]:productos
      }
    }
    cartItems[productos.tag].inCart += 1;
  }else{
     productos.inCart = 1;
     cartItems = {
       [productos.tag]: productos
     };
 };
  localStorage.setItem("productosInCart", JSON.stringify(cartItems));
} 

function totalCarro(productos){
  //console.log("el total de producto es", productos.precio);
  let carroCosto = localStorage.getItem('totalCarro');
  // console.log("my carrCosto es", carroCosto);
  // console.log(typeof carroCosto)
  
  if(carroCosto !=null){
    carroCosto = parseInt(carroCosto); 
    localStorage.setItem("totalCarro", carroCosto + productos.precio)
  }else{
    localStorage.setItem("totalCarro", productos.precio);
  }
  
}
function displayCart(){
  let cartItems= localStorage. getItem("productosInCart");
  cartItems= JSON.parse(cartItems);
  console.log(cartItems);
  let productosContenedor= document.querySelector
  (".productos-contenido");
  //let carroCosto = localStorage.getItem("totalCarro");
    console.log(cartItems);
  if(cartItems && productosContenedor){
    console.log("corriendo");
    productosContenedor.innerHTML ='';
    Object.values(cartItems).map(item=>{
      productosContenedor.innerHTML += `<div class="productos">
        <ion-icon name="trash-outline"></ion-icon>
        <img src="./img/${item.tag}.jpg">
        <span>${item.nombre}</span>
        </div>
        <div class="precio">$${item.precio},00</div>
        <div class="cantidad">
        <ion-icon name="arrow-up-circle-outline"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
        
        </div>
        <div class="total">
        $${item.inCart * item.precio},00
        </div>`;
    });
    productosContenedor.innerHTML +=`
    <div class="gokuTotalContenido>
    <h4 class"gokuTotalContenido">
      Mangas total
      </h4>
    <h4 class="mangasTotal>
      $${totalCarro}00
      </h4>
      `
  };
};
cargaCarrito();
displayCart();
