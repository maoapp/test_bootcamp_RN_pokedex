// React
import React from 'react';
// React Native
import { Image, View } from 'react-native';
// CSS
import globalStyles from '../../theme/styles';

const Logos = () => (
  <View style={[globalStyles.logos]}>
    <Image
      source={require('../../assets/pokedex_logo.png')}
      style={{width: 90, height: 73}}
    />
    <Image style={[globalStyles.pokedexTextLogo]} source={require('../../assets/pokedex-text.png')} />
  </View>
);

export default Logos;
