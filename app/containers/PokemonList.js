import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/pokedex';

import Pokemons from '../screens/PokemonListScreen';

const mapStateToProps = ({ pokedexReducer }) => {
	return {
    pokemons: pokedexReducer.pokemons,
    isLogged: pokedexReducer.user.isLogged
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pokemons);
