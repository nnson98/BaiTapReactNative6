import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function ItemProduct(item, {navigation}) {
  return (
    <View style={styles.view4}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductNu')}>
        <Image source={{uri: item.img}} style={styles.imgflat} />
        <Text style={styles.txtname}>{item.name}</Text>
        <Text style={styles.txtprice}>{item.price}</Text>
      </TouchableOpacity>
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
