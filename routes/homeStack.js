import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../shared/header';
import Home from '../screens/Home';

const HomeStack = createStackNavigator();
export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#67b0d6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
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
    </HomeStack.Navigator>
  );
}
