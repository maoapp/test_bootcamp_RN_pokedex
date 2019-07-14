import React from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";
import PokeDetail from "../components/PokeDetail";

let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
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

class PokeInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pokemonImg:0
        };
      }

      componentWillMount() {
        const { navigation } = this.props;
        const pokemonId = navigation.getParam('pokemonId', 0);
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        fetch(url)
          .then((response) => {
            return response.json()
          })
          .then((pokemon) => {
            this.setState({ data: pokemon, pokemonImg :pokemonId })
          })
      }

    render(){
        const length = Object.keys(this.state.data).length;
        if(length>0){
            let typess= this.state.data.types.map(function (obj, index) {
                                return (
                                  <React.Fragment key={index}>
                                    <View 
                                    style={{   
                                      backgroundColor:`#${TYPES_COLORS[obj.type.name]}`,
                                      borderRadius:5,
                                      borderColor:'#435f8c',
                                      margin:5,
                                      paddingLeft:10,
                                      paddingRight:10,
                                      paddingBottom:0,
                                      paddingTop:0,
                                      borderWidth: 2,
                                      justifyContent:'center',
                                      height:25,
                                      alignItems:'center'}}>
                                        <Text 
                                        style={{alignSelf: 'center',
                                                justifyContent:'center',}}>
                                                {obj.type.name}
                                        </Text>
                                    </View>
                                  </React.Fragment >
                                )
                            });
            return (
                <PokeDetail number={this.state.pokemonImg}
                            name={this.state.data.name} 
                            types={typess} 
                            imgUrl={`${imgUrl}${this.state.pokemonImg}.png`} 
                            height={this.state.data.height} 
                            weight={this.state.data.weight} 
                            moves={this.state.data.moves}>
                </PokeDetail>
            )   
        }
        else{
            return (
                <View>
                <Text>Wait for it...</Text>
              </View>
            )
        }
    }
}


  
  export default PokeInfo;