/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false
*/

// Simples arrow function sendo armazenada em uma variable para reutilização
let verifica = param => param % 3 == 0 ? true : false 

console.log(verifica(3))
