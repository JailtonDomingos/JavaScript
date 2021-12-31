/* 
Task

Complete the function in the editor. It has one parameter: an array, 'a', of objects. 
Each object in the array has two integer properties denoted by 'x' and 'y'. The function must return a count of all such objects  in array  that satisfy 'o.x == o.y'.

Input Format

The first line contains an integer denoting .
Each of the  subsequent lines contains two space-separated integers describing the values of  and .
*/

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

const arrayObjects = [
    object1 = {
        x: 1,
        y: 1
    },
    object2 = {
        x: 2,
        y: 3
    },
    object3 = {
        x: 3,
        y: 3
    },
    object4 = {
        x: 3,
        y: 4
    },
    object5 = {
        x: 4,
        y: 5
    },
]

function getCount(arrayObjects) { // Função responsavel por verificar quantas vezes números repitidos aparecem dentro do array de objects passados
    let variavelControle = 0
    for (let i = 0; i < arrayObjects.length; i++) { // Contador array de objects
        if (arrayObjects[i].y === arrayObjects[i].x) {
            variavelControle++ // Variavel controladora para a contagem de vezes que ocorre a situação
        }
        
    }

    return variavelControle
}

console.log(getCount(arrayObjects))