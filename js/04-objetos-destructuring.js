//**Objetos - Destructuring con 2 o mas objetos*/
console.info("Objetos - Destructuring con 2 o mas objetos");

const producto = {
  nombre: "tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "diego",
  premium: true,
};

const { nombre, precio, disponible } = producto;
const { nombre: nombreCliente, premium } = cliente; //no se puede generar una nueva variable con nombre
console.log(nombre, precio, disponible);
console.log(nombreCliente, premium);
