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

  render() {
    return (
      <View style={styles.background}>
        <Text>{this.inputText()}</Text>
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
