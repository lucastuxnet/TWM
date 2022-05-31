const fetch = require('node-fetch');

async function showChuckNorisPhrase(id){

    // read
    let apiResponse = await fetch("https://api.chucknorris.io/jokes/random");
    let phraseResponse = await apiResponse.json();
    return phraseResponse;
}