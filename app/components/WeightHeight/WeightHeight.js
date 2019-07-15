// React
import React from 'react';
// React Native Elements
import { Text, View } from 'react-native';
// Expo
import { LinearGradient } from 'expo-linear-gradient';
// CSS
import globalStyles from '../../theme/styles';

const WeightHeight = (props) => (
  <View style={[globalStyles.weigthHeight]}>
    <Text style={[globalStyles.weigthHeightTitle]}>{props.name}:</Text>
    <LinearGradient style={{margin: 5, padding: 5, borderRadius: 10, width: 70}}
      colors={['#e32716', '#e83d2a', '#e08175', '#e83d2a', '#e32716']}><Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>{props.value}</Text></LinearGradient>
  </View>
);

export default WeightHeight;