import React, { Component } from 'react';
import { View, ActivityIndicator, Dimensions, StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import { Card, Button, Header, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PokemonService from '../../services/pokemon/PokemonService';

class PokemonDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonInfo: null,
            properties: null,
            isLoading: true
        };
    }

    renderButton = () => {
        return (
            < Button
                icon={
                    < Icon
                        name="arrow-left"
                        size={15}
                        color="white"
                    />
                }
                type="clear"
                onPress={() => this.props.navigation.goBack()}
            />
        )
    }

    async componentDidMount() {

        let { pokemon } = this.props.navigation.state.params;

        this.setState({
            pokemonInfo: pokemon
        })

        await PokemonService.getPokemon(pokemon.id).then((pokemonDetail) => {

            if (pokemonDetail && pokemonDetail.data) {
                this.setState({
                    properties: pokemonDetail.data,
                    isLoading: false
                })
            }
        }).catch((err) => {
            console.log("Something went wrong getting the pokemon detail.");
        });

    }

    componentWillUnmount() {
        this.setState({
            pokemonInfo: null,
            properties: null,
            isLoading: true
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            )
        }

        const { name, avatar } = this.state.pokemonInfo;
        const { base_experience, height, order, weight, abilities, moves, types } = this.state.properties;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView >
                    <View style={styles.container}>

                        <Header
                            leftComponent={this.renderButton}
                            centerComponent={{ text: 'Pokemon Detail', style: { color: '#fff' } }}
                        />

                        <Card
                            containerStyle={styles.cardContainer}
                            title={name}>

                            <Avatar
                                rounded
                                source={{ uri: avatar }}
                                size="large"
                                containerStyle={styles.imageStyle}
                            />

                            <Text style={styles.pokemonLabel}>* Order: {order}</Text>
                            <Text style={styles.pokemonLabel}>* Experience: {base_experience}</Text>
                            <Text style={styles.pokemonLabel}>* Height: {height}</Text>
                            <Text style={styles.pokemonLabel}>* Weight: {weight}</Text>

                            <Text style={styles.pokemonLabel}>* Types:</Text>
                            <View>
                                {
                                    types.map((el, index) => <Text key={`type-${index}`}> - {el.type.name}</Text>)
                                }
                            </View>

                            <Text style={styles.pokemonLabel}>Abilities:</Text>
                            <View>
                                {
                                    abilities.map((el, index) => <Text key={`ability-${index}`}> - {el.ability.name}</Text>)
                                }
                            </View>

                            <Text style={styles.pokemonLabel}>* Moves:</Text>
                            <View>
                                {
                                    moves.map((el, index) => <Text key={`move-${index}`}> - {el.move.name}</Text>)
                                }
                            </View>

                        </Card>

                    </View>
                </ScrollView>
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
        width: 150,
        height: 150,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center"

    },
    pokemonLabel: {
        fontSize: 12,
        fontWeight: "bold"
    }
});

export default PokemonDetailScreen;