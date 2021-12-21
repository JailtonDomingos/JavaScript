// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manupular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    return () => x
}

const minhaFunction = fora()
console.log(minhaFunction())