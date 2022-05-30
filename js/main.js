const mangas = [
  { id: 1, name: "Dragon Ball", precio: 500, img: "../img/goku.jpg" },
  { id: 1, name: "One Punch Man", precio: 500, img: "../img/saitama.jpg" },
];
const contenedorMangas = document.querySelector('.contenedor-manga');
const listaCompras = document.querySelector('.listado-compras')
const listFinal =[];

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMangas();
});

function mostrarMangas() {
    mangas.forEach(manga =>{
        const divManga = document.createElement('div');
        divManga.classList.add('card');

        const imgManga = document.createElement('img');
        imgManga.src = manga.img;
        imgManga.classList.add('imagen-manga');

        const tituloManga = document.createElement('h3');
        tituloManga.textContent = manga.name;
        
        const precioManga = document.createElement("h3");
        precioManga.textContent = manga.name;
        
        const btnCompra = document.createElement('button');
        btnCompra.className ="btn-compra";
        btnCompra.textContent =`<font-awesome-icon icon="fa-light fa-heart" />`;
        btnCompra.onclick=()=>{
            agregarCompras(manga.id)
        };
        divManga.appendChild(imgManga);
        divManga.appendChild(tituloManga);
        divManga.appendChild(btnCompra);
        divManga.appendChild(precioManga);
        contenedorMangas.appendChild(divManga);

    });
}
    function agregarCompras (id){
        const mangaSeleccion = mangas.find(manga=> manga.id===id);
       listFinal.push(mangaSeleccion);
        mostrarMangasComprados(listFinal);}

        function mostrarMangasComprados(lista){
            listadoCompras.innerHTML="";
            lista.forEach(manga=>{
                const divManga= document.createElement('div');
                divManga.classList.add('card');
                const imgManga = document.createElement('img');
                imgManga.src =manga.img;
                imgManga.classList.add('imagen.manga');

                const tituloManga = document.createElement('h3');
                tituloManga.textContent= manga.name;

                divManga.appendChild(imgManga);
                divManga.appendChild(tituloManga);

                listaCompras.appendChild(divManga);
            })
        }
        function borrarCompras(id) {
          const mangaSeleccion = mangas.find((manga) => manga.id === id);
          listFinal.splice(mangaSeleccion);
          mostrarMangasComprados(listFinal);
        }