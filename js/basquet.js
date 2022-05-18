function jugamos(){
    let puntos=0;
    let triples=0;
    let dobles=0;
    let errores=0;
    let distancia;
    let velocidad;
    let d="dobles";
    let t="triples";
    let f="veces";
    do {
        do {
            distancia = parseInt( prompt("Decime a que distancia queres encestar! 6 u 8 metros? Escribe '0' para salir"));
            
            if (distancia!=0 && distancia!=6 && distancia!=8){
                alert("Solo puedes utilizar '6' u '8' como opciones")
            }
        
    
        }while(distancia!=0 && distancia!=6 && distancia!=8);
        if (distancia==0){
            break
        }
        velocidad = parseInt( prompt("El ángulo del disparo es de 60°. Con que velocidad deberia ser lanzada la pelota? A 8, 10 o 12 m/s ?"));
        if (distancia==6){
            if(velocidad==8){
                puntos=puntos+2;
                dobles=dobles+1;
                alert ("Has hecho un doble!!");
                console.log("puntos: "+puntos);
                console.log("Dobles: : "+dobles);
            }
            else if (velocidad<8){
                alert ("No llegaste!");
                errores=errores+1;
            }
            else if (velocidad>8) {
                alert ("Te pasaste!");
                errores=errores+1;
            }
        }
        else if (distancia==8) {
            if (velocidad==10){
            puntos=puntos+3;
            triples=triples+1;
            alert ("Has hecho un triple!!");
            console.log("puntos: "+puntos);
            console.log("Triples: : "+triples);
            }
            else if (velocidad<10){
                alert ("No llegaste!");
                errores=errores+1;
            }
            else if (velocidad>10) {
                alert ("Te pasaste!");
                errores=errores+1;
            }
        }
    
    
    } while(distancia!=0);
    
    if (dobles<2 && dobles>0){
        d="doble";
    }
    if (triples<2 && triples>0){
        t="triple";
    }
    if (errores<2 && errores>0){
        f="vez";
    }
    alert(" Fallaste "+errores+" "+f+". Pero has hecho "+dobles+" "+d+" y "+triples+" "+t+". Por un total de "+puntos+" puntos.");
    
    
    }
    for (let i = 0; i < 2; i++) {
        let respuesta = prompt("Queres jugar al baloncesto?");
        if (respuesta == "si") {
            alert("Genial, vamos a jugar!!");
            break;
        } 
        else if (i == 1) {
            alert("No importa, vamos a jugar igual!! PQYP");
            break;
        }
        else if (respuesta!="no"){
            alert("Solo podes utilizar si o no como respuesta");
        };
    }
    jugamos();
    for (let i = 0; i < 4; i++) {
        let jugamosOtraVez=prompt("Jugamos nuevamente?");
            if (jugamosOtraVez == "si") {
                jugamos();
            } 
            else if (jugamosOtraVez!="no"){
                alert("Soloadmite 'si' o 'no' como respuesta");
                if (i==3) {
                    alert("Muere.");
                }
            }
            else if (jugamosOtraVez=="no"){
                alert("OK, vaya a codear entonces!!");
                break;
            }
            
        }
    