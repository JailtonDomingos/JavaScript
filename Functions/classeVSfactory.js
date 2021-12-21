const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = criarPessoa('Jailton')
p1.falar()