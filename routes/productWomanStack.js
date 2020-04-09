import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../shared/header';
import ProductWoman from '../screens/ProductWoman';
import ProductNu from '../components/productwoman';
import CheckOut from '../screens/Check';
import Comfirm from '../screens/Comfirm';
const ProductWomanStack = createStackNavigator();
export default function ProductWomanNavigator() {
  return (
    <ProductWomanStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#67b0d6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProductWomanStack.Screen
        name="ProductWoman"
        component={ProductWoman}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="Product Woman" />
            ),
          };
        }}
      />
      <ProductWomanStack.Screen name="ProductNu" component={ProductNu} />
      <ProductWomanStack.Screen name="CheckOut" component={CheckOut} />
      <ProductWomanStack.Screen name="Comfirm" component={Comfirm} />
    </ProductWomanStack.Navigator>
  );
}
