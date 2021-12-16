const pessoa = {
    saudacao: 'Saudações viajante!', 
    falar(){
        console.log(this.saudacao)
    }
}

// Pegando o objeto correto
pessoa.falar() 

// Aqui pega somente a função, assim perdendo a property 'saudacao' do objeto
const func = pessoa.falar
func()

// Aqui da um Binda para que pegue a função e ela aponte para a property apontada do referente objeto
const funcApontada = pessoa.falar.bind(pessoa)
funcApontada()