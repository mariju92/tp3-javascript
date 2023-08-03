//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
document.write('<ul>')

for(posicionmes=0; posicionmes < meses.length; posicionmes++){
document.write(`<li>${meses[posicionmes]}</li>`)
}


document.write('</ul>')