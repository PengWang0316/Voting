import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { CandidateDetail } from '../../app/components/CandidateDetail/CandidateDetail';

jest.mock('react-native-elements', () => ({ Button: 'Button', Icon: 'Icon' }));
jest.mock('react-native-cacheable-image', () => 'CacheableImage');

describe('CandidateDetail', () => {
  const defaultProps = {
    candidate: {
      photo: 'photoURI',
      name: 'name',
      description: 'description',
    },
    user: {},
  };

  test('Snapshot without user id', () => expect(renderer.create(<CandidateDetail {...defaultProps} />).toJSON()).toMatchSnapshot());
  test('Snapshot with user id', () => expect(renderer.create(<CandidateDetail {...{ ...defaultProps, user: { id: 'id' } }} />).toJSON()).toMatchSnapshot());
});
