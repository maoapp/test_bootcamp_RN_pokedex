import React from 'react'
import {View, Text, Image, StyleSheet,TouchableOpacity, TextInput, Keyboard, AsyncStorage} from 'react-native'
import SignUpUsers from '../services/SignUpUsers'
import auth from '../services/Auth';

const validator = require("email-validator");

export default class Form extends React.Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            error:null
        }
    }

    onPress = async()=>{
        const {email, password} = this.state;
        this.setState({error:null});

        Keyboard.dismiss();

        if(this.validation()){

            if(!validator.validate(email)){
                this.setState({error:'Invalid email'});   
                return
            }

            if(this.props.type !== 'login'){
                let result = SignUpUsers.signUp({email, password}).then((response)=>console.log("mi respuesta", response));
    
                if(result === false){
                    alert("You are already signup");
                }else{
                    auth.login(this.props.callback);
                }
            }else{

                let result = SignUpUsers.signIn({email, password})
                            .then((response)=>{
                                if(response === false){
                                    this.setState({error:'Invalid credentials'});
                                }else{
                                    auth.login(this.props.callback);
                                }
                            });
                
                

                /*try{
                    let authUser = await AsyncStorage.getItem('authUser');
                    authUser = JSON.parse(authUser);
                    console.log(authUser);

                    let {email, password} = authUser;

                    let result = SignUpUsers.signIn({email, password});
    
                    if(result === false){
                        this.setState({error:'Invalid credentials'});
                        console.log(this.state.error)
                    }else{ 
                        auth.login(this.props.callback);
                    }
    
                }catch(error)
                {
                    alert(error);
                }*/
            }
        }else{
            this.setState({error:'Please enter your credentials'});
        }
        
    }

    validation = ()=> {
        let {email, password} = this.state;
        return email && password
    }

    render(){
        let {error} = this.state;
        return (
            <View style={styles.container}>
                <TextInput 
                style={styles.textInput} 
                onChangeText={(email)=>this.setState({email})}
                placeholder="Email"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                />

                <TextInput 
                style={styles.textInput} 
                onChangeText={(password)=>this.setState({password})}
                placeholder="Password"
                secureTextEntry={true}
                ref={(input) => this.password = input} 
                />

                <TouchableOpacity style={styles.submitButton} onPress={this.onPress}> 
                    <Text style={styles.buttonText}>{this.props.type.toUpperCase()}</Text>
                </TouchableOpacity>

                {error ? <Text style={styles.error}>{error}</Text>: null  }
            </View>
        )
    }


}


let styles = StyleSheet.create({
    container:{

        flexDirection:'column'
    },
    textInput:{
        width:300,
        backgroundColor:'white',
        fontSize:16,
        padding:10,
        color:'#565554',
        borderRadius:5,
        marginBottom:10
    },
    submitButton:{
        width:300,
        backgroundColor:'#2E86AB',
        fontSize:16,
        padding:10,
        borderRadius:5,
        marginBottom:10,
    },
    buttonText:{
        fontSize: 16,
        textAlign:'center',
        color:'white',
    },
    error:{
        width:300,
        backgroundColor:'#F24236',
        fontSize:16,
        padding:10,
        borderRadius:5,
        marginBottom:10,
        color:'white',
        overflow:'hidden',
        marginTop:10
    }
})