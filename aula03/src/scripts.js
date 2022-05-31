function mostraHora() {
    console.log('Dentro aqui');
    paragrafo = document.getElementById('demo');
    paragrafo.innerHTML = document.lastModified;    
}


function carrega_dados() {
    let dados = [
        { "id": 1,  "nome": "John",     "sobrenome": "Doe" },
        { "id": 2,  "nome": "Jane",     "sobrenome": "Doe" },
        { "id": 3,  "nome": "Bill",     "sobrenome": "Doe" }, 
        { "id": 4,  "nome": "Abraham",  "sobrenome": "Lincoln" },
        { "id": 5,  "nome": "Bill",     "sobrenome": "Gates" }, 
        { "id": 6,  "nome": "Steve",    "sobrenome": "Jobs" },
        { "id": 7,  "nome": "Bill",     "sobrenome": "Clinton" },
        { "id": 8,  "nome": "Joe",      "sobrenome": "Biden" },
        { "id": 9,  "nome": "Kamala",   "sobrenome": "Harris" },
        { "id": 10, "nome": "Queen",    "sobrenome": "Elizabeth" },
        { "id": 11, "nome": "Bob",      "sobrenome": "Doe" }
    ];
    var dados_html = document.getElementById('dados');    
    dados.forEach(element => dados_html.insertAdjacentHTML('beforebegin', `<tr><td>${element.nome}</td><td>${element.sobrenome}</td></tr>`));    
}
