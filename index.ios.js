/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import ChooseKeyword from './routes/ChooseKeyword';
import Bookmarks from './routes/Bookmarks';

export default class AwesomeProject extends Component {

  state = {
    selectedTab: 'trending',
    notifCount: 0,
    presses: 0,
  }

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="gainsboro"
        tintColor="white"
        barTintColor="firebrick">
        <TabBarIOS.Item
          systemIcon="top-rated"
          title="Blue Tab"
          selected={this.state.selectedTab === 'trending'}
          onPress={() => {
            this.setState({
              selectedTab: 'trending',
            });
          }}>
          <NavigatorIOS
            initialRoute={{
              component: ChooseKeyword,
              title: 'Trending'
            }}
            style={{flex: 1, marginBottom: 49}}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'bookmarks'}
          onPress={() => {
            this.setState({
              selectedTab: 'bookmarks',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <NavigatorIOS
            initialRoute={{
              component: Bookmarks,
              title: 'Bookmarks'
            }}
            style={{flex: 1, marginBottom: 49}}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
