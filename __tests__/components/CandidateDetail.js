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
      id: 'candidateId',
    },
    user: {},
    vote: jest.fn(),
  };
  const getShallowComponent = (props = defaultProps) => shallow(<CandidateDetail {...props} />);

  test('Initial states', () => {
    const component = getShallowComponent();
    expect(component.state('isSubmited')).toBe(false);
  });

  test('handleVoteBtnClick', () => {
    const component = getShallowComponent({ ...defaultProps, user: { jwt: 'jwt' } });
    component.instance().handleVoteBtnClick();
    expect(component.state('isSubmited')).toBe(true);
    expect(defaultProps.vote).toHaveBeenCalledTimes(1);
    expect(defaultProps.vote).toHaveBeenLastCalledWith('jwt', 'candidateId');
  });

  test('Snapshot without user id', () => expect(renderer.create(<CandidateDetail {...defaultProps} />).toJSON()).toMatchSnapshot());
  test('Snapshot with user id', () => expect(renderer.create(<CandidateDetail {...{ ...defaultProps, user: { id: 'id' } }} />).toJSON()).toMatchSnapshot());
  test('Snapshot with user id and vote_id', () => expect(renderer.create(<CandidateDetail {...{ ...defaultProps, user: { id: 'id', vote_id: 'voteId' } }} />).toJSON()).toMatchSnapshot());
  test('Snapshot with user id, vote_id and isSubmited is true', () => {
    const component = getShallowComponent({ ...defaultProps, user: { id: 'id', vote_id: 'voteId' } });
    component.setState({ isSubmited: true });
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
  });
});
