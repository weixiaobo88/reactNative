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
    return (
      <View style={[style.card, style.shadow]}>
        <Image
          style={style.avatar}
          source={ {uri: 'https://pbs.twimg.com/profile_images/565169119884881921/iTCTERmI.png'} }
          />
        <View style={style.textWrapper}>
          <Text style={style.name}>方志刚</Text>
          <Text style={style.job}>Dev on SWA</Text>
          <Text style={style.email}>zgfang@thoughtworks.com</Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
  job: {
    fontSize: 14,
    color: '#666666',
  },
  email: {
    fontSize: 12,
    color: '#999999',
  },
  card: {
    backgroundColor: 'white',
    height: 103,
    marginHorizontal: 7,
    marginVertical: 3,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 73,
    height: 73,
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
})

