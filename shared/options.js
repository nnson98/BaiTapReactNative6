import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

export default function Option(props) {
  return (
    <TouchableOpacity style={styles.customtou}>
      <Icon
        type="MaterialCommunityIcons"
        name="close-box"
        style={styles.icon}
      />
      <Text style={styles.txttou}>{props.name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  customtou: {
    height: 40,
    width: 100,
    borderRadius: 8,
    backgroundColor: '#a6a6ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txttou: {
    fontSize: 16,
    color: 'white',
  },
  icon: {
    position: 'absolute',
    fontSize: 16,
    top: 0,
    right: 0,
  },
});
