let userLastName;
let adminEmail = "admin@raw.com";
let adminPasword = "x";
let condicion = 0;
let logIn = false;
let userWanted;
let blocked = 0;
let nan = 0;
let agregarArticulo = false;
let cambiarPrecio = false;
let cambiarStock = false;
let opcionesAdm;
let salidaAdmin = false;
let userEmail1;
let userPasword1;
let userName;
let userAge;
let userEmail;
let user;
let userPasword;
let usuarioLocalStorage;
let wrong = false;
let agregar = false;
let quitar = false;
let selValue;
let orden = 8641;
let cantidad;


let valorEnvio = 0;
let demoraEntrega = '-';

const container = document.querySelector(".container")
const containerRegister = document.querySelector(".container__register");
const formLogin = document.querySelector(".form__login");
const formRegister = document.querySelector(".form__register");
const cFondoLogin = document.querySelector(".cfondo-login");
const cFondoRegister = document.querySelector(".cfondo-register");
const wrongPassword = document.querySelector(".wrong-password");
const wrongData = document.querySelector(".wrong-data");
const headerBtnLogin = document.querySelector(".btn-header-login");
const headerBtnLogout = document.querySelector(".btn-header-logout");
const adminLog = document.getElementById('adminlog')

const divUserLog = document.getElementById('userlog');

const selectEnvios = document.querySelector('#envios');

const btnACompras = document.getElementById('btn-a-compras')
const classCarrito = document.querySelector('.container-carrito')
const userLog = document.querySelector('.productos')
const btnCart = document.getElementById('btn-cart');
const btnConsultarEnvio = document.querySelector('.consulta-envio');

class Producto {
    constructor(tipo, modelo, precio, color, cantidad, img, id) {
        this.tipo = tipo;
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
        this.cantidad = cantidad;
        this.img = img;
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;
    }
}
const productos = [
    new Producto("Horquilla", "CLASSIC", 5000, "black", 20, 'imagenesraw/horquillafork.jpg', 1),
    new Producto("Horquilla", "RECTA", 6000, "black", 20, 'imagenesraw/horquillafork2.jpg', 2),
    new Producto("Cuadro", "HARSH", 20000, "black", 20, 'imagenesraw/harshv2blk.jpg', 3),
    new Producto("Cuadro", "HARSH", 20000, "white", 20, 'imagenesraw/harshv2raw2.jpg', 4),
    new Producto("Cuadro", "NIGTHROO", 23000, "black", 20, 'imagenesraw/nightrodblk.jpg', 5),
    new Producto("Cuadro", "NIGTHROO", 23000, "red", 20, 'imagenesraw/nightrodraw.jpg', 6),
    new Producto("Cuadro", "KLR wolf", 25000, "black", 20, 'imagenesraw/klrwolf.jpg', 7),
    new Producto("Cuadro", "KLR wolf", 25000, "blue", 20, 'imagenesraw/klrwolfblue.jpg', 8),

]

function loginForm() {
    if (window.innerWidth > 850) {
        formRegister.style.display = "none";
        containerRegister.style.left = "10px";
        formLogin.style.display = "block";
        cFondoRegister.style.opacity = "1";
        cFondoLogin.style.opacity = "0";
    } else {
        formRegister.style.display = "none";
        containerRegister.style.left = "0px";
        formLogin.style.display = "block";
        cFondoRegister.style.display = "block";
        cFondoLogin.style.display = "none";
    }
    document.querySelector("#nombre-completo").value = "";
    document.querySelector("#fecha-n").value = "";
    document.querySelector("#e-mail").value = "";
    document.querySelector("#usuario").value = "";
    document.querySelector("#g-password").value = "";
}



function registerForm() {
    if (window.innerWidth > 850) {
        formRegister.style.display = "block";
        containerRegister.style.left = "410px";
        formLogin.style.display = "none";
        cFondoRegister.style.opacity = "0";
        cFondoLogin.style.opacity = "1";
    } else {
        formRegister.style.display = "block";
        containerRegister.style.left = "0px";
        formLogin.style.display = "none";
        cFondoRegister.style.display = "none";
        cFondoLogin.style.display = "block";
        cFondoLogin.style.opacity = "1";
    }
}


function inicio() {
    userEmail1 = document.querySelector("#email-usuario").value;
    userPasword1 = document.querySelector("#password").value;
    login();

}


