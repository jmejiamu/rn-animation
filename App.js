/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// test

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  UIManager,
  Platform,
  LayoutAnimation,
  Button,
  TouchableOpacity,
} from 'react-native';

import {Canvas, Box, BoxShadow, rrect, rect} from '@shopify/react-native-skia';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const [boxPosition, setBoxPosition] = useState('left');
  const [boxPositionTwo, setBoxPositionTwo] = useState('left');
  const [boxPositionThird, setBoxPositionThird] = useState('left');
  const toggleBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setBoxPosition(boxPosition === 'left' ? 'right' : 'left');
  };
  const toggleSecondBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setBoxPositionTwo(boxPositionTwo === 'left' ? 'right' : 'left');
  };
  const toggleThirdBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setBoxPositionThird(boxPositionThird === 'left' ? 'right' : 'left');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#add8e6'}}>
      <TouchableOpacity onPress={toggleBox}>
        <View style={[boxPosition === 'left' ? null : styles.moveRight]}>
          <Canvas style={{width: 256, height: 256}}>
            <Box box={rrect(rect(64, 64, 128, 128), 24, 34)} color="#add8e6">
              <BoxShadow dx={10} dy={10} blur={20} color="#93b8c4" inner />
              <BoxShadow dx={-10} dy={-10} blur={20} color="#c7f8ff" inner />
              <BoxShadow dx={10} dy={10} blur={20} color="#93b8c4" />
              <BoxShadow dx={-10} dy={-10} blur={20} color="#c7f8ff" />
            </Box>
          </Canvas>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleSecondBox}>
        <View style={[boxPositionTwo === 'left' ? null : styles.moveRight]}>
          <Canvas style={{width: 256, height: 256}}>
            <Box box={rrect(rect(64, 64, 128, 128), 24, 34)} color="#add8e6">
              <BoxShadow dx={10} dy={10} blur={20} color="#93b8c4" inner />
              <BoxShadow dx={-10} dy={-10} blur={20} color="#c7f8ff" inner />
              <BoxShadow dx={10} dy={10} blur={20} color="#93b8c4" />
              <BoxShadow dx={-10} dy={-10} blur={20} color="#c7f8ff" />
            </Box>
          </Canvas>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleThirdBox}>
        <View style={[boxPositionThird === 'left' ? null : styles.moveRight]}>
          <Canvas style={{width: 256, height: 256}}>
            <Box box={rrect(rect(64, 64, 128, 128), 24, 34)} color="#add8e6">
              <BoxShadow dx={10} dy={10} blur={20} color="#93b8c4" inner />
              <BoxShadow dx={-10} dy={-10} blur={20} color="#c7f8ff" inner />
              <BoxShadow dx={10} dy={10} blur={20} color="#93b8c4" />
              <BoxShadow dx={-10} dy={-10} blur={20} color="#c7f8ff" />
            </Box>
          </Canvas>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  moveRight: {
    alignSelf: 'flex-end',
  },
});

export default App;
