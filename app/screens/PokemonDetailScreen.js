// @vendors
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

// @constants
import { TYPES_COLORS } from '../constants/constants';

// @components
import PokemonDetailCard from '../components/pokemonDetailCard/PokemonDetailCard';
import TopBar from '../components/TopBar/TopBar';

class PokemonDetail extends React.Component {
  constructor() {
    super();

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const { fetchPokemonDetail, navigation } = this.props;
    const id = navigation.getParam('id');

    fetchPokemonDetail(id);
  }

  goBack() {
    const { navigation, resetPokemonDetail } = this.props;

    resetPokemonDetail();
    navigation.goBack();
  }

  render() {
    const { pokemonDetail, navigation } = this.props;
    const { data } = pokemonDetail;

   
    
    let content = <View style={styles.container}><ActivityIndicator size="large" color="tomato" /></View>;

    if(data) {
      content = (
        <React.Fragment>
          <TopBar title="Pokemon Detail" goBack={this.goBack} backgroundColor={TYPES_COLORS[data.types[0].type.name]}/>
          <PokemonDetailCard {...{...data}} />
        </React.Fragment>
      )
    } 

    return content;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PokemonDetail;
