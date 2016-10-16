import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swipe from '../components/Swipe';

import { yellow } from '../constants/Color';

export default class SwipeGifs extends Component {

  static propTypes = {
    keyword: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Swipe keyword={this.props.keyword} />
      </View>
    )
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: yellow,
  }

})
