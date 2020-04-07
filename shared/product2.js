import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Product2(props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.img}} style={styles.img} />
      <Text>{props.name}</Text>
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
});
