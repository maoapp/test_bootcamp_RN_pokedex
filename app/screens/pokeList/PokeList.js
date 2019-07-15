// React
import React from 'react';
// React Native
import { ActivityIndicator, AsyncStorage, FlatList, View} from 'react-native';
// React Native Elements
import { Header } from 'react-native-elements';
// CSS
import globalStyles from '../../theme/styles';
// Icons
import AntDesign from "react-native-vector-icons/AntDesign";
// Services
import firebaseAuth from '../../services/firebaseAuth/firebaseAuth';
// Components
import CardComponent from '../../components/CardComponent/CardComponent';

class PokeList extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      list: []
    }
    this.isLoadingData = false;
    this.fireAuth = new firebaseAuth();
  }

  componentDidMount() {
    this.makeRequest();
  }

  makeRequest = async () => {
    this.isLoadingData = true;
    const {pageNumber} = this.state;
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${10 * pageNumber}&limit=10`;
    const list = await fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
    this.setState({list: [...this.state.list, ...list.results]});
    this.isLoadingData = false;
  }

  handleLoadMore = () => {
    this.setState({pageNumber: this.state.pageNumber + 1}, () => {
      this.makeRequest();
    });
  }

  logout = async () => {
    if (!this.isLoadingData) {
      await AsyncStorage.setItem('uid', '');
      this.fireAuth.signOutUser();
      this.props.navigation.navigate('AuthLoading');
    }
  }
  
  onEndReached = () => {
    if (!this.isLoadingData) {
      this.handleLoadMore();
    }
  }

  characterDetails =  async (item) => {
    const { name, url } = item;
    await AsyncStorage.setItem('pokemonName', `${name}`);
    await AsyncStorage.setItem('pokemonUrl', `${url}`);
    this.props.navigation.navigate('PokeDetails');
  }

  renderCharacter = (item, index) => {
    return (
      <CardComponent item={item} index={index} onClick={(item) => this.characterDetails(item)}></CardComponent>
    );
  }

  render() {
    const { list } = this.state;
    return (
      <View style={[globalStyles.container]}>
        <Header backgroundColor="#ff0017"
          centerComponent={{ text: 'Pokémon List', style: { color: '#fff', fontSize: 25 } }}
          rightComponent={<AntDesign name="logout" color="#FFF" size={25}
          onPress={() => this.logout()}></AntDesign>}
        />
        <View style={{width: '100%', height: 100, display: 'flex', flex: 1}}>
          {
            list ? <FlatList data={list}
              bounces={false}
              numColumns={2}
              keyExtractor={item => item.name}
              renderItem={({item, index}) => this.renderCharacter(item, index)}
              onEndReached={this.onEndReached.bind(this)}
              onEndReachedThreshold={0.5} /> :
              <ActivityIndicator size="large"/>
          }
          { !this.isLoadingData ? <ActivityIndicator size="large"/> : null }
          </View>
      </View>
    );
  }
}

export default PokeList;