//crear variables
function calcular () {
let numeroinv=parseInt(document.getElementById("numero-inv").value);
let costcomida=parseFloat(document.getElementById("cost-comida").value);
let costbebida=parseFloat(document.getElementById("cost-bebida").value);
let costdecor= parseFloat(document.getElementById("cost-decor").value);
let costmusica=parseFloat(document.getElementById("cost-musica").value);
let propinaporc=parseFloat(document.getElementById("propina-porc").value);

let totalcomida= numeroinv * costcomida;
document.getElementById("totalomida").value= totalcomida.toLocaleString("es-CO");

let totalbebida= numeroinv * costbebida;
document.getElementById("totalbebida").value= totalbebida.toLocaleString("es-CO");

let totaldecor= numeroinv * costdecor;
document.getElementById("totaldecor").value= totaldecor.toLocaleString("es-CO");

let totalmusica= numeroinv * costmusica;
document.getElementById("totalmusica").value= totalmusica.toLocaleString("es-CO" );

let subtotal= totalcomida + totalbebida + totaldecor + totalmusica;
document.getElementById("subtotal").value= subtotal.toLocaleString("es-CO");

let propina= subtotal * (propinaporc/100);
document.getElementById("propina").value= propina.toLocaleString("es-CO");

let total = subtotal + propina;
document.getElementById("total").value= total.toLocaleString("es-CO");

let totalinvitado= total / numeroinv;
document.getElementById("totalinvitado").value= totalinvitado.toLocaleString("es-CO");
}

  // Aquí van los calculos
function calcularPresupuesto() {
  let  cost;
    costcampos = (document.querySelector('form')).querySelectorAll('input');
    costfilas = document.querySelectorAll('table tr');

    costinvitadosTexto = campos[0].value.trim;
    costinvitados = Number(invitadosTexto);



  const nombres = [
    'Costo de comida por invitado',
    'Costo de bebida por invitado',
    'Costo de decoración',
    'Costo de música/animación',
    'Porcentaje de propina'
    ];


}

 if (filas.length !== resultados.length) {
    alert("La tabla debe tener ocho filas de resultados.");
    return;
  }

  // Recorre las filas y escribe cada resultado en su segunda celda.
  for (let i = 0; i < filas.length; i++) {
    const celdaValor = filas[i].children[1];
    celdaValor.textContent = "$ " + resultados[i].toLocaleString("es-CO");
  }
