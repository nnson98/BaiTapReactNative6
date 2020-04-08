import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'native-base';

export default function ColorAndSize(props) {
  return (
    <View style={styles.view}>
      <View style={styles.view1}>
        <Icon
          type="MaterialCommunityIcons"
          name={props.icon}
          style={styles.icon}
        />
        <Text style={styles.txtname}>{props.name}</Text>
      </View>
      <Text style={styles.txtdetail}>{props.detail}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    flexDirection: 'row',
  },
  txtdetail: {
    color: '#bfbfc4',
  },
  txtname: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 20,
  },
});
