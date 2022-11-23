//**Arrays Metodos*/
console.info("Arrays Metodos");

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.JS"];
console.table(tecnologias);

console.info("Añadir elementos");
//? Añadir elementos
//tecnologias.push("GraphQL"); //Añade al final - no usar ya que modifica el arreglo incial
//tecnologias.unshift("SASS"); //Añade al inicio - no usar ya que modifica el arreglo incial
const nuevoArreglo = [...tecnologias, "GraphQL"];
console.table(nuevoArreglo);

console.info("Eliminar elementos");
//? Eliminar elementos
//tecnologias.pop(); //elimina del final
//tecnologias.shift(); //elimina del inicio
//tecnologias.splice(2,3); //elimina posicion en especifico

const nuevoArreglo1 = tecnologias.filter(function (elemento) {
  return elemento !== "HTML"; //retorna todo menos HTML
});
console.table(nuevoArreglo1);

console.info("Reemplazar elementos");
//? Reemplazar elementos
const nuevoArreglo2 = tecnologias.map(function (elemento) {
  if (elemento === "HTML") {
    return "GraphQL";
  } else {
    return elemento;
  }
});
console.table(nuevoArreglo2);
