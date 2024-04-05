const sectionProductos = document.getElementById('section-productos')

const pedirDatos = async () => {
    try {
        const respuesta = await fetch(`https://dummyjson.com/products?limit=3`);
        const data = await respuesta.json();
        console.log(data)
        return data.products;
    } catch (error) {
        console.error("Error al cargar los productos", error.message);
        return [];
    }
}

const mostrarProductos = async () => {
    sectionProductos.innerHTML = ""

    const productos = await pedirDatos()

    productos.forEach((producto)=>{

        sectionProductos.innerHTML += `
            <div class="card">
                <img src=${producto.images} class="imagen-producto"/>
                <h3 class="titulo"> ${producto.title} </h3>
                <p class="descripcion"> ${producto.description} </p>
                <button href="" class="buttonComprarAhora">Comprar Ahora</button>
            </div
                   
        `
    })
};

mostrarProductos();

let imagenes = [
    {
        "url": "img/img1.webp",
        "nombre": "Proyecto 01",
        "descripcion": "Nuestra nueva gama de productos"

    },
    {
        "url": "img/img2.jpg",
        "nombre": "Proyecto 02",
        "descripcion": "Nuestra nueva gama de productos"

    },
    {
        "url": "img/img3.webp",
        "nombre": "Proyecto 03",
        "descripcion": "Nuestra nueva gama de productos"

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}
