import React from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";

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
            console.log(`${imgUrl}+${this.state.pokemonImg}.png`);
            return (
                <View>
                    <Image source={{ uri: `${imgUrl}${this.state.pokemonImg}.png`}} style={{height:100,width:100}} />
                    <Text>Weight = {this.state.data.weight}</Text>
                    <Text>height = {this.state.data.height}</Text>
                    <Text>{this.state.data.name}</Text>
                    <Text>{
                            this.state.data.types.map(function (obj) {
                                let name = obj.type.name;
                                return `${name}/`;
                            })
                        }
                    </Text>
                    <View>
                        <FlatList
                        data={this.state.data.moves}
                        keyExtractor={item => item.move.name}
                        renderItem={data => <Text>{data.item.move.name}</Text>}
                        ></FlatList>
                    </View>
              </View>
            )   
        }
        else{
            // console.log('3', this.state.data.length);
            return (
                <View>
                <Text>Wait for it</Text>
              </View>
            )
        }
    }
}


  
  export default PokeInfo;