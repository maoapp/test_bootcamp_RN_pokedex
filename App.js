import { createStackNavigator, createAppContainer } from 'react-navigation';

// App Screens
import RegisterScreen from './app/screens/auth/register/RegisterScreen';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/auth/login/LoginScreen';
import PokemonListScreen from './app/screens/pokemon/PokemonListScreen';
import PokemonDetailScren from './app/screens/pokemon/PokemonDetailScreen';

const AppNavigation = createStackNavigator({

    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },

    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },

    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            header: null
        }
    },

    PokemonList: {
        screen: PokemonListScreen,
        navigationOptions: {
            header: null
        }
    },

    PokemonDetail: {
        screen: PokemonDetailScren,
        navigationOptions: {
            header: null
        }
    }
});

export default createAppContainer(AppNavigation);