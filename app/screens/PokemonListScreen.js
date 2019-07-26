import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import ListComponent from '../components/pokemonList/PokemonList';
import TopBar from '../components/TopBar/TopBar';

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
    console.log(id, 'id')

    navigation.navigate('Detail', { id });
  }

  render() {
    const { pokemons: { data }, navigation } = this.props;

    let content = <View style={styles.container}><ActivityIndicator size="large" color="tomato" /></View>;

    if(data.length) {
      content = (
        <React.Fragment>
          <TopBar title="Pokemons" goBack={() => navigation.goBack()}/>
          <ListComponent pokemons={data} onSelectPokemon={this.onSelectPokemon}/>
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
