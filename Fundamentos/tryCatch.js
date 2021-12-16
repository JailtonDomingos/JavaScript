function tratarErro(e) {
    throw {
        name: e.name,
        msg: e.message,
        date: new Date
    }
}

function imprimirUpper(obj) {
    try {
        console.log(`${obj.name.toUpperCase()} !!!`)
    } catch (e) {
        tratarErro(e) //Direcionar erro para e-mail
    } finally {
        console.log(`Função finalizada!`)
    }

    
}

const obj = {nome: 'Jailton'}
imprimirUpper(obj)