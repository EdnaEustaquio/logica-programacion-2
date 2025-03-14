
function calcular(){
    let celsius = parseFloat(document.getElementById("numeroIngresado").value);
if (!isNaN(celsius))
{
    let fare = (celsius* 9/5 )+ 32;
    let kelvin = celsius+ 273.15;

   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `En grados Farenheith es: ${fare},y en Kelvin ${kelvin}`;


}
else {
    alert("por favor introduce un numero");
}
  
}

