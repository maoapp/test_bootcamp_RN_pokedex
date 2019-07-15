import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
// Helpers
import { _bootstrapAsync } from '../../helpers/inputHelper/inputHelper';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    _bootstrapAsync(this.props.navigation);
  }

  // Render any loading content
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;