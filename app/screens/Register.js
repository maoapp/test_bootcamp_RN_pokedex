import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Form from '../components/Form'
export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.itemImage} source={require('../assets/logo.png')} />
                <Text style={styles.login}>Register</Text>
                <Form type="register" callback={ () => this.props.navigation.navigate('PokedexScreen')} />
            </View>
        )
    }

}


let styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#F6F5AE',
        padding: 20
    },
    itemImage:{
        margin: 20
    },
    welcome:{
        fontSize: 18, marginBottom:40
    },
    login:{
        fontSize: 40,
        color:'#2E86AB',
        marginBottom:20
    },
    newUser:{
        marginTop:30,
        marginBottom:10,
    },
    registerButton:{
        width:300,
        fontSize:16,
        padding:10,
        borderRadius:5,
        marginBottom:10,
        borderColor:'black',
        borderWidth:1
    },
    buttonText:{
        fontSize: 16,
        textAlign:'center',
    }
})