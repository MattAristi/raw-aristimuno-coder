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

const containerRegister = document.querySelector(".container__register");
const formLogin = document.querySelector(".form__login");
const formRegister = document.querySelector(".form__register");
const cFondoLogin = document.querySelector(".cfondo-login");
const cFondoRegister = document.querySelector(".cfondo-register");


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
document.getElementById("btn__iniciar-session").addEventListener("click", loginForm);
document.getElementById("btn__register").addEventListener("click", registerForm);

function login() {

    console.log(userEmail1)
    if (userEmail == userEmail1 && userPasword == userPasword1 && userEmail1 != adminEmail) {
        alert("Comencemos con la compra!");
        logIn = true;
    }
    if (userEmail == userEmail1 && userPasword != userPasword1 && userEmail1 != adminEmail) {
        alert(userName + " tu contraseña es incorrecta.")
        inicio();
    }

    if (userEmail != userEmail1 && userEmail != adminEmail && adminEmail != userEmail1) {
        alert("Tus datos son incorrectos");
        inicio();

    }
    if (userEmail1 == adminEmail && userPasword1 == adminPasword) {
        alert("bienvenido a la cuenta del administrador")
        salidaAdmin = true;
        administrador();

    }
    if (adminEmail == userEmail1 && adminPasword != userPasword1) {
        alert("tu contraseña es incorrecta.");

    }
}


class Producto {
    constructor(tipo, modelo, precio, material, color, size, cantidad, id) {
        this.tipo = tipo;
        this.modelo = modelo;
        this.precio = precio;
        this.material = material;
        this.color = color;
        this.size = size;
        this.cantidad = cantidad;
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;
    }
}
const productos = [
    new Producto("Horquilla", "classic", 5000, "acero", "black", "28", 20, 1),
    new Producto("Horquilla", "recta", 6000, "acero", "black", "28", 20, 2),
    new Producto("Horquilla", "classic", 5000, "acero", "metalico", "28", 20, 3),
    new Producto("Horquilla", "recta", 6000, "acero", "metalico", "28", 20, 4),
    new Producto("Cuadro", "HARSH", 20000, "acero", "black", "28", 20, 5),
    new Producto("Cuadro", "HARSH", 20000, "acero", "white", "28", 20, 6),
    new Producto("Cuadro", "HARSH", 20000, "acero", "turquoise", "28", 20, 7),
    new Producto("Cuadro", "HARSH", 20000, "acero", "red", "28", 20, 8),
    new Producto("Cuadro", "NIGTHROO", 23000, "acero", "black", "28", 20, 9),
    new Producto("Cuadro", "NIGTHROO", 23000, "acero", "white", "28", 20, 10),
    new Producto("Cuadro", "NIGTHROO", 23000, "acero", "turquoise", "28", 20, 11),
    new Producto("Cuadro", "NIGTHROO", 23000, "acero", "red", "28", 20, 12),
    new Producto("Cuadro", "KLR wolf", 25000, "acero", "black", "28", 20, 13),
    new Producto("Cuadro", "KLR wolf", 25000, "acero", "white", "28", 20, 14),
    new Producto("Cuadro", "KLR wolf", 25000, "acero", "turquoise", "28", 20, 15),
    new Producto("Cuadro", "KLR wolf", 25000, "acero", "red", "28", 20, 16),
    new Producto("Cuadro", "GOENING", 27000, "acero", "black", "28", 20, 17),
    new Producto("Cuadro", "GOENING", 27000, "acero", "white", "28", 20, 18),
    new Producto("Cuadro", "GOENING", 27000, "acero", "turquoise", "28", 20, 19),
    new Producto("Cuadro", "GOENING", 27000, "acero", "red", "28", 20, 20),
    new Producto("Portaequipaje", "delantero", 3000, "acero", "black", "28", 20, 21),
    new Producto("Portaequipaje", "delantero", 3000, "acero", "metalico", "28", 20, 22),
    new Producto("Portaequipaje", "trasero", 2500, "acero", "black", "28", 20, 23),
    new Producto("Portaequipaje", "trasero", 2500, "acero", "metali", "28", 20, 24),
]
function inicio() {
    document.getElementById("btn__login").addEventListener("click", () => {
        userEmail1 = document.querySelector("#email-usuario").value;
        userPasword1 = document.querySelector("#password").value;
        console.log(userEmail1, userPasword1)
        login();
    });

}

