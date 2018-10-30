import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { MainScreen } from '../../app/screens/MainScreen';

jest.mock('../../app/screens/SafeAreaScreen', () => 'SafeAreaScreen');
jest.mock('../../app/components/CandidateWithBackground', () => 'CandidateWithBackground');

describe('MainScreen', () => {
  const defaultProps = {
    candidates: [{ id: 1 }],
    fetchCandidatesInfo: jest.fn(),
    navigation: { navigate: jest.fn() },
  };
  const getShallowComponent = (props = defaultProps) => shallow(<MainScreen {...props} />);

  test('Constructor with candates', () => {
    getShallowComponent();
    expect(defaultProps.fetchCandidatesInfo).not.toHaveBeenCalled();
  });

  test('Constructor without candates', () => {
    getShallowComponent({ ...defaultProps, candidates: null });
    expect(defaultProps.fetchCandidatesInfo).toHaveBeenCalledTimes(1);
  });

  test('handleClickCandidate', () => {
    const component = getShallowComponent();
    const candidate = { id: 2 };
    component.instance().handleClickCandidate(candidate);

    expect(defaultProps.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(defaultProps.navigation.navigate).toHaveBeenLastCalledWith('CandidateDetail', { candidate });
  });

  test('Snapshot with candidate', () => expect(renderer.create(<MainScreen {...defaultProps} />).toJSON()).toMatchSnapshot());
  test('Snapshot without candidate', () => expect(renderer.create(<MainScreen {...{ ...defaultProps, candidates: null }} />).toJSON()).toMatchSnapshot());
});
