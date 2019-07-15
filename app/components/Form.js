import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Form extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            emailValidation : true,
            password: '',
            passwordValidate: true,
            showError: false,
            user: '',
            errorMsg: '',
        }
        this.verifyUser = this.verifyUser.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.showErrorMessage = this.showErrorMessage.bind(this);
        this.saveLogState = this.saveLogState.bind(this);
    }

    validate(text,type){
        var email= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var num =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        if(type=="email"){
            if (email.test(text)) {
                this.setState({ emailValidation: true, email: text });
            } else {
                this.setState({ emailValidation: false });
            }
        }else if(type=="password"){
            if (num.test(text)) {
                this.setState({ passwordValidate: true, password: text,showError: false});
            }else{
                if (this.props.type == 'Signup') {
                    let msg = 'password must contain at least: 1 uppercase character, 1 number ,must be 8 characters or longer';
                    this.showErrorMessage(msg, true);
                }
                this.setState({ passwordValidate: false });
            }
        }else if(type == "name"){
            this.setState({ name : text})
        }
    }

    async verifyUser(key){
        try {
            await AsyncStorage.getItem(key).then((val) => {
                this.setState({ user: JSON.parse(val)});
                });
        } catch (error) {
            console.log('Error: ', error);
        }
        
    }

    
    async saveUser (data,key) {
        try {
            let user = JSON.stringify(data);
            
            await AsyncStorage.setItem(key, user);
        } catch (error) {
            // Error saving data
            console.log(error);
            
        }
    };

    showErrorMessage(msg,state){
        this.setState({
            errorMsg: msg,
            showError: state
        });
    }

    saveLogState(){        
        this.props.screenProps.isLoggedIn();
    }

    buttonHandler(){

        let {type} = this.props;
        let { name, email, password } = this.state;
        
        if (type =='Login'){

            if (email != '') {
                if (password != '') {

                    this.verifyUser(email).then(() => {
                        let { user: user } = this.state;
                        if (user != null) {

                            if ((user.email == email) && (user.password == password)) {
                                this.setState({ showError: false });
                                this.saveLogState();
                                this.props.navigation.navigate('Home');
                            } else {
                                let msg = `We couldn’t find an account matching the email and password you entered. Please verify and try again.`;
                                this.showErrorMessage(msg, true)
                            }


                        } else {

                            let msg = `We couldn’t find an account matching the email and password you entered. Please verify and try again.`;
                            this.showErrorMessage(msg, true)
                        }
                    });  

                } else {
                    let msg = `All fields are required, please verify and try again.`;
                    this.showErrorMessage(msg, true)
                }
            } else {
                let msg = `All fields are required, please verify and try again.`;
                this.showErrorMessage(msg, true)
            }

        } else if (type == "Signup"){
            let user = {
                name: name,
                email: email,
                password: password
            }
            this.verifyUser(email).then( () => {
                let {user:res } = this.state;
                if (res == null) {
                    this.setState({ showError: false });
                    this.saveUser(user, email).then(() => {
                        this.saveLogState();
                        this.props.navigation.navigate('Home');
                    });
                }else{
                    let msg = 'Already exist an account with this email, please check and try again. ';
                    this.showErrorMessage(msg, true);
                }
            });
        }
    }

    render() {
        
        let { type } = this.props;
        return (
            <View style={styles.container}>
                {this.state.showError ? <Text style={styles.errorMsg}>{this.state.errorMsg}</Text> : null}
                {(type == 'Signup') ?
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Name"
                        keyboardType="default"
                        onChangeText={(text) => { this.validate(text, 'name') }}
                        placeholderTextColor="#ffffff"
                        onSubmitEditing={() => this.email.focus()} />
                    : null}
                <TextInput style={[styles.inputBox,
                    !this.state.emailValidation ? styles.error : null]} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email address"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onChangeText={(text) => { this.validate(text, 'email') }}
                    ref={(input) => this.email =input}
                    onSubmitEditing={() => this.password.focus()}/>
                <TextInput style={[styles.inputBox,
                    !this.state.passwordValidate ? styles.error : null]}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    onChangeText={(text) => { this.validate(text,'password')}}
                    ref={(input) => this.password = input}/>
                
                    <TouchableOpacity style={styles.button} onPress={this.buttonHandler.bind(this)}>
                        
                    <Text style={styles.buttonText}>{type}</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    inputBox: {
        width: 300,
        height: 45,
        backgroundColor: '#a92d406e',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#fff',
        marginVertical: 10
    },
    button: {
        width: 300,
        height: 45,
        backgroundColor: '#9f0f26',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },  
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    },
    error: {
        borderWidth: 3,
        borderColor: '#9f0f26',
        borderRadius: 25,

    },
    errorMsg: {
        width: 300,
        height: 80,
        backgroundColor: '#c0b66c6b',
        fontSize: 14,
        color: '#7c6f14c2',
        padding: 10,
        textAlign: 'center'

    }
})