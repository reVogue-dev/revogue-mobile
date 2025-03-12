import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import BottomButton from '../../components/Common/BottomButton';
import CustomHeader from '../../components/Common/CustomHeader';
import {Text} from 'react-native-paper';

export const FaceDetectionScreen = ({navigation}: any) => {
  const handleNextPress = () => {
    navigation.navigate('BodyType'); // Adjust navigation logic as needed
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="Harpreet's Body Structure"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Let’s get your face to create your body model{' '}
        </Text>
      </ScrollView>

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
  text: {
    fontWeight: 700,
    fontSize: 14,
  },
});

export default FaceDetectionScreen;
