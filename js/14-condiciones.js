//**Condicionales*/
console.info("Condicionales");

//? operadores
// Mayor que: >
// Menor que: <
// Mayor o igual: >=
// Menor o igual: <=
// Igual: ==
// Igual estricto: ===
//Diferente: !==
//Diferente estricto: !===

//OR: ||
//AND: &&
//? operadores

const disponible = 4000;
const retirar = 2000;

if (disponible > retirar) {
  console.log("retirando...");
} else {
  console.log("saldo insuficiente");
}

//? Ternarios
const autenticado = true;
console.log(autenticado ? "si es true" : "si es false");
