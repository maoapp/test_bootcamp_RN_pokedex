import React from "react";
import PokeRow from "./PokeRow";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      limit: 40,
      offset: 0
    };
    this.renderItem.bind(this);
  }

  async componentDidMount() {
    this.pokeApiRequest();
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  pokeApiRequest = () => {
    const { limit, offset } = this.state;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    this.setState({});
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res.results]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLoadMore = () => {
    this.setState(
      {
        offset: this.state.offset + 40
      },
      () => {
        this.pokeApiRequest();
      }
    );
  };

  renderItem(data) {
    let url = data.item.url.match(/([^\/]*)\/*$/)[1];
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`;
    return (
      <PokeRow
        name={this.Capitalize(data.item.name)}
        number={url}
        imgUrl={imgUrl}
        navigation={this.props.navigation}
      />
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.name}
          renderItem={data => this.renderItem(data)}
          onEndReached={this.handleLoadMore}
          onEndThreshold={0}
        ></FlatList>
      </View>
    );
  }
}

export default PokeList;
