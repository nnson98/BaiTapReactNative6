import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Icon} from 'native-base';
import {StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import HomeNavigator from '../routes/homeStack';
import AdviceNavigator from '../routes/adviceStack';
const Drawer = createDrawerNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => CustomDrawerContent(props)}
        options>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Advice" component={AdviceNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Home')}>
          <Icon type="Entypo" name="home" style={styles.icon} />
          <Text style={styles.txtitem}>Home</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Advice')}>
          <Icon type="Entypo" name="home" style={styles.icon} />
          <Text style={styles.txtitem}>Our Advice </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  icon: {
    padding: 3,
    fontSize: 25,
  },
  viewscrool: {
    marginLeft: 5,
  },
  viewtou: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtitem: {
    fontSize: 16,
    textAlignVertical: 'center',
  },
});
