// @vendors
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// @constants
import { TYPES_COLORS } from '../../constants/constants';

console.log(TYPES_COLORS, 'tipos', TYPES_COLORS['poison']);

const PokemonDetailCard = ({name, sprites, height, types, weight, moves}) => (
 <ScrollView contentContainerStyle={[styles.container, {backgroundColor: TYPES_COLORS[types[0].type.name]}]}>
  <Text style={styles.title}>{name}</Text>
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Image style={styles.pokemonImage} source={{uri: sprites.front_default}} />
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>Height:</Text>
        <Text style={styles.data}>{height}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.data}>{weight}</Text>
      </View>  
      </View>     
   </View>
   <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Text style={styles.label}>Moves:</Text>
    <ScrollView horizontal>
      {moves.map(move => <View style={{marginRight: 5, borderRadius: 6, borderColor: 'white', borderWidth: 0.5, padding: 4}}>
        <Text style={styles.data}>{move.move.name}</Text>
      </View>)}
    </ScrollView>  
   </View>
 </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingLeft: 20,
    flex: 1
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pokemonImage: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: 30,
    letterSpacing: 6,
    paddingBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  type: {
    padding: 5,
    borderRadius: 6
  },
  typeName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    marginRight: 3
  },
  data: {
    fontSize: 18,
    color: 'white'
  }
})

export default PokemonDetailCard;
