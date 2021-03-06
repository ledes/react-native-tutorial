import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <View style={this.props.styleView}>
        <Text style={this.props.styleText}>{display}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink styleText={styles.redBoxText} styleView={styles.redBoxView} text='I love to blink' />
        <Blink styleText={styles.blueBoxText} styleView={styles.blueBoxView} text='Yes blinking is so great' />
        <Blink styleText={styles.redBoxText} styleView={styles.redBoxView} text='Why did they ever take this out of HTML' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBoxView: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  blueBoxText: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  redBoxView: {
    flex: 3,
    backgroundColor: 'steelblue'
  },
  redBoxText: {
    color: 'red',
  }
});
