import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';

export default class vrexamples extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('vrcase02.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
        <Image
          style={{
            width: 1,
            height: 1,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            transform: [{translate: [0, 0, -3]}],
          }}
          source={require('./static_assets/Iron-Man.png')}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('vrexamples', () => vrexamples);
