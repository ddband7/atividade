


const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Digite o primeiro número: ', (num1) => {


  rl.question('Digite o segundo número: ', (num2) => {

    
    const soma = Number(num1) + Number(num2);

    
    console.log(`A soma é: ${soma}`);

    
    rl.close();
  });
});