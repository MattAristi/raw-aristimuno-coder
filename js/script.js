// let userName;
// let userLastName;
// let userEmail;
// let userEmail1;
// let userAge;
// let userPasword;
// let userPasword1;
// let userFullName;
// let condicion=0;
// let Log=0;
// let userWanted;
// let blocked=0;
// let nan=0;
// function pasword(){
//     userPasword1=prompt ("ingresá tu contraseña");
// }
// function respuestaErronea(condicion1){
//     if (condicion1!="si" && condicion1!="no" ){
//         alert("Solo podes utilizar si o no como respuesta");  
//         }
// }
// function tryAgain(){
//     userWanted=prompt("Has ingresado una contraseña erronea. Queres intentar nuevamente?");
//     if (userWanted=="si") {
//         login()
//     }
//     if (userWanted=="no"){
//     }
//     else if (userWanted!="si" && userWanted!="no" ){
//         alert("Solo podes utilizar si o no como respuesta");
//         tryAgain()
//     }
// }
// function firstLogin(){
//     condicion=0
//     userAge=parseInt(prompt("Ingresá tu edad en numeros."));

//     if (!isNaN(userAge)){
//         if (userAge<=16){
//         alert("No podemos generar un usuario si sos menor de 16 años");
//         condicion=1;
//         }

//     }
//     if (isNaN(userAge)){
//         alert("Solo podes ingresar numeros enteros.")
//         firstLogin();
//     }

//     else if (userAge>15){
//         userName=prompt("Ingresa tu nombre.");
//         userLastName=prompt("Ingresa tu apellido.");
//         userFullName=userName+" "+userLastName;
//         userFullName=userFullName.toUpperCase();
//         userEmail=prompt("Ingresa tu e-mail.");
//         userPasword=prompt("Creá tu contraseña.");
//     }

// }

// function login(){
//     log=0;
//     userEmail1=prompt ("Ingresá tu e-mail");
//     pasword();
//     if (userEmail==userEmail1 && userPasword==userPasword1){
//             log=1;
//     }
//     if (userEmail==userEmail1 && userPasword!=userPasword1){
//         do {
//             blocked=blocked+1;
//             if (blocked>2){
//                 alert("Tu usuario ha sido bloqueado")
//                 break;
//             }
//             alert(userName+" tu contraseña es incorrecta, te quedan "+(3-blocked)+" intentos.")
//             pasword();
//             if (userPasword==userPasword1){
//                 log=1;   
//             }

//         }while (userPasword!=userPasword1 || blocked>=3);
//     }   

//     if (userEmail!=userEmail1){
//         alert("Tus datos son incorrectos")
//         tryAgain();
//     }

// }
// function inicio(){
//     let respuesta = prompt("Queres realizar una compra? (si/no)");
//     if (respuesta == "si") {
//         alert("Genial, vamos a loguearnos o generar tu usuario!!");
//             let respuesta2 = prompt("Estás registrado? (si/no)");
//             if (respuesta2 == "si") {
//                 login()
//             }
//             if (respuesta2=="no"){
//                 firstLogin()
//                 if (condicion!=1){
//                     alert("Ya eres miembro de la comunidad "+userFullName+". deberías logearte para comenzar. ")
//                     login()
//                 }   
//             }
//             else if (respuesta2!="no" && respuesta2!="si"){
//                 alert("Solo podes utilizar si o no como respuesta");
//                 inicio()
//                 };



//     }
//     else if (respuesta=="no") {
//         log=0;
//     }
//     else if (respuesta!="no"){
//         alert("Solo podes utilizar si o no como respuesta");
//         inicio();
//     };
// }
// inicio();

// if (log==1) {
//     alert("Comencemos con la compra!")
// }

// else if (log!=1) {
// alert ("Muy bien! Quedate mirando nuestros productos! Para logearte reiniciá la web")
// }


// Productos en objetos xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

class Producto {
    constructor (tipo, modelo, precio, material, color, size, cantidad, id) {
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
    new Producto ( "Horquilla", "classic", 5000, "acero", "black", "28", 20, 1),
    new Producto ( "Horquilla", "recta", 6000, "acero", "black", "28", 20, 2),
    new Producto ( "Horquilla", "classic", 5000, "acero", "metalico", "28", 20, 3),
    new Producto ( "Horquilla", "recta", 6000, "acero", "metalico", "28", 20, 4),
    new Producto ( "Cuadro", "HARSH", 20000, "acero", "black", "28", 20, 5),
    new Producto ( "Cuadro", "HARSH", 20000, "acero", "white", "28", 20, 6),
    new Producto ( "Cuadro", "HARSH", 20000, "acero", "turquoise", "28", 20, 7),
    new Producto ( "Cuadro", "HARSH", 20000, "acero", "red", "28", 20, 8),
    new Producto ( "Cuadro", "NIGTHROO", 23000, "acero", "black", "28", 20, 9),
    new Producto ( "Cuadro", "NIGTHROO", 23000, "acero", "white", "28", 20, 10),
    new Producto ( "Cuadro", "NIGTHROO", 23000, "acero", "turquoise", "28", 20, 11),
    new Producto ( "Cuadro", "NIGTHROO", 23000, "acero", "red", "28", 20, 12),
    new Producto ( "Cuadro", "KLR wolf", 25000, "acero", "black", "28", 20, 13),
    new Producto ( "Cuadro", "KLR wolf", 25000, "acero", "white", "28", 20, 14),
    new Producto ( "Cuadro", "KLR wolf", 25000, "acero", "turquoise", "28", 20, 15),
    new Producto ( "Cuadro", "KLR wolf", 25000, "acero", "red", "28", 20, 16),
    new Producto ( "Cuadro", "GOENING", 27000, "acero", "black", "28", 20, 17),
    new Producto ( "Cuadro", "GOENING", 27000, "acero", "white", "28", 20, 18),
    new Producto ( "Cuadro", "GOENING", 27000, "acero", "turquoise", "28", 20, 19),
    new Producto ( "Cuadro", "GOENING", 27000, "acero", "red", "28", 20, 20),
    new Producto ( "Portaequipaje", "delantero", 3000, "acero", "black", "28", 20, 21),
    new Producto ( "Portaequipaje", "delantero", 3000, "acero", "metalico", "28", 20, 22),
    new Producto ( "Portaequipaje", "trasero", 2500, "acero", "black", "28", 20, 23),
    new Producto ( "Portaequipaje", "trasero", 2500, "acero", "metali", "28", 20, 24),
]

console.log(productos);

let administrador=true

while (administrador){
    let ingreso= prompt( "Ingresá los datos del producto: tipo, modelo, precio, material, color, size, cantidad, separados por uhna barra diagonal (/), ingrersá x para salir. ");
    if (ingreso.toUpperCase()== "x"){
        break;
    }
    let datos = ingreso.split ('/')
    console.log(datos);
    const producto = new Producto (datos[0],datos[1], parseFloat(datos[2]),datos[3], datos[4],datos[5], parseInt(datos[6]),productos.length+1)
    productos.push(Producto);

    console.log(productos);
    

}