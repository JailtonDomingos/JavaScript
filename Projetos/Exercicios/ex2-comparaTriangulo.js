/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function comparaTriangulo (x, y, z) {
    switch (true) {
        case (x == y && y == z):
            console.log('É um triângulo Equilátero!')
            break;
    
        case (x != y && y != z && x!= z):
            console.log('É um triângulo Escaleno!')
            break;
        
        default:
            console.log('É um triângulo Isósceles!')
            break;
    }
}

comparaTriangulo(3, 4, 5)