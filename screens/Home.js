import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import {Actions} from 'react-native-router-flux';


class Home extends Component {

  async userLogout() {
    try {
      // await AsyncStorage.removeItem('id_token');
      // Alert.alert('Logout Success!');
      Actions.Authentication();
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container]}>
          <Button title="Open Pokedex" style={[styles.button]} onPress={() => Actions.PokeList()} />
          <Button title="Log out" style={[styles.button]} onPress={this.userLogout} />
        </View>
      </View>
    );
  }
}

// const Home = ({ navigation }) => (
//   <View style={[styles.container]}>
//     <Button title="Pokedex" onPress={() => navigation.navigate("PokeList")} />
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
  button:{
    margin:5,
    backgroundColor:'red'
  }
});

export default Home;
