//**Objetos - Manipulacion*/
console.info("Objetos - Manipulacion");

const producto = {
  nombre: "tablet",
  precio: 300,
  disponible: true,
};

console.info("Reescribir");
//? Reescribir un valor
producto.nombre = "monitor";
console.table(producto);

console.info("Nuevo");
//? Nuevo
producto.imagen = "imagen del producto";
console.table(producto);

console.info("Eliminar");
//? Eliminar
delete producto.imagen;
console.table(producto);

//? Bloquear el objeto para que no se puedan cambiar sus valores
Object.freeze(producto);

//? Permite modificar valores existentes pero no agregar nuevos o eliminarlos
Object.seal(producto);
