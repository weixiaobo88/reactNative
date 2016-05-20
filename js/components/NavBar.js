/**
 * Created by kylefang on 5/19/16.
 * @flow
 */

'use strict';

import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navBarTitle}>ThoughtWorkers</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    height: 64,
    backgroundColor: '#F50057',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  navBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
