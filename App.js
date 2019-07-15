import { createStackNavigator, createAppContainer } from 'react-navigation';

// App Screens
import RegisterScreen from './app/screens/auth/register/RegisterScreen';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/auth/login/LoginScreen';

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
    }
});

export default createAppContainer(AppNavigation);