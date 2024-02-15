function comprobar() {
    let numero1;
    numero1 = parseInt(document.getElementById("numero1").value);
    
    if (numero1 <= 10 && numero1 >=9 ) {
        document.getElementById("solucion").innerHTML= "Sobresaliente"
    }
   
    if (numero1 >= 7 && numero1 < 9) {
        document.getElementById("solucion").innerHTML= "Notable"
    }

    if (numero1>= 5 && numero1 <7) {
        document.getElementById("solucion").innerHTML= "Bien"
    }

    if (numero1>= 0 && numero1 <=4) {
        document.getElementById("solucion").innerHTML= "Suspenso";
    }

    if (numero1 > 10) {
        document.getElementById("solucion").innerHTML= "El valor introducido no es valido"
    }
}