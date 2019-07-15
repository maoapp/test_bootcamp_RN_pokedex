import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../view/Login';
import Signup from '../view/Signup';
import Home from '../view/Home';
import pokemonDetail from '../components/PokemonDetails';
import HeaderLogo from '../components/HeaderLogo';

const appNavigator = createStackNavigator({

    
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    },Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: <HeaderLogo />,
            headerStyle: {
                backgroundColor: '#aa263d',
            }
        }
    },
    Detail: {
        screen: pokemonDetail,
        navigationOptions: {
            headerTitle: <HeaderLogo />,
            headerBackTitle: null,
            headerTintColor: '#fff', 
            headerStyle: {
                backgroundColor: '#aa263d',
            }
        }
    }
})



export default appNavigator;