function register() {
    userName = document.querySelector("#nombre-completo").value;
    userAge = document.querySelector("#fecha-n").value;
    userEmail = document.querySelector("#e-mail").value;
    user = document.querySelector("#usuario").value;
    userPasword = document.querySelector("#g-password").value;
    console.log(userName, userAge, userEmail, user, userPasword);
    let newUser = true;
    const usuario = {
        'Name': userName,
        'Age': userAge,
        'Email': userEmail,
        'User': user,
        'Password': userPasword,
    }
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        if (clave == userEmail) {
            newUser = false
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Este usuario ya formaba parte de la comunidad RAW',
                showConfirmButton: false,
                timer: 2000
            })

        }
    }
    if (newUser) {
        localStorage.setItem(userEmail, JSON.stringify(usuario));
        console.log(usuario);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario generado exitosamente',
            showConfirmButton: false,
            timer: 2000
        })
    }
    loginForm();
}


function login() {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        if (clave == userEmail1) {
            usuarioLocalStorage = JSON.parse(localStorage.getItem(clave));
            console.log(usuarioLocalStorage);
            userEmail = usuarioLocalStorage.Email;
            userPasword = usuarioLocalStorage.Password;

        }

    }

    if (userEmail == userEmail1 && userPasword == userPasword1 && userEmail1 != adminEmail) {
        logIn = true;
        document.querySelector("#email-usuario").value = "";
        document.querySelector("#password").value = "";
        recorrerProductos(productos);
        showCart()
        headerLogIn()
    }
    if (userEmail == userEmail1 && userPasword != userPasword1 && userEmail1 != adminEmail) {
        wrongPassword.style.display = 'block'
        document.querySelector("#password").value = "";
    }

    if (userEmail != userEmail1 && userEmail != adminEmail && adminEmail != userEmail1) {
        wrongData.style.display = 'block'
        document.querySelector("#email-usuario").value = "";
        document.querySelector("#password").value = "";

    }
    if (userEmail1 == adminEmail && userPasword1 == adminPasword) {
        salidaAdmin = true;
        administrador();
        headerLogIn()

    }
    if (adminEmail == userEmail1 && adminPasword != userPasword1) {
        wrongPassword.style.display = 'block'
        document.querySelector("#password").value = "";
    }
}



const recorrerProductos = (array) => {
    divUserLog.innerHTML = ``
    for (const element of array) {
        let div = document.createElement('div');
        div.className = 'card';
        div.style = 'width: 18rem;';
        div.innerHTML = `
            <img src="${element.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${element.tipo}</h4>
                <h5 class="card-title">${element.modelo}</h5>
                <p class="card-text">$ ${element.precio}</p>
                <p class="card-text">${element.cantidad} unidades disponibles.</p>
                <button class="btn-carrito" id="${element.id}">Agregar al carrito</button>
            </div>
        </div>
        `
        divUserLog.append(div);
        const userLog = document.getElementById(element.id);
        userLog.style.padding = '10px 40px';
        userLog.style.marginTop = '10px';
        userLog.style.fontSize = '14px';
        userLog.style.backgroundColor = 'rgba(0, 0, 0, 0.323)';
        userLog.style.color = 'white';
        userLog.style.borderRadius = '10px';
        userLog.style.cursor = 'pointer';
        userLog.style.outline = 'none';
        if (!logIn) {
            userLog.style.display = 'none'
        }

    }
    loadEvents();
    eventCarrito();


}
recorrerProductos(productos);

function headerLogIn() {
    const btnConsultarEnvio = document.querySelector('.consulta-envio');
    const container = document.querySelector(".container")
    if (logIn) {
        headerBtnLogin.style.display = 'none';
        headerBtnLogout.style.display = 'block';
        container.style.display = 'none';
        userLog.style.display = 'flex';
        btnCart.style.display = 'block';
        btnACompras.style.display = 'none'
        imprimirBtnCantCarrito();
        if (cart) {
            selectEnvios.style.display = 'block'
            btnConsultarEnvio.style.display = 'block';
            classCarrito.style.display = 'none';
        }
    }
    if (salidaAdmin) {
        headerBtnLogin.style.display = 'none'
        headerBtnLogout.style.display = 'block'
        container.style.display = 'none';
    }

}




function inicioAlogin() {
    const btnConsultarEnvio = document.querySelector('.consulta-envio');
    if (logIn == false) {
        headerBtnLogin.style.display = 'block'
        headerBtnLogout.style.display = 'none'
        container.style.display = 'block'
        userLog.style.display = 'none'
        selectEnvios.style.display = 'none';
        btnConsultarEnvio.style.display = 'none';
    }
    if (salidaAdmin == false) {
        headerBtnLogin.style.display = 'block'
        headerBtnLogout.style.display = 'none'
        container.style.display = 'block';
        userLog.style.display = 'none'
        selectEnvios.style.display = 'none'
    }
}

