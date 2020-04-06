import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {Icon} from 'native-base';

export default function Header1({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Icon type="Entypo" name="shopping-cart" style={styles.icon2} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon2: {
    left: 120,
    fontSize: 20,
    padding: 6,
  },
});
