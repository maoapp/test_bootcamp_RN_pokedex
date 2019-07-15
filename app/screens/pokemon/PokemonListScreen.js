import React, { Component } from 'react';

import { View, ActivityIndicator, Dimensions, FlatList, StyleSheet, SafeAreaView, } from 'react-native';
import { Card, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Component Service
import PokemonService from '../../services/pokemon/PokemonService';


class PokemonListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            isLoading: true,
            setOnLoad: false,
            currentPage: 0
        }

        this.viewMore = this.viewMore.bind(this);
    }

    componentDidMount() {
        this.loadPokemons();
    }

    loadPokemons = () => {

        PokemonService.getPokemons(this.state.currentPage).then((pokemons) => {

            if (pokemons && pokemons.data && pokemons.data.results) {

                let pokemonsArray = [];

                pokemons.data.results.map((element) => {
                    const splittedUrl = element.url.split('/');
                    let pokemonId = splittedUrl[splittedUrl.length - 2];
                    element.avatar = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
                    element.id = pokemonId;
                    pokemonsArray.push(element);
                });

                this.setState({
                    pokemons: [...this.state.pokemons, ...pokemonsArray],
                    isLoading: false
                })

            }
        }).catch((e) => {
            console.log("Something went wrong getting the pokemon list.");
            this.setState({
                isLoading: false
            });
        });
    }

    viewMore(pokemon) {
        this.props.navigation.navigate('PokemonDetail', {
            pokemon: pokemon
        });
    }

    renderCard = (pokemon) => (
        <Card
            containerStyle={styles.cardContainer}
            imageStyle={styles.imageStyle}
            title={pokemon.name}
            image={{ uri: pokemon.avatar }}>

            <Button
                backgroundColor='#03A9F4'
                onPress={() => this.viewMore(pokemon) }
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW MORE' />
        </Card>
    )

    renderButton = () => (
        < Button
            icon={
                < Icon
                    name="arrow-left"
                    size={15}
                    color="white"
                />
            }
            type="clear"
            onPress={() => this.props.navigation.navigate("Login")}
        />
    )

    render() {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>

                    <Header
                        leftComponent={this.renderButton}
                        centerComponent={{ text: 'Pokemon List', style: { color: '#fff' } }}
                    />

                    {this.state.isLoading ? <View style={styles.container}>
                        <ActivityIndicator></ActivityIndicator>
                    </View> : undefined}

                    <FlatList
                        contentContainerStyle={styles.flatList}
                        data={this.state.pokemons}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => this.renderCard(item)}
                        horizontal={false}
                        onEndReachedThreshold={0}
                        onEndReached={({ distanceFromEnd }) => {
                            this.setState(
                                {
                                    currentPage: this.state.currentPage + 1,
                                    isLoading: true
                                },
                                () => {
                                    this.loadPokemons();
                                }
                            );
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15
    },
    flatList: {
        flexDirection: "column",
        alignItems: "center"
    },
    cardContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        padding: 5,
        width: Math.round(Dimensions.get("window").width) - 40,
    },
    imageStyle: {
        width: Math.round(Dimensions.get("window").width) - 80,
        height: 280,
        marginLeft: "auto",
        marginRight: "auto",
        alignSelf: "center"

    }
});

export default PokemonListScreen;

