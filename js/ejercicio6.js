/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)*/

let lado1 = lado2 = 0;
let perimetro = 0;
lado1 = preguntarDato();
lado2 = preguntarDato();
escribePerimetro(lado1,lado2);

function preguntarDato(){
    return parseFloat(window.prompt("escribe valor de lado del rectángulo"));
}    
function escribePerimetro(a,b){
    let perimetro = 2*(a+b);
    document.write("el perimetro de un rectángulo de lados " + a + " y " + b +" es "+perimetro);
}