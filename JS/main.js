const menuHamburguesas = document.getElementById("menuHamburguesas");

const menuStarters = document.getElementById("menuStarters");

const menuBebidas = document.getElementById("menuBebidas");

const menuSalsas = document.getElementById("menuSalsas");

let hamburguesas = productos.filter((prod) => prod.categoria === "hamburguesas")

let starters = productos.filter((prod) => prod.categoria === "starters")

let bebidas = productos.filter((prod) => prod.categoria === "bebidas")

let salsas = productos.filter((prod) => prod.categoria === "salsas")


// Renderizacion del menu //

// HAMBURGUESAS

function mostrarHamburguesas (array) {

        menuHamburguesas.innerHTML= '';
        array.forEach((producto) => {
        const divProd = document.createElement("div");
        divProd.classList.add("contenedor");
        divProd.innerHTML = `
        <div class="contenedorDos">
            <div class="contenedorImg">    
                <img src="${producto.img}" alt="${producto.nombre}" class="imgProductoHamburguesas">
            </div> 
            <div class="contenedorTres">
                <p class="nombre">${producto.nombre.toUpperCase()}</p>
                <p class="ingredientes">${producto.ingredientes}</p>
                <p class="precio">$${producto.precio}</p>
            </div>
        </div>    
            <input type="button" value="AGREGAR" id="${producto.id}" class="btnAgregar">`

        menuHamburguesas.appendChild(divProd);
    });

};

mostrarHamburguesas(hamburguesas);

// STARTERS


function mostrarStarters (array) {

    menuStarters.innerHTML= '';
    array.forEach((producto) => {
    const divProd = document.createElement("div");
    divProd.classList.add("contenedor");
    divProd.innerHTML = `
    <div class="contenedorDos">
        <div class="contenedorImg">    
            <img src="${producto.img}" alt="${producto.nombre}" class="imgProductoStarters">
        </div> 
        <div class="contenedorTres">
            <p class="nombre">${producto.nombre.toUpperCase()}</p>
            <p class="ingredientes">${producto.ingredientes}</p>
            <p class="precio">$${producto.precio}</p>
        </div>
    </div>    
        <input type="button" value="AGREGAR" id="${producto.id}" class="btnAgregar">`

    menuStarters.appendChild(divProd);
});

};

mostrarStarters(starters);

// BEBIDAS


function mostrarBebidas (array) {

    menuBebidas.innerHTML= '';
    array.forEach((producto) => {
    const divProd = document.createElement("div");
    divProd.classList.add("contenedor");
    divProd.innerHTML = `
    <div class="contenedorDos">
        <div class="contenedorImg">    
            <img src="${producto.img}" alt="${producto.nombre}" class="imgProductoBebidas">
        </div> 
        <div class="contenedorTres">
            <p class="nombre">${producto.nombre.toUpperCase()}</p>
            <p class="ingredientes">${producto.ingredientes}</p>
            <p class="precio">$${producto.precio}</p>
        </div>
    </div>    
        <input type="button" value="AGREGAR" id="${producto.id}" class="btnAgregarBebidas">`

    menuBebidas.appendChild(divProd);
});

};

mostrarBebidas(bebidas);

// SALSAS

function mostrarSalsas (array) {

    menuSalsas.innerHTML= '';
    array.forEach((producto) => {
    const divProd = document.createElement("div");
    divProd.classList.add("contenedor");
    divProd.innerHTML = `
    <div class="contenedorDos">
        <div class="contenedorImg">    
            <img src="${producto.img}" alt="${producto.nombre}" class="imgProductoSalsas">
        </div> 
        <div class="contenedorTres">
            <p class="nombre">${producto.nombre.toUpperCase()}</p>
            <p class="ingredientes">${producto.ingredientes}</p>
            <p class="precio">$${producto.precio}</p>
        </div>
    </div>    
        <input type="button" value="AGREGAR" id="${producto.id}" class="btnAgregar">`

    menuSalsas.appendChild(divProd);
});

};

mostrarSalsas(salsas);