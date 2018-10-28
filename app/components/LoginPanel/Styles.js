import { StyleSheet } from 'react-native';

import Theme from '../../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.panelBackgroundColor,
  },
  internalContainer: {
    width: '75%',
  },
  deviderView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
  },
  devider: {
    backgroundColor: Theme.primary.main,
    height: 1,
    width: '38%',
  },
});
