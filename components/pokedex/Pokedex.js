import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, TouchableHighlight } from 'react-native'
import axios from 'axios'
import List from './List'
import Info from './Info'


class Pokedex extends Component {
  state = {
    pokemons: [],
    currentPokemon: [],
    prev: '',
    next: ''
  }
  componentDidMount() {
    this.fetchPokemons()
  }
  fetchPokemons() {
    return axios('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(res =>{
        this.setState({
          pokemons: res.data.results,
          prev: res.data.previous,
          next: res.data.next
        })}
      )
      .catch(error => {
        console.error(error)
      })
  }
  render() {
    const { pokedexContainer, loaderContainer } = styles
    const { pokemons, currentPokemon, next, prev } = this.state
    return (
      <View style={pokedexContainer}>
        {pokemons.length !== 0 ? (
          <>
            <List pokemons={pokemons} thisPoke={this} page={next} prev={prev} />
            <Info pokemons={pokemons} pokemon={currentPokemon} navigation={this.props.navigation} />
          </>
        ) : (
          <View style={loaderContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pokedexContainer: {
    flexDirection: 'row'
  },
  loaderContainer: {
    textAlign: 'center',
    width: '100%'
  }
});

export default Pokedex