import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const arrowBack = require('../../../assets/back.png');

const TopBar = ({title, goBack, backgroundColor}) => (
  <View style={[styles.container, {backgroundColor: backgroundColor}]}>
    <TouchableOpacity style={{flex: 1}} onPress={() => goBack()}>
      <Image source={arrowBack} style={{width: 30, height: 30}}/>
    </TouchableOpacity>
    <Text style={[styles.text, {flexGrow: 1, justifyContent: 'center'}]}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingTop: 40,
    padding: 15
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

TopBar.defaultProps = {
  backgroundColor: 'tomato'
}

export default TopBar;
