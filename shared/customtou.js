import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function CustomTou(props) {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={[
          styles.customColor,
          {backgroundColor: props.color},
          styles.view,
        ]}>
        <Text style={styles.txt}>{props.number}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  customColor: {
    height: 60,
    width: 60,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  txt: {
    fontSize: 18,
    color: 'black',
  },
});
