import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

import { yellow } from '../constants/Color';

import giphy from '../lib/giphy';
import { getMobileImageUri } from '../lib/giphy/util';

class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: getMobileImageUri(this.props)}} />
      </View>
    )
  }
}

export default class Swipe extends Component {

  constructor(props) {
    super(props);

    giphy('pokemon')
      .then((response) => {
        this.setState({
          cards: response,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log("ERRPOR", error);
      });

    this.state = {
      cards: [],
      isLoading: true
    };
  }

  handleYup (card) {
    card.upvotes += 1;
  }

  handleNope (card) {
    // noop
  }

  render() {
    if (this.state.isLoading) return <Text>"Loading..."</Text>;

    return (
      <SwipeCards
        containerStyle={styles.container}
        cards={this.state.cards}
        loop={true}

        renderCard={(cardData) => <Card {...cardData} />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: yellow,
  },

  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1
  },

  thumbnail: {
    flex: 1,
    width: 300,
    height: 300
  },

  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  }

})
