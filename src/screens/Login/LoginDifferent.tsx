import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import Colors from '../../Utilities/constants/colors';

export const LoginDifferent = ({navigation}: any) => {
  const [phone, setPhone] = useState('');

  const handlePhoneInputChange = (input: string) => {
    setPhone(input); // Update the phone number in state
  };

  const handleNextPress = () => {
    if (phone.trim()) {
      // If there's a valid phone number entered
      navigation.navigate('Otp'); // Replace with the actual screen name
    } else {
      // Handle invalid input (show an alert or error message)
      Alert.alert('Please enter a valid phone number');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Hi! welcome to ReVogue</Text>
        <Text style={styles.accountText}>Create your account</Text>
        <Text style={styles.phone}>Enter your phone number</Text>

        {/* Country code and phone number input */}
        <View style={styles.inputContainer}>
          <TextInput
            value="+91"
            editable={false} // Make this part non-editable
            style={[styles.countryCodeInput]}
            mode="flat"
            theme={{
              colors: {
                primary: Colors.primary,
                placeholder: Colors.placeholder,
                text: Colors.primary, // Ensure text color is primary
              },
            }}
          />
          <TextInput
            value={phone}
            onChangeText={handlePhoneInputChange}
            keyboardType="phone-pad"
            maxLength={10}
            style={[styles.phoneNumberInput]} // No need to specify color in style here, since it's handled by theme
            mode="flat"
            theme={{
              colors: {
                primary: Colors.primary,
                placeholder: Colors.placeholder,
                text: Colors.primary, // Ensure text color is primary
              },
            }}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleNextPress} // Handle the button press
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 100,
    justifyContent: 'space-between', // Ensures the content is spaced out between top and bottom
  },

  topContainer: {
    flex: 1, // Makes sure the top part takes all available space above the bottom container
  },

  bottomContainer: {
    paddingBottom: 20,
  },

  text: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },

  accountText: {
    color: Colors.placeholder,
    paddingVertical: 12,
    fontSize: 10,
    fontWeight: 700,
  },

  phone: {
    fontSize: 10,
    fontWeight: '700',
    marginTop: 40,
  },

  // Wrapper for both phone number inputs
  inputContainer: {
    flexDirection: 'row', // Makes inputs appear in a row
    alignItems: 'center', // Aligns them vertically in the center
    width: '100%', // Ensures the container takes full width of the parent
  },

  // Country code input styles (with 25% width)
  countryCodeInput: {
    width: '25%', // 20% width for the country code
    marginRight: 10, // Space between country code and phone number input
    backgroundColor: 'transparent', // No background color for flat mode
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary, // Setting primary color for the text
  },

  // Phone number input styles (with 80% width)
  phoneNumberInput: {
    height: 50,
    fontSize: 20,
    backgroundColor: 'transparent', // No background color for flat mode
    borderBottomWidth: 0, // No border
    flex: 1, // The phone number input takes the remaining space (80%)
    fontWeight: '700',
  },

  primaryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: Colors.buttonText,
    fontSize: 14,
    fontWeight: '700',
  },
});
