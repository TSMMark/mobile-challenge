/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swipe from './components/Swipe';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swipe/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
