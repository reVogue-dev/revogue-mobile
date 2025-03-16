import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FeedScreen = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Text>This is Feed Screen</Text>
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
