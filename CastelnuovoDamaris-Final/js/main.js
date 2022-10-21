/*relojes*/
document.addEventListener('DOMContentLoaded', () => {

    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Apple Watch Series 6',
            precio: 9000,
            imagen: './assets/img/Apple Watch Series 6.jpg'
        },
        {
            id: 2,
            nombre: 'Samsung Gear S3 Frontier',
            precio: 15000,
            imagen: './assets/img/Samsung Gear S3 Frontier.jpg'
        },
        {   
            id: 3,
            nombre: 'Huawei Watch GT 2',
            precio: 10000,
            imagen: './assets/img/Huawei-Watch-GT-2.webp'
        },
        {   
            id: 4,
            nombre: 'Samsung Galaxy Watch',
            precio: 17000,
            imagen: './assets/img/Samsung Galaxy Watch.jpg'
        },
        {   
            id: 5,
            nombre: 'Garmin Fenix 6 Pro',
            precio: 18000,
            imagen: './assets/img/Garmin Fenix 6 Pro.jpg'
        },
        {   
            id: 6,
            nombre: 'Xiaomi Mi Watch Lite',
            precio: 7000,
            imagen: './assets/img/Xiaomi Mi Watch Lite.jpg'
        },
        {   
            id: 7,
            nombre: 'Amazfit GTR 2',
            precio: 5000,
            imagen: './assets/img/Amazfit GTR 2.jpg'
        },
        {   
            id: 8,
            nombre: 'Polar Grit X',
            precio: 30000,
            imagen: './assets/img/Polar Grit X.jpg'
        },
        {   
            id: 9,
            nombre: 'Suunto 9',
            precio: 26000,
            imagen: './assets/img/Suunto 9.jpg'
        },
        {   
            id: 10,
            nombre: 'Samsung Gear Sport',
            precio: 55000,
            imagen: './assets/img/Samsung Gear Sport.jpg'
        }
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {

            const miNodo = document.createElement('div');
            miNodo.classList.add('cards');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('cards-body');

            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('cards-title');
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('imagenes')
            miNodoImagen.setAttribute('src', info.imagen);

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('cards-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;

            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    function anyadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'))
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const miNodo = document.createElement('li');
            miNodo.classList.add('dt');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }

    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();

    }

    function calcularTotal() { 
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});

const fin = document.querySelector("#boton-fin")

fin.addEventListener("click", (e)=>{
    e.preventDefault()
    Swal.fire({
    title: 'Muchas gracias',
    text: 'Recibirá sus productos pronto.',
    icon: 'success',
    confirmButtonText: 'Genial'
    })
})
