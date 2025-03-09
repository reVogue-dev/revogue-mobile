import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Login/HomeScreen';
import {ProfileScreen} from '../screens/Login/ProfileScreen';
import {LandingScreen} from '../screens/LandingScreen';
import {LoginDifferent} from '../screens/Login/LoginDifferent';
import {OtpScreen} from '../screens/Login/OtpScreen';
import {OnBoardingScreen} from '../screens/Onboarding/OnboardingScreen';
import Colors from '../Utilities/constants/colors';
import {FaceDetectionScreen} from '../screens/Onboarding/FaceDetectionScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginDifferent"
        options={{headerShown: false}}
        component={LoginDifferent}
      />
      <Stack.Screen
        name="Otp"
        options={{headerShown: false}}
        component={OtpScreen}
      />

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Onboarding"
        component={OnBoardingScreen}
        options={{
          title: "Let's Create Structure",
          headerTitleStyle: {color: Colors.primary},
        }}
      />
      <Stack.Screen
        name="FaceDetection"
        component={FaceDetectionScreen}
        options={{
          title: "Harpreet's Body Structure",
          headerTitleStyle: {color: Colors.primary},
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
