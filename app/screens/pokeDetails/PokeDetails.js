// React
import React from 'react';
// React Native
import { ActivityIndicator, AsyncStorage, FlatList, Image, ScrollView, Text, View  } from 'react-native';
// React Native Elements
import { Card, Header } from 'react-native-elements';
// CSS
import styles from './PokeDetails.styles';
// Icons
import AntDesign from "react-native-vector-icons/AntDesign";
// Services
import firebaseAuth from '../../services/firebaseAuth/firebaseAuth';
// Helpers
import { navigateTo } from '../../helpers/inputHelper/inputHelper';


class PokeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: '',
      pokemonInfo: null
    }
    this.fireAuth = new firebaseAuth();
  }

  async componentDidMount() {
    // const pokemon = await AsyncStorage.getItem('pokemonName');
    this.setState({pokemonName: await AsyncStorage.getItem('pokemonName')});
    const pokemon = await AsyncStorage.getItem('pokemonUrl');
    /* const pokemonInfo = await  */fetch(`${pokemon}`).then(response => response.json())
    .then(data => {
      this.setState({ pokemonInfo: data });
    })
    .catch(error => console.error(error));
    /* this.setState({ pokemonInfo: pokemonInfo.results });
    console.log(this.state); */
  }

  logout = async () => {
    this.fireAuth.signOutUser();
    await AsyncStorage.setItem('uid', '');
    this.props.navigation.navigate('AuthLoading');
  }

  renderMoves = (moves) => {
    return (
      <View style={[styles.customListItem]}>
        <Text>{moves.name}</Text>
      </View>
    );
  }

  renderTypes = (types) => {
    return (
      <View style={[styles.customListItem2]}>
        <Text>{types.name}</Text>
      </View>
    );
  }

  render() {
    return (
      this.state.pokemonInfo ?
        <View style={[styles.container]}>
          <Header backgroundColor="#ff0017"
            leftComponent={<AntDesign name="arrowleft" color="#FFF" size={25}
            onPress={() => navigateTo(this.props.navigation, 'PokeList')}></AntDesign>}
            centerComponent={{ text: this.state.pokemonInfo.name, style: { color: '#fff', fontSize: 25 } }}
            rightComponent={<AntDesign name="logout" color="#FFF" size={25}
            onPress={() => this.logout()}></AntDesign>}
          />
          <ScrollView style={{width: '100%'}}>
            <View>
              <View style={[styles.container]}>
                <Image
                  source={{uri: this.state.pokemonInfo.sprites.front_default}}
                  style={[styles.container, {width: 150, height: 150}]} />
              </View>
              <Card containerStyle={[styles.containerStyle, {width: '100%'}]}
                wrapperStyle={[styles.innerContainerStyle]}>
                <View style={[styles.container2]}>
                  <View style={[styles.weigthHeight]}>
                    <Text style={[styles.smallData]}>Height:</Text>
                    <Text>{this.state.pokemonInfo.height}</Text>
                  </View>
                  <View style={[styles.weigthHeight]}>
                    <Text style={[styles.smallData]}>Weight:</Text>
                    <Text>{this.state.pokemonInfo.weight}</Text>
                  </View>
                </View>
                <View style={[styles.container3]}>
                  <Text style={[styles.smallData]}>Types:</Text>
                </View>
                <FlatList data={this.state.pokemonInfo.types}
                  numColumns={3}
                  keyExtractor={(item, index) => `${item.type.name}-${index}`}
                  renderItem={({item}) => this.renderTypes(item.type)}/>
              </Card>
              <View style={[styles.container]}>
                <Text style={{marginTop: 25, fontSize: 25, fontWeight: 'bold', color: '#ff0017'}}>Available Moves</Text>
              </View>
              <FlatList data={this.state.pokemonInfo.moves}
                numColumns={2}
                keyExtractor={(item, index) => `${item.move.name}-${index}`}
                renderItem={({item}) => this.renderMoves(item.move)}/>
            </View>
          </ScrollView>
        </View> : 
        <View style={[styles.container]}>
          <Header backgroundColor="#ff0017"
            leftComponent={<AntDesign name="arrowleft" color="#FFF" size={25}
            onPress={() => navigateTo(this.props.navigation, 'PokeList')}></AntDesign>}
            centerComponent={{ text: this.state.pokemonName, style: { color: '#fff', fontSize: 25 } }}
            rightComponent={<AntDesign name="logout" color="#FFF" size={25}
            onPress={() => this.logout()}></AntDesign>}
          />
          <ActivityIndicator size="large" style={[styles.container]}/>
        </View>
    );
  }

}

export default PokeDetails;