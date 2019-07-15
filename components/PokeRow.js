import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import {Actions} from 'react-native-router-flux';
import PokeInfo from "../screens/PokeInfo";

const PokeRow = ({ name, imgUrl, number, navigation }) => {
  return (
    <TouchableOpacity 
        style={{ backgroundColor: "#3c5aa6",flex:1/2,margin:5,borderRadius:10 }}
        onPress={() => Actions.PokeInfo({pokemonId:number})}
    >
      <View style={styles.listItemContainer}>
        <View style={styles.listRowContainer}>
          <Image source={{ uri: imgUrl }} style={styles.pokeImage} />
        </View>
       
          <View style={styles.listRowContainer2}>
            <Text style={styles.pokeItemHeader}>{name}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItemContainer: {
    margin:5,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10
  },
  listRowContainer: {
    flexDirection: "column",
  },
  listRowContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth:2,
    borderRadius:5
  },
  pokeItemNumber: {
    color: "#000",
    fontSize: 12,
    alignSelf: "center"
  },
  pokeItemHeader: {
    color: "#fff",
    fontSize: 18,
    alignSelf: "center",
  },
  pokeImage: {
    backgroundColor: "white",
    height: 70,
    width: 70,
    borderWidth:1,
    alignSelf:'center',
    borderRadius:70,
    marginBottom:5
  }
});

export default PokeRow;
