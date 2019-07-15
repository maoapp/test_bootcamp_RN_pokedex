// React Native
import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    margin: 4,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container3: {
    margin: 4,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weigthHeight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallData: {
    marginBottom: 10,
    marginTop: 0,
    color: '#ff0017',
    fontWeight: 'bold',
    fontSize: 15
  },
  customList: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  customListItem: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    margin: 15
  },
  customListItem2: {
    /* width: '50%', */
    marginTop: 0,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  titleStyle: {
    color: '#ff0017',
    marginBottom: 0,
    padding: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerStyle: {
    margin: 0,
    padding: 0,
    width: '100%',
    borderRadius: 25,
    borderColor: '#ff0017',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainerStyle: {
    margin: 0,
    padding: 0,
    width: '100%',
    borderRadius: 25,
    borderColor: '#ff0017',
    justifyContent: 'center',
    alignItems: 'center'
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
    borderRadius: 10,
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
  button2: {
    backgroundColor: '#ffffff',
    /* height: 30,
    width: 40,
    padding: 20,
    margin: 5,
    borderRadius: 25 */
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
    borderRadius: 10,
    borderColor:  '#ff0017',
    height: 40,
    width: '50%',
    margin: 5
  },
  icon: {
    textAlign: 'center'
  }
});

export default styles;