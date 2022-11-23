//**Scope Variables*/
console.info("Scope Variables");

//no se pueden tener dos variables nombradas igual

const precio = 300;

function unaFuncion() {
  const precio = 600;
  console.log(precio);
}
console.log(precio);
unaFuncion();
