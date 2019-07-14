const axios  = require('axios');

var PokedexService = {
    getList: function(page){
        return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
    },
    getPokemon: function(id){
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
}

export {PokedexService as default} 