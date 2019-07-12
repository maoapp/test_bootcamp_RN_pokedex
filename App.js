import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import PokeList from "./components/PokeList";
import PokeInfo from "./screens/PokeInfo";

const appNavigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      // header:null
    }
  },
  PokeList: {
    screen: PokeList
  },
  PokeInfo:{
    screen: PokeInfo
  }
});

export default createAppContainer(appNavigation);
