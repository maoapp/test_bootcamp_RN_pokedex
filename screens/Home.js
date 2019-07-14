import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import {Actions} from 'react-native-router-flux';


class Home extends Component {

  async userLogout() {
    try {
      await AsyncStorage.removeItem('id_token');
      Alert.alert('Logout Success!');
      Actions.Authentication();
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container]}>
          <Button title="Pokedex" onPress={() => Actions.PokeList()} />
        </View>

        <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogout}>
          <Text style={styles.buttonText} > Log out </Text>
        </TouchableOpacity>
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
    alignItems: "center"
  }
});

export default Home;
