// 1. Selección del elemento objetivo en el DOM por su ID
const button = document.getElementById("myButton");
// 2. Definición de la función de respuesta (callback)
function doSomething() {
alert("Hello World");
}
// 3. Asignación del escuchador para el evento 'click'
button.addEventListener("click", doSomething);


const box = document.getElementById("boxElement");
// Evento activado cuando el cursor entra en el elemento
box.addEventListener("mouseover", function() {
console.log("El cursor está sobre el elemento");
});
// Evento activado cuando el cursor abandona el elemento
box.addEventListener("mouseout", function() {
console.log("El cursor ha salido del elemento");
});


// Registro global en el objeto window
window.addEventListener("keydown", (e) => {
console.log("Objeto de evento completo:", e);
console.log("Código de tecla pulsada:", e.code);
// Condicional para verificar una tecla específica
if (e.code === "KeyF") {
console.log("¡Se ha presionado la tecla F!");
}
});


const inputField = document.getElementById("usernameInput");
const heading = document.getElementById("greetingHeading");
// Escuchador reactivo en el campo de entrada
inputField.addEventListener("input", (e) => {
// e.target hace referencia al elemento inputField
// e.target.value extrae el texto en tiempo real
heading.innerText = e.target.value;
});


const singleButton = document.getElementById("singleButton");
// Uso del tercer parámetro de addEventListener: objeto de opciones
singleButton.addEventListener("click", () => {
console.log("Este mensaje y acción solo ocurrirán una sola vez.");
}, { once: true });




