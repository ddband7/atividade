

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let soma = 0;

function pedirNumero() {
  rl.question("Digite um número (0 para sair): ", (numero) => {
    numero = Number(numero);

    if (numero === 0) {
      console.log(`Soma total: ${soma}`);
      rl.close();
      return;
    }

    soma += numero;

    pedirNumero();
  });
}

pedirNumero();