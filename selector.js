// 1 Seleccionar Elementos DOM
let inputText = document.getElementById("inputText");
let botonEntrada = document.getElementById("buttonInput");
let listaTareas = document.getElementById("contenedor-tareas")


// 2.  vincular elementos(event targets)  a eventos y funciones(listeners)
inputText.addEventListener("click", agregarTarea);

//3. Funciones para los elementos
function agregarTarea() {
    inputText
    let tarea = inputTarea.value;

    if (tarea.trim() !== "") {
        listaTareas
        let nuevaTarea = document.createElement("tarea");
        nuevaTarea.textContent = tarea;
        listaTareas.appendChild(nuevaTarea);

        inputTarea.value = "";
    }
}

console.log("hola")
console.log("it's a test")


//Apend, pasarle varios elemento vs apendchail 