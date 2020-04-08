import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'native-base';
import {golbalStyles} from '../styles/global';
export default function ShareOn(props) {
  return (
    <View style={golbalStyles.view}>
      <View>
        <TouchableOpacity style={[styles.view, {backgroundColor: props.color}]}>
          <Icon type={props.type} name={props.name} style={styles.iconColor} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.txt}>{props.txt}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconColor: {
    color: 'white',
  },
  txt: {
    marginTop: 10,
    marginLeft: 10,
  },
});
