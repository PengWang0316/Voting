import { StyleSheet } from 'react-native';

import Theme from '../../Theme';

export default StyleSheet.create({
  root: {
    width: '100%',
    height: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  democracyBg: {
    backgroundColor: '#1a65dd',
  },
  republicBg: {
    backgroundColor: '#dd201a',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  voteView: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  voteText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Theme.primary.contrastText,
    marginLeft: 10,
  },
});
