const lists_pokemons = document.getElementById('lists_pokemons')
const buttons = document.getElementById('buttons')
let urlPokemon = 'https://pokeapi.co/api/v2/pokemon'
let btnNext;
let btnPrevious;
let templateHtml;
console.log('');

const apicasera = {

}

const Getpokemons = async (url) => {

    try {
        const response = await fetch(url)
        const results = await response.json();
        console.log(results);
        DataPokemons(results.results)
        btnNext = results.next ? `<button class="btn" data-url=${results.next}>⏭️</button>` : ''
        btnPrevious = results.previous ? `<button class="btn" data-url=${results.previous} >⏮️</button>` : ''
        buttons.innerHTML= btnPrevious + "" + btnNext
       
      
    } catch (error) {
        console.log(error);
    }
}

Getpokemons(urlPokemon)

const DataPokemons = async (data) => {
    lists_pokemons.innerHTML = ''
    try {
        for (let index of data) {
            console.log(index);
            const resp = await fetch(index.url)
            const resul = await resp.json()
            console.log(resul);
            templateHtml = `
            <div class="pokemon__img">
            <img src=${resul.sprites.other.dream_world.front_default} alt=${resul.name}/>
            <p>${resul.name}</p>
            </div>
            `
           
        }

    } catch (error) {
        console.log(error);
    }
}

buttons.addEventListener('click',(e)=>{
if(e.target.classList.contains('btn')){
    let value = e.target.dataset.url
    console.log(value);
    Getpokemons(value)
}
})