import React from 'react';
import { View, TouchableOpacity, ScrollView, 
    StyleSheet, FlatList, ActivityIndicator,AsyncStorage,Text} from 'react-native';
import * as config from "../constants/config";
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';

class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { 
            list: [], 
            loading: true, 
            url: config.poke_endpoint, 
            modalVisible: false,
            pokeName : '',
            next : null,
            previous: null,
            isFirst: true,
            isLast: false
        }
        this.mounted = false;
        this.renderCharacter = this.renderCharacter.bind(this);
        this.goToDetail = this.goToDetail.bind(this);
        this.clearStorage =  this.clearStorage.bind(this);
        this.getList = this.getList.bind(this);
    }

    componentDidMount() {

        this.mounted = true;
        if(this.mounted) {this.getList();}
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    clearStorage(){
        this.setState({ list: [] });
        AsyncStorage.clear();
    }

    getList(){
        this.clearStorage();
        const {url} = this.state;
        fetch(url)
        .then(response => response.json())
        .then(res => {
            let first , last;
            if (res.previous == null || res.previous == undefined) {
                first = true;
            }else if (res.previous != null || res.previous != undefined){
                first = false;
            }

            if (res.next == null || res.next == undefined) {
                last = true;
            } else if (res.next != null || res.next != undefined) {
                last = false;
            }
            
            
            this.setState({
                list: res.results,
                next: res.next,
                previous: res.previous,
                loading: false,
                isFirst: first,
                isLast: last
            });
            
        });
    }

    goToDetail(name) {
        this.props.navigation.navigate('Detail', {
            name: name,
        });
    }

    renderCharacter(item){        
        let {url,name} = item;
        return (
            <View style={styles.flexList}>
                <PokemonList navigation={this.props.navigation} url={url}/>
            </View>
        );
    }

    prevUrlHandler(){
        this.setState ({
            url: this.state.previous }, () => { this.getList(); });
    }

    nextUrlHandler(){
        this.setState({
            url: this.state.next }, () => { this.getList(); });
    }

    render(){
        const { list, loading, isFirst ,isLast } = this.state;
        
        return (
            <View style={styles.container}>
                
                <ScrollView style={styles.scroll}>
                    {!loading ? (
                        <FlatList
                            data={list}
                            keyExtractor={({ name }) => name}
                            renderItem={({ item }) => this.renderCharacter(item)}
                            numColumns={numCol} />
                    ) : (<ActivityIndicator />)} 
                        
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity style={isFirst ? styles.ButtonDisabled : styles.Button }
                            disabled={isFirst}
                            onPress={this.prevUrlHandler.bind(this)}>
                            <Text style={styles.btnText}>Prev</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Button}
                            disabled={isLast}
                            onPress={this.nextUrlHandler.bind(this)}
                            title="Next">
                            <Text style={styles.btnText}>Next</Text>
                        </TouchableOpacity>
                        </View>
                </ScrollView>

                
            </View>
        );
    }
}
const numCol= 2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
    scroll: {
        margin: 10,
    },
    flexList: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        margin: '2%',

        backgroundColor: '#f248619e',
        paddingBottom: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Button: {
        margin: 10,
        height: 40, 
        backgroundColor: '#aa263d',
        width: '50%',
        alignItems: 'center'
    },
    ButtonDisabled: {
        margin: 10,
        height: 40, 
        backgroundColor: '#e386939e',
        width: '50%',
        alignItems: 'center'
    },
    btnText:{
        color: '#fff',
        textAlign: 'center',
        marginTop: 7
    }
})

export default Home;