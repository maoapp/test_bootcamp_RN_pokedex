import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, FlatList,Text,Dimensions }  from 'react-native';

const widthF = Dimensions.get('window').width; //full width
const heightF = Dimensions.get('window').height; //full height

const imgContainerHeight = (heightF/3);
const pokeStatisticsHeight = 25;
const pokeMovesHeight = (heightF/3)-25;


const PokeDetail = ({number,name,types,imgUrl,height,weight,moves})=>{
    console.log(types);
    return (
        <View style={styles.pokeDetailContainer}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: imgUrl }} style={{height:200,width:200}} ></Image>
            </View>
            <View style={styles.pokeStatistics2}>
                <View style={styles.pokeTypes} >
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View style={styles.pokeTypes} >
                    {types}
                </View>
            </View>
           
            <View style={styles.pokeStatistics}>
                <View style={styles.pokeItem} >
                    <Text style={styles.pokeText}>N. {number}</Text>
                </View>
                <View style={styles.pokeItem}>  
                    <Text style={styles.pokeText}>Height : {height}</Text>
                </View>
                <View style={styles.pokeItem}>  
                    <Text style={styles.pokeText}>Weight : {weight}</Text>
                </View>
            </View>
            <View style={styles.pokeMoves}>
                <View style={styles.pokeMovesTitle}>
                    <Text style={styles.pokeText}>Moves</Text>
                </View>
                <View style={styles.pokeItem2}>
                <FlatList
                    data={moves}
                    keyExtractor={item => item.move.name}
                    renderItem={data => <Text>{data.item.move.name}</Text>}
                    >
                </FlatList>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  
    pokeDetailContainer:{
        flex: 1,
        alignSelf: 'stretch',
        flexGrow: 1,
        backgroundColor:'#fff',
    },
    imgContainer:{
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          marginHorizontal: 0,
          alignItems:'center',
          width: imgContainerHeight,
          height:imgContainerHeight,
          backgroundColor:'#eee',
          borderRadius:imgContainerHeight,
          marginTop:5
    },
    pokeStatistics:{
        alignSelf: 'stretch',
        flexDirection:'row',
        justifyContent:'space-between',
        height:30,
        backgroundColor:'#435f8c',
    },
    pokeStatistics2:{
        alignSelf: 'stretch',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        height:35,
        marginTop:5,
        borderColor:'#7c97c2',
        borderBottomWidth:1,
        borderTopWidth:1
    },
    pokeMoves:{
        alignSelf: 'stretch',
        backgroundColor:'#7c97c2',
        padding:5,
        flex:1
    },
    pokeTypes:{
        alignSelf: 'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:50,
    },
    pokeItem:{
        margin:5,
        fontSize:20,
        alignSelf:'stretch',
        
    },
    pokeItem2:{
        flex: 1,
        alignSelf: 'stretch',
        padding:5,
        margin:5
    },
    pokeMovesTitle:{
        alignSelf: 'center',
    },
    pokeName:{
        alignSelf: 'center',
        justifyContent:'center',
        fontSize:25,
        margin:5,
        color:'#7c97c2'
    },
    pokeText:{
        color:'#fff'
    }
});

export default PokeDetail;