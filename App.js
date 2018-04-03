
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Component5 from './app/components/Component5/Component5'
import Component6 from './app/components/Component6/Component6'

const App = StackNavigator({
  Home: { screen: Component5 },
  Profile: { screen: Component6},
});

export default class MyApp extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    const { navigation } = this.props;
    return(
      <App navigation={ navigation } />
    );
  }
}

AppRegistry.registerComponent('MyApp', () => App);
