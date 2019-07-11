import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './screens/Home';
import PokeList from './components/PokeList';


const appNavigation = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      // header:null
    }
  },
  PokeList:{
    screen:PokeList
  }
});

export default createAppContainer(appNavigation);