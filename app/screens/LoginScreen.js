
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import Form from '../components/form/Form';

const logo = require('../../assets/pokeball.png');

class LoginScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        password: ''
      }
    }

    this.onChangeField = this.onChangeField.bind(this);
  }

  onChangeField(value, key) {
    const { user } = this.state;

    this.setState({ user: {...user, [key]: value }});
  }

  render() {
    const { navigation } = this.props;
    const { user: { email, password } } = this.state;

    return(
      <View style={styles.container}>
        <Image style={styles.logoImage} source={logo} />
        <Text style={styles.logo}>POKEDEX</Text>
        <Form {...{email, navigation, password, onChangeField: this.onChangeField}}/>
      </View>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    letterSpacing: 6,
    fontSize: 20,
    marginBottom: 15
  },
  logoImage: {
    width: 60,
    height: 60
  }
})

export default LoginScreen;
