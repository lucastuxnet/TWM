<h1 align="center">
    <img alt="KroAula" src=".github/logo.svg" height="100px" />    
</h1>

<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#exec-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :bookmark: Sobre

Aplicação Web desenvolvida para a disciplina de TWM-UFU-2021-2. A ideia e uma plataforma para professores marcarem aulas/horarios/preço e os alunos buscarem aulas nos horarios que lhe cabem
melhor, também sendo relativo a opção de preço. Após a escolha da aula o aluno e direcionado para um contato via Whattsapp.


## :exec: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/lucastuxnet/TWM/KroAula.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate

  # Inicie a API
  $ yarn start # ou npm start

  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start
```


