import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

import SwipeGifs from '../routes/SwipeGifs';

import { yellow } from '../constants/Color';

const trending = [
  'Pokemon',
  'Pugs',
  'Kawaii',
  'Kitten',
  'Trump',
  'Meme',
  'Trippy',
  'Arrested Development',
  'Kitten'
];

export default class ChooseKeyword extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this._onChooseKeyword = this._onChooseKeyword.bind(this);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(trending),
    };
  }

  _onChooseKeyword(keyword) {
    this.props.navigator.push({
      component: SwipeGifs,
      title: keyword,
      passProps: { keyword: keyword }
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(keyword) => {
          return (
            <TouchableHighlight onPress={this._onChooseKeyword.bind(this, keyword)}>
              <View style={styles.row}>
                <Text>{keyword}</Text>
              </View>
            </TouchableHighlight>
          )
        }}
      />
    )
  }
}

const styles = StyleSheet.create({

  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50,
    paddingLeft: 12
  }

})
