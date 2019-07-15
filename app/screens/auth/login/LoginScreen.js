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

import appLogo from '../../../assets/logo.jpg';
import AuthStyles from '../AuthStyles';
import AuthService from '../../../services/auth/AuthService';

class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: '',
            usernameTouched: false,
            passwordTouched: false,
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

    handleFormStyle = () => {
        this.setState({
            formStyle: {
                ...AuthStyles.form,
                marginTop: 100
            }
        });
    }

    handleLoginPress = async () => {

        await AuthService.login({ username: this.state.username.toLowerCase(), password: this.state.password })
            .then(response => {
                if (response === false) {
                    Keyboard.dismiss();
                    this.setState({
                        validationError: 'The credentials do not match with our records.'
                    });
                } else {
                    this.props.navigation.navigate('Register');
                }

            });
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
            error: '',
            usernameTouched: false,
            passwordTouched: false,
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

        const { username, password, usernameTouched, passwordTouched } = this.state;

        const usernameError = !username && usernameTouched ? 'The username is required' : undefined;
        const passwordError = !password && passwordTouched ? 'The password is required' : undefined;

        const loginButtonContainerStyle = [
            AuthStyles.buttonContainer,
            !username || !password ? AuthStyles.buttonDisabled : AuthStyles.buttonEnabled
        ];

        return (
            <KeyboardAvoidingView style={AuthStyles.container} behavior="padding">

                <Image source={appLogo} style={AuthStyles.logo}></Image>

                <View style={this.state.formStyle}>

                    <Text style={AuthStyles.screenHeaderText}>
                        Log In
                    </Text>

                    <Text style={AuthStyles.errorText}>{this.state.validationError || ""}</Text>

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
                        style={loginButtonContainerStyle}
                        onPress={this.handleLoginPress}
                        disabled={!username || !password}>
                        <Text style={AuthStyles.buttonText}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[AuthStyles.buttonContainer, { backgroundColor: '#58b368', marginBottom: 50 }]}
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={AuthStyles.registerButtonText}>Register</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        );

    }

}

export default LoginScreen;