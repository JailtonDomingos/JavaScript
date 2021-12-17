let dobro1 = function (a){ // Function normal
    return 2 * a
}

dobro2 = (a) => { // Arrow funtionc com parenteses e com bloco para adicionar mais de uma linha
    return 2 * a
}

dobro3 = a => 2 * a // Arrow com somente 1 linha(Removido o parenteses e return abstraido)

console.log(dobro1(1))
console.log(dobro2(2))
console.log(dobro3(3))

//console.log(soma () => 9 + 5)