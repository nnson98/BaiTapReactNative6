import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Product2 from '../shared/product2';
import {golbalStyles} from '../styles/global';
export default function All() {
  return (
    <View style={golbalStyles.container}>
      <ScrollView>
        <View>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlNwykvwoj1EvV4Entbc1SNNW3nwzGqvMG_Ee0w7qPdG-KK8je&usqp=CAU',
            }}
            style={golbalStyles.imgbackground}
          />
          <Image
            source={{
              uri:
                'https://nguoimauthoitrangvietnam.com/wp-content/uploads/2017/03/banner_missvn-1.jpg',
            }}
            style={golbalStyles.imgbackground}
          />
        </View>
        <View style={styles.viewsearch}>
          <SearchBar
            placeholder="Search a item..."
            containerStyle={styles.backgroundSearch}
            inputContainerStyle={golbalStyles.backgroundSearch}
          />
        </View>
        <View style={styles.view2}>
          <View style={[styles.view1, styles.viewsearch]}>
            <Product2
              img={
                'https://i.pinimg.com/originals/6a/93/62/6a936214ca7d60e2b43a5a8d4d1fdba0.jpg'
              }
              name={'SUMMER 2015'}
            />
          </View>
          <View style={[styles.view1, styles.viewsearch]}>
            <Product2
              img={
                'https://i.pinimg.com/originals/a9/cf/48/a9cf48c6b9052a572b0287ecf060dbba.jpg'
              }
              name={'WINTER 14/15'}
            />
          </View>
        </View>
        <View style={[styles.view1, styles.viewsearch]}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/564x/c8/1e/36/c81e36d89c0354f89962de396ed31360.jpg',
            }}
            style={styles.imgcon1}
          />
          <Text>PREMIUM</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  viewsearch: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  view2: {
    flexDirection: 'row',
    marginTop: 10,
  },
  imgcon1: {
    height: 240,
    width: 240,
  },
});
