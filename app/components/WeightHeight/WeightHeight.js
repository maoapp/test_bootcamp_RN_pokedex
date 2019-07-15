// React
import React from 'react';
// React Native Elements
import { Text, View } from 'react-native';
// CSS
import globalStyles from '../../theme/styles';

const WeightHeight = (props) => (
  <View style={[globalStyles.weigthHeight]}>
    <Text style={[globalStyles.weigthHeightTitle]}>{props.name}:</Text>
    <Text>{props.value}</Text>
  </View>
);

export default WeightHeight;