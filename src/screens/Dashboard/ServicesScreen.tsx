import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ServicesScreen = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Text>This is Services Screen</Text>
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
