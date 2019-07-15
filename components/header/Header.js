import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Header extends Component {
  render() {
    const { headerContainer, text } = styles
    const { title } = this.props
    return (
      <View style={headerContainer}>
        <Text style={text}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
  },
  text: {
    color: '#FF0000',
    fontFamily: 'pokemon-solid',
    letterSpacing: 8
  }
})

export default Header