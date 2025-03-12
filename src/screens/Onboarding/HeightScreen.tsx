import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import BottomButton from '../../components/Common/BottomButton';
import CustomHeader from '../../components/Common/CustomHeader';
import {Text} from 'react-native-paper';
import SwipeablePicker from '../../components/Common/SwipeablePicker';

export const HeightScreen = ({navigation}: any) => {
  const [height, setHeight] = useState(179);

  const handleHeightChange = (value: number) => {
    setHeight(value);
  };

  const handleNextPress = () => {
    // Pass the height value to the next screen
    navigation.navigate('Weight', {height});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="Harpreet's Body Structure"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>How tall are you?</Text>

        <View>
          <SwipeablePicker
            minValue={120}
            maxValue={220}
            initialValue={height}
            step={1}
            unit="cm"
            onValueChange={handleHeightChange}
            visibleValues={5}
            primaryColor="#4052DB"
            buttonText="Next Step"
            onButtonPress={handleNextPress}
          />
        </View>
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
  contentContainer: {
    flexGrow: 1,
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 40,
  },
});