function toCart() {

    classCarrito.style.display = 'flex'
    userLog.style.display = 'none'
    btnCart.style.display = 'none';
    btnACompras.style.display = 'block'
    eventACompras();

}

function compra() {
    orden = orden + 1
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compra realizada con exito.  \n Orden de compra ' + orden + '. \n Envie el  comprobante de pago junto con el numero de orden de compra a \n raw@pedidos.com',
        showConfirmButton: false,
        timer: 5000
    })
}

function vaciarCarro() {
    cantidad = 0;
    localStorage.removeItem("cart");
    createCart();
    showCart()
}


function administrador() {
    adminLog.innerHTML = `
    <p class="anuncio">Sitio en construcción</p>
    `
    //     while (salidaAdmin) {
    //         opcionesAdm = parseInt(prompt("Elegí entre estas opciones ingresando solo el número de la opción indicada:\n 1 - Agregar un artícullo. \n 2 - Cambiar Precio. \n 3 - Cambiar stock. \n 4 - Salir.  "));

    //         switch (opcionesAdm) {
    //             case 1:
    //                 agregarArticulo = true;
    //                 break
    //             case 2:
    //                 cambiarPrecio = true;
    //                 break
    //             case 3:
    //                 cambiarStock = true;
    //                 break

    //             case 4:
    //                 salidaAdmin = false;
    //                 break
    //         }

    //         while (cambiarPrecio) {
    //             let ingreso = prompt("Ingresá los datos del producto a modificar: Id, precio nuevo, separados por uhna barra diagonal (/), ingrersá x para salir. ");
    //             if (ingreso.toUpperCase() == "X") {
    //                 cambiarPrecio = false;


    //             }
    //             let idCambioPrecio = ingreso.split("/");
    //             console.log(idCambioPrecio);
    //             productos.forEach(element => {
    //                 if (element.id == idCambioPrecio[0]) {
    //                     element.precio = parseFloat(idCambioPrecio[1]);
    //                     alert("El id nro " + element.id + " ahora vale $" + element.precio + ".")
    //                 }
    //             })
    //         }

    //         while (cambiarStock) {
    //             let ingreso = prompt("Ingresá los datos del producto a modificar: Id, 'agregar' o 'quitar', cantidad,  separados por una barra diagonal (/), ingrersá x para salir. ");
    //             if (ingreso.toUpperCase() == "X") {
    //                 cambiarStock = false;


    //             }
    //             let idCambioStock = ingreso.split("/");
    //             if (idCambioStock[1] == "agregar" || idCambioStock[1] == "quitar") {
    //                 if (idCambioStock[1] == "agregar") {
    //                     console.log(idCambioStock);
    //                     productos.forEach(element => {
    //                         if (element.id == idCambioStock[0]) {
    //                             element.cantidad = parseInt(element.cantidad) + parseInt(idCambioStock[2]);
    //                             alert("El id nro " + element.id + " ahora la cantidad es de " + element.cantidad + ".")
    //                         }
    //                     })
    //                 }
    //                 if (idCambioStock[1] == "quitar") {
    //                     console.log(idCambioStock);
    //                     productos.forEach(element => {
    //                         if (element.id == idCambioStock[0]) {
    //                             element.cantidad = parseInt(element.cantidad) - parseInt(idCambioStock[2]);
    //                             alert("El id nro " + element.id + " ahora la cantidad es de " + element.cantidad + ".")
    //                         }
    //                     })
    //                 }
    //             }
    //             if (idCambioStock[1] != "agregar" && idCambioStock[1] != "quitar") {
    //                 alert("Solo puedes usar los valores 'agregar' o 'quitar'. ")
    //             }
    //         }

    //         while (agregarArticulo) {
    //             let ingreso = prompt("Ingresá los datos del producto: tipo, modelo, precio, color, cantidad, separados por uhna barra diagonal (/), ingrersá x para salir. ");
    //             if (ingreso.toUpperCase() == "X") {
    //                 agregarArticulo = false;

    //             }
    //             if (ingreso.toUpperCase() != "X") {
    //                 let datos = ingreso.split('/')
    //                 console.log(datos);
    //                 const producto = new Producto(datos[0], datos[1], parseFloat(datos[2]), datos[3], parseInt(datos[4]), datos[5], productos.length + 1)
    //                 productos.push(producto);
    //                 alert("Ud. acaba de agregar el ID nro: " + productos.length + "\n Tipo: " + datos[0] + "\n Modelo: " + datos[1] + "\n Precio: $" + datos[2] + "\n Color: " + datos[3] + '" \n Cantidad: ' + datos[4] + " unidades");

    //                 console.log(productos);
    //             }


    //         }
    //     }
}






