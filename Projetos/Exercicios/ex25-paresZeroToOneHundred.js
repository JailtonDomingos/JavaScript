/*
Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function encontraPares () {
    for (let i = 0; i < 100; i++) { // Percorrendo até 100
        if (i % 2 === 0) { // Operação verificando o resto
            console.log(i)
        }
    }
}

encontraPares()
