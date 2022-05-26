let userName;
let userLastName;
let userEmail;
let userEmail1;
let adminEmail = "admin@raw.com";
let userAge;
let userPasword;
let userPasword1;
let adminPasword = "x";
let userFullName;
let condicion = 0;
let logIn = false;
let adminLog = 0
let userWanted;
let blocked = 0;
let nan = 0;
let agregarArticulo = false;
let cambiarPrecio = false;
let cambiarStock = false;
let opcionesAdm;
let salidaAdmin;

function saludoOut(){
    alert("Muy bien! Quedate mirando nuestros productos! Para logearte reiniciá la web");
}


function respuestaSiNo() {
    alert("Solo podes utilizar 'si' o 'no' como respuesta.");
}

function pasword() {
    userPasword1 = prompt("Ingresá tu contraseña. (para el admin solo una x)");
}

function respuestaErronea(condicion1) {
    if (condicion1 != "si" && condicion1 != "no") {
    respuestaSiNo();
    }
}

function tryAgain() {
    userWanted = prompt("Has ingresado una contraseña erronea. ¿Queres intentar nuevamente?");
    if (userWanted == "si") {
        login()
    }
    if (userWanted == "no") {
        alert("Muy bien! Quedate mirando nuestros productos! Para logearte reiniciá la web")
    } 
    else if (userWanted != "si" && userWanted != "no") {
        respuestaSiNo();
        tryAgain()
    }
}

function firstLogin() {
    condicion = 0
    userAge = parseInt(prompt("Ingresá tu edad en numeros."));

    if (!isNaN(userAge)) {
        if (userAge <= 16) {
            alert("No podremos generar un usuario si sos menor de 16 años. \nContinua en el sitio viendo nuestros productos.");
            condicion = 1;
        }

    }
    if (isNaN(userAge)) {
        alert("Solo podes ingresar numeros enteros.")
        firstLogin();
    } else if (userAge > 15) {
        userName = prompt("Ingresa tu nombre.");
        userLastName = prompt("Ingresa tu apellido.");
        userFullName = userName + " " + userLastName;
        userFullName = userFullName.toUpperCase();
        userEmail = prompt("Ingresa tu e-mail.");
        userPasword = prompt("Creá tu contraseña.");
    }

}

function login() {
    log = 0;
    userEmail1 = prompt("Ingresá tu e-mail. (si eres el administrador recuerda que tu email es 'admin@raw.com')");
    pasword();
    if (userEmail == userEmail1 && userPasword == userPasword1 && userEmail1 != adminEmail) {
        alert("Comencemos con la compra!");
        logIn = true;
    }
    if (userEmail == userEmail1 && userPasword != userPasword1 && userEmail1 != adminEmail) {
        do {
            blocked = blocked + 1;
            if (blocked > 2) {
                alert("Tu usuario ha sido bloqueado")
                break;
            }
            alert(userName + " tu contraseña es incorrecta, te quedan " + (3 - blocked) + " intentos.")
            pasword();
            if (userPasword == userPasword1) {
                alert("Comencemos con la compra!");
                logIn = true;
            }

        } while (userPasword != userPasword1 || blocked >= 3);
    }

    if (userEmail != userEmail1 && userEmail != adminEmail && adminEmail != userEmail1) {
        alert("Tus datos son incorrectos")
        tryAgain();
    }
    if (userEmail1 == adminEmail && userPasword1 == adminPasword) {
        adminLog = 1;
        alert("bienvenido a la cuenta del administrador")
        salidaAdmin = true;

    }
    if (adminEmail == userEmail1 && adminPasword != userPasword1) {
        do {
            blocked = blocked + 1;
            if (blocked > 2) {
                alert("Tu usuario ha sido bloqueado")
                break;
            }
            alert("administrador" + " tu contraseña es incorrecta, te quedan " + (3 - blocked) + " intentos.")
            pasword();
            if (adminPasword == userPasword1) {
                alert("Comencemos con la compra!");
                logIn = true;
            }

        } while (adminPasword != userPasword1 || blocked >= 3);
    }

}

function inicio() {
    let respuesta = prompt("Deseas loguerte? (si/no)");
    if (respuesta == "si") {
        let respuesta2 = prompt("Estás registrado? (si/no)");
        if (respuesta2 == "si") {
            login()
        }
        if (respuesta2 == "no") {
            firstLogin()
            if (condicion != 1) {
                alert("Ya eres miembro de la comunidad " + userFullName + ". deberías logearte para comenzar. ");
                login();
            }
        } else if (respuesta2 != "no" && respuesta2 != "si") {
            respuestaSiNo();
            inicio();
        }



    } else if (respuesta == "no") {
        saludoOut();
        logIn = false;
    } else if (respuesta != "no") {
        respuestaSiNo();
        inicio();
    };
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

console.log(productos);

inicio();



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
                        element.cantidad =parseInt(element.cantidad) + parseInt(idCambioStock[2]);
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
        let datos = ingreso.split('/')
        console.log(datos);
        const producto = new Producto(datos[0], datos[1], parseFloat(datos[2]), datos[3], datos[4], datos[5], parseInt(datos[6]), productos.length + 1)
        productos.push(producto);

        console.log(productos);


    }
}
