//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function info(texto) {
    let resultado = "La cadena de texto:" + texto + " ";
  
    if (texto == texto.toUpperCase()) {
      resultado += "está formada sólo por mayúsculas";
    } else if (texto == texto.toLowerCase()) {
      resultado += "está formada sólo por minúsculas";
    } else {
      resultado += "está formada por mayúsculas y minúsculas.";
    }
  
    return resultado;
  }
  
  document.write(info( "Son nuestras elecciones, las que muestran lo que somos, mas que nuestras habilidades."));
  document.write(info( "LUCHAR HASTA EL ULTIMO ALIENTO."));