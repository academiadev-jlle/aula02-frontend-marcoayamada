document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    //console.log(document.URL);
    
    let url = new URL(document.URL); 
    let params = new URLSearchParams(url.search.slice(1)); 
    //console.log(params.get('id'));
    buscaPokemon(params.get('id'));

}

function buscaPokemon(pokeId){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, true);
    xmlHttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            const result = JSON.parse(this.responseText);
            showInfo(result);
        }
    }
    xmlHttp.send();  
}

function showInfo(result){
    //console.log(result);

    // Add h3 with poke name
    document.querySelector('.poke-name').textContent = result.name;

    // Add table attributes
    // TODO: Fill th with columns names to prevent attributes in wrong order
    const tr = document.createElement('tr');
    // Ordering atributes list (https://stackoverflow.com/questions/4222690/sorting-a-json-object-in-javascript)
    result.stats.sort((a,b) =>{
        let aFirst=-1;
        let bFirst=1;
        let equal=0;

        if(b.stat.name < a.stat.name)
            return bFirst;
        else if (b.stat.name > a.stat.name)
            return aFirst;
        else
            return equal;

    }).forEach(item => {
        //console.log(`${item.stat.name} - ${item.base_stat}`)
        const td = document.createElement('td');
        td.textContent = `${item.base_stat}`;
        tr.appendChild(td);
    });

    const peso = document.createElement('td');
    peso.textContent = result.weight;
    tr.appendChild(peso);

    const altura = document.createElement('td');
    altura.textContent = result.height;
    tr.appendChild(altura);

    document.querySelector('.tabela-info tbody').appendChild(tr);

    // Add list attirbutes and types
    result.abilities.forEach(item => {
        //console.log(item.ability.name)
        const li =  document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = item.ability.name;
        document.querySelector('.poke-abilities').appendChild(li);
    })

    result.types.forEach(item => {
        //console.log(item.type.name)
        const li =  document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = item.type.name;
        document.querySelector('.poke-types').appendChild(li);
    })
    


}