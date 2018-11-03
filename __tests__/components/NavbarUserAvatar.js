import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { NavbarUserAvatar } from '../../app/components/NavbarUserAvatar/NavbarUserAvatar';

jest.mock('react-native-elements', () => ({
  // Avatar: () => 'Avatar',
  Icon: () => 'Icon',
}));
jest.mock('react-native-cacheable-image', () => 'CacheableImage');
jest.mock('react-native', () => ({
  View: 'View',
  TouchableHighlight: 'TouchableHighlight',
  StyleSheet: {
    create: jest.fn().mockReturnValue({
      rootView: 'rootView',
      avatarImage: 'avatarImage',
    }),
  },
}));

describe('NavbarUserAvatar', () => {
  const defaultProps = {
    navigation: {
      navigate: jest.fn(),
    },
    user: {},
  };
  const getShallowComponent = (props = defaultProps) => shallow(<NavbarUserAvatar {...props} />);

  test('Click Icon', () => {
    const component = getShallowComponent();
    component.find('Icon').simulate('press');
    expect(defaultProps.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(defaultProps.navigation.navigate).toHaveBeenLastCalledWith('Login');
  });

  test('Click Avatar Image', () => {
    const component = getShallowComponent({ ...defaultProps, user: { id: 'id' } });
    component.find('TouchableHighlight').simulate('press');
    expect(defaultProps.navigation.navigate).toHaveBeenCalledTimes(2);
    expect(defaultProps.navigation.navigate).toHaveBeenLastCalledWith('UserInfo');
  });

  test('Snapshot not user id', () => expect(renderer.create(<NavbarUserAvatar {...defaultProps} />).toJSON()).toMatchSnapshot());
  test('Snapshot has user id', () => expect(renderer.create(<NavbarUserAvatar {...{ ...defaultProps, user: { id: 'id' } }} />).toJSON()).toMatchSnapshot());
  test('Snapshot has user id with photo', () => expect(renderer.create(<NavbarUserAvatar {...{ ...defaultProps, user: { id: 'id', photo: 'photo' } }} />).toJSON()).toMatchSnapshot());
});
