import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'; // Import Fontisto icons
import Colors from '../../Utilities/constants/colors';
import BottomButton from '../../components/Common/BottomButton';

export const FaceDetectionScreen = ({navigation}: any) => {
  const handleNextPress = () => {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}></ScrollView>

      {/* Bottom Button */}
      <BottomButton buttonText="Next" onPress={handleNextPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 40,
  },
});
