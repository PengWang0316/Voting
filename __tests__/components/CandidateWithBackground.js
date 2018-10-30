import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { CandidateWithBackground } from '../../app/components/CandidateWithBackground/CandidateWithBackground';

jest.mock('react-native-cacheable-image', () => 'CacheableImage');
jest.mock('react-native', () => ({
  View: 'View',
  TouchableOpacity: 'TouchableOpacity',
  StyleSheet: {
    create: jest.fn().mockReturnValue({
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
      },
    }),
  },
}));

describe('CandidateWithBackground', () => {
  const defaultProps = {
    candidate: {
      id: 1,
      isDemocracy: 1,
      photo: 'photoUri',
    },
    onClick: jest.fn(),
  };
  const getShallowComponent = (props = defaultProps) => shallow(<CandidateWithBackground {...props} />);

  test('Click TouchableOpacity', () => {
    const component = getShallowComponent();
    component.find('TouchableOpacity').simulate('press');
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClick).toHaveBeenLastCalledWith(defaultProps.candidate);
  });

  test('Snapshot', () => expect(renderer.create(<CandidateWithBackground {...defaultProps} />).toJSON()).toMatchSnapshot());
});
