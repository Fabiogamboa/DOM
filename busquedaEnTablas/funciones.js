function funcionBuscar(){
        var termino = document.getElementById("terminoBusqueda").value.toLowerCase();
        var tabla = document.getElementById("tabla");
        var filas = tabla.getElementsByTagName("tr");
        var contador = 0;
        if(termino == ""){
            return null;
        }

        // Iterar sobre las filas de la tabla, comenzando desde la segunda fila (índice 1)
        for (var i = 1; i < filas.length; i++) {
            var celdas = filas[i].getElementsByTagName("td");
            var encontrado = false;

            // Iterar sobre las celdas de cada fila
            for (var j = 0; j < celdas.length; j++) {
                if (celdas[j].textContent.toLowerCase().includes(termino)) {
                    encontrado = true;
                    break; // Rompe el bucle xd
                }
            }

            if (encontrado) {
                contador++;
            }
        }

        // Mostrar el resultado
        document.getElementById("resultado").textContent = "Se encontraron " + contador + " coincidencias.";
    };