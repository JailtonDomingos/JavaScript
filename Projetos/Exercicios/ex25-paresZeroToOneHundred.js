/*
Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function encontraPares () {
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

encontraPares()