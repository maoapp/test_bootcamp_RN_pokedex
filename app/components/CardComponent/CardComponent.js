// React
import React from 'react';
// React Native
import { Image, Text, TouchableHighlight, View} from 'react-native';
// React Native Elements
import { Card } from 'react-native-elements';
// Expo
import { LinearGradient } from 'expo-linear-gradient';
// CSS
import globalStyles from '../../theme/styles';

class  CardComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index + 1}.png`
    return (
      <View style={[globalStyles.cardWrapper]}>
        <TouchableHighlight style={{width: '100%'}}
          underlayColor="#F8F8F8"
          onPress={() => this.props.onClick(this.props.item)}>
          <Card containerStyle={[globalStyles.cardStyle]}
            wrapperStyle={[globalStyles.cardStyle]}>
              <LinearGradient style={[globalStyles.cardWrapper, {borderRadius: 25,}]}
                colors={['#2a88b7', '#74cfcf', '#20d3e0']}>
              <Image source={{ uri: imageUrl }}
              style={{width: 100, height: 100, margin: 0}} />
              <Text style={{marginBottom: 10, marginTop: 0, color: '#fff', fontWeight: 'bold', fontSize: 15}}>{this.props.item.name}</Text>
              </LinearGradient>
          </Card>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CardComponent;