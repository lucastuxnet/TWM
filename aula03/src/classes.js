class teste {
    constructor (valor01, valor02) {
        this.valor01 = valor01;
        this.valor02 = valor02;
    }
    mostraValores(){
        console.log(`Valor 01 ${this.valor01}`);
        console.log(`Valor 02 ${this.valor02}`);
    }
}

let a = new teste(10,30);
a.mostraValores();

console.log(typeof teste);