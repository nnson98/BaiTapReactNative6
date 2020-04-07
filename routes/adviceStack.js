import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../shared/header1';
import Advice from '../screens/Advice';

const AdviceStack = createStackNavigator();
const AdviceNavigator = () => {
  return (
    <AdviceStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#67b0d6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <AdviceStack.Screen
        name="Advice"
        component={Advice}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="Our Advice" />
            ),
          };
        }}
      />
    </AdviceStack.Navigator>
  );
};
export default AdviceNavigator;
