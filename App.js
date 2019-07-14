import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator , AsyncStorage,  } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Router, Scene} from 'react-native-router-flux';
import Home from "./screens/Home";
import PokeList from "./components/PokeList";
import PokeInfo from "./screens/PokeInfo";
import Authentication from "./screens/Authentication";


class App extends Component {

  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true })
    });
  }
  
  render() {
    if (!this.state.isLoaded) {
      return (
        <ActivityIndicator />
      )
    } 
    else {
      return(
        <Router>
          <Scene key='root'>
            <Scene
              component={Authentication}
              hideNavBar={true}
              initial={true}
              key='Authentication'
              title='Authentication'
            />
            <Scene
              component={Home}
              hideNavBar={true}
              key='Home'
              title='Home Page'
            />
             <Scene
              component={PokeList}
              hideNavBar={false}
              key='PokeList'
              title='PokeList Page'
            />
            <Scene
              component={PokeInfo}
              hideNavBar={false}
              key='PokeInfo'
              title='PokeInfo Page'
            />
            
          </Scene>
        </Router>
      )
    }
  }
}


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

// export default createAppContainer(appNavigation);
export default App;
