import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export default function RenderItem(item) {
  return (
    <View style={styles.view2}>
      <View style={styles.view4}>
        <Image source={{uri: item.img}} style={styles.imgflat} />
        <Text>{item.name}</Text>
        <Text style={styles.txtprice}>$ {item.price}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view2: {
    flexDirection: 'column',
    padding: 20,
  },
  view4: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgflat: {
    height: 180,
    width: 120,
  },
  txtprice: {
    backgroundColor: '#e3e3e9',
    fontSize: 10,
  },
});
