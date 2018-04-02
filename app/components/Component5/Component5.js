
import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Component6 from '../Component6/Component6';

class Component5 extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(jsonResponse),
        });
      })
      .catch(console.log);
  }
  
  onPress(navigate) {
    navigate('Profile')
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    const { navigate } = this.props.navigation;
    //console.log(user);
    return(
      <TouchableHighlight onPress={() => this.onPress(navigate)}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{user.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return(
      <View>
        <ListView dataSource={this.state.userDataSource} renderRow={this.renderRow.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});

export default Component5;

//AppRegistry.registerComponent('Component5', () => Component5);