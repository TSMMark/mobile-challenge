import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends Component {
  render() {
    console.log(this.props);

    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>{this.props.upvotes} Upvote{this.props.upvotes === 1 ? "" : "s"}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

const Cards = [
  {upvotes: 0, image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
  {upvotes: 0, image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
  {upvotes: 0, image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
  {upvotes: 0, image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  {upvotes: 0, image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {upvotes: 0, image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  {upvotes: 0, image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  {upvotes: 0, image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  {upvotes: 0, image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
]

export default class Swip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: Cards
    };
  }

  handleYup (card) {
    card.upvotes += 1;
  }

  handleNope (card) {
    // noop
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({

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
  },

  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
