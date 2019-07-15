// React
import React from 'react';
// React Native
import { Alert, AsyncStorage, Image, KeyboardAvoidingView, View } from 'react-native';
// React Native Elements
import { Header, Input } from 'react-native-elements';
// CSS
import styles from './Login.styles';
import globalStyles from '../../theme/styles';
// Icons
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
// Services
import firebaseAuth from '../../services/firebaseAuth/firebaseAuth';
// Helpers
import { fieldChange, showHide, navigateTo } from '../../helpers/inputHelper/inputHelper';
// Components
import Logos from '../../components/Logos/Logos';
import NavigateToButton from '../../components/NavigateToButton/NavigateToButton';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      showPassword: true
    };
    this.fireAuth = new firebaseAuth();
  }

  fieldChanged = (text, fieldName) => {
    this.setState(fieldChange(text, fieldName));
  }

  showHidePassword = (field) => {
    this.setState({[field]: showHide(field, this.state)});
  }

  loginAsync = async (logedUser) => {
    this.setState({userName: '', password: '', showPassword: true});
    await AsyncStorage.setItem('uid', `${logedUser}`);
    this.props.navigation.navigate('AuthLoading');
  };

  loginUser = async () => {
    const currentState = {...this.state};
    const { userName, password } = currentState;
    if ((userName) && (password)) {
      const signedUser = await this.fireAuth.loginUser(userName, password);
      if (signedUser.uid) {
        this.loginAsync(signedUser.uid);
      } else {
        Alert.alert(`${signedUser}`);
      }
    } else {
      Alert.alert('there are empty fields');
    }
  }

  render() {
    return (
      <View style={[globalStyles.container]}>
        <Header backgroundColor="#ff0017"
          centerComponent={{ text: 'Sign In', style: { color: '#fff', fontSize: 25 }, fontSize: 20, fontWeigth: 'bold' }}/>
        <KeyboardAvoidingView style={[globalStyles.container]} behavior="padding">
          <Logos/>
          <Input shake={true}
           containerStyle={styles.input}
           inputContainerStyle={{borderBottomWidth: 0}}
           placeholder="Username"
           leftIcon={<AntDesign name="user" color="#ff0017" size={25}></AntDesign>}
           onChangeText={(text) => this.fieldChanged(text, 'userName')}/>
          <Input shake={true}
            containerStyle={styles.input}
            inputContainerStyle={{borderBottomWidth: 0}}
            placeholder="Password"
            secureTextEntry={this.state.showPassword}
            leftIcon={<AntDesign name="lock" color="#ff0017" size={25}></AntDesign>}
            rightIcon={this.state.showPassword ? <Feather name="eye" color="#ff0017" size={25} onPress={() => this.showHidePassword('showPassword')}></Feather> :
            <Feather name="eye-off" color="#ff0017" size={25} onPress={() => this.showHidePassword('showPassword')}></Feather>}
            onChangeText={(text) => this.fieldChanged(text, 'password')}/>
          <View style={[styles.alignButtons]}>
            <NavigateToButton title="Sign In" name="login" onClick={() => this.loginUser()} />
            <NavigateToButton title="Sign Up" name="adduser" onClick={() => navigateTo(this.props.navigation, 'Register')} />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

}

export default Login;