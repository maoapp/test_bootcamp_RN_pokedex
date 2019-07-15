import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';

import AuthStyles from '../AuthStyles';
import appLogo from '../../../assets/logo.jpg';
import AuthService from '../../../services/auth/AuthService';

class RegisterScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            name: '',
            error: '',
            usernameTouched: false,
            passwordTouched: false,
            nameTouched: false,
            formStyle: AuthStyles.form,
            validationError: ''
        }

    }

    handleUsernameChange = username => {
        username = username.split(' ').join('');
        this.setState({
            username: username
        });
    }

    handleUsernameBlur = () => {
        this.setState({
            usernameTouched: true
        });
    }

    handlePasswordChange = password => {
        this.setState({
            password: password
        });
    }

    handlePasswordBlur = () => {
        this.setState({
            passwordTouched: true
        });
    }

    handleNameChange = name => {
        this.setState({
            name: name
        });
    }

    handleNameBlur = () => {
        this.setState({
            nameTouched: true
        });
    }

    handleFormStyle = () => {
        this.setState({
            formStyle: {
                ...AuthStyles.form,
                marginTop: 200
            }
        });
    }

    handleRegisterPress = async () => {
        const registerResponse = await AuthService.register({
            name: this.state.name,
            username: this.state.username.toLowerCase(),
            password: this.state.password
        });

        if (registerResponse === false) {
            Keyboard.dismiss();
            this.setState({
                validationError: 'There is already a user with this name, please try again.'
            });
        } else {
            // this.props.navigation.navigate('Register');
        }
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        this.setState({
            username: '',
            password: '',
            name: '',
            error: '',
            usernameTouched: false,
            passwordTouched: false,
            nameTouched: false,
            formStyle: AuthStyles.form,
            validationError: ''
        });
    }

    _keyboardDidHide() {
        this.setState({
            formStyle: {
                ...AuthStyles.form,
                marginTop: 0
            }
        });
    }

    render() {

        const { name, username, password, usernameTouched, passwordTouched, nameTouched } = this.state;

        const nameError = !name && nameTouched ? 'The name is required' : undefined;
        const usernameError = !username && usernameTouched ? 'The username is required' : undefined;
        const passwordError = !password && passwordTouched ? 'The password is required' : undefined;

        const registerButtonContainerStyle = [
            AuthStyles.buttonContainer,
            !username || !password || !name ? AuthStyles.buttonDisabled : AuthStyles.buttonEnabled,
            { backgroundColor: '#58b368', marginBottom: 100 }
        ];

        return (
            <KeyboardAvoidingView style={AuthStyles.container} behavior="padding">

                <Image source={appLogo} style={AuthStyles.logo}></Image>

                <View style={this.state.formStyle}>

                    <Text style={AuthStyles.screenHeaderText}>
                        Register
                    </Text>

                    <Text style={AuthStyles.errorText}>{this.state.validationError || ""}</Text>

                    <View style={AuthStyles.inputTextContainer}>
                        <TextInput
                            selectionColor="#428AF8"
                            style={AuthStyles.inputText}
                            value={this.state.nameError}
                            onChangeText={this.handleNameChange}
                            placeholder="Name"
                            onBlur={this.handleNameBlur}
                            onFocus={this.handleFormStyle}
                            returnKeyType="next"
                            returnKeyTypeLabel="next">
                        </TextInput>
                        <Text style={AuthStyles.errorText}>{nameError || ""}</Text>
                    </View>

                    <View style={AuthStyles.inputTextContainer}>
                        <TextInput
                            selectionColor="#428AF8"
                            style={AuthStyles.inputText}
                            value={this.state.username}
                            onChangeText={this.handleUsernameChange}
                            placeholder="bootcamp"
                            onBlur={this.handleUsernameBlur}
                            onFocus={this.handleFormStyle}
                            returnKeyType="next"
                            returnKeyTypeLabel="next">
                        </TextInput>
                        <Text style={AuthStyles.errorText}>{usernameError || ""}</Text>
                    </View>

                    <View style={AuthStyles.inputTextContainer}>
                        <TextInput
                            selectionColor="#428AF8"
                            style={AuthStyles.inputText}
                            value={this.state.password}
                            onChangeText={this.handlePasswordChange}
                            placeholder="Password"
                            onBlur={this.handlePasswordBlur}
                            onFocus={this.handleFormStyle}
                            secureTextEntry={true}
                            returnKeyType="done"
                            returnKeyTypeLabel="done">
                        </TextInput>
                        <Text style={AuthStyles.errorText}>{passwordError || ""}</Text>
                    </View>

                    <TouchableOpacity
                        style={registerButtonContainerStyle}
                        onPress={this.handleRegisterPress}
                        disabled={!username || !password || !name}>
                        <Text style={AuthStyles.registerButtonText}>Submit</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        );

    }

}

export default RegisterScreen;