const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a primeira nota: ', (nota1) => {
    rl.question('Digite a segunda nota: ', (nota2) => {

        nota1 = Number(nota1);
        nota2 = Number(nota2);

        const media = (nota1 + nota2) / 2;

        console.log(`A média final é: ${media}`);

        if (media >= 6){
            console.log('aprovado')
        }
        else if(media >= 5){
            console.log('em recuperação')
        }
        else{
            console.log('reprovado')
        }
        rl.close();
    });
});