/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface State {
  sampleText: string;
  sampleBoolean: boolean;
  sampleNum: number;
}

class App extends Component<{}, State> {
  state = {
    sampleText: 'Hello World',
    sampleBoolean: false,
    sampleNum: 1,
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

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1,
      };
    });
  };

  render() {
    return (
      <View style={styles.background}>
        <Text onPress={this.onAdd}>{this.state.sampleNum}</Text>
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
