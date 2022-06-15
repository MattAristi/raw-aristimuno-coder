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
let salidaAdmin;
let userEmail1;
let userPasword1;
let userName;
let userAge;
let userEmail;
let user;
let userPasword;
let usuarioLocalStorage;
let wrong=false;

let divUserLog = document.getElementById('userlog');

const container = document.querySelector(".container")
const containerRegister = document.querySelector(".container__register");
const formLogin = document.querySelector(".form__login");
const formRegister = document.querySelector(".form__register");
const cFondoLogin = document.querySelector(".cfondo-login");
const cFondoRegister = document.querySelector(".cfondo-register");
const wrongPassword = document.querySelector(".wrong-password");
const wrongData = document.querySelector(".wrong-data");
const headerBtnLogin = document.querySelector(".btn-header-login");
const headerBtnLogout =document.querySelector(".btn-header-logout");
const adminLog= document.getElementById('adminlog')
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
}

function inicio() {
    userEmail1 = document.querySelector("#email-usuario").value;
    userPasword1 = document.querySelector("#password").value;
    console.log(userEmail1, userPasword1)
    login();

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

function register() {
    userName = document.querySelector("#nombre-completo").value;
    userAge = document.querySelector("#fecha-n").value;
    userEmail = document.querySelector("#e-mail").value;
    user = document.querySelector("#usuario").value;
    userPasword = document.querySelector("#g-password").value;
    console.log(userName, userAge, userEmail, user, userPasword);
    const usuario = {
        'Name': userName,
        'Age': userAge,
        'Email': userEmail,
        'User': user,
        'Password': userPasword,
    }
    localStorage.setItem('Usuario',JSON.stringify(usuario));
    console.log(usuarioLocalStorage);
    alert("Usuario genereado exitosamente.");
}


function login() {
    usuarioLocalStorage=JSON.parse(localStorage.getItem('Usuario'));
    userEmail=usuarioLocalStorage.Email;
    userPasword=usuarioLocalStorage.Password;
    console.log(userEmail,userPasword);
    
    if (userEmail == userEmail1 && userPasword == userPasword1 && userEmail1 != adminEmail) {
        logIn = true;
        container.style.display = 'none';
        recorrerProductos(productos);
        headerLogIn()
    }
    if (userEmail == userEmail1 && userPasword != userPasword1 && userEmail1 != adminEmail) {
        wrongPassword.style.display='block'
    }

    if (userEmail != userEmail1 && userEmail != adminEmail && adminEmail != userEmail1) {
        wrongPassword.style.display='block'

    }
    if (userEmail1 == adminEmail && userPasword1 == adminPasword) {
        salidaAdmin = true;
        container.style.display = 'none';
        administrador();
        headerLogIn()

    }
    if (adminEmail == userEmail1 && adminPasword != userPasword1) {
        wrongPassword.style.display='block'
    }
}

const recorrerProductos = (array) => {
    if (logIn) {
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
                <button class="btn-carrito" id="${element.id}">Agregar al carrito</button>
            </div>
        </div>
        `
        divUserLog.append(div)
        }
    }

}
function headerLogIn () {
    if (logIn) {
        headerBtnLogin.style.display='none'
        headerBtnLogout.style.display='block'
    }
    if (salidaAdmin) {
        headerBtnLogin.style.display='none'
        headerBtnLogout.style.display='block'
    }
}

function administrador() {
    adminLog.innerHTML= `
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
    new Producto("Horquilla", "classic", 5000, "black", 20, '../imagenesraw/horquillafork.jpg', 1),
    new Producto("Horquilla", "recta", 6000, "black", 20, '../imagenesraw/horquillafork2.jpg', 2),
    new Producto("Cuadro", "HARSH", 20000, "black", 20, '../imagenesraw/harshv2blk.jpg', 3),
    new Producto("Cuadro", "HARSH", 20000, "white", 20, '../imagenesraw/harshv2raw2.jpg', 4),
    new Producto("Cuadro", "NIGTHROO", 23000, "black", 20, '../imagenesraw/nightrodblk.jpg', 5),
    new Producto("Cuadro", "NIGTHROO", 23000, "red", 20, '../imagenesraw/nightrodraw.jpg', 6),
    new Producto("Cuadro", "KLR wolf", 25000, "black", 20, '../imagenesraw/klrwolf.jpg', 7),
    new Producto("Cuadro", "KLR wolf", 25000, "blue", 20, '../imagenesraw/klrwolfblue.jpg', 8),
    new Producto("Cuadro", "GOERING", 27000, "red", 20, '../imagenesraw/gorningred.jpg', 9),
    new Producto("Cuadro", "GOERING", 27000, "white", 20, '../imagenesraw/goeringvioletv.jpg', 10),

]

// esto lo queria usar para hacer aparecer el div del login  y ocultar los productos si querias tocar un boton de las cards sin estar logueado o si tocabas el boton de logion del header.
// como no funcionó y me esconde ambos al iniciar volvi a dejar en block a los dos elementos.
//const divProductos = document.querySelector(".productos")

// document.querySelector(".btn-carrito").addEventListener("click", (event) =>{ event.preventDefault(); inicioToLogin(); })
//     function inicioToLogin() {
//         container.style.display = "block";
//         divProductos.style.display = "none";
//     }

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