import React from  'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import auth from '../services/Auth'
import Login from './Login'
export default class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        
        if(auth.isAuthenticate()){

        }

        return (
            <Login {...this.props} />
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F6F5AE'
    }
})