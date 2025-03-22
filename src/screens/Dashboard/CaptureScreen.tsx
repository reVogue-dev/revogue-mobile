import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const CaptureScreen = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Text>This is Capture's screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
