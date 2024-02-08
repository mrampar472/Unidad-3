function Comprobar() {
    let numero1;
    numero1 = parseInt(document.getElementById("numero1").value);
    if((numero1%2)==0) {
        document.getElementById("solucion").innerHTML = "Es par";
    }
    else {
        document.getElementById("solucion").innerHTML = "Es impar";
    }
  }