import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Home from './Home';
export default class Login extends React.Component{
    constructor (props){
        super(props);
        this.state ={isLoggedIn : false}
    }
    render(){
        const { navigation} = this.props; 
        if(this.state.isLoggedIn){
            return <Home />
        } else {
            return (
                <View style={styles.container}>
                    <Logo />
                    <Form screenProps={{ isLoggedIn: () => this.setState({ isLoggedIn: true }) }} navigation={navigation} type="Login"></Form>
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('Signup')}>
                            <Text style={styles.signupButton}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: '#9f0f26',
        fontSize:16
    },
    signupButton:{
        color:'#9f0f26bd',
        fontSize:16,
        fontWeight : '500'
    }
});