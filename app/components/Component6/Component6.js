
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Component6 extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props) {
    //console.log(props);
    super(props);
    /* this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
    }; */
  }

  render() {
    return(
      <View>
        {/* <Text>{this.state.name}</Text>
        <Text>{this.state.email}</Text> */}
        <Text>Ola mundo</Text>
      </View>
    );
  }
}
/*
export default class Component6 extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  constructor() {
    super();
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
    };
  }

  render() {
    return(
      <View>
        <Text>{this.state.name}</Text>
        <Text>{this.state.email}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component6', () => Component6);
*/

export default Component6;