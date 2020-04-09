import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base';

export default function Header1({navigation, title}) {
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
  },
  icon2: {
    left: 130,
    fontSize: 20,
    padding: 6,
  },
});
