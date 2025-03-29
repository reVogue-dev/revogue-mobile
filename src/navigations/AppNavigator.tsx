import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Login/HomeScreen';
import {ProfileScreen} from '../screens/Login/ProfileScreen';
import {LandingScreen} from '../screens/LandingScreen';
import {LoginDifferent} from '../screens/Login/LoginDifferent';
import {OtpScreen} from '../screens/Login/OtpScreen';
import {OnBoardingScreen} from '../screens/Onboarding/OnboardingScreen';
import {FaceDetectionScreen} from '../screens/Onboarding/FaceDetectionScreen';
import BodyTypeScreen from '../screens/Onboarding/BodyTypeScreen';
import {HeightScreen} from '../screens/Onboarding/HeightScreen';
import {WeightScreen} from '../screens/Onboarding/WeightScreen';
import {SkinToneScreen} from '../screens/Onboarding/SkinToneScreen';
import ProfessionScreen from '../screens/Onboarding/ProfessionScreen';
import CreateAccountScreen from '../screens/Onboarding/CreateAccountScreen';
import DashboardNavigator from './DashboardNavigator';
import {
  ROUTE_DASHBOARD,
  ROUTE_HOME,
  ROUTE_LANDING,
  ROUTE_LOGIN,
  ROUTE_LOGIN_OTP,
  ROUTE_ONBOARDING_ACCOUNT,
  ROUTE_ONBOARDING_BODYTYPE,
  ROUTE_ONBOARDING_HEIGHT,
  ROUTE_ONBOARDING_PROFESSION,
  ROUTE_ONBOARDING_SKIN,
  ROUTE_ONBOARDING_WEIGHT,
  ROUTE_PROFILE,
  ROUTE_PROFILE_FACE_DETECTOR,
  ROUTE_PROFILE_ONBOARDING,
} from '../Utilities/constants/api-routes';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE_LANDING}
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_LOGIN}
        options={{headerShown: false}}
        component={LoginDifferent}
      />
      <Stack.Screen
        name={ROUTE_LOGIN_OTP}
        options={{headerShown: false}}
        component={OtpScreen}
      />

      <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
      <Stack.Screen
        name={ROUTE_DASHBOARD}
        component={DashboardNavigator} // Add the Bottom Tab Navigator
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTE_PROFILE} component={ProfileScreen} />
      <Stack.Screen
        name={ROUTE_PROFILE_ONBOARDING}
        component={OnBoardingScreen}
        // options={{
        //   title: "Let's Create Structure",
        //   headerTitleStyle: {color: Colors.primary},
        // }}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_PROFILE_FACE_DETECTOR}
        component={FaceDetectionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_ONBOARDING_BODYTYPE}
        component={BodyTypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_ONBOARDING_HEIGHT}
        component={HeightScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_ONBOARDING_WEIGHT}
        component={WeightScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_ONBOARDING_SKIN}
        component={SkinToneScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_ONBOARDING_PROFESSION}
        component={ProfessionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_ONBOARDING_ACCOUNT}
        component={CreateAccountScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Closet"
        component={ClosetScreen}
        options={{headerShown: false}}

        // options={{
        //   title: "Today's Closet",
        //   headerTitleStyle: {color: Colors.primary},
        // }}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
