import React from 'react';
import { StatusBar } from 'react-native';

import Theme from '../../Theme';

export const DarkerStatusBar = () => (
  <StatusBar
    barStyle="light-content"
    backgroundColor={Theme.primary.dark}
  />);
export default DarkerStatusBar;
