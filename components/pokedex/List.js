import React, { Component, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, FlatList, Text, Image, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons'

function PokeAvatar({url}) {
  const [img, setImg] = useState('')
  axios(url).then(res => {
    const img = res.data.sprites.front_default
    setImg(img)
  })
  return (
    <View>
      {img !== '' ? (
        <Image style={{ width: 66, height: 58 }} source={{ uri: img }} />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
)}
const List = ({ pokemons, thisPoke, page, prev }) => {
  const { listContainer, pokeBtn, nameList, buttonContainer } = styles
  function onNext() {
    axios(page).then(res => {
      thisPoke.setState({
        pokemons: res.data.results,
        next: res.data.next,
        prev: res.data.previous
      })
    })
  }
  function onPrev() {
    axios(prev).then(res => {
      thisPoke.setState({
        pokemons: res.data.results,
        next: res.data.next,
        prev: res.data.previous
      })
    })
  }
  function onPress(url) {
    try {
      axios(url).then(res => {
        thisPoke.setState({
          currentPokemon: [
            { name: res.data.name, pic: res.data.sprites.front_default, other: res.data }
          ]
        })
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={listContainer}>
      <FlatList
        data={pokemons}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => (
          <TouchableOpacity style={pokeBtn} onPress={() => onPress(item.url)}>
            <Text style={nameList}>{item.name}</Text>
            <PokeAvatar url={item.url} />
          </TouchableOpacity>
        )}
      />
      <View style={buttonContainer}>
        {prev && 
          <TouchableOpacity onPress={onPrev}>
            <AntDesign name="leftcircle" size={25} color="#B3A125" />
          </TouchableOpacity>
        }
        <TouchableOpacity onPress={onNext}>
          <AntDesign name="rightcircle" size={25} color="#B3A125" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 5,
    borderWidth: 2,
    borderColor: '#FF0000',
    width: 120,
    height: 580,
    borderRadius: 10,
    backgroundColor: 'rgba(61,125,202, .2)'
  },
  pokeBtn: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10
  },
  nameList: {
    fontFamily: 'pokemon-hollow'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default List