document.getElementById("btn__iniciar-session").addEventListener("click", loginForm);
document.getElementById("btn__register").addEventListener("click", registerForm);



document.getElementById("btn__login").addEventListener("click", (event) => {
    event.preventDefault();
    inicio();
})

document.getElementById("btn__ingresardatos").addEventListener("click", (event) => {
    event.preventDefault();
    register();
})

document.querySelector(".btn-header-login").addEventListener("click", (event) => {
    event.preventDefault();
    inicioAlogin();
})

const eventPrecioEnvio = () => {
    document.querySelector(".consulta-envio").addEventListener("click", (event) => {
        event.preventDefault();
        selectValue();
        traerPrecioEnvio()

    })
}
const eventCarrito = () => {
    if (logIn) {
        document.getElementById("btn-cart").addEventListener("click", (event) => {
            event.preventDefault();
            toCart();
        })
    }
}
const eventACompras = () => {
    document.getElementById("btn-a-compras").addEventListener("click", (event) => {
        event.preventDefault();
        headerLogIn()
        imprimirBtnCantCarrito
    })
}
const eventComprar = () => {
    document.getElementById("btn-compra").addEventListener("click", (event) => {
        event.preventDefault();
        compra()
        vaciarCarro()
    })
}
const eventVaciar = () => {
    document.getElementById("vaciar-carro").addEventListener("click", (event) => {
        event.preventDefault();
        vaciarCarro()
    })
}


// carro





const addProduct = (btncarro) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let tipoProducto;
    let nombreProducto;
    let colorProducto;
    let precioProducto;
    let cartContent = [];
    if (cart) {
        for (const element of cart) {
            if (element.id == btncarro) {
                if (agregar) {
                    element.quantity++;
                }
                if (quitar) {
                    element.quantity--;
                }
                tipoProducto = element.tipo;
                nombreProducto = element.modelo;
                colorProducto = element.color;
                precioProducto = element.precio;
            }
            cartContent.push(element);
        }
    }

    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cartContent));
    console.log("cart: " + JSON.stringify(cartContent));
    if (agregar) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agregó el producto ' + tipoProducto + " " + nombreProducto + " " + colorProducto + '\n Suma al carrito $' + precioProducto,
            showConfirmButton: false,
            timer: 2000
        })
    }
    if (quitar) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se quitó el producto ' + tipoProducto + " " + nombreProducto + " " + colorProducto + '\n Descuenta al carrito $' + precioProducto,
            showConfirmButton: false,
            timer: 2000
        })
    }
}



const loadEvents = () => {
    let buttons = document.getElementsByClassName('btn-carrito');
    headerLogIn();

    for (let i = 0; i < buttons.length; i++) {

        let item = document.getElementsByClassName('btn-carrito')[i];
        item.addEventListener("click", () => {
            agregar = true;
            quitar = false;
            addProduct(item.id);
            showCart();
            imprimirBtnCantCarrito();
        });
    }
}

