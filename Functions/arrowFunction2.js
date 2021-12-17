let comparaComThis = function (param) { // Desta forma o this apontará para p objecto Global. Function normal
    console.log(this === param)
}
comparaComThis(this) // False
comparaComThis(global) // True

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Aqui está setando o this como this do escopo - Ou seja, para function normal precisa dar .bind para a função não variar o this
comparaComThis(obj) //True
comparaComThis(global) // False

let comparaComThisArrow = param => console.log(this === param)// Em função arro o this não é variável
comparaComThisArrow(this) // True
comparaComThisArrow(global) // False

comparaComThisArrow = comparaComThisArrow.bind(obj) // Tentando setar o this da arrow function para o this do obj
comparaComThisArrow(obj) // False, pois a arrow function é mais forte que o .bind