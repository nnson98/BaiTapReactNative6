import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SearchBar} from 'react-native-elements';
export default function All() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlNwykvwoj1EvV4Entbc1SNNW3nwzGqvMG_Ee0w7qPdG-KK8je&usqp=CAU',
          }}
          style={styles.imgbackground}
        />
        <Image
          source={{
            uri:
              'https://nguoimauthoitrangvietnam.com/wp-content/uploads/2017/03/banner_missvn-1.jpg',
          }}
          style={styles.imgbackground}
        />
      </View>
      <View style={styles.view1}>
        <SearchBar
          placeholder="Search a item..."
          containerStyle={styles.backgroundSearch}
          inputContainerStyle={styles.backgroundSearch}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgbackground: {
    height: 180,
    padding: 10,
  },
  view1: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  backgroundSearch: {
    backgroundColor: '#f8f8f8',
  },
});
