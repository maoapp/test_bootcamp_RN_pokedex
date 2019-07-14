import MainScreen from './app/screens/MainScreen'
import Register from './app/screens/Register'
import PokedexList from './app/screens/PokedexList'
import PokedexDetails from './app/screens/PokedexDetails'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen 
  },
  RegisterScreen: {
    screen: Register
  },
  PokedexScreen: {
    screen: PokedexList,
    navigationOptions:  {
        title: 'Pokedex 1.0.0',
        headerLeft: null,
        gesturesEnabled: false
    }
  },
  PokedexDetailsScreen: {
    screen: PokedexDetails,
    navigationOptions:  {
        title: 'Pokemon details'
    }
  }
});

export default createAppContainer(AppNavigator);