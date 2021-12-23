/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/


function identificaDia (param) {
    if (param > 0 && param < 8) {
        switch (param) {
            case 1:
                console.log('Hoje é domingo - Final de semana!')
                break;
            case 2:
                console.log('Hoje é segunda - Dia de semana!')
                break;
            case 3:
                console.log('Hoje é terça - Dia de semana!')
                break;
            case 4:
                console.log('Hoje é quarta - Dia de semana!')
                break;
            case 5:
                console.log('Hoje é quinta - Dia de semana!')
                break;
            case 6:
                console.log('Hoje é sexta - Dia de semana!')
                break;
            case 7:
                console.log('Hoje é sabado - Final de semana!')
                break;
        }
    }  else {
        console.log('Dia inválido!')   
    }
}

identificaDia(6)