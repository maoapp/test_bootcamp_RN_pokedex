// @Vendors
import { combineReducers } from 'redux';

// @reducers
import pokedexReducer from './pokedexReducer';

const AppReducer = combineReducers({
	pokedexReducer
});

export default AppReducer;
