const axios = require('react-native-axios');

class PokemonService {

    static getPokemons = async (page) => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    }

}

export default PokemonService;