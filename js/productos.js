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
            </div
                   
        `
    })
};

mostrarProductos();

