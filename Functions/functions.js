// Função de forma literal
function func1(PARAMETRO){'CODE'}

// Armazenar em uma variavel
const func2 = function (PARAMETRO){'CODE'}

// Armazenar em um array
const array1 = [function (a, b){ return a + b }]
console.log(array1[0](1, 2))

// Armazenar em um atributo de object
const pessoa = {
    nome: 'Jailton',
    idade: function(anoNascimento, anoAtual){ return anoAtual - anoNascimento }
}
console.log(pessoa.idade(1997, 2021))

// Passando como parametro 
function run(func){
    func()
}
run( function () {console.log('Executando..')} )

// Retornando uma function
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)
/*  O exemplo abaixo é a mesma chamado que a linha 31
->    const somado = soma(1, 2)
->       somado(3)
*/