document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envio del formulario 

    const tareaInput = document.getElementById("nuevaTarea");
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto !== "") {
        agregarTarea(tareaTexto);
        tareaInput.value = ""; // Limpiar el campo
    }
});

function agregarTarea(tareaTexto) {

    const listaTareas = document.getElementById("listaTareas");
    // Se configura la nueva tarea
    const li = document.createElement("li");
    li.textContent = tareaTexto;

    // Cuando el usuario de click sobre la tarea, esta se marcara en verde para decir que esta completada
    // Se le configura la clase como completada si no está, y si está, se elimina :v
    li.addEventListener("click", function() {
        li.classList.toggle("completada");
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "botonEliminar";
    botonEliminar.addEventListener("click", function() {
        listaTareas.removeChild(li);
    });

    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
}