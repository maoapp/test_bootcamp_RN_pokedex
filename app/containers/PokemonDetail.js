import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/pokedex';

import PokemonDetail from '../screens/PokemonDetailScreen';

const mapStateToProps = ({ pokedexReducer }) => {
	return {
    pokemonDetail: pokedexReducer.pokemonDetail,
    isLogged: pokedexReducer.user.isLogged,
    pokemonEvolutionChain: pokedexReducer.pokemonEvolutionChain
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PokemonDetail);
