const escola = "Jailton"

console.log(escola.charAt(5)) //Pegar o Char
console.log(escola.charAt(10)) //Mostra null
console.log(escola.charCodeAt(5)) //Busca na tabela ASCII
console.log(escola.indexOf('o'))
console.log(escola.substring(1))
console.log(escola.substring(1, 3))

console.log('Escola ' .concat(escola).concat("!"))
console.log(escola.replace("J", 'G'))
console.log(escola)

console.log('Ana, Maria, Joao'.split(','))