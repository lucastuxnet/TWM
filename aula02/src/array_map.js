const valores = [1,2,3,4,5];

var resultado = valores.map(function (x){
    return x * 3;
})

const mostraElementos = (x, pos) => `O valor ${x} esta na posicao ${pos}`
const dobro = (x) => x*2;

console.log(resultado);
resultado = (valores.map(dobro));
console.log(resultado);
console.log(valores.map(mostraElementos));