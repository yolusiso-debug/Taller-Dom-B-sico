function calcular() {
    let horas= parseInt(document.getElementById("horas").value);
    let valor= parseInt(document.getElementById("valor").value);

    let salario= horas * valor;
    if(horas<=0 || valor<=0){
        alert("Datos incorrectos");
        return;
    }
    document.getElementById("resultado").value= salario.toLocaleString("es-CO");

}
