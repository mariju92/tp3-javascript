// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let cara1 = cara2 = cara3 = cara4 = cara5 = cara6 = 0;
        let totaltiradas = 0;
          
        function tiradaDado(){
            let dado = parseInt(6*Math.random()+1);
            return dado;
        }
        
        for(i=1;i<=50;i++){
            tirada = tiradaDado();
            switch(tirada){
                case 1:
                    cara1++;
                    break;
                case 2:
                    cara2++;
                    break;
                case 3:
                    cara3++;
                    break;
                case 4:
                    cara4++;
                    break;
                case 5:
                    cara5++;
                    break;
                case 6:
                    cara6++;
                    break;
            }
        }
        
        totaltiradas = cara1+cara2+cara3+cara4+cara5+cara6;
        
        document.write("El 1 ha salido " +  cara1 + " veces<br>");
        document.write("El 2 ha salido " +  cara2 + " veces<br>");
        document.write("El 3 ha salido " +  cara3 + " veces<br>");
        document.write("El 4 ha salido " +  cara4 + " veces<br>");
        document.write("El 5 ha salido " +  cara5 + " veces<br>");
        document.write("El 6 ha salido " +  cara6 + " veces<br>");
        document.write("<br>")
        document.write("Total de lanzamientos del dado: " + totaltiradas);