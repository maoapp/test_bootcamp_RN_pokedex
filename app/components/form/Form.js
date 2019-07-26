import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Form = ({navigation, email, password, onChangeField}) => (
  <View style={styles.container}>
    <View style={styles.formInput}>
      <FontAwesome name="user-o" size={20} color="black" />
      <TextInput 
        autoCapitalize="none"
        placeholder="Email"
        // placeholderTextColor="black"
        style={{flex: 1, marginLeft: 10}}
        value={email}
        onChangeText={value => onChangeField(value, 'email')}
        underlineColorAndroid="transparent"
        selectionColor="white"
        placeholder="Email"
      />
    </View>
    <View style={styles.formInput}>
      <MaterialIcons name="email" size={20} color="black" />
      <TextInput 
        autoCapitalize="none"
        placeholder="Password"
        style={{flex: 1, marginLeft: 10}}
        value={password}
        onChangeText={value => onChangeField(value, 'password')}
        underlineColorAndroid="transparent"
        selectionColor="white"
        placeholder="Password"
        secureTextEntry={true}
      />
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('List')} style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 80
  },
  formInput: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 60,
    marginBottom: 10
  },
  button: {
    padding: 8,
    borderRadius: 60,
    alignItems: 'center',
    backgroundColor: '#ef534f'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default Form;
