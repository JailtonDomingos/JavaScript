function Relogio() {
    this.hora = 0
    this.minuto = 0
    this.segundo = 0

    const self = this
    setInterval(function () {
        this.segundo++
        
        if (this.segundo == 60) { // Setar valores menores para ver o funcionamento de forma mais rapida
            this.segundo = 0
            this.minuto++
            if (this.minuto == 60) {// Setar valores menores para ver o funcionamento de forma mais rapida
                this.minuto = 0
                this.hora++
                if (this.hora == 24) {// Setar valores menores para ver o funcionamento de forma mais rapida
                    this.hora = 0
                }
            }
        }

        console.log(`${this.hora} : ${this.minuto} : ${this.segundo}`)
    }.bind(this), 1000) // Função controladora para atualizar o relógio a cada segundo e .bind para referenciar o this do objeto

}

new Relogio // Instanciando um objeto relógio 
