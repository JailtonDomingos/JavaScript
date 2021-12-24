/*
O cardápio de uma lanchonete é o seguinte:
Código    Descrição do Produto      Preço
100     - Cachorro Quente           - R$ 3,00
200     - Hambúrguer Simples        - R$ 4,00
300     - Cheeseburguer             - R$ 5,50
400     - Bauru                     - R$ 7,50
500     - Refrigerante              - R$ 3,50
600     - Suco                      - R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const formataValor = valor => { return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}

function pedido (codigoItem, qtd) {
    switch (codigoItem) {
        case 100:
            console.log(`Valor a ser pago: ${formataValor(qtd * 3)}`)
            break;

        case 200:
            console.log(`Valor a ser pago: ${formataValor(qtd * 4)}`)
            break;

        case 300:
            console.log(`Valor a ser pago: ${formataValor(qtd * 5.50)}`)
            break;

        case 400:
            console.log(`Valor a ser pago: ${formataValor(qtd * 7.50)}`)
            break;

        case 500:
            console.log(`Valor a ser pago: ${formataValor(qtd * 3.50)}`)
            break;

        case 600:
            console.log(`Valor a ser pago: ${formataValor(qtd * 2.80)}`)
            break;
    
        default:
            console.log('Produto inexistente!')
            break;
    }
}

pedido(100, 2)
pedido(200, 2)
pedido(300, 2)
pedido(400, 2)
pedido(500, 2)
pedido(600, 2)
pedido(700, 2)