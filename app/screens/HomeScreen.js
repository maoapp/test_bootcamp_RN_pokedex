import React, { Component } from 'react'
import LoginScreen from './auth/login/LoginScreen';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <LoginScreen {...this.props} />
        )
    }
}