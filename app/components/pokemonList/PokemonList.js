
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const width = Dimensions.get('window').width;

const pokemonCard = (pokemon, onSelectPokemon) => {
  const uri = `${urlImage}${pokemon.url.split('/')[6]}.png`;

  return(
    <TouchableOpacity style={styles.pokemonCard} onPress={() => onSelectPokemon(pokemon.url.split('/')[6])}>
      <Image style={{width: width / 3 - 30 , height: 120}} source={{uri}} />
      <Text style={{color: 'tomato', fontWeight: 'bold'}}>{pokemon.name}</Text>
    </TouchableOpacity>
  )
};

const List = ({ pokemons, onSelectPokemon }) => (
  <View style={styles.container}>
    <FlatList
      data={pokemons}
      renderItem={({item}) => pokemonCard(item, onSelectPokemon)}
      keyExtractor={(item) => item.name}
      numColumns={3}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  pokemonCard: {
    backgroundColor: '#f1f4f4',
    padding: 6,
    borderBottomEndRadius: 20,
    margin: 2,
    alignItems: 'center'
  }
});

export default List;
