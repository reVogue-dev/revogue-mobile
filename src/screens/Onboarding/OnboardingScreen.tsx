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

export const OnBoardingScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);

  const handleNextPress = () => {
    if (!name || !dob || !gender) {
      return;
    }
    navigation.navigate('FaceDetection');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          {/* Name Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Your full name"
              placeholderTextColor={Colors.placeholder}
            />
          </View>

          {/* Age/DOB Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>How old are you?</Text>
            <TextInput
              style={styles.input}
              value={dob}
              onChangeText={setDob}
              placeholder="DD MMM YYYY"
              placeholderTextColor={Colors.placeholder}
            />
          </View>

          {/* Gender Selection */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>How You Identify Yourself?</Text>
            <View style={styles.genderContainer}>
              {/* Female Selection */}
              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'female' && styles.selectedGender,
                ]}
                onPress={() => setGender('female')}>
                <View style={styles.avatarCircle}>
                  <Icon
                    name="female"
                    size={50}
                    color={gender === 'female' ? '#3F51B5' : '#B0BEC5'} // Selected -> Red, Unselected -> Gray
                  />
                </View>
              </TouchableOpacity>

              {/* Male Selection */}
              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'male' && styles.selectedGender,
                ]}
                onPress={() => setGender('male')}>
                <View style={styles.avatarCircle}>
                  <Icon
                    name="male"
                    size={50}
                    color={gender === 'male' ? '#3F51B5' : '#B0BEC5'} // Selected -> Blue, Unselected -> Gray
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
  formContainer: {
    flex: 1,
    paddingBottom: 80,
  },
  inputGroup: {
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    color: '#E95B56',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    paddingVertical: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  genderOption: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  selectedGender: {
    backgroundColor: '#E3F2FD',
    borderRadius: 50,
    padding: 10,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
});
