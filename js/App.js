/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
}
from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	StatusBar,
	ListView,
}
from 'react-native';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';

var REQUEST_URL = 'http://some.site/api/users';

export
default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
		};
		StatusBar.setBarStyle('light-content');
	}

	componentDidMount() {
		this._fetchData();
	}

	_fetchData() {
    fetch(REQUEST_URL, {
      headers: {
        'Cookie': 'token='
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.users),
          loaded: true
        });
      })
      .done();
	}

  _renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading users....
        </Text>
      </View>
    )
  }

  _renderUser(user) {
    return (
      <UserCard user={user}/>
    );
  }

	render() {
    if(!this.state.dataSource) {
        return this._renderLoadingView();
    }

    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderUser}
        />
      </View>
    );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EEEEEE'
	}
});