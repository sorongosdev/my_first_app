/**
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  sText: string;
  cState: () => void;
}

const PropsChild: React.FC<Props> = props => {
  return (
    <View>
      <Text onPress={props.cState}>{props.sText}</Text>
    </View>
  );
};

export default PropsChild;
