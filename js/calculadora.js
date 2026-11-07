function sumar() {

    //let = declarar una varioable
    //parseInt = indica que es una variable numerica entera
    //document.indica que lo busca en el HTML
    //getElementById = indica que lo busca por el id en las etiquetas
    //("num1") = indica el id de la etiqueta html
    //value = indica que lo busca en el valor de la etiqueta  HTML


    let varn1= parseInt(cocumet.getElementById("num1").value);
    let varn2= parseInt(document.getElementById("num2").value);

  
    document.getElementById("resultado1").value =  varn1 + varn2;
}

function restar() {
    let varn1= parseInt(document.getElementById("num1").value);
    let varn2= parseInt(document.getElementById("num2").value);

    document.getElementById("resultado1").value = varn1-varn2;
}
function multi() {
    let varn1= parseInt(document.getElementById("num1").value);
    let varn2= parseInt(document.getElementById("num2").value);

    document.getElementById("resultado1").value = varn1 * varn2;
}

function divi() {
    let varn1= parseInt(document.getElementById("num1").value);
    let varn2= parseInt(document.getElementById("num2").value);

     document.getElementById("resultado1").value = varn1/varn2;


    if (varn2 == 0){
        alert("No se puede dividir entre 0");
        return; //finaliza el codigo para no mostrar el resultado
    

}
}