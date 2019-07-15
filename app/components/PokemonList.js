import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import { StackNavigator } from 'react-navigation';
export default class PokemonList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { img : null, name: '',pokemon : {}}
    }


    async componentDidMount(){
        let { url } = this.props;
        
        await fetch(url)
        .then(res => res.json())
        .then(res => {
            
            let {name,weight,height,moves,types, sprites} = res;
            let img = sprites.front_default;
            
            let data = {
                name: name,
                height: height,
                weight: weight,
                moves: moves,
                type: types,
                img: img
            }
            
            this.setState({ img: img, name: name, pokemon:data });
        });
    }

    render(){
        let {img,name , pokemon} = this.state;
        return(
            <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.navigate('Detail', { pokemon: pokemon })}}>
                <View style={styles.content}>
                    <Image style={styles.imgStyle} source={{ uri: '' + img }} />
                    <Text style={styles.textStyle}>{name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    imgStyle : {
        width: 99,
        height: 99
    },
    textStyle: {
        color: '#aa263d',
    }
});
