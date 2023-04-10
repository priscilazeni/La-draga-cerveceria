const menuHamburguesas = document.getElementById("menuHamburguesas");
const menuStarters = document.getElementById("menuStarters");


// fetch('./JSON/data.json')
// .then((response) => response.json())
// .then((data) => {
//     productos = data;
//     mostrarMenu(productos);
// })


// Renderizacion del menu //

function mostrarMenu (array) {

        menuHamburguesas.innerHTML= '';
        array.forEach((producto) => {
        const divProd = document.createElement("div");
        divProd.classList.add("contenedor");
        divProd.innerHTML = `
            <p class="nombre">${producto.nombre.toUpperCase()}</p>
            <p class="ingredientes">${producto.ingredientes}</p>
            <p class="precio">$${producto.precio}</p>
            <img src="${producto.img}" alt="${producto.nombre}" class="imgProducto">

        <input type="button" value="AGREGAR" id="${producto.id}" class="btnAgregar">`

        menuHamburguesas.appendChild(divProd);
    });

};

mostrarMenu(productos)
