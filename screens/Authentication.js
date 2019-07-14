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
        AsyncStorage.setItem(this.state.username, JSON.stringify({user:this.state.username,password:this.state.password}));
    }

   userLogin() {

    if (!this.state.username || !this.state.password) return;

     AsyncStorage.getItem(this.state.username).then(
        (response) => response
      ).then((res) => {
        validLogin = res;
        console.log(validLogin);
        if(validLogin!=null){
            Actions.Home();
        }
        return res;
      }).catch((error) => {
        console.error(error);
      }).done();
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{fontSize:25,textAlign:'center'}}> Welcome to my Pokedex App</Text>

        <View style={{
          flex: 1,
          flexGrow: 5,
          flexDirection:'column',
          alignItems:'stretch',
          alignSelf:'center',
          justifyContent:'center',
          width:250
        }}>
            <Text style={{fontSize:35,textAlign:'center',margin:15}}> LOGIN</Text>
          <TextInput
            editable={true}
            onChangeText={(username) => this.setState({username})}
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            style={{margin:5,padding:5,borderWidth:1,textAlign:'center'}}
            value={this.state.username}
          />

          <TextInput
            editable={true}
            onChangeText={(password) => this.setState({password})}
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry={true}
            style={{margin:5,padding:5,borderWidth:1,textAlign:'center'}}
            value={this.state.password}
          />

          <TouchableOpacity style={{backgroundColor:'white',padding:5,margin:5}}  onPress={this.userLogin.bind(this)}>
            <Text style={{textAlign:'center'}}> Log In </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'white',padding:5,margin:5}}  onPress={this.userSignup.bind(this)}>
            <Text style={{textAlign:'center'}}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Authentication;