// Elementos del DOM
const listaProductos = document.getElementById('listaProductos');
const listaBebidas = document.getElementById('listaBebidas');
const canasta = document.getElementById('canasta');
const totalElemento = document.getElementById('total');
const botonPagar = document.getElementById('botonPagar');
const modal = document.getElementById('miModal');
const cerrarModal = document.getElementsByClassName('cerrar')[0];
let totalPrecio = 0;

const productos = [
    { nombre: 'Pizza de peperoni', precio: 34000, imagen: 'img/pizza.jpg' },
    { nombre: 'Hamburguesa', precio: 14000, imagen: 'img/hamburguesa.jpg' },
    { nombre: 'Tacos', precio: 11000, imagen: 'img/tacos.jpg' },
    { nombre: 'Chuleta de pollo', precio: 15000, imagen: 'img/pollo.jpg' }
];

const bebidas = [
    { nombre: 'Coctel', precio: 5000, imagen: 'img/coctel.jpg' },
    { nombre: 'Zumo de Naranja', precio: 7000, imagen: 'img/zumo de naranja.jpg' },
    { nombre: 'Vino', precio: 8000, imagen: 'img/vino tinto.jpg' },
    { nombre: 'Té Helado', precio: 7000, imagen: 'img/te helado.jpg' },
];

// Función para añadir productos o bebidas a la canasta
function añadirACanasta(nombre, precio) {
    const item = document.createElement('li');
    item.innerHTML = `
        ${nombre} - $${precio} 
        <button class="cancelar">Cancelar</button>
    `;
    canasta.appendChild(item);
    totalPrecio += precio;
    totalElemento.textContent = totalPrecio;
}

// Función para eliminar productos o bebidas de la canasta
canasta.addEventListener('click', function(event) {
    if (event.target.classList.contains('cancelar')) {
        const item = event.target.parentElement;
        const precio = parseInt(item.textContent.split('$')[1]);
        canasta.removeChild(item);
        totalPrecio -= precio;
        totalElemento.textContent = totalPrecio;
    }
});

// Añadir productos a la lista de productos
productos.forEach((producto, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
        <p>${producto.nombre} - Precio: $${producto.precio}</p>
        <button id="seleccionar-${index}">Seleccionar</button>
    `;
    listaProductos.appendChild(item);
});

// Añadir bebidas a la lista de bebidas
bebidas.forEach((bebida, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
        <img src="${bebida.imagen}" alt="${bebida.nombre}" width="100">
        <p>${bebida.nombre} - Precio: $${bebida.precio}</p>
        <button id="seleccionar-bebida-${index}">Seleccionar</button>
    `;
    listaBebidas.appendChild(item);
});

// Manejar la selección del producto o bebida
listaProductos.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const botonId = event.target.id;
        const index = botonId.split('-')[1];
        const productoSeleccionado = productos[index];
        añadirACanasta(productoSeleccionado.nombre, productoSeleccionado.precio);
    }
});

listaBebidas.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const botonId = event.target.id;
        const index = botonId.split('-')[2];
        const bebidaSeleccionada = bebidas[index];
        añadirACanasta(bebidaSeleccionada.nombre, bebidaSeleccionada.precio);
    }
});

// Manejar el pago
botonPagar.addEventListener('click', function() { modal.style.display = 'block'; // Mostrar el modal canasta.innerHTML = ''; // Vaciar la canasta totalPrecio = 0; totalElemento.textContent = totalPrecio; // Resetear el total }); // Manejar el cierre del modal cerrarModal.addEventListener('click', function() { modal.style.display = 'none'; // Ocultar el modal }); // Cerrar el modal cuando el usuario hace clic fuera del contenido del modal window.addEventListener('click', function(event) { if (event.target === modal) { modal.style.display = 'none'; // Ocultar el modal } 
    });