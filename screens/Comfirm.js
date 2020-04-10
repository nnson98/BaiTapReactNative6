import React, {useState} from 'react';
import {View, Text, Icon, Picker, Thumbnail} from 'native-base';
import {golbalStyles} from '../styles/global';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import DetailComfirm from '../shared/detailcomfirm';
import {Block} from 'galio-framework';
import {ScrollView} from 'react-native-gesture-handler';
import Paypal from '../shared/whatispaypal';
export default function Comfirm() {
  const [check, setcheck] = useState({like: false});
  const toggleCheck = () => setcheck({like: !check.like});
  return (
    <View style={golbalStyles.container}>
      <ScrollView>
        <View style={styles.tou}>
          <Text style={golbalStyles.txthear}>Your Order</Text>
        </View>
        <DetailComfirm
          img={'https://www.lulus.com/images/product/xlarge/1617074_261202.jpg'}
          name={'Muffin Dress'}
          size={'8'}
          number={'1'}
          price={'$ 25.00'}
        />
        <DetailComfirm
          img={'https://www.lulus.com/images/product/xlarge/2897940_559982.jpg'}
          name={'Red Dress'}
          size={'7'}
          number={'2'}
          price={'$ 552.00'}
        />
        <DetailComfirm
          img={
            'https://nexter.org/wp-content/uploads/2019/08/black-t-shirt-jeans-look-ideas-pic.jpg'
          }
          name={'Black T-shirt'}
          size={'9'}
          number={'1'}
          price={'$ 375.00'}
        />
        <View style={[golbalStyles.backgroundSearch, golbalStyles.margin]}>
          <View
            style={[
              golbalStyles.view,
              golbalStyles.margin,
              {justifyContent: 'space-between'},
            ]}>
            <View>
              <Text style={golbalStyles.fontsizetogether}>
                SHIPPING AND HANDLING
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.customTou, {backgroundColor: '#84b262'}]}>
                <Text style={golbalStyles.txthear}>FREE SHIPPING</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Block style={[styles.block,golbalStyles.margin]} />
          <View
            style={[
              golbalStyles.view,
              golbalStyles.margin,
              {justifyContent: 'space-between'},
            ]}>
            <View style={styles.margin}>
              <Text> ORDER TOTAL </Text>
            </View>
            <View style={styles.margin}>
              <Text style={[styles.fonsize, {color: 'red'}]}> $ 327,00 </Text>
            </View>
          </View>
        </View>
        <View style={golbalStyles.margin}>
          <View style={styles.margin}>
            <TouchableOpacity style={styles.tou}>
              <Text style={[styles.fonsize, {color: 'white'}]}>
                SELECT A PAY METHOD
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[golbalStyles.view, golbalStyles.margin1]}>
          <TouchableOpacity style={styles.toucheck} onPress={toggleCheck}>
            <Icon
              type="MaterialCommunityIcons"
              name={
                check.like ? 'check-circle' : 'checkbox-blank-circle-outline'
              }
            />
          </TouchableOpacity>
          <Text style={[golbalStyles.fontsizetogether, styles.margin1]}>
            Paypal
          </Text>
        </View>
        <View style={[golbalStyles.item, golbalStyles.margin1]}>
          <Image
            source={{
              uri:
                'https://tienaoplus.com/wp-content/uploads/2019/10/paypal-1.png',
            }}
            style={styles.img}
          />
        </View>
        <View
          style={[
            golbalStyles.view,
            golbalStyles.margin1,
            {justifyContent: 'space-around'},
          ]}>
          <Image
            source={{
              uri:
                'https://luatvietan.vn/wp-content/uploads/2014/07/dich-vu-visa.jpg',
            }}
            style={styles.img}
          />
          <Image
            source={{
              uri:
                'https://cdn.icon-icons.com/icons2/1178/PNG/512/amex-inverted_82041.png',
            }}
            style={styles.img}
          />
          <Image
            source={{
              uri:
                'https://www.goyolo.com.vn/wp-content/uploads/2019/01/The-mastercard-ao-la-gi-1.jpg',
            }}
            style={styles.img}
          />
        </View>
        <View style={golbalStyles.item}>
          <Text>What is Paypal?</Text>
        </View>
        <View style={[golbalStyles.backgroundSearch, golbalStyles.margin]}>
          <Paypal
            name={'Cheque Payment'}
            detail={
              'Please send your cheque to Store Name, Store Street, Store Town, Store State or Country, Store Postcode'
            }
          />
          <Paypal
            name={'Direct Bank Transfer'}
            detail={
              "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in out account."
            }
          />
        </View>
        <View style={[golbalStyles.item, golbalStyles.margin]}>
          <TouchableOpacity
            style={[styles.customTou, {backgroundColor: '#84b262'}]}>
            <Text>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
        <View style={[golbalStyles.item, golbalStyles.margin]}>
          <TouchableOpacity
            style={[styles.customTou, {backgroundColor: '#e85653'}]}>
            <Text>CANCEL </Text>
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
  customTou: {
    height: 30,
    width: 160,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
  },
  margin1: {
    marginLeft: 10,
  },
  block: {
    borderColor: '#dee0e0',
    width: '80%',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  fonsize: {
    fontSize: 22,
  },
  img: {
    height: 50,
    width: 60,
  },
  toucheck: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 14,
    flexDirection: 'row',
  },
});
