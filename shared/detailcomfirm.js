import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {golbalStyles} from '../styles/global';
import {Thumbnail, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function DetailComfirm(props) {
  return (
    <View style={[golbalStyles.margin, golbalStyles.backgroundSearch]}>
      <View style={styles.margin}>
        <View style={[golbalStyles.view, {justifyContent: 'space-around'}]}>
          <View>
            <Thumbnail
              source={{
                uri: props.img,
              }}
            />
          </View>
          <View>
            <View>
              <Text style={[styles.font, styles.size]}>{props.name}</Text>
            </View>
            <View style={golbalStyles.view}>
              <TouchableOpacity style={styles.customtouname}>
                <Text style={styles.font}>SIZE: {props.size}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.color, styles.customtouname, {marginLeft: 5}]}>
                <Text style={styles.font}>x{props.number}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={[styles.size, {color: '#a6a6ad'}]}>{props.price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.positionicon}>
        <TouchableOpacity>
          <Icon type="AntDesign" name="close" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  margin: {
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  customtouname: {
    height: 25,
    width: 65,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e4e4',
  },
  font: {
    fontWeight: 'bold',
  },
  size: {
    fontSize: 18,
  },
  positionicon: {
    position: 'absolute',
    right: 6,
    top: 5,
  },
  icon: {
    fontSize: 18,
    color: '#a6a6ad',
  },
});
