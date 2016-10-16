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
  View,
  NavigatorIOS
} from 'react-native';

import ChooseKeyword from './routes/ChooseKeyword';

export default class AwesomeProject extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ChooseKeyword,
          title: 'Trending'
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
