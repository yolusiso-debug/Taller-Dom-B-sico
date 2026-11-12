
    
function leerNumero(id) {
  const valor = document.getElementById(id).value;
  return valor.trim() === "" ? Number.NaN : Number(valor);
}

function calcularPresupuesto() {
  const numeroInvitados = leerNumero("numero-inv");
  const costoComida = leerNumero("cost-comida");
  const costoBebida = leerNumero("cost-bebida");
  const costoDecoracion = leerNumero("cost-decor");
  const costoMusica = leerNumero("cost-musica");
  const porcentajePropina = leerNumero("propina-porc");

  if (!Number.isInteger(numeroInvitados) || numeroInvitados <= 0) {
    alert("Por favor, ingrese un número válido de invitados superior a cero.");
    return;
  }

  if (
    Number.isNaN(costoComida) || costoComida < 0 ||
    Number.isNaN(costoBebida) || costoBebida < 0 ||
    Number.isNaN(costoDecoracion) || costoDecoracion < 0 ||
    Number.isNaN(costoMusica) || costoMusica < 0 ||
    Number.isNaN(porcentajePropina) || porcentajePropina < 0
  ) {
    alert("Por favor, ingrese valores válidos y positivos para los costos y el porcentaje de propina.");
    return;
  }

  const totalComida = numeroInvitados * costoComida;
  const totalBebida = numeroInvitados * costoBebida;
  const decoracion = costoDecoracion;
  const musica = costoMusica;
  const subtotal = totalComida + totalBebida + decoracion + musica;
  const propina = subtotal * (porcentajePropina / 100);
  const totalGeneral = subtotal + propina;
  const costoPorInvitado = totalGeneral / numeroInvitados;

  const resultados = [
    totalComida,
    totalBebida,
    decoracion,
    musica,
    subtotal,
    propina,
    totalGeneral,
    costoPorInvitado
  ];

  const filas = document.querySelectorAll("#tabla-presupuesto tbody tr");

  if (filas.length !== resultados.length) {
    alert("La tabla debe tener una fila para cada uno de los 8 resultados.");
    return;
  }

  for (let i = 0; i < resultados.length; i++) {
    const celdaValor = filas[i].children[1];
    if (celdaValor) {
      celdaValor.textContent = resultados[i].toLocaleString("es-CO");
    }
  }
}
