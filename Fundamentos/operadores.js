//Operador Destructuring ES6 (ES2015) - {} para object / [] para array

//Destructuring OBJECT
const pessoa = {
    nome: 'Jailton',
    idade: 24,
    genero: 'M',
    endereco: {
        logradouro: 'Rua paraguai',
        numero: 350,
        bairro: 'nacoes'
    }
}

const { nome, idade } = pessoa
console.log(nome + ' / ' + idade)

const { nome: n, idade: i } = pessoa
console.log(n + ' / ' + i)

const { endereco: { logradouro, numero, bairro } } = pessoa
console.log(logradouro + ' / ' + numero + ' / ' + bairro )

//Destructuring ARRAY
const arrayExemplo = [1, 2, 3, 4, 5]
const [n1, , n3, , n5, n6 = 0] = arrayExemplo
console.log(n1, n3, n5, n6)

//Desctructuring - Neste caso o destructuring vai pegar o vßalor que sera passado para a função. Caso venha nulo ele usará como padrão os informados no colchete
function rand({ min = 0, max = 1000 }) { //Aqui será recebido o object passado, caso null usara esses valores padroes. Isso é um destructuring, 
                                        //notar que não preciso criar variaveis para colocar os valores. Assim abstrai código
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const objt = {min: 40, max: 100}
console.log(rand(objt)) //Aqui passa um object para a função