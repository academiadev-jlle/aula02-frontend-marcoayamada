document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    buscaTodosPokemons();
    getPokeId('https://pokeapi.co/api/v2/pokemon/12/');
}

function buscaTodosPokemons() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', apiURL, true);
    xmlHttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            const result = JSON.parse(this.responseText);
            // console.log(result)
            result.results.forEach(poke => addPoke(poke));
        }
    }
    xmlHttp.send();  
}

function addPoke(poke){
    const tr = document.createElement('tr');
        const nome = document.createElement('td');
        const url = document.createElement('td');
            const a = document.createElement('a');
                
    nome.textContent = poke.name;
    a.textContent = poke.url;

    a.setAttribute('href', `info.html?id=${getPokeId(poke.url)}`)

    tr.appendChild(nome);
    tr.appendChild(url);
        url.appendChild(a);

    document.querySelector('.tabela-pokes tbody').appendChild(tr);
}

function getPokeId(url){
    const regex = /\/[0-9]+/gm;
    return regex.exec(url)[0].replace('/','');
}
