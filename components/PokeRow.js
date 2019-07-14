import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import {Actions} from 'react-native-router-flux';
import PokeInfo from "../screens/PokeInfo";

const PokeRow = ({ name, imgUrl, number, navigation }) => {
  return (
    <TouchableOpacity 
        style={{ backgroundColor: "transparent" }}
        onPress={() => Actions.PokeInfo({pokemonId:number})}
    >
      <View style={styles.listItemContainer}>
        <View style={styles.listRowContainer}>
          <Text style={styles.pokeItemNumber}>{number}</Text>
          <Image source={{ uri: imgUrl }} style={styles.pokeImage} />
        </View>
        <Text style={styles.pokeItemHeader}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#eee",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  listRowContainer: {
    flexDirection: "column"
  },
  pokeItemNumber: {
    color: "#000",
    fontSize: 12,
    alignSelf: "center"
  },
  pokeItemHeader: {
    color: "#000",
    fontSize: 24,
    alignSelf: "center"
  },
  pokeImage: {
    backgroundColor: "transparent",
    height: 70,
    width: 70
  }
});

export default PokeRow;
