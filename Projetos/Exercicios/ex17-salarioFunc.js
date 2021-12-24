/*
 Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano - Aumento
A     - 10%
B     - 15%
C     - 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
1
*/

function calculaSalario (salarioAtual, plano) {
    console.log(`Salário atual: ${salarioAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    switch (plano) {
        case 'A':
            console.log('Salário ajustado: ' + (salarioAtual + (salarioAtual * 0.10)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            break;
        case 'B':
            console.log('Salário ajustado: ' + (salarioAtual + (salarioAtual * 0.15)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            break;
        case 'C':
            console.log('Salário ajustado: ' + (salarioAtual + (salarioAtual * 0.20)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            break;
        default:
            console.log('Plano inválido!')
            break;
    }
}

calculaSalario(100, 'A')
calculaSalario(100, 'B')
calculaSalario(100, 'C')
calculaSalario(2000, 'D')