function register() {
    document.getElementById("btn__ingresardatos").addEventListener("click", () => {
        userName = document.querySelector("#nombre-completo").value;
        userAge = document.querySelector("#fecha-n").value;
        userEmail = document.querySelector("#e-mail").value;
        user = document.querySelector("#usuario").value;
        userPasword = document.querySelector("#g-password").value;
        console.log(userName, userAge, userEmail, user, userPasword);
        logIn = true;
        alert("Usuario genereado exitosamente.");
        comprar();
    });
};


register();

inicio();


function administrador() {
    while (salidaAdmin) {
        opcionesAdm = parseInt(prompt("Elegí entre estas opciones ingresando solo el número de la opción indicada:\n 1 - Agregar un artícullo. \n 2 - Cambiar Precio. \n 3 - Cambiar stock. \n 4 - Salir.  "));

        switch (opcionesAdm) {
            case 1:
                agregarArticulo = true;
                break
            case 2:
                cambiarPrecio = true;
                break
            case 3:
                cambiarStock = true;
                break

            case 4:
                salidaAdmin = false;
                break
        }

        while (cambiarPrecio) {
            let ingreso = prompt("Ingresá los datos del producto a modificar: Id, precio nuevo, separados por uhna barra diagonal (/), ingrersá x para salir. ");
            if (ingreso.toUpperCase() == "X") {
                cambiarPrecio = false;


            }
            let idCambioPrecio = ingreso.split("/");
            console.log(idCambioPrecio);
            productos.forEach(element => {
                if (element.id == idCambioPrecio[0]) {
                    element.precio = parseFloat(idCambioPrecio[1]);
                    alert("El id nro " + element.id + " ahora vale $" + element.precio + ".")
                }
            })
        }

        while (cambiarStock) {
            let ingreso = prompt("Ingresá los datos del producto a modificar: Id, 'agregar' o 'quitar', cantidad,  separados por una barra diagonal (/), ingrersá x para salir. ");
            if (ingreso.toUpperCase() == "X") {
                cambiarStock = false;


            }
            let idCambioStock = ingreso.split("/");
            if (idCambioStock[1] == "agregar" || idCambioStock[1] == "quitar") {
                if (idCambioStock[1] == "agregar") {
                    console.log(idCambioStock);
                    productos.forEach(element => {
                        if (element.id == idCambioStock[0]) {
                            element.cantidad = parseInt(element.cantidad) + parseInt(idCambioStock[2]);
                            alert("El id nro " + element.id + " ahora la cantidad es de " + element.cantidad + ".")
                        }
                    })
                }
                if (idCambioStock[1] == "quitar") {
                    console.log(idCambioStock);
                    productos.forEach(element => {
                        if (element.id == idCambioStock[0]) {
                            element.cantidad = parseInt(element.cantidad) - parseInt(idCambioStock[2]);
                            alert("El id nro " + element.id + " ahora la cantidad es de " + element.cantidad + ".")
                        }
                    })
                }
            }
            if (idCambioStock[1] != "agregar" && idCambioStock[1] != "quitar") {
                alert("Solo puedes usar los valores 'agregar' o 'quitar'. ")
            }
        }

        while (agregarArticulo) {
            let ingreso = prompt("Ingresá los datos del producto: tipo, modelo, precio, material, color, size, cantidad, separados por uhna barra diagonal (/), ingrersá x para salir. ");
            if (ingreso.toUpperCase() == "X") {
                agregarArticulo = false;

            }
            if (ingreso.toUpperCase() != "X") {
                let datos = ingreso.split('/')
                console.log(datos);
                const producto = new Producto(datos[0], datos[1], parseFloat(datos[2]), datos[3], datos[4], datos[5], parseInt(datos[6]), productos.length + 1)
                productos.push(producto);
                alert("Ud. acaba de agregar el ID nro: " + productos.length + "\n Tipo: " + datos[0] + "\n Modelo: " + datos[1] + "\n Precio: $" + datos[2] + "\n Material: " + datos[3] + "\n Color: " + datos[4] + "\n Medidas: " + datos[5] + '" \n Cantidad: ' + datos[6] + " unidades");

                console.log(productos);
            }


        }
    }
}
function comprar(){
    if (logIn)
    alert("Carga tu carrito!")
}