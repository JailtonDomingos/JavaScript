function criarPessoa (nome, sobrenome) {
    this.falar = function () {
        console.log(`Meu nome é ${nome} ${sobrenome}`)
    }
}
const p1 = new criarPessoa('Jailton', 'Domingos')
p1.falar()