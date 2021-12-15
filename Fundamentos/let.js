/*
    Let tem controle de escopo de bloco
*/

var numero = 1
{
    let numero = 2
    console.log('Numero dentro: ' + numero)
}
console.log('Numero fora: ' + numero)
