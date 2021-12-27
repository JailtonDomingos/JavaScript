/*
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function arredondamento (notaAluno) {
    console.log(`Função de arredondamento! Nota do Aluno: ${notaAluno}`)

    if (notaAluno % 5 == 0) { // Controle para identificar se a nota já está em um multiplo, assim não necessita arredondamento
        console.log('Nota do aluno já multipla de 5')
        return notaAluno
    } else { // Caso contrário, loop de 1-3 para identificar se em três tentativas ele está multiplo, ou seja, se ele está a no máximo 3 pontos de diferençã de um multiplo.
        for (let i = 1; i < 3; i++) { 
            if (((notaAluno + i) %5) == 0) { // Identificação utilizando o loop para chegar ao próximo multiplo
                console.log(`Nota aluno: ${notaAluno} está a ${i} ponto de diferença do próximo multiplo! Arredondando nota para ${notaAluno + i}`)
                return notaAluno + i
            }

        }
        console.log('Não foi possível arredondar esta nota!')
        return notaAluno
    }
}

function aprovacao(notaAluno){
    notaAluno = arredondamento(notaAluno)

    // Regra final para montrar ao User
    if (notaAluno >= 40) {
        console.log(`Nota: ${notaAluno} - Aluno Aprovado! `)
    } else {
        console.log('Aluno Reprovado!')
    }
}

aprovacao(42)
