const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
  ];

  const carrinho2 = [
      {nome: 'Album', preco: 12.55, fragil: true},
      {nome: 'Album 2', preco: 33.55, fragil: false},
      {nome: 'Album 4', preco: 47.55, fragil: true}
  ]
const fragil = (produto) => !produto.fragil;
const paraJSON = (produto) => JSON.parse(produto)
const mostraPreco = (produto) => produto.preco;
const verificaPrecoProduto = (produto) => produto.preco < 40; 


  var resultado = carrinho.map(paraJSON)
  //console.log(resultado);
  //console.log(resultado.map(mostraPreco));
  //console.log(carrinho2.map(mostraPreco));

  console.log(carrinho2.filter(verificaPrecoProduto));
  console.log(carrinho2.filter(fragil));

  console.log(carrinho.sort())