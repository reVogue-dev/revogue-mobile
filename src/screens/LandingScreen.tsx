import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Utilities/constants/colors';

export const LandingScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>
          With ReVogue {'\n'}Smart fashion life {'\n'} Let’s get started
        </Text>
        <View style={styles.LoginBtnContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              console.log('Looking around...');
            }}>
            <Text style={styles.loginButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              console.log('Looking around...');
            }}>
            <Text style={styles.loginButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.differentTextContainer}
          onPress={() => navigation.navigate('LoginDifferent')}>
          <Text style={styles.differentText}>Starting in different way</Text>
          {/* <Icon name="search" size={20} color="#3541C1" /> */}
          <Icon name="chevron-forward-outline" size={30} color="#4F8EF7" />
          {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              navigation.navigate('Onboarding');
              console.log('Looking around...');
            }}>
            <Text style={styles.buttonText}>I’ll look around first</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 20,
  },
  LoginBtnContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  loginButton: {
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginBottom: 12,
    borderColor: Colors.primary,
  },
  loginButtonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.gray,
    lineHeight: 20,
  },
  differentTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  differentText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.placeholder,
    fontWeight: 700,
    fontSize: 12,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
