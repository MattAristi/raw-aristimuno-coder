let userName = prompt ("Decinos tu nombre");
let userLastName = prompt ("Decinos tu apellido");
let userAge = parseInt (prompt("Decinos tu edad"));
let userFullName = userName +" "+ userLastName;
console.log ("userFullName: "+userFullName);
console.log ("tu edad el año que viene será: ", userAge+1);
alert ("Tu edad el año que viene será: " + (userAge + 1));
let lastYear = 2021;
let resultado;
if ((lastYear-userAge)%4==0) {
    resultado = "Naciste en año bisiesto"
} else {
    resultado = "No naciste en un año bisiesto"
} ;
console.log (resultado);


