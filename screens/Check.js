import React, {useState} from 'react';
import {View, Text, Icon, Picker} from 'native-base';
import {golbalStyles} from '../styles/global';
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {CustomPicker} from 'react-native-custom-picker';
export default function CheckOut({navigation}) {
  const [data, setdata] = useState('TP.HCM');
  const options = ['TP.HCM', 'Ha Noi', 'Da Nang', 'Phu Yen', 'Can Tho'];
  return (
    <View style={golbalStyles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.tou}>
          <Text style={golbalStyles.txthear}>Billing Details</Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              'https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg',
          }}
          style={golbalStyles.imgbackground}>
          <Icon
            type="AntDesign"
            name="close"
            style={[styles.position, styles.icon]}
          />
          <Text style={[styles.position, styles.txt]}>Have a Coupon?</Text>
          <View style={[styles.position, styles.viewinput]}>
            <TextInput
              placeholder="Coupon Code here"
              style={[styles.txtinput, styles.position]}
            />
          </View>
          <View style={[styles.position, styles.viewtou]}>
            <TouchableOpacity style={styles.customtou}>
              <Text style={golbalStyles.txthear}>Aplly</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={[golbalStyles.margin, golbalStyles.margin1]}>
          <CustomPicker
            options={options}
            onValueChange={value => setdata(value)}
            placeholder="Select a Country"
            style={golbalStyles.heightinput}
          />
        </View>
        <View style={[golbalStyles.margin, golbalStyles.margin1]}>
          <TextInput placeholder="Full Name" style={golbalStyles.heightinput} />
        </View>
        <View style={[golbalStyles.margin, golbalStyles.margin1]}>
          <TextInput placeholder="Address" style={golbalStyles.heightinput} />
        </View>
        <View style={[golbalStyles.margin, golbalStyles.margin1]}>
          <TextInput
            placeholder="Address line two"
            style={golbalStyles.heightinput}
          />
        </View>
        <View style={[global.margin, golbalStyles.margin1, golbalStyles.view]}>
          <TextInput
            placeholder="Postcode/ Zip"
            style={[golbalStyles.heightinput, styles.picker]}
          />
          <TextInput
            placeholder="Phone"
            style={[golbalStyles.heightinput, styles.picker, {marginLeft: 20}]}
          />
        </View>
        <View style={[golbalStyles.margin, golbalStyles.margin1]}>
          <TextInput
            placeholder="Town/ City"
            style={golbalStyles.heightinput}
          />
        </View>
        <View style={[golbalStyles.margin, golbalStyles.margin1]}>
          <TextInput
            placeholder="E-mail Address"
            style={golbalStyles.heightinput}
          />
        </View>
        <View
          style={[
            golbalStyles.margin,
            golbalStyles.margin1,
            golbalStyles.item,
          ]}>
          <TouchableOpacity
            style={golbalStyles.customTou}
            onPress={() => navigation.navigate('Comfirm')}>
            <Text style={golbalStyles.txthear}>NEXT . YOUR ORDER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  tou: {
    backgroundColor: '#38474f',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  position: {
    position: 'absolute',
  },
  icon: {
    right: 15,
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    bottom: 100,
    left: 80,
  },
  txtinput: {
    width: 180,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  viewinput: {
    bottom: 90,
    left: 60,
  },
  customtou: {
    height: 40,
    width: 100,
    borderRadius: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewtou: {
    bottom: 50,
    left: 250,
  },
  picker: {
    width: 180,
  },
});
