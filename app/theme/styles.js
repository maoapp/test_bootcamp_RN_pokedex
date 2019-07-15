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
    borderColor: '#ff0017',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCardStyle: {
    margin: 0,
    padding: 0,
    width: '100%',
    borderRadius: 25,
    borderColor: '#ff0017',
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
  }
});

export default styles;