import { AsyncStorage } from 'react-native';

export const cleanInput = (input) => {
  return input.toString().trim();
}

export const fieldChange = (text, fieldName) => {
  return { [fieldName]: cleanInput(text) };
}

export const showHide = (field, state) => {
  const oldState = {...state};
  return !oldState[field];
}

export const navigateTo = (navigation, screen) => {
  navigation.navigate(screen);
}

export const _bootstrapAsync = async (navigation) => {
  const uid = await AsyncStorage.getItem('uid');
  navigation.navigate(uid ? 'App' : 'Auth');
};
