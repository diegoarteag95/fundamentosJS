//**Definir un objeto*/
console.info("OBJETOS");

const producto = {
  nombre: "tablet",
  precio: 300,
  disponible: true,
};

console.table(producto);

//? acceder a propiedades del objeto
console.log(
  producto.nombre + " " + producto.precio + " " + producto.disponible
);

//? Destructuring - sacar de una estructura
const { nombre, precio, disponible } = producto;
console.log(nombre + " " + precio + " " + disponible);

//? Objet Literal Enhacement
const autenticado = true;
const usuario = "diego";

const nuevoObjeto = {
  autenticado,
  usuario,
};
console.table(nuevoObjeto);
