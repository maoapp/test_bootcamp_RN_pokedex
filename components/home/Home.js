/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { View, Text, StyleSheet, AsyncStorage, TextInput, TouchableOpacity } from 'react-native'

const Home = (props) => {
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [mailMsg, setMailMsg] = useState('')
  const [passMsg, setPassMsg] = useState('')
  const { homeText, container, input, error } = styles
  function onChangeMail(value) {
    if(mail !== '') {
      setMailMsg('')
    }
    setMail(value)
  }
  function onChangePass(value) {
    if(pass !== '') {
      setPassMsg('')
    }
    setPass(value)
  }
  async function handleSubmit() {
    if(mail !== 'admin@mail.com') {
      setMailMsg('Comprueba tus credenciales!')
      if(mail === '') {
        setMailMsg('Este campo es necesario!')
      }
    }
    if(pass !== 'admin123') {
      setPassMsg('Comprueba tus credenciales!')
      if(pass === '') {
        setPassMsg('Este campo es necesario!')
      }
    }
    if(pass === 'admin123' && mail === 'admin@mail.com') {
      await AsyncStorage.setItem('userToken', 'abc')
      props.navigation.navigate('App')
    }
  }

  return (
    <View style={container}>
      <Text style={homeText}>Ingresa a tu Pokedex!</Text>
      <TextInput
        placeholder="E-mail"
        onChangeText={onChangeMail}
        value={mail}
        style={input}
        keyboardType="email-address"
      />
      <Text style={error}>{mailMsg}</Text>
      <TextInput
        secureTextEntry
        placeholder="Contrasena"
        onChangeText={onChangePass}
        value={pass}
        style={input}
      />
      <Text style={error}>{passMsg}</Text>
      <TouchableOpacity style={styles.accessButton} onPress={handleSubmit}>
        <Text style={styles.accessButtonText}>Acceder</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontFamily: 'pokemon-solid',
    letterSpacing: 2,
    color: '#CC0000',
    fontSize: 26,
  },
  input: {
    margin: 10,
    borderColor: '#FF0000',
    borderWidth: 1,
    height: 40,
    padding: 10,
    width: 200,
  },
  accessButton: {
    borderWidth: 1,
    borderColor: '#FFDE00',
    backgroundColor: '#FFDE00',
    padding: 15,
    margin: 5,
  },
  accessButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  error: {
    color: 'red'
  }
})

export default Home
