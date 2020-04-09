import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {golbalStyles} from '../styles/global';
import {Icon} from 'native-base';
import ColorAndSize from '../shared/colorandsize';
import CustomTou from '../shared/customtou';
import ShareOn from '../shared/shareon';
import {Block} from 'galio-framework';
export default function ProductNu({navigation}) {
  return (
    <View style={golbalStyles.container}>
      <ScrollView>
        <View style={styles.view1}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{
                uri:
                  'https://www.lulus.com/images/product/xlarge/1617074_261202.jpg',
              }}
              style={styles.img}
            />
          </View>
          <View style={[styles.view2, golbalStyles.margin]}>
            <Text style={golbalStyles.fontsizetogether}>Green Blouse</Text>
            <TouchableOpacity style={styles.customTou}>
              <Text>$ 605.00</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view1}>
          <View
            style={[
              golbalStyles.view,
              golbalStyles.margin,
              golbalStyles.margin1,
            ]}>
            <Icon type="FontAwesome" name="plus" style={styles.icon} />
            <Text style={golbalStyles.fontsizetogether}>Description</Text>
          </View>
        </View>
        <View style={styles.view1}>
          <View>
            <ColorAndSize
              icon={'invert-colors'}
              name={'Colour:'}
              detail={'Choose a colour for item'}
            />
            <View style={[golbalStyles.view, styles.view3]}>
              <CustomTou color={'#f0c9ce'} />
              <CustomTou color={'#af687a'} />
              <CustomTou color={'#87a6b2'} />
            </View>
          </View>
          <View style={styles.view3}>
            <Text>-------------</Text>
          </View>
          <View>
            <ColorAndSize
              icon={'resize'}
              name={'Size:'}
              detail={'Size available for this item '}
            />
            <View style={[golbalStyles.view, styles.view3]}>
              <CustomTou color={'#dadade'} number={'6'} />
              <CustomTou color={'#dadade'} number={'8'} />
              <CustomTou color={'#dadade'} number={'10'} />
              <CustomTou color={'#dadade'} number={'12'} />
              <CustomTou color={'#dadade'} number={'14'} />
            </View>
          </View>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity
            style={[styles.customAddCart, golbalStyles.margin]}
            onPress={() => navigation.navigate('CheckOut')}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={golbalStyles.margin}>
          <View>
            <Text style={golbalStyles.fontsizetogether}>SHARE ON </Text>
            <Block style={styles.block} />
          </View>

          <View style={[styles.view2, golbalStyles.margin]}>
            <ShareOn
              type="AntDesign"
              name="twitter"
              txt="205"
              color="#56c2ea"
            />
            <ShareOn
              type="FontAwesome"
              name="facebook"
              txt="332"
              color="#3b63b6"
            />
            <ShareOn type="AntDesign" name="yuque" txt="112" color="#e53e59" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  view3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 260,
    width: 180,
  },
  customTou: {
    height: 30,
    width: 70,
    borderRadius: 10,
    backgroundColor: '#bfbfc4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customAddCart: {
    height: 30,
    width: 120,
    backgroundColor: '#3a4144',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    paddingRight: 20,
  },
  block: {
    borderColor: 'red',
    width: '80%',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
});
