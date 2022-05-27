let carts = document.querySelector('.add-cart');
let products = [
  {
    name: "Dragon Ball",
    tag: "goku",
    price: 15,
    inCart: 0,
  },
  {
    name: "One Punch Man",
    tag: "saitama",
    price: 50,
    inCart: 0,
  },
  {
    name: "Soul Eater",
    tag: "soul",
    price: 105,
    inCart: 0,
  },
  {
    name: "Kimetsu no Yaiba",
    tag: "kimetsu",
    price: 15,
    inCart: 0,
  }
];
for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })

}
function cartNumbers(){
    let productNumbers= localStorage.getItem('cartNumbers')
   

    productNumbers=parceInt(productNumbers)
     console.log(typeof productNumbers);

     if(productNumbers){
         localStorage.setItem('cartNumbers',productNumbers + 1);
     }else{
          localStorage.setItem('cartNumbers',+1);
          
     }
    localStorage.setItem('cartNumbers',1)

}