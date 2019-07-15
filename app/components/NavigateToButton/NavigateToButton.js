// React
import React from 'react';
// React Native Elements
import { Button } from 'react-native-elements';
// Icons
import AntDesign from "react-native-vector-icons/AntDesign";
// CSS
import globalStyles from '../../theme/styles';

const NavigateToButton = (props) => (
  <Button buttonStyle={[globalStyles.navigateToButton]}
    containerStyle={{borderRadius: 25, width: '45%'}}
    icon={<AntDesign name={props.name} color="#FFF" size={25}></AntDesign>}
    title={props.title}
    onPress={() => props.onClick()} underlayColor="#6B0A0A"/>
);

export default NavigateToButton;