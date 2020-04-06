import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import All from '../components/all';
import Men from '../components/men';
import Woman from '../components/woman';
import Kids from '../components/kid';

export default function Advice() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Men" component={Men} />
      <Tab.Screen name="Woman" component={Woman} />
      <Tab.Screen name="Kids" component={Kids} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
