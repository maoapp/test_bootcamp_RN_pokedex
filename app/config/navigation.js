import { createStackNavigator, createAppContainer } from 'react-navigation';

import RegisterScreen from '../screens/register/RegisterScreen';
import LoginScreen from '../screens/login/LoginScreen';

const appNavigation = createStackNavigator({

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

export default createAppContainer(appNavigation);