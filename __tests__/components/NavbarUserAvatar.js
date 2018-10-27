import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { NavbarUserAvatar } from '../../app/components/NavbarUserAvatar/NavbarUserAvatar';

jest.mock('react-native-elements', () => ({
  Avatar: () => 'Avatar',
  Icon: () => 'Icon',
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

  test('Click Avatar', () => {
    const component = getShallowComponent({ ...defaultProps, user: { _id: 'id' } });
    component.find('Avatar').simulate('press');
    expect(defaultProps.navigation.navigate).toHaveBeenCalledTimes(2);
    expect(defaultProps.navigation.navigate).toHaveBeenLastCalledWith('UserInfo');
  });

  test('Snapshot not user _id', () => expect(renderer.create(<NavbarUserAvatar {...defaultProps} />).toJSON()).toMatchSnapshot());
  test('Snapshot has user _id', () => expect(renderer.create(<NavbarUserAvatar {...{ ...defaultProps, user: { _id: 'id' } }} />).toJSON()).toMatchSnapshot());
});
