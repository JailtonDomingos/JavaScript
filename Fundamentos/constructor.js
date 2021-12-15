function pessoa(nome, idade, genero, logradouro, numero, bairro){
    this.nome = nome
    this.idade = idade
    this.genero = genero
    this.endereco = {logradouro, numero, bairro}
    this.endereco.logradouro = logradouro
    this.endereco.numero = numero
    this.endereco.bairro = bairro
}

const pessoa1 = new pessoa('caroline', 24, 'M', 'Rua paraguai', 350, 'Nacoes')
console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1.genero)
console.log(pessoa1.endereco.logradouro)
console.log(pessoa1.endereco.numero)
console.log(pessoa1.endereco.bairro)

/* 
    Estrutura criada diretamente como constructor

    const clientes = {
        nome: 'Jailton',
        idade: 24,
        genero: 'M',
        endereco: {
            logradouro: 'Rua paraguai',
            numero: 350,
            bairro: 'nacoes'
        }
    }

*/