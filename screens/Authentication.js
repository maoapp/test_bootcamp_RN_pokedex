import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Home from "./Home";
// import styles from './styles';

class Authentication extends Component {

  constructor() {
    super();
    this.state = { username: null, password: null };
  }

  userSignup() {
    if (!this.state.username || !this.state.password) return;
    console.log(this.state.username)
    console.log(this.state.password)

    AsyncStorage.multiSet([
        ["username", this.state.username],
        ["password", this.state.password]
    ])
    // fetch('http://192.168.XXX.XXX:3001/users', {
    //   method: 'POST',
    //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password,
    //   })
    // })
    // .then((response) => response.json())
    // .then((responseData) => {
    //   this.saveItem('id_token', responseData.id_token),
    //   Alert.alert( 'Signup Success!', 'Click the button to get a Chuck Norris quote!'),
    //   Actions.HomePage();
    // })
    // .done();
  }

  userLogin() {
    AsyncStorage.multiGet(['username', 'password']).then((data) => {
        console.log('login',data);
    });

    Actions.Home();
  }

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <View >
        <Text > Welcome </Text>

        <View >
          <TextInput
            editable={true}
            onChangeText={(username) => this.setState({username})}
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            // style={styles.inputText}
            value={this.state.username}
          />

          <TextInput
            editable={true}
            onChangeText={(password) => this.setState({password})}
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry={true}
            // style={styles.inputText}
            value={this.state.password}
          />

          <TouchableOpacity  onPress={this.userLogin.bind(this)}>
            <Text > Log In </Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={this.userSignup.bind(this)}>
            <Text > Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Authentication;