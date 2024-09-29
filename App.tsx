/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  state = {
    sampleText: 'Hello World',
    sampleBoolean: false,
  };

  inputText = () =>
    this.state.sampleBoolean ? (
      <Text>It is True</Text>
    ) : (
      <Text>It is False</Text>
    );
  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text Changed',
        sampleBoolean: true,
      });
    } else {
      this.setState({
        sampleText: 'Hello World',
        sampleBoolean: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.background}>
        <Text onPress={this.changeState}>{this.state.sampleText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
