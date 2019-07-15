import React from 'react'
import { View, StyleSheet, Text, Image, AsyncStorage, TouchableOpacity } from 'react-native'
import Pokeball from '../../assets/pokeball.png'
import { Svg, Circle, Text as SvgText, TextPath, TSpan, G, Defs, ClipPath, Image as SvgImage } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons';
const TYPES_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
}

const SvgComponent = ({ title, url, types }) => (
  <Svg height="100%" width="100%" viewBox="0 0 300 300">
    <G id="circle">
      <Circle
        r={100}
        x={150}
        y={150}
        fill="none"
        stroke="#FFCB05"
        strokeWidth={14}
        transform="rotate(+90)"
      />
    </G>
    <SvgText fill="#000" fontSize="18">
      <TextPath href="#circle" startOffset="50%" >
        <TSpan textAnchor="middle" dy={-14}>
          {types ? 'Catch Them All!' : title}
        </TSpan>
      </TextPath>
    </SvgText>
    <G transform="translate(50, 50)">
      <SvgImage width={200} height={200} preserveAspectRatio="xMidYMid slice" href={url} />
    </G>
  </Svg>
)
function Info({ pokemon, navigation }) {
  const name = pokemon[0] && pokemon[0].name
  const pic = pokemon[0] && pokemon[0].pic
  const height = pokemon[0] && pokemon[0].other.height
  const weight = pokemon[0] && pokemon[0].other.weight
  const moves = pokemon[0] && pokemon[0].other.moves.slice(0, 6)
  const types = pokemon[0] && pokemon[0].other.types
  const {
    infoContainer,
    dataContainer,
    dataItem,
    titleText,
    movesContainer,
    moveItem,
    pokeName,
    typesContainer,
    typeText,
    button,
    textLogout,
    buttonInfo
  } = styles
  async function signOutAsync() {
    await AsyncStorage.clear()
    navigation.navigate('Auth')
  }
  return (
    <View style={infoContainer}>
      {pokemon.length !== 0 ? 
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text style={pokeName}>{name}</Text>
            <TouchableOpacity style={buttonInfo} onPress={signOutAsync}>
              <AntDesign name="logout" size={25} color="red" />
            </TouchableOpacity>
          </View>
          <View style={dataContainer}>
            <Text style={dataItem}>
              <Text style={titleText}>Height:</Text> {height / 10} m
            </Text>
            <Text style={dataItem}>
              <Text style={titleText}>Weight:</Text> {weight / 10} Kg
            </Text>
          </View>
          <View style={movesContainer}>
            {moves.map((move, i) => (
              <Text key={i} style={moveItem}>
                <Text style={titleText}>move {i + 1}:</Text> {move.move.name}
              </Text>
            ))}
          </View>
          <View style={typesContainer}>
            {types &&
              types.map(type => (
                <Text
                  key={type.type.name}
                  style={[typeText, { backgroundColor: `#${TYPES_COLORS[type.type.name]}` }]}>
                  {type.type.name}
                </Text>
              ))}
          </View>
          <SvgComponent url={pic} types={types} />
        </>
      :
        <View style={{ justifyContent: 'center'}}>
          <TouchableOpacity style={button} onPress={signOutAsync}>
            <Text style={textLogout}>Salir</Text>
          </TouchableOpacity>
          <SvgComponent title="Elige un pokemon de la lista!" url={Pokeball} />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  textLogout: {
    color: 'white',
    fontFamily: 'pokemon-hollow',
    letterSpacing: 2
  },
  pokeName: {
    fontFamily: 'pokemon-solid',
    fontSize: 20,
    height: 50,
    textAlign: 'center',
    letterSpacing: 8
  },
  infoContainer: {
    paddingLeft: 5,
    borderWidth: 2,
    borderColor: '#FF0000',
    flex: 1,
    height: 580,
    borderRadius: 10,
    backgroundColor: 'rgba(255,203,5, .2)'
  },
  nameTitle: {
    fontFamily: 'pokemon-solid',
    textAlign: 'center',
    letterSpacing: 2,
    color: 'rgb(255,203,5)'
  },
  dataItem: {
    fontFamily: 'pokemon-solid',
    fontSize: 16,
    letterSpacing: 2,
  },
  dataContainer: {
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  titleText: {
    fontFamily: 'pokemon-hollow'
  },
  movesContainer: {
    padding: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 160
  },
  moveItem: {
    fontFamily: 'pokemon-solid',
    fontSize: 16,
  },
  typesContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row'
  },
  typeText: {
    textAlign: 'center',
    borderRadius: 10,
    color: 'white',
    padding: 10,
    margin: 10,
    fontFamily: 'pokemon-solid',
    letterSpacing: 2,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    top: 10,
    borderRadius: 10,
    position: 'relative'
  }
})

export default Info