const createCart = () => {
    let cart = [];
    for (const prod of productos) {
        cart.push({
                id: prod.id,
                tipo: prod.tipo,
                modelo: prod.modelo,
                precio: prod.precio,
                color: prod.color,
                cantidad: prod.cantidad,
                img: prod.img,
                quantity: 0,
            }

        )
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}


let cart = (localStorage.getItem("cart"));
if (!cart) {
    createCart();
}
recorrerCarrito(JSON.parse(cart));


function recorrerCarrito(array) {
    let sumaTotal = 0;
    const divCarrito = document.querySelector('.carrito');
    divCarrito.innerHTML = ``
    let tituloCart = document.createElement('div')
    tituloCart.className = 'titulo-cart'
    tituloCart.style = 'color:white'
    tituloCart.innerHTML = `
    <h4 class="cart-title">Tus productos</h4>
    `
    divCarrito.append(tituloCart)
    cantidad = 0;
    for (const element of array) {
        if (element.quantity != 0) {
            cantidad = cantidad + element.quantity;
            let suma = 0;
            suma = suma + (element.quantity * element.precio);
            sumaTotal = sumaTotal + (element.quantity * element.precio);
            let div = document.createElement('div');
            div.className = 'cart';
            div.style = 'display: flex'
            div.style = 'color: white'
            div.innerHTML = `
                <p class="card-text"> ${element.tipo} ${element.modelo} color ${element.color}  $${element.precio}  </p>
                <div class="agregar-quitar">
                <button class="btn-quitar" id="${element.id}"><</button>
                <p class="cantidad"> ${element.quantity}</p>
                <button class="btn-agregar" id="${element.id}">></button>
                <p class="cantidad"> Total: $${suma}</p>
                </div>
            </div>
        `

            divCarrito.append(div);
        }

    }
    let divTotal = document.createElement('div');
    let totalCEnvio = sumaTotal + valorEnvio;
    divTotal.className = 'suma-total';
    divTotal.style = 'color : white'
    divTotal.innerHTML = `
    <p class="card-text"> El valor del envio es $${valorEnvio}</P>
    <p class="card-text"> Te llegara en ${demoraEntrega} a la zona seleccionada.</P>
    <p class="suma-total"> Valor total de la compra $${totalCEnvio}</P>
    `
    divCarrito.append(divTotal);
    eventComprar()
    eventVaciar()

}

function imprimirBtnCantCarrito() {
    btnCart.innerText = ''
    if (cantidad != 0)
        btnCart.innerText = ' ' + cantidad + ' productos';
}

const loadEventsBtnQuitar = () => {
    let btnQuitar = document.getElementsByClassName('btn-quitar');
    for (let i = 0; i < btnQuitar.length; i++) {

        let item = document.getElementsByClassName('btn-quitar')[i];
        item.addEventListener("click", () => {
            agregar = false;
            quitar = true;
            console.log(agregar);
            console.log(quitar);
            addProduct(item.id);
            showCart();
        });
    }
}
const loadEventsBtnAgregar = () => {
    let btnAgregar = document.getElementsByClassName('btn-agregar');
    for (let i = 0; i < btnAgregar.length; i++) {

        let item = document.getElementsByClassName('btn-agregar')[i];
        item.addEventListener("click", () => {
            agregar = true;
            quitar = false;
            console.log(agregar);
            console.log(quitar);
            addProduct(item.id);
            showCart();
        });
    }
}

function showCart() {
    cart = (localStorage.getItem("cart"));
    recorrerCarrito(JSON.parse(cart));
    loadEventsBtnQuitar()
    loadEventsBtnAgregar()
}

async function traerDatosHTML() {
    const respuesta = await fetch('./js/envios.json');
    const data = await respuesta.json();
    enviosHTML(data);
}



function enviosHTML(array) {
    selectEnvios.innerHTML = '';
    selectEnvios.innerHTML = `<div><option value="">Elige tu zona</option></div>`;

    for (const element of array) {
        let options;
        options = document.createElement('option');
        options.innerText = element.Zona
        options.value = element.Zona
        selectEnvios.append(options);
    }
    const divSelect = document.querySelector('#selection');
    const btnConsultaEnvio = document.createElement('button');
    btnConsultaEnvio.className = 'consulta-envio';
    btnConsultaEnvio.innerText = 'Seleccionar envio'
    divSelect.append(btnConsultaEnvio);
    eventPrecioEnvio()
}
async function traerPrecioEnvio() {
    const respuesta = await fetch('./js/envios.json');
    const data = await respuesta.json();
    precioEnvio(data);
}



function precioEnvio(array) {
    let pValorEnvio;
    for (const element of array) {
        if (element.Zona == selValue) {
            valorEnvio = element.precio;
            demoraEntrega = element.Demora;
            pValorEnvio = document.createElement('p');
            pValorEnvio.className = 'precio-envio'
            pValorEnvio.innerText = `$${element.precio}`;
            selectEnvios.append(pValorEnvio);
        }
        console.log(valorEnvio);
    }
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El costo del envio es $' + valorEnvio + "\n Tu pedido llegará en  " + demoraEntrega + " ",
        showConfirmButton: false,
        timer: 3000
    })
    recorrerCarrito(JSON.parse(cart));
}



function selectValue() {

    selValue = selectEnvios.options[selectEnvios.selectedIndex].value;

}

recorrerProductos(productos)
traerDatosHTML()

btnConsultarEnvio.addEventListener('click', () => {
    selectValue();
    traerPrecioEnvio();
})