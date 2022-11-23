//**Selectores*/
console.info("Selectores");

//? querySelector retorna un elemento
const heading = document.querySelector("h2");
console.log(heading);

//? querySelectorAll retorna todos
const enlaces = document.querySelectorAll("a");
console.log(enlaces);

//? modificar un elemento
const cambiarHeading = document.querySelector(".heading");
cambiarHeading.textContent = "Cambiando el titulo Desde JS...";
