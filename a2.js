
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(numero) {
  numero = Number(numero);

  let antecessor = numero - 1;
  let sucessor = numero + 1;

  console.log("Número digitado:", numero);
  console.log("Antecessor:", antecessor);
  console.log("Sucessor:", sucessor);

  rl.close();
});