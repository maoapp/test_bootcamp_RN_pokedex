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
                                      backgroundColor:'red',
                                      borderRadius:5,
                                      borderColor:'black',
                                      margin:5,
                                      paddingLeft:10,
                                      paddingRight:10,
                                      paddingBottom:3,
                                      paddingTop:3,
                                      borderWidth: 2,
                                      justifyContent:'center',
                                      alignItems:'center'}}>
                                        <Text>{obj.type.name}</Text>
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