import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootStack from './routes/rootStack';

export default function App() {
  return (
    <View style={styles.container}>
      <RootStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
