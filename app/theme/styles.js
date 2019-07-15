// React Native
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logos: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  pokedexTextLogo: {
    width: 134,
    height: 39,
    marginBottom: 10
  },
  cardWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 15
  },
  cardStyle: {
    margin: 0,
    padding: 0,
    width: '100%',
    borderRadius: 25,
    borderColor: '#2a88b7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigateToButton: {
    backgroundColor: '#ff0017',
    height: 30,
    padding: 20,
    margin: 5,
    borderRadius: 25
  },
  weigthHeight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weigthHeightTitle: {
    marginBottom: 10,
    marginTop: 0,
    color: '#ff0017',
    fontWeight: 'bold',
    fontSize: 15
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor:  '#ff0017',
    backgroundColor: 'white',
    height: 40,
    width: '80%',
    margin: 5
  },
  alignButtons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15
  },
  typesListItem: {
    marginTop: 0,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsContainer: {
    margin: 4,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;