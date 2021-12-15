/*
    Var tem dois escopos: Global ou escopo de function
*/

{ 
    { 
        var visivel = 'Var está visivel' 
    } 
}
console.log(visivel)

function teste(){
    var local = 'teste'
}
teste()
//console.log(local) //Não é possível acessar quando está em um escopo de function


var numero = 1
{
    var numero = 2
    console.log('Numero dentro: ' + numero)
}
console.log('Numero fora: ' + numero)