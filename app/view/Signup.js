import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
export default class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false }
    }
    goBack(){        
        this.props.navigation.goBack();
    }
    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.wrapper} onPress={this.goBack.bind(this)}>
                    <Image style={styles.arrow} source={require('../../assets/arrowR.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Sign up</Text>
                <Form screenProps={{ isLoggedIn: () => this.setState({ isLoggedIn: true }) }} type="Signup" navigation={navigation}/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Login')}>
                        <Text style={styles.signupButton}> Sign in</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
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
    },
    title: {
        width: '100%',
        marginLeft: '20%',
        marginTop: '5%',
        fontWeight: 'bold',
        color: '#9f0f26',
        textAlign: 'left',
        fontSize: 32
    },
    wrapper: {
        marginTop: '10%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    arrow:{
        marginLeft: 20,
        width:30,
        height: 30,
    }
});