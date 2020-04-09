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
import {golbalStyles} from '../styles/global';
export default function Home({navigation}) {
  const [data, setdata] = useState([
    {
      id: '1',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTvaocM0PlMYzXxj--nt9i2m8IZtHv1fScnrVQ5nsToZREdRZU&usqp=CAU',
      name: 'Pink Shirt',
      price: '$ 249.00',
    },
    {
      id: '2',
      img:
        'https://cdn.hinative.com/attached_images/16158/4543464e5f8ebd9cb706c13a3dfee84ea2d40e79/large.jpg?1457997756',
      name: 'Checked Shirt',
      price: '$ 50.00',
    },
    {
      id: '3',
      img:
        'https://i.pinimg.com/originals/54/78/42/547842c24f368156cdd5cf55a87f8ab2.jpg',
      name: 'Red Polo Shirt',
      price: '$ 181.99',
    },
    {
      id: '4',
      img:
        'https://c3d320970a2e983659e8-4914634f0a844d7d4d4ef3e84a87f294.ssl.cf2.rackcdn.com/product-hugerect-906057-209991-1487077900-32c963a58980a8bad81f6a46081b2d26.jpg',
      name: 'Awesome Dress',
      price: '$ 372.00',
    },
  ]);
  const renderheader = () => {
    return (
      <View style={golbalStyles.container}>
        <View>
          <ImageBackground
            source={{
              uri:
                'https://znews-photo.zadn.vn/w660/Uploaded/Yfrur/2014_03_24/d9.jpg',
            }}
            style={golbalStyles.imgbackground}>
            <TouchableOpacity style={styles.touimg}>
              <Text style={styles.txtimg}>DISCOVER</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={[styles.view1, golbalStyles.margin1]}>
          <SearchBar
            placeholder="Search a item..."
            containerStyle={styles.backgroundSearch}
            inputContainerStyle={golbalStyles.backgroundSearch}
          />
        </View>
        <View style={[styles.view1, styles.viewtxt]}>
          <Text>OUR POPULAR PRODUCTS</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={golbalStyles.container}>
      <View style={[styles.view1, golbalStyles.margin1]}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => RenderItem(item)}
          keyExtractor={item => item.id}
          ListHeaderComponent={renderheader}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  touimg: {
    backgroundColor: '#f6846a',
    height: 35,
    width: 105,
    borderRadius: 8,
    position: 'absolute',
    bottom: 50,
    right: 30,
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
  view3: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
