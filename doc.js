const pokemonurl = 'https://pokeapi.co/api/v2/pokemon'
const maxPokemons = 150 ;

function checkPokemon(i){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((res)=> res.json())
    .then((resToJson)=> {
        getData(resToJson);
    });
}

function getCards(){
    for (let i = 1; i < maxPokemons; i++){
    checkPokemon(i);
    }
}

function getData(card){
    const gallery$$ = document.querySelector(".gallery");
    const figure$$ = document.createElement("figure");
    const title$$ = document.createElement("h2");
    const image$$ = document.createElement("img");
    const type$$ = document.createElement("p");
    
    

   
    title$$.textContent = card.name;
    type$$.textContent = card.types[0].type.name;
    
    image$$.src = card.sprites.other.dream_world.front_default;
    figure$$.appendChild(title$$);
    figure$$.appendChild(image$$);
    gallery$$.appendChild(figure$$);
    figure$$.appendChild(type$$);

}

getCards();

