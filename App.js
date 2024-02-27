// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SongRecognitionScreen from './SongRecognitionScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recognition" component={SongRecognitionScreen} />
        {/* Add more screens as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
