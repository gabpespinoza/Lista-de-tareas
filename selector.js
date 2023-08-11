// 1 Seleccionar Elementos DOM
let inputText = document.getElementById("inputText");
let botonEntrada = document.getElementById("buttonInput");
let listaDeTareas = document.getElementById("lista-tareas");
let interruptoresTareas = document.getElementsByClassName("tarea-switch")


// 2.  vincular elementos(event targets)  a eventos y funciones(listeners)
botonEntrada.addEventListener("click", agregarTarea);


//3. Funciones para los elementos
function agregarTarea(event) {
    let tarea = inputText.value.trim();

    if (tarea.trim() !== "") {
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tarea;
        listaDeTareas.appendChild(nuevaTarea);
        inputText.value = "";
    }
}


console.log("hola")
