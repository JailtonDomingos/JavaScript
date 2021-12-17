dobro1 = (a) => { // Arrow funtionc com parenteses e com bloco para adicionar mais de uma linha
    return 2 * a
}

dobro2 = a => 2 * a // Arrow com somente 1 linha(Removido o parenteses e return abstraido)

console.log(dobro1(1))
console.log(dobro2(2))

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

new Pessoa