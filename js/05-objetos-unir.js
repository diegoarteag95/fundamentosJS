//**Objetos - Union*/
console.info("Objetos - Union");

const producto = {
  nombre: "tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "diego",
  premium: true,
};

//? unir do objetos o mas
const nuevoObjeto = { ...producto, ...cliente };
console.table(nuevoObjeto);

//?cuando se corta alguna variable repetida
const nuevoObjeto1 = {
  producto: { ...producto },
  cliente: { ...cliente },
};
console.table(nuevoObjeto1);
