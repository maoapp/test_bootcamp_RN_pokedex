// React Navigation
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
// React Native
import KeepAwake from 'react-native-keep-awake';
// Components
import Login from './app/screens/login/Login';
import Register from './app/screens/register/Register';
import PokeList from './app/screens/pokeList/PokeList';
import PokeDetails from './app/screens/pokeDetails/PokeDetails';
import AuthLoadingScreen from './app/screens/authLoadingScreen/AuthLoadingScreen';
// Firebase
import firebase from 'firebase';
// Constants
import FIREBASE_CONFIG from './app/constants/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

KeepAwake();

const authNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  },
  Register: {
    screen: Register,
    navigationOptions: {  header: null }
  }
});
const appNavigator = createStackNavigator({
  PokeList: {
    screen: PokeList,
    navigationOptions: { header: null }
  },
  PokeDetails: {
    screen: PokeDetails,
    navigationOptions: { header: null }
  },
});
const switchStacks = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: appNavigator,
    Auth: authNavigator
  },
  { initialRouteName: 'AuthLoading'}
);

export default createAppContainer(switchStacks);
