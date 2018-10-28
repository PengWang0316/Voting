import { StyleSheet } from 'react-native';

import Theme from '../../Theme';

export default StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    color: Theme.primary.main,
  },
  buttonView: {
    marginTop: 30,
  },
  loginBtn: {
    backgroundColor: Theme.primary.main,
    borderRadius: 15,
  },
});
