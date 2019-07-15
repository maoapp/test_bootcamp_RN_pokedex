import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './app/components/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);
export default function App() {

  return (
    <AppContainer></AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
