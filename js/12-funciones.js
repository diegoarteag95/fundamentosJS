//**Funciones*/
console.info("Funciones");

//? Declaraciones
function sumar() {
  console.log(2 + 2);
}
sumar(); //llamar funcion

//? Funciones y parametros - funcion declaration
function sumarNumeros(num1, num2) {
  //se puede dejar un parametro definido ej: num1=0
  return num1 + num2;
}
console.log(sumarNumeros(5, 7));

//? funcion Expression
//se debe declarar antes de llamarla al contrario que en declaration
const sumarNumeros2 = function () {};

//? funcion flecha
const sumarNumeros3 = (n1, n2) => n1 + n2;
