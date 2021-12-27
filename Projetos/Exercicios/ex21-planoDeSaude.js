/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos
de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130
*/

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

function adicional (param) {
    switch (true) {
        case inRange < 10:
            return 80
            //break;
        case inRange(param, 10, 30):
            return 50
            //break;
        case inRange(param, 30, 60):
            return 95
            //break;
        case inRange > 60:
            return 130
            //break;
        default:
            break;
    }
}

let idade = 31

console.log(`Valor a ser pago é de: ${100 + adicional(idade)}`)