
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (numero) => {
  numero = Number(numero);

  console.log(`\nTabuada do ${numero}:\n`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  rl.close();
});