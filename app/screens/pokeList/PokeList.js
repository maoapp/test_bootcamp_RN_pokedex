// React
import React from 'react';
// React Native
import { ActivityIndicator, AsyncStorage, FlatList, Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
// React Native Elements
import { Card, Header } from 'react-native-elements';
// CSS
import styles from './PokeList.styles';
// Icons
import AntDesign from "react-native-vector-icons/AntDesign";
// Services
import firebaseAuth from '../../services/firebaseAuth/firebaseAuth';

class PokeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: null
    }
    this.onEndReachedCalledDuringMomentum = true;
    this.api = 'https://pokeapi.co/api/v2/pokemon';
    this.fireAuth = new firebaseAuth();
  }

  async componentDidMount() {
    const list = await fetch(this.api)
    .then(response => response.json())
    .catch(error => console.error(error));
    this.setState({ list: list.results });
  }

  characterDetails =  async (item) => {
    const { name, url } = item;
    await AsyncStorage.setItem('pokemonName', `${name}`);
    await AsyncStorage.setItem('pokemonUrl', `${url}`);
    this.props.navigation.navigate('PokeDetails');
  }

  logout = async () => {
    this.fireAuth.signOutUser();
    await AsyncStorage.setItem('uid', '');
    this.props.navigation.navigate('AuthLoading');
  }
  
  onEndReached = ({ distanceFromEnd }) => {
    if(!this.onEndReachedCalledDuringMomentum){
        this.fetchData();
        this.onEndReachedCalledDuringMomentum = true;
    }
  }

  renderCharacter = (item, index) => {
    console.log(item);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    return (
      <View style={[styles.customListItem]}>
        <TouchableHighlight style={{width: '100%'}}
          underlayColor="#F8F8F8"
          onPress={() => this.characterDetails(item)}>
          <Card containerStyle={[styles.containerStyle]}
            wrapperStyle={[styles.innerContainerStyle]}
            /* title={item.name}
            titleStyle={[styles.titleStyle]} */>
              <Image source={{ uri: imageUrl }}
              style={{width: 90, height: 90, margin: 0}} />
              <Text style={{marginBottom: 10, marginTop: 0, color: '#ff0017', fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
          </Card>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    const { list } = this.state;
    return (
      <View style={[styles.container]}>
        <Header backgroundColor="#ff0017"
          centerComponent={{ text: 'Pokémon List', style: { color: '#fff', fontSize: 25 } }}
          rightComponent={<AntDesign name="logout" color="#FFF" size={25}
          onPress={() => this.logout()}></AntDesign>}
        />
        <ScrollView style={{width: '100%'}}>
         {/* pagingEnabled={true}> */}
          {
            list ? <FlatList data={list}
              numColumns={2}
              keyExtractor={(item) => item.name}
              renderItem={({item, index}) => this.renderCharacter(item, index)}
              onEndReached={this.onEndReached.bind(this)}
              onEndReachedThreshold={0.5}
              onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}/> :
              <ActivityIndicator size="large"/>
          }
        </ScrollView>
      </View>
    );
  }
}

export default PokeList;