/**
 * Created by kylefang on 5/19/16.
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default class UserCard extends Component {
  render() {
    const {name, avatar, email, title, project, office} = this.props.user;

    return (
      <View style={[styles.card, styles.shadow]}>
        <Image
          style={styles.avatar}
          source={ {uri: avatar} }
        />
        <View style={styles.textWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.office}>{office}</Text>
          <Text style={styles.job}>{`${title} in ${project}`}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold'
  },
  office: {
    fontSize: 14,
    color: '#ffffff',
    backgroundColor: '#F50057',
    padding: 5,
    alignSelf: 'flex-start'
  },
  job: {
    fontSize: 14,
    color: '#666666'
  },
  email: {
    fontSize: 12,
    color: '#999999'
  },
  card: {
    backgroundColor: 'white',
    height: 103,
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  avatar: {
    width: 73,
    height: 73
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});

