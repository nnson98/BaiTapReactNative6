import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../shared/header';
import Header1 from '../shared/header1';
import Home from '../screens/Home';
import Advice from '../screens/Advice';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#67b0d6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="eCommerce" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Advice"
        component={Advice}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header1 navigation={navigation} title="Our Advice" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
