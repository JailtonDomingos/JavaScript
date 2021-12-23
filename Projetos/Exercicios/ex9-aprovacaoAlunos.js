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

    if (notaAluno % 5 == 0) {
        console.log('Nota do aluno já multipla de 5')
        return notaAluno
    } else { 
        for (let i = 1; i < 3; i++) {
            if (((notaAluno + i) %5) == 0) {
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

    if (notaAluno >= 40) {
        console.log(`Nota: ${notaAluno} - Aluno Aprovado! `)
    } else {
        console.log('Aluno Reprovado!')
    }
}

aprovacao(42)