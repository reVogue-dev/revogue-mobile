import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from '../screens/Login/ProfileScreen';
import {ServicesScreen} from '../screens/Dashboard/ServicesScreen';
import Feather from 'react-native-vector-icons/Feather';
import {FeedScreen} from '../screens/Dashboard/FeedScreen';
import {CaptureScreen} from '../screens/Dashboard/CaptureScreen';
import WardrobeScreen from '../screens/Dashboard/WardrobeScreen';

const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4B56D2',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wardrobe"
        component={WardrobeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="grid" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="book-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Capture"
        component={CaptureScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="camera" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
