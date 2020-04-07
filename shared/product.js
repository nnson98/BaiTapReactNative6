import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Product(props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.img}} style={styles.img} />
      <Text style={styles.txtname}>{props.name}</Text>
      <Text style={styles.txtprice}>$ {props.price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 260,
    width: 180,
  },
  txtname: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  txtprice: {
    fontSize: 12,
    color: '#aaabbc',
  },
});
