import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Colors from '../../Utilities/constants/colors';
import BottomButton from '../../components/Common/BottomButton';
import { getLoginOTP } from '../../redux/reducers/auth.slice';
import { useDispatch } from 'react-redux';

export const OtpScreen = ({route}: any) => {
  const [otp, setOtp] = useState('');
  const { mobileNumber } = route.params;
const dispatch = useDispatch();



  const handleNextPress = (code:any) => {
    // Add OTP validation logic or proceed to the next screen
    console.log('OTP Entered:', code);
    // navigation.navigate('Onboarding');
  };


  const handleResendPress = async () => {
  
     
        const response = await dispatch(getLoginOTP({ mobileNumber: mobileNumber }))
  
        // Check if the HTTP response status code is 200
        if (response.ok && response.status === 200) {
          Alert.alert('OTP Sent Successfully');
        } else {
          Alert.alert('OTP request was unsuccessful. Please check your number and try again.');
        }
     
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Verify Phone</Text>
        <Text style={styles.accountText}>
          Code has been sent to your +91 {mobileNumber}
        </Text>

        {/* OTP Input */}
        <OTPInputView
          style={styles.otpInputContainer}
          pinCount={6}
          code={otp}
          onCodeChanged={setOtp}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code:any) => {
            handleNextPress(code)
          }}
        />

        <View style={styles.subtextWrapper}>
          <Text style={styles.question}>Didn’t get OTP Code?</Text>
          <Text style={styles.resendCode} onPress={()=>handleResendPress()}>Resend Code</Text>
        </View>
      </View>

      {/* <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View> */}

      <BottomButton buttonText="Next" onPress={()=>handleNextPress(otp)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 100,
    justifyContent: 'space-between',
  },

  topContainer: {
    flex: 1,
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
    paddingVertical: 8,
    fontSize: 10,
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

  otpInputContainer: {
    width: '100%',
    height: 100,
    marginBottom: 20,
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.primary, // Set background to primary color
    color: 'white', // Set text color to white
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700', // Optional, for bold text
  },

  underlineStyleHighLighted: {
    borderColor: Colors.primary, // Highlighted border with primary color
  },
  subtextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 12,
    fontWeight: 700,
    marginVertical: 7,
  },
  resendCode: {
    fontSize: 10,
    color: Colors.primary,
    fontWeight: 700,
  },
});

export default OtpScreen;
