import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from '../components/all';
import Men from '../components/men';
import Woman from '../components/woman';
import Kids from '../components/kid';
import {golbalStyles} from '../styles/global';
export default function Advice() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: golbalStyles.fontsizetogether,
        style: golbalStyles.backgroundColorTogether,
      }}>
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Man" component={Men} />
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
