import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Icon} from 'native-base';
import {StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Navigator from '../routes/homeStack';
import Advice from '../screens/Advice';
const Drawer = createDrawerNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => CustomDrawerContent(props)}
        options>
        <Drawer.Screen name="Home" component={Navigator} />
        <Drawer.Screen name="Advice" component={Advice} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewimg}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://www.tuktukdesign.com/wp-content/uploads/2020/01/profile-icon-vector.jpg',
          }}
        />
        <Text style={styles.txtName}>Christine Turner</Text>
        <Text style={styles.txtjob}>Fashion Designer</Text>
        <View />
        <View style={styles.ricon}>
          <Icon style={styles.icon} name="heart" size={10} />
          <Icon style={styles.icon} name="apps" size={10} />
        </View>
      </View>
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
  viewimg: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#67b0d6',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  txtName: {
    fontSize: 18,
    fontStyle: 'normal',
    color: 'white',
    padding: 3,
  },
  txtjob: {
    fontSize: 12,
    color: '#ffc4c6',
  },
  ricon: {
    flexDirection: 'row',
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
