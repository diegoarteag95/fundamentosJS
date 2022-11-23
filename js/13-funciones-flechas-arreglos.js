//**Funciones y arreglos*/
console.info("Funciones y arreglos");

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.JS"];
const numeros = [10, 20, 30];

console.info("map");
//? MAP
const nuevoArray = tecnologias.map((elemento) => {
  if (elemento === "HTML") {
    return "MongoDB";
  } else {
    return elemento;
  }
});
console.table(nuevoArray);

console.info("filter");
//? FILTER
const nuevoArrayFilter = tecnologias.filter((elemento) => elemento !== "CSS");
console.table(nuevoArrayFilter);

console.info("include");
//? INCLUDE
const existe = tecnologias.includes("React");
console.log(existe);

console.info("some");
//? SOME
const resultadoSome = numeros.some((numero) => numero > 15);
console.log(resultadoSome);

console.info("find");
//? FIND
const resultadoFind = numeros.find((numero) => numero > 15);
console.log(resultadoFind);

console.info("every");
//? EVERY - si todos cumplen condicion
const resultadoEvery = numeros.every((numero) => numero > 5);
console.log(resultadoEvery);

console.info("reduce");
//? REDUCE
const resultadoReduce = numeros.reduce((total, numero) => {
  return numero + total;
});
console.log(resultadoReduce);

console.info("filter nueva array en base a condicion");
//? FILTER nueva array en base a condicion
const newFilter = tecnologias.filter((elemento) => elemento !== "CSS");
console.log(newFilter);

console.info("forEach");
//? forEach
tecnologias.forEach((elemento, index) => console.log(elemento, index));
