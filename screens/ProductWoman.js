import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native-gesture-handler';
import {golbalStyles} from '../styles/global';
import Option from '../shared/options';
import ItemProduct from '../shared/itemproduct';
export default function ProductWoman({navigation}) {
  const [data, setdata] = useState([
    {
      id: '1',
      img: 'https://www.lulus.com/images/product/xlarge/1617074_261202.jpg',
      name: 'Green Blouse',
      price: '$ 348.00',
    },
    {
      id: '2',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5-l7gVH4K3DXoeWtiKtNH3P0jBbG-atRXI5NDGDfWbNUAWt_q&usqp=CAU',
      name: 'Salmon Shirt',
      price: '$ 89.99',
    },
    {
      id: '3',
      img: 'https://www.lulus.com/images/product/xlarge/2897940_559982.jpg',
      name: 'Red Dress',
      price: '$ 552.00',
    },
    {
      id: '4',
      img:
        'https://nexter.org/wp-content/uploads/2019/08/black-t-shirt-jeans-look-ideas-pic.jpg',
      name: 'Black T-shirt & Jeans',
      price: '$ 375.00',
    },
  ]);
  const renderheader = () => {
    return (
      <View style={golbalStyles.container}>
        <View style={styles.viewsearch}>
          <SearchBar
            placeholder="Search a item..."
            containerStyle={styles.backgroundSearch}
            inputContainerStyle={golbalStyles.backgroundSearch}
          />
        </View>
        <View style={[styles.view2, styles.viewoption]}>
          <Option name={'TOP RATED'} />
          <Option name={'SIZE: M'} />
          <Option name={'SPRING'} />
        </View>
      </View>
    );
  };
  return (
    <View style={golbalStyles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => ItemProduct(item, {navigation})}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderheader}
      />
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
    marginTop: 20,
  },
  viewoption: {
    justifyContent: 'space-around',
  },
});
