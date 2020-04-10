import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {golbalStyles} from '../styles/global';
import {Icon} from 'native-base';
export default function Paypal(props) {
  return (
    <View
      style={[
        golbalStyles.backgroundSearch,
        golbalStyles.margin,
        golbalStyles.margin1,
      ]}>
      <View style={[golbalStyles.view, golbalStyles.margin1]}>
        <TouchableOpacity style={styles.toucheck}>
          <Icon
            type="MaterialCommunityIcons"
            name={'checkbox-blank-circle-outline'}
          />
        </TouchableOpacity>
        <Text style={[golbalStyles.fontsizetogether, styles.margin1]}>
          {props.name}
        </Text>
      </View>
      <View style={styles.margin}>
        <Text style={golbalStyles.txtcolor}>{props.detail}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  toucheck: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 14,
    flexDirection: 'row',
  },
  margin: {
    marginLeft: 70,
  },
});
