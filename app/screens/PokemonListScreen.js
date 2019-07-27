import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import PokemonList from '../components/pokemonList/PokemonList';
import TopBar from '../components/TopBar/TopBar';
import ErrorState from '../components/errorState/ErrorState';

class PokemonListScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonList: ''
    }
    
    this.onSelectPokemon = this.onSelectPokemon.bind(this);
  }

  componentDidMount() {
    const { fetchPokemons } = this.props;
    
    fetchPokemons();
  }

  onSelectPokemon(id) {
    const { navigation } = this.props;

    navigation.navigate('Detail', { id });
  }

  render() {
    const { pokemons: { data, isloading, succesful, error }, navigation } = this.props;

    let content = null;

    if(isloading) {
      content = <View style={styles.container}><ActivityIndicator size="large" color="tomato" /></View>;
    }

    if(error) {
      content = <View style={styles.container}><ErrorState/></View>
    }

    if(succesful) {
      content = (
        <React.Fragment>
          <TopBar title="Pokemons" goBack={() => navigation.goBack()}/>
          <PokemonList pokemons={data} onSelectPokemon={this.onSelectPokemon}/>
        </React.Fragment>
      )
    }

    return content;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PokemonListScreen;
