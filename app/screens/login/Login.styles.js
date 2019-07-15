// React Native
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  container6: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  pokedexText: {
    width: 134,
    height: 39,
    marginBottom: 10
  },
  titleText: {
    color: '#ff0017',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 15
  },
  alignButtons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15
  },
  button: {
    backgroundColor: '#ff0017',
    height: 30,
    width: '40%',
    padding: 20,
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button1: {
    backgroundColor: '#ff0017',
    height: 30,
    padding: 20,
    margin: 5,
    borderRadius: 25
  },
  text: {
    borderColor: '#ff0017',
    borderRadius: 10,
    color: 'white'
  },
  inputFields: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textInput: {
    textAlign: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor:  '#ff0017',
    backgroundColor: 'white',
    height: 40,
    width: '70%',
    margin: 5
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
  icon: {
    textAlign: 'center'
  }
});

export default styles;