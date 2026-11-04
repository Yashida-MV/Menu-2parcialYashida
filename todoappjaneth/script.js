
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Función para añadir una nueva tarea
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("¡Debes escribir algo primero!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Crear el botón de cierre
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value = "";
        saveData();
    }
}

// Gestionar los clics dentro de la lista
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Corrección aquí
        saveData();
    }
});

// Guardar las tareas
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Mostrar las tareas guardadas
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Inicializar
showTask();

    

