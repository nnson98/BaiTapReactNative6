import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Icon} from 'native-base';
import RenderItem from '../shared/renderItem';
import {SearchBar} from 'react-native-elements';

export default function Home() {
  const [data, setdata] = useState([
    {
      id: '1',
      name: 'Pink Shirt',
      img:
        'https://therevndthen.com/store/media/catalog/product/m/a/mask_shirt_-_pink.jpg',
      price: '249.00',
    },
    {
      id: '2',
      name: 'Checked Shirt',
      img:
        'https://cdn.hinative.com/attached_images/16158/4543464e5f8ebd9cb706c13a3dfee84ea2d40e79/large.jpg?1457997756',
      price: '50.00',
    },
    {
      id: '3',
      name: 'Red Polo Shirt',
      img:
        'https://i.pinimg.com/originals/54/78/42/547842c24f368156cdd5cf55a87f8ab2.jpg',
      price: '181.99',
    },
    {
      id: '4',
      name: 'Awesome Dress',
      img:
        'https://c3d320970a2e983659e8-4914634f0a844d7d4d4ef3e84a87f294.ssl.cf2.rackcdn.com/product-hugerect-906057-209991-1487077900-32c963a58980a8bad81f6a46081b2d26.jpg',
      price: '372.00',
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={{
              uri:
                'https://znews-photo.zadn.vn/w660/Uploaded/Yfrur/2014_03_24/d9.jpg',
            }}
            style={styles.imgbackground}>
            <TouchableOpacity style={styles.touimg}>
              <Text style={styles.txtimg}>DISCOVER</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.view1}>
          <SearchBar
            placeholder="Search a item..."
            containerStyle={styles.backgroundSearch}
            inputContainerStyle={styles.backgroundSearch}
          />
        </View>
        <View style={[styles.view1, styles.viewtxt]}>
          <Text>OUR POPULAR PRODUCTS</Text>
        </View>
        <View style={styles.view3}>
          <FlatList
            numColumns={2}
            data={data}
            renderItem={({item}) => RenderItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imgbackground: {
    height: 250,
  },
  touimg: {
    backgroundColor: '#f6846a',
    height: 35,
    width: 105,
    borderRadius: 8,
    position: 'absolute',
    bottom: 50,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txtimg: {
    color: 'white',
    fontWeight: 'bold',
  },
  view1: {
    marginTop: 30,
    alignContent: 'center',
    justifyContent: 'center',
  },
  viewtxt: {
    alignItems: 'center',
  },
  backgroundSearch: {
    backgroundColor: '#f8f8f8',
  },
  view3: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
});
