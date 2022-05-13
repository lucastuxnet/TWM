const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
];

const carrinho2 = [
    {nome : 'Album', preco: 12.55},
    {nome : 'Album 2', preco: 33.55},
    {nome : 'Album 4', preco: 44.55}
]

const verificaPrecoProduto = (produto) => produto.preco < 40;

const paraJSON = (produto) => JSON.parse(produto)
const mostraPreco = (produto) => produto.preco;

var resultado = carrinho.map(paraJSON);
console.log(resultado);
console.log(resultado.map(mostraPreco));
console.log(carrinho2.map(mostraPreco));
console.log(carrinho.sort());
console.log(carrinho2.filter(verificaPrecoProduto));