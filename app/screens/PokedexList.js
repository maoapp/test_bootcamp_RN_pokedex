import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import PokedexService from '../services/PokedexService'


export default class PokedexList extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          pokemons:[],
          isLoading:true,
          loadingMore: false,
          setOnLoad : false,
      }

      this.currentPage = 0;
    }

    capitalize = (s) => { 
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
  
    componentDidMount(){ 
      this.load();
    }


    load = ()=>{
      PokedexService.getList(this.currentPage).then((results)=>{
        if(results && results.data && results.data.results){
            let list = results.data.results.map((element, index)=>{
                let splitUrl = element.url.split('/');
                let pokemonId = splitUrl[splitUrl.length-2];
                element.img = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
                element.id = pokemonId;
                element.name = this.capitalize(element.name);
                return element;
            });

            let concatArray = this.state.pokemons.concat(list);
            this.setState({
                pokemons:concatArray,
                isLoading:false,
                loadingMore:false
            })
          
        }
      }).catch((err)=>{
        console.log("Error")
      });
    }

    /*footerView = () => {
      console.log("footerView", this.state.isLoading);
      return (
        
        <View>
          { this.state.isLoading ? <ActivityIndicator color = "#F44336" style = {{ marginLeft: 6 }} />:null}
        </View>
      )
    }*/
    
    render() {
 
        if(this.state.isLoading){
            return (
                <View style={styles.container}>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            )
        }    

      return (
        <View style={styles.container}>
            <FlatList contentContainerStyle={styles.list}
                    data={this.state.pokemons}
                    keyExtractor={({id})=> id}
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity 
                            onPress={() => {
                              this.props.navigation.navigate('PokedexDetailsScreen', {
                                  pokemon: item
                              });
                          }}
                            style={styles.itemContainer}>
                                <Text style={styles.itemTitle}>{this.capitalize(item.name)}</Text>
                                <Image 
                                source={{uri:item.img}}
                                style={styles.itemImage} 
                                />
                                <Text style={styles.more}>Toca para más detalles</Text>
                            </TouchableOpacity>
                        )
                    } }
                    onEndReachedThreshold={0.5}
                    onEndReached={({ distanceFromEnd }) => {
                        this.currentPage+=1;
                        //this.setState({ loadingMore: true, isLoading:true });
                        this.load();
                    }}
                    //ListFooterComponent = {this.footerView}
            />
        </View>
      );
    }
  }

  let styles = StyleSheet.create({
      container:{
          backgroundColor:'#F6F5AE',
          flex:1
      },
      list:{
        flexDirection:'column',
        alignItems:'center'
      },    
      itemContainer:{
        flexDirection:'column', 
        alignItems:'center',
        justifyContent:'space-between',
        height:300,
        width:300,
        margin:20,
        backgroundColor:'#2E86AB',
        borderRadius:10
      },
      itemImage:{
        margin:20,
        width:150,
        height:150,
        borderRadius:75,
        backgroundColor:'white'
      },
      itemTitle:{
        fontSize:24,
        backgroundColor:'#565554',
        width:'100%',
        padding:20,
        color:'white',
        textAlign:'center',
        borderRadius:10, 
        overflow:'hidden'
      },
      more:{
        fontSize:16,
        backgroundColor:'#565554',
        width:'100%',
        padding:10,
        color:'white',
        textAlign:'center',
        borderRadius:10, 
        overflow:'hidden'
      }
  })