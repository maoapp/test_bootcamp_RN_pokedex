import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, AsyncStorage, Alert,Image, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Authentication extends Component {

  constructor() {
    super();
    this.state = { username: null, password: null };
  }

    userSignup() {
        if (!this.state.username || !this.state.password){
          Alert.alert('Please fill your username and password');
          return;
        } 
        AsyncStorage.setItem(this.state.username, JSON.stringify({user:this.state.username,password:this.state.password}));
        Alert.alert('User successfully created');
    }

   userLogin() {

    if (!this.state.username || !this.state.password){
      Alert.alert('Please fill your username and password');
      return;
    }

     AsyncStorage.getItem(this.state.username).then(
        (response) => response
      ).then((res) => {
        validLogin = res;
        if(validLogin!=null){
            if(this.state.password == JSON.parse(validLogin).password){
                Actions.Home();
            }
            else{
                Alert.alert('Incorrect Password.');
            }
        }
        return res;
      }).catch((error) => {
        console.error(error);
      }).done();
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#2a75bb'}}>
        <View style={{
          flex: 1,
          flexGrow: 5,
          flexDirection:'column',
          alignItems:'stretch',
          alignSelf:'center',
          justifyContent:'center',
          width:250,
        }}>
           <Image style={styles.authLogo} source={{uri:'https://www.freepnglogos.com/uploads/pokemon-go-png-logo/pokemon-go-apk-png-logo-9.png'}}></Image>
            <Text style={styles.authHeader}> LOGIN</Text>
          <TextInput
            editable={true}
            onChangeText={(username) => this.setState({username})}
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            style={styles.outlinedText}
            value={this.state.username}
          />

          <TextInput
            editable={true}
            onChangeText={(password) => this.setState({password})}
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry={true}
            style={styles.outlinedText}
            value={this.state.password}
          />

          <TouchableOpacity style={styles.outlinedButton}  onPress={this.userLogin.bind(this)}>
            <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}> Log In </Text>
          </TouchableOpacity>

          <TouchableOpacity style={style=styles.outlinedButton}  onPress={this.userSignup.bind(this)}>
            <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}> Sign Up </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.authFooter}> Welcome to my Pokedex App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  authLogo:{
    margin:-45,width:150,height:150,alignSelf:'center'
  },
  authHeader:{fontSize:35,textAlign:'center',marginTop:45,color:'#fff'},
  outlinedButton:{backgroundColor:'transparent',borderRadius:5,padding:8,margin:5,borderColor:'#fff',borderWidth:2},
  outlinedText:{
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "#3c5aa6",
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fff"
  },
  authFooter:{
    fontSize:15,textAlign:'center',color:'#fff'
  }
});


export default Authentication;
