const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {

        num1 = Number(num1);
        num2 = Number(num2);

        if (num1 > num2) {
            console.log(`O maior número é ${num1}`);
        } else if (num2 > num1) {
            console.log(`O maior número é ${num2}`);
        } else {
            console.log('Os dois números são iguais.');
        }

        rl.close();
    });
});