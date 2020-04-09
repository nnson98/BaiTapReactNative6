import React, {useState} from 'react';
import {View, Text, Icon, Picker} from 'native-base';
import {golbalStyles} from '../styles/global';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function Comfirm() {
  return (
    <View style={golbalStyles.container}>
      <TouchableOpacity style={styles.tou}>
        <Text style={golbalStyles.txthear}>Your Order</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  tou: {
    backgroundColor: '#38474f',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});
