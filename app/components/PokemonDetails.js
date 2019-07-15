import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, AsyncStorage, } from "react-native";

class PokemonDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state ={ 
            name: "",
            image: null,
            weight: "",
            height: "",
            moves: [],
            types: [],
            data: {},
            show : this.props.visible
        };
        this.get = this.get.bind(this);
    }
    componentWillReceiveProps(props) {
        this.setState({  name : props.name});
    }

    async get(key) {
        try {
            const value = await AsyncStorage.getItem(key).then((val) => {
                return JSON.parse(val);
            });
            return value;
        } catch (error) {
            console.error(error);
            return null;
        }
    
    }

    render() {

        const { navigation } = this.props;
        const pokemonName = navigation.getParam('pokemon');

        if (pokemonName) {
            
            const { name, img: image, weight, height, moves, type:types } = pokemonName;
            return (

                <ScrollView>
                    <View style={styles.modalView}>

                        <Text style={styles.title}>{name}</Text>
                        <Image style={styles.image} source={{ uri: image }}></Image>

                        <View style={styles.wrapper}>
                            <View style={styles.detail}>
                                <View style={styles.item}>
                                    <Text style={styles.subtitle}>Height</Text>
                                    <Text style={styles.info}>{height}</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.subtitle}>Weight</Text>
                                    <Text style={styles.info}>{weight}</Text>
                                </View>
                            </View>

                            <Text style={[styles.subtitle, styles.titleType]}>Type</Text>
                            <View style={[styles.row, styles.center]}>
                                <View style={styles.types}>
                                    {types.map((type) => {

                                        return (
                                            <View key={type.slot} style={styles.icons}>
                                                <Image style={styles.typeIcon} />
                                                <Text style={styles.textType}>{type.type.name}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>


                            <Text style={[styles.subtitle, styles.titleType]}>Available Moves</Text>
                            <View style={[styles.row, styles.center]}>
                                <View style={styles.move}>
                                    {moves.map((move, i) => {
                                        return (
                                            <Text key={i} style={styles.moveText}>{move.move.name}</Text> 
                                        );
                                    })}
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
                    
                

            );
 
        }
    }
}

    const styles = StyleSheet.create({
        modalView: {
            width:'100%',
            backgroundColor: '#fff',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        image:{
            width: 150,
            height: 150,
            margin: 5,
        },
        title:{
            textAlign: 'center',
            color: '#aa263d',
            textTransform: 'uppercase',
            fontSize : 20,
            marginTop: 15,
            fontWeight: 'bold'
        },
        wrapper: {
            flex: 1,
            justifyContent: 'center',
            width: '100%'
        },
        detail: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 50
        },
        item: {
            width: '50%',
            padding: 5,
            margin: 10
        },
        col: {
            width: '40%'
        },
        subtitle:{
            width : '100%',
            textTransform: 'uppercase',
            color: '#cabebe',
            textAlign: 'center'
        },
        info:{
            textAlign: 'center'
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 5,
            flexWrap: 'wrap',
            alignItems: 'center'
        },
        center: {
            margin: 10
        },
        types: {
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: '7%'
        },
        typeIcon: {
            width: 20,
            height: 20,
            padding: 7
        },
        icons:{
            flexDirection: 'row',
            marginRight: 15,
            alignSelf: 'center'
        },
        move: {
            width: '90%',
            marginHorizontal: '5%',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        moveText: {
            margin: 3,
            padding: 10,
            borderWidth: 2,
            borderColor: '#9f0f26',
            borderRadius: 25,
            minWidth: 90,
            textAlign: 'center'

        },
        titleType: {
            width: '100%',
            textAlign: 'center',
            marginVertical: 20
        },
        textType:{
            marginLeft: 5
        }
    });

export default PokemonDetails;