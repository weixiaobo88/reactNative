/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ListView,
} from 'react-native';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';

export default class App extends Component {
  constructor() {
    super();
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2)=>r1 !== r2
    });
    StatusBar.setBarStyle('light-content');
  }

  render() {
    const ds = this.dataSource.cloneWithRows([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          dataSource={ds}
          renderRow={()=><UserCard />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});
