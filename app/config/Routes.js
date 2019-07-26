
import Home from '../containers/Login';
import List from '../containers/PokemonList';
import Detail from '../containers/PokemonDetail';

const routes = {
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  List: {
    screen: List,
    navigationOptions: { header: null }
  },
  Detail: {
    screen: Detail,
    navigationOptions: { header: null }
  }
};

export default routes;
