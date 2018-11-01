import { StyleSheet } from 'react-native';

import Theme from '../../Theme';

export default StyleSheet.create({
  root: {
    width: '100%',
    minHeight: '100%',
  },
  interView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 40,
    paddingRight: 40,
  },
  democracyBg: {
    backgroundColor: '#1a65dd',
  },
  republicBg: {
    backgroundColor: '#dd201a',
  },
  nameText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Theme.primary.contrastText,
    marginTop: 30,
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 20,
    color: Theme.primary.contrastText,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  voteBtn: {
    backgroundColor: Theme.primary.main,
    borderRadius: 15,
    marginTop: 35,
    width: '100%',
  },
});
