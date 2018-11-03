import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as CandidateActions from '../../app/actions/CandidateActions';
import { API_FETCH_CANDIDATES_INFO } from '../../app/actions/ApiUrls';
import { FETCH_CANDIDATES_INFO_SUCCESS, ADD_VOTE_SUCCESS } from '../../app/actions/ActionTypes';

const axiosMock = new MockAdapter(axios); // Setting up a mock for axios.
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CandidateActions', () => {
  test('fetchCandidatesInfo without error', () => {
    const candidates = [{ id: 1 }, { id: 2 }];
    const expectedActions = [
      { type: FETCH_CANDIDATES_INFO_SUCCESS, candidates },
    ];
    axiosMock.onGet(API_FETCH_CANDIDATES_INFO).reply(200, candidates);

    const store = mockStore();
    return store.dispatch(CandidateActions.fetchCandidatesInfo()).then(result => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('fetchCandidatesInfo with network error', () => {
    console.error = jest.fn();
    axiosMock.onGet(API_FETCH_CANDIDATES_INFO).networkError();

    const store = mockStore();
    return store.dispatch(CandidateActions.fetchCandidatesInfo()).then(result => {
      expect(console.error).toHaveBeenCalledTimes(1);
    });
  });

  test('addVoteSuccess', () => expect(CandidateActions.addVoteSuccess('candidateId')).toEqual({ type: ADD_VOTE_SUCCESS, candidateId: 'candidateId' }));
});
