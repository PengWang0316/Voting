import React from 'react';
import renderer from 'react-test-renderer';

import { CandidateDetailScreen } from '../../app/screens/CandidateDetailScreen';

jest.mock('../../app/screens/SafeAreaScreen', () => 'SafeAreaScreen');
jest.mock('../../app/components/CandidateDetail', () => 'CandidateDetail');

describe('CandidateDetailScreen', () => {
  const defaultProps = {
    navigation: { getParam: jest.fn() },
  };
  test('Snapshot', () => expect(renderer.create(<CandidateDetailScreen {...defaultProps} />).toJSON()).toMatchSnapshot());
});
