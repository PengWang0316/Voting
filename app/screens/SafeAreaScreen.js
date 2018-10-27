import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import DarkerStatusBar from '../components/DarkerStatusBar';
import Theme from '../Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.panelBackgroundColor,
    width: '100%',
  },
});

type Props = {
  children: Object,
  style: Object,
};
/**
 * Wrap the children components to a safe area component with a customizedstatus bar.
 * @param {object} children has all component's children component.
 * @return {jsx} Return jsx for the component.
 */
export const SafeAreaScreen = ({ children, style }: Props) => (
  <SafeAreaView style={[styles.container, style]}>
    <DarkerStatusBar />
    {children}
  </SafeAreaView>
);
export default SafeAreaScreen;
