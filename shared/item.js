import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export default function Item(item) {
  return (
    <View style={styles.view4}>
      <Image source={{uri: item.img}} style={styles.imgflat} />
      <Text style={styles.txtname}>{item.name}</Text>
      <Text style={styles.txtprice}>{item.price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view4: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  imgflat: {
    height: 260,
    width: 180,
  },
  txtprice: {
    backgroundColor: '#e3e3e9',
    fontSize: 10,
  },
  txtname: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
