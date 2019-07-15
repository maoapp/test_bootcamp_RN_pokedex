// React
import React from 'react';
// React Native
import { ActivityIndicator, AsyncStorage, FlatList, Image, ScrollView, Text, View  } from 'react-native';
// React Native Elements
import { Card, Header } from 'react-native-elements';
// Expo
import { LinearGradient } from 'expo-linear-gradient';
// CSS
import globalStyles from '../../theme/styles';
// Icons
import AntDesign from "react-native-vector-icons/AntDesign";
// Services
import firebaseAuth from '../../services/firebaseAuth/firebaseAuth';
// Helpers
import { navigateTo } from '../../helpers/inputHelper/inputHelper';
// Components
import WeightHeight from '../../components/WeightHeight/WeightHeight';


class PokeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: '',
      pokemonInfo: null
    }
    this.isLoadingData = false;
    this.fireAuth = new firebaseAuth();
  }

  async componentDidMount() {
    this.isLoadingData = true;
    this.setState({pokemonName: await AsyncStorage.getItem('pokemonName')});
    const pokemon = await AsyncStorage.getItem('pokemonUrl');
    fetch(`${pokemon}`).then(response => response.json())
    .then(data => {
      this.setState({ pokemonInfo: data });
      this.isLoadingData = false;
    })
    .catch(error => console.error(error));
  }

  logout = async () => {
    if (!this.isLoadingData) {
      this.fireAuth.signOutUser();
      await AsyncStorage.setItem('uid', '');
      this.props.navigation.navigate('AuthLoading');
    }
  }

  renderListItems = (characteristic, style, colors) => {
    return (
      <LinearGradient style={[style, {borderRadius: 10}]}
        colors={colors}>
        <Text style={{margin: 5, padding: 5, textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>{characteristic.name}</Text>
      </LinearGradient>
    );
  }

  render() {
    return (
      this.state.pokemonInfo ?
        <View style={[globalStyles.container]}>
          <Header backgroundColor="#ff0017"
            leftComponent={<AntDesign name="arrowleft" color="#FFF" size={25}
            onPress={() => navigateTo(this.props.navigation, 'PokeList')}></AntDesign>}
            centerComponent={{ text: this.state.pokemonInfo.name, style: { color: '#fff', fontSize: 25 } }}
            rightComponent={<AntDesign name="logout" color="#FFF" size={25}
            onPress={() => this.logout()}></AntDesign>}
          />
          <ScrollView style={{width: '100%'}}>
            <View>
              <View style={[globalStyles.container]}>
                <Image
                  source={{uri: this.state.pokemonInfo.sprites.front_default}}
                  style={[globalStyles.container, {width: 160, height: 160}]} />
              </View>
              <View style={[globalStyles.container]}>
                <Card containerStyle={[globalStyles.cardStyle, {width: '70%'}]}
                  wrapperStyle={[globalStyles.cardStyle]}>
                  <View style={[globalStyles.detailsContainer, {flexDirection: 'row'}]}>
                    <WeightHeight name="Height" value={this.state.pokemonInfo.height} />
                    <WeightHeight name="Weight" value={this.state.pokemonInfo.weight} />
                  </View>
                  <View style={[globalStyles.detailsContainer]}>
                    <Text style={[globalStyles.weigthHeightTitle]}>Types:</Text>
                  </View>
                  <FlatList data={this.state.pokemonInfo.types}
                    numColumns={3}
                    keyExtractor={(item, index) => `${item.type.name}-${index}`}
                    renderItem={({item}) => this.renderListItems(item.type, globalStyles.typesListItem, ['#e32716', '#e83d2a', '#e08175', '#e83d2a', '#e32716'])}/>
                </Card>
              </View>
              <View style={[globalStyles.container]}>
                <Text style={{marginTop: 25, fontSize: 25, fontWeight: 'bold', color: '#ff0017'}}>Available Moves</Text>
              </View>
              <FlatList data={this.state.pokemonInfo.moves}
                numColumns={2}
                keyExtractor={(item, index) => `${item.move.name}-${index}`}
                renderItem={({item}) => this.renderListItems(item.move, globalStyles.cardWrapper, ['#2a88b7', '#74cfcf', '#12bbc7', '#74cfcf', '#2a88b7'])}/>
            </View>
          </ScrollView>
        </View> : 
        <View style={[globalStyles.container]}>
          <Header backgroundColor="#ff0017"
            leftComponent={<AntDesign name="arrowleft" color="#FFF" size={25}
            onPress={() => navigateTo(this.props.navigation, 'PokeList')}></AntDesign>}
            centerComponent={{ text: this.state.pokemonName, style: { color: '#fff', fontSize: 25 } }}
            rightComponent={<AntDesign name="logout" color="#FFF" size={25}
            onPress={() => this.logout()}></AntDesign>}
          />
          <ActivityIndicator size="large" style={[globalStyles.container]}/>
        </View>
    );
  }

}

export default PokeDetails;