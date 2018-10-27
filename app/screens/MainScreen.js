import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import SafeAreaScreen from './SafeAreaScreen';

const styles = StyleSheet.create({
  rootView: {
    width: '100%',
    height: '100%',
  },
  menuCategoryContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    width: '90%',
    paddingBottom: 200,
  },
});

/*
 * Menu Screen component
 */
export const MenuScreen = () => (
  <SafeAreaScreen>
    <View style={styles.rootView}>
      <Text>aaa</Text>
    </View>
  </SafeAreaScreen>
);
export default MenuScreen;
