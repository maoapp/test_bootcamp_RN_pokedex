// React
import React from 'react';
// React Native
import { Alert, AsyncStorage, Image, KeyboardAvoidingView, View } from 'react-native';
// React Native Elements
import { Button, Header, Input } from 'react-native-elements';
// CSS
import styles from './Register.styles';
// Icons
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
// Services
import firebaseAuth from '../../services/firebaseAuth/firebaseAuth';
// Helpers /
import { fieldChange, showHide, navigateTo } from '../../helpers/inputHelper/inputHelper';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      repeatPassword: '',
      showPassword: true,
      showRepeatPassword: true
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

  loginUser = async (userName, password) => {
    const signedUser = await this.fireAuth.loginUser(userName, password);
    if (signedUser.uid) {
      this.loginAsync(signedUser.uid);
    } else {
      Alert.alert(`${signedUser}`);
    }
  }

  createUser = async () => {
    const currentState = {...this.state};
    const { userName, password, repeatPassword } = currentState;
    if ((userName) && (password) && (repeatPassword)) {
      if (password === repeatPassword) {
        const createdUser = await this.fireAuth.createUser(userName, password);
        if (createdUser.uid) {
          this.loginUser(userName, password);
        } else {
          Alert.alert(`${createdUser}`);
        }
      }
    } else {
      Alert.alert('there are empty fields');
    }
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Header backgroundColor="#ff0017"
          centerComponent={{ text: 'Sign Up', style: { color: '#fff', fontSize: 25 } }}/>
        <KeyboardAvoidingView style={[styles.container]} behavior="padding">
          <Image
            source={require('../../assets/pokedex_logo.png')}
            style={{width: 90, height: 73}}
          />
          <Image style={[styles.pokedexText]} source={require('../../assets/pokedex-text.png')} />
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
          <Input shake={true}
            containerStyle={styles.input}
            inputContainerStyle={{borderBottomWidth: 0}}
            placeholder="Confirm Password"
            secureTextEntry={this.state.showRepeatPassword}
            leftIcon={<AntDesign name="lock" color="#ff0017" size={25}></AntDesign>}
            rightIcon={this.state.showRepeatPassword ? <Feather name="eye" color="#ff0017" size={25} onPress={() => this.showHidePassword('showRepeatPassword')}></Feather> :
            <Feather name="eye-off" color="#ff0017" size={25} onPress={() => this.showHidePassword('showRepeatPassword')}></Feather>}
            onChangeText={(text) => this.fieldChanged(text, 'repeatPassword')}/>
          <View style={[styles.alignButtons]}>
            <Button buttonStyle={[styles.button1]}
              containerStyle={{borderRadius: 25, width: '45%'}}
              icon={<AntDesign name="adduser" color="#FFF" size={25}></AntDesign>}
              title=" Sign Up"
              onPress={() => this.createUser()} underlayColor="#6B0A0A"/>
            <Button buttonStyle={[styles.button1]}
              containerStyle={{borderRadius: 25, width: '45%'}}
              icon={<AntDesign name="login" color="#FFF" size={25}></AntDesign>}
              title=" Sign In"
              onPress={() => navigateTo(this.props.navigation, 'Login')} underlayColor="#6B0A0A"/>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

}

export default Register;