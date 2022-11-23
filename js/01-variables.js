//**Variables js leguaje dinamico*/
console.info("VARIABLES");

//? const
// const: no se puede reasignar - se tiene que inicializar con valor
const nombre = "Valor de la variable";

//? let
// let: se puede reasignar - puedein iniciar sin valor
let edad = 27;

//? var
//var: forma antigua de declarar variables
let trabajo = true;

console.log(`Nombre: ${nombre}, Edad: ${edad}, Tiene trabajo: ${trabajo}`);

//**Tipos de datos*/
console.info("TIPOS DE DATOS");
//? undefined
let tipoUndefined;
console.log("Tipo undefined: " + tipoUndefined);

//? boolean - true - false
const verdadero = true;
console.log("Tipo boolean: " + verdadero);

//? Number - (decimales - negativos)
const numero = 10;
console.log("Tipo numero: " + numero + " " + typeof numero);

//? Strings
const texto = "string o cadena de texto";
console.log("Tipo string: " + texto + " " + typeof texto);

//? BigInt
const numeroGrande = BigInt(213124589832321987328831831273981741283791237978);
console.log("Tipo BigInt: " + numeroGrande + " " + typeof numeroGrande);

//? Null
const descuento = null;
console.log("Tipo Null: " + descuento + " " + typeof descuento);
