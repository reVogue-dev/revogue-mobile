import React, {useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BottomButton from '../../components/Common/BottomButton';
import CustomHeader from '../../components/Common/CustomHeader';
import {Text} from 'react-native-paper';

export const SocialAccount = ({navigation}: any) => {
  const [selectedSkinTone, setSelectedSkinTone] = useState<string | null>(null);

  const handleSkinToneSelect = (skinTone: string) => {
    setSelectedSkinTone(skinTone);
  };

  const handleNextPress = () => {
    // Pass the selected skin tone to the next screen
    navigation.navigate('BodyType', {selectedSkinTone});
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
        <Text style={styles.text}>What’s Your Skin Tone?</Text>
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
  skinToneContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skinToneBox: {
    width: '48%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedBox: {
    backgroundColor: '#4052DB',
    borderColor: '#4052DB',
  },
  skinToneText: {
    color: '#000',
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default SocialAccount;
