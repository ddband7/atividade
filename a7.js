
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite o segundo número: ", (num2) => {
    rl.question("Digite a operação (+, -, *, /): ", (operacao) => {
      num1 = Number(num1);
      num2 = Number(num2);

      let resultado;

      switch (operacao) {
        case "+":
          resultado = num1 + num2;
          break;

        case "-":
          resultado = num1 - num2;
          break;

        case "*":
          resultado = num1 * num2;
          break;

        case "/":
          if (num2 === 0) {
            console.log("Não é possível dividir por zero.");
            rl.close();
            return;
          }

          resultado = num1 / num2;
          break;

        default:
          console.log("Operação inválida.");
          rl.close();
          return;
      }

      console.log(`Resultado: ${resultado}`);

      rl.close();
    });
  });
});