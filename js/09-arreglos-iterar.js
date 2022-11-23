//**Arrays Iterar*/
console.info("Arrays Iterar");

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.JS"];

//? forEach
tecnologias.forEach(function (elemento) {
  console.log(elemento);
});

//? map -permite crear  un nuevo arreglo
const arraymap = tecnologias.map(function (elemento) {
  return elemento;
});
console.log(arraymap);
