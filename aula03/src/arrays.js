const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
valores[4] = 11;
console.log(valores[4]);

valores[10] = 100;
valores[6] = 'Valor 6';
valores.push(1333)

/*for (var i = 0; i < 12; i++) {
    console.log(valores[i])
}
*/
valores.forEach((elemento, pos) => console.log(elemento, pos));

/*
valores.pop();

for (var i = 0; i < 12; i++) {
    console.log(valores[i])
}
*/