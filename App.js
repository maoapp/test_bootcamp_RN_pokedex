import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import * as Font from 'expo-font'
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'
import Header from './components/header/Header'
import Pokedex from './components/pokedex/Pokedex'
import Home from './components/home/Home'
import AuthLoadingScreen from './components/AuthLoadScreen/AuthLoadScreen'
const RootStack = createStackNavigator(
  {
    Pokedex
  },
  {
    defaultNavigationOptions: {
      header: <Header title="Pokedex" />
    }
  }
)
const AuthStack = createDrawerNavigator(
  {
    Home
  },
  {
    defaultNavigationOptions: {
      header: <Header title="Bienvenido" />
    }
  }
)

const AppContainer = createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: RootStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
))
export default class App extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'pokemon-solid': require('./assets/fonts/Pokemon/pokemonSolid.ttf'),
      'pokemon-hollow': require('./assets/fonts/Pokemon/pokemonHollow.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  render() {
    return <>{this.state.fontLoaded && <AppContainer />}</>
  }
}
