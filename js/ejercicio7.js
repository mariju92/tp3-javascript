//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero;
numero=prompt('Ingrese un numero(1-10)','');
numero=parseInt(numero);
 
 
var x=0;
 
for (x = 1; x <= 10; x++)
{
	tabel=numero*x;
	document.write("<tr><td>");
	document.write(numero+"x"+x+"="+ tabel + "<br>");
	document.write("</td></tr>");
}
 
document.write("</table>");