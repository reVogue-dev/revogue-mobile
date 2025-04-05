import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { TextInput, Snackbar } from 'react-native-paper';
import Colors from '../../Utilities/constants/colors';
import { useDispatch } from 'react-redux';
import { getLoginOTP } from '../../redux/reducers/auth.slice';

export const LoginDifferent = ({ navigation }: any) => {
  const [phone, setPhone] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const dispatch = useDispatch();

  const handlePhoneInputChange = (input: string) => {
    setPhone(input); // Update the phone number in state
  };

  const handleNextPress = async () => {
    if (phone.length < 10) {
      setSnackbarMessage('Please enter a valid phone number.');
      setSnackbarVisible(true);
    } else {
      try {
        const response = await dispatch(getLoginOTP({ mobileNumber: phone }));
        console.log('Response:', response);
        if ( response.status === 200) {
          navigation.navigate('Otp', { mobileNumber: phone });
        } else {
          setSnackbarMessage('OTP request was unsuccessful. Please check your number and try again.');
          setSnackbarVisible(true);
        }
      } catch (error) {
        setSnackbarMessage('Failed to send OTP. Please try again.');
        setSnackbarVisible(true);
      }
    }
  };

  const onDismissSnackBar = () => {
    setSnackbarVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Hi! welcome to ReVogue</Text>
        <Text style={styles.accountText}>Create your account</Text>
        <Text style={styles.phone}>Enter your phone number</Text>

        <View style={styles.inputContainer}>
          <TextInput
            value="+91"
            editable={false}
            style={styles.countryCodeInput}
            mode="flat"
            theme={{
              colors: {
                primary: Colors.primary,
                placeholder: Colors.placeholder,
                text: Colors.primary,
              },
            }}
          />
          <TextInput
            value={phone}
            onChangeText={handlePhoneInputChange}
            keyboardType="phone-pad"
            maxLength={10}
            style={styles.phoneNumberInput}
            mode="flat"
            theme={{
              colors: {
                primary: Colors.primary,
                placeholder: Colors.placeholder,
                text: Colors.primary,
              },
            }}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleNextPress}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={onDismissSnackBar}
        duration={3000} // How long to show the snackbar
      >
        {snackbarMessage}
      </Snackbar>
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
    fontWeight: '700',
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
