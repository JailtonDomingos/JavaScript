/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

// O ajuste é feito adicionando o valor do juros somado com o valor anterior
function jurosComposto (capitalInicial, taxaJuros, tempoAplicacao) {jurosComposto
    let montante = capitalInicial
    for (let i = 1; i <= tempoAplicacao; i++) {
        montante += montante * taxaJuros  
    }    
    return montante
}

// O ajuste é feito identificando o valor e adicionando a variável 
function jurosSimples (capitalInicial, taxaJuros, tempoAplicacao) {
    let montante = capitalInicial
    for (let i = 1; i <= tempoAplicacao; i++) {
        montante += capitalInicial * taxaJuros  
    }    
    return montante
}


console.log(jurosSimples(100, 0.05, 5))
console.log(jurosComposto(100, 0.05, 5))
