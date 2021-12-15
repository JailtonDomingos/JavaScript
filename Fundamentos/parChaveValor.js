const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}

//Objetos são grupos anunhados de pares nome/valor
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

console.log(saudacao)
console.log(exec.saudacao)
console.log(clientes.nome)
console.log(clientes.endereco.logradouro)
console.log(typeof clientes.endereco)