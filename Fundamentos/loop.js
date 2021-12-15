//loop VAR
for(var i = 0; i < 5; i++){
    console.log(i)
}
console.log('I: ' + i)

//loop LET
for(let j = 0; j < 5; j++){
    console.log(j)
}
//console.log('j: ' + j)

//VAR - Aqui ocorre um problema com o VAR pois ele não tem escopo de bloco, assim não respeita pegando o número em memória
const funcs = []

for (var i = 0; i < 5; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
console.log('Retorno array')
funcs[2]()
funcs[4]()

//LET - Aqui o i pega o valor respeitado no momento da execução do bloco
const funcs2 = []

for (let i = 0; i < 5; i++) {
    funcs2.push(function() {
        console.log(i)
    })
}
console.log('Retorno array')
funcs2[2]()
funcs2[4]()