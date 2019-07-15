import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";

const FULL_WIDTH = Dimensions.get("window").width;
const FULL_HEIGHT = Dimensions.get("window").width;

class Home extends Component {
  async userLogout() {
    try {
      // await AsyncStorage.removeItem('id_token');
      // Alert.alert('Logout Success!');
      Actions.Authentication();
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: FULL_WIDTH,
          height: FULL_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          backgroundColor: "#E84848"
        }}
      >
        <View>
          <Image
            style={{ width: FULL_WIDTH, height: 200 }}
            source={{
              uri:
                "https://cdn.dribbble.com/users/1363206/screenshots/5497614/pokedex_dribbble-01_2x.jpg"
            }}
          ></Image>
        </View>

        <TouchableOpacity
          style={{
            width: FULL_WIDTH / 2,
            height: 30,
            margin: 5,
            backgroundColor: "transparent",
            justifyContent:'center',
            borderWidth:2,
            borderColor:'#fff',
            borderRadius:5,padding: 5
          }}
          onPress={() => Actions.PokeList()}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              alignSelf: "center",
              fontSize:20,
              color:'#fff'
            }}
          >
            Open Pokedex
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: FULL_WIDTH / 2,
            height: 30,
            margin: 5,
            backgroundColor: "transparent",
            justifyContent:'center',
            borderWidth:2,
            borderColor:'#fff',
            borderRadius:5,padding: 5
          }}
          onPress={this.userLogout}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              alignSelf: "center",
              fontSize:20,
              color:'#fff',
              
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
