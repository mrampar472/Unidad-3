function MensajeIf() {
    let Hora;
    Hora = parseInt(document.getElementById("Hora").value);
    if((Hora)>=7 && (Hora)<=11) {
        document.getElementById("solucion").innerHTML = "Buenos dias";
    }
    else if((Hora)>=12 && (Hora)<=21) {
        document.getElementById("solucion").innerHTML = "Buenas tardes";
    }
    else if ((Hora)>=0 && (Hora)<=6 || (Hora)>=22 && (Hora)<=24) {
        document.getElementById("solucion").innerHTML = "Buenas noches";
    }
    else {
        document.getElementById("solucion").innerHTML = "El valor introducido no es válido";
    }
}

  function MensajeSwitch() {
    let hora = prompt("¿Qué hora es?");
    switch (hora) {
     case "7":
     case "8":
     case "9":
     case "10":
     case "11":
        document.getElementById("solucion").innerHTML = "Buenos días";
     break;
     case "12":
     case "13":
     case "14":
     case "15":
     case "16":
     case "17":
     case "18":
     case "19":
     case "20":
        document.getElementById("solucion").innerHTML = "Buenas tardes";
     break;
     case "21":
     case "22":
     case "23":
     case "24":
     case "0":
     case "1":
     case "2":
     case "3":
     case "4":
     case "5":
     case "6":
        document.getElementById("solucion").innerHTML = "Buenas noches";
      break;
     
      
    
      default:
          document.getElementById("solucion").innerHTML = "El valor introducido no es válido;
    }
  }