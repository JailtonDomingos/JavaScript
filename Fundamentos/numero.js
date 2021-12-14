const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 'Jailton'

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.232
const avaliacao2 = 4.554

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2) 

console.log(media.toFixed(2))
console.log(media.toString()) // Em binário
console.log(typeof(media))