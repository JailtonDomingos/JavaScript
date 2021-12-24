/*
 Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(x, y, operacao) {
    switch (operacao) {
        case 'soma':
            console.log(x + y)
            break;
        case 'subtracao':
            console.log(x - y)
            break;
        case 'divisao':
            console.log(x / y)
            break;
        case 'multiplicacao':
            console.log(x * y)
            break;
    
        default:
            console.log('Houve um erro ao identificar a operação, por favor digite novamente!')
            break;
    }
}

calculadora(2, 2, 'soma')
calculadora(5, 3, 'subtracao')
calculadora(3, 3, 'divisao')
calculadora(3, 3, 'multiplicacao')