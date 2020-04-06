import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {Icon} from 'native-base';

export default function Header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <Icon
        type="MaterialIcons"
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <Text style={styles.headerText}>{title}</Text>
      <Icon type="Entypo" name="shopping-cart" style={styles.icon2} />
      <Icon type="FontAwesome5" name="clipboard" style={styles.icon2} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    marginLeft: 50,
  },
  icon: {
    left: 10,
  },
  headerImg: {
    width: 26,
    height: 26,
    marginLeft: 50,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  icon2: {
    left: 90,
    fontSize: 20,
    padding: 6,
  },
});
