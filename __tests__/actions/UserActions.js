import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  USER_LOGOUT_SUCCESS, USER_LOGIN_SUCCESS,
  PARSER_USER_FROM_JWT_SUCCESS, VOTE_SUCCESS, ADD_VOTE_SUCCESS,
} from '../../app/actions/ActionTypes';
import {
  API_JWTMESSAGE_VERIFY, API_LOGIN_WITH_PASSWORD, API_VOTE,
} from '../../app/actions/ApiUrls';
// import { JWT_MESSAGE } from '../../app/config';
import * as UserActions from '../../app/actions/UserActions';

const axiosMock = new MockAdapter(axios); // Setting up a mock for axios.
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UserActions', () => {
  test('logout', () => {
    // localStorage.setItem(JWT_MESSAGE, 'message');
    const expectActions = [{ type: USER_LOGOUT_SUCCESS, user: {} }];
    const store = mockStore();
    store.dispatch(UserActions.logout());
    expect(store.getActions()).toEqual(expectActions);
    // expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    // expect(localStorage.removeItem).toHaveBeenLastCalledWith(JWT_MESSAGE);
    // expect(localStorage.getItem(JWT_MESSAGE)).toBeNull();
  });

  test('parserUserFromJwt', () => {
    const user = { _id: 'id' };
    const jwtMessage = 'message';
    const expectActions = [
      { type: PARSER_USER_FROM_JWT_SUCCESS, user },
    ];
    axiosMock.onGet(API_JWTMESSAGE_VERIFY, { params: { jwtMessage } }).reply(200, user);
    const store = mockStore();
    return store.dispatch(UserActions.parserUserFromJwt(jwtMessage)).then(() => expect(store.getActions()).toEqual(expectActions));
  });

  test('parserUserFromJwt with network error', () => {
    const jwtMessage = 'message';
    const mockErrorFn = jest.fn();
    console.error = mockErrorFn;

    axiosMock.onGet(API_JWTMESSAGE_VERIFY, { params: { jwtMessage } }).networkError();
    const store = mockStore();
    store.dispatch(UserActions.parserUserFromJwt(jwtMessage)).then(() => expect(mockErrorFn).toHaveBeenCalledTimes(1));
  });

  test('loginWithPassword has data without error', () => {
    // localStorage.removeItem(JWT_MESSAGE);  React Native could not use the localStorage
    const user = { username: 'username', password: 'password' };
    const expectActions = [
      { type: USER_LOGIN_SUCCESS, user: { ...user, jwt: 'jwt' } },
    ];
    axiosMock.onGet(API_LOGIN_WITH_PASSWORD, { params: user }).reply(200, { ...user, jwt: 'jwt' });
    const store = mockStore();
    return store.dispatch(UserActions.loginWithPassword(user)).then(() => {
      // expect(localStorage.getItem(JWT_MESSAGE)).toBe('jwt');
      expect(store.getActions()).toEqual(expectActions);
    });
  });

  test('loginWithPassword no data without error', () => {
    // localStorage.removeItem(JWT_MESSAGE); React Native could not use the localStorage
    const user = { username: 'username', password: 'password' };
    const expectActions = [
      { type: USER_LOGIN_SUCCESS, user: null },
    ];
    axiosMock.onGet(API_LOGIN_WITH_PASSWORD, { params: user }).reply(200, null);
    const store = mockStore();
    return store.dispatch(UserActions.loginWithPassword(user)).then(() => {
      // expect(localStorage.getItem(JWT_MESSAGE)).toBeNull();
      expect(store.getActions()).toEqual(expectActions);
    });
  });

  test('loginWithPassword with network error', () => {
    const user = { username: 'username', password: 'password' };
    const mockErrorFn = jest.fn();
    console.error = mockErrorFn;
    axiosMock.onGet(API_LOGIN_WITH_PASSWORD, { params: user }).networkError();
    const store = mockStore();
    return store.dispatch(UserActions.loginWithPassword(user))
      .then(() => expect(mockErrorFn).toHaveBeenCalledTimes(1));
  });

  test('emptyUser', () => {
    const expectActions = [
      { type: USER_LOGIN_SUCCESS, user: {} },
    ];
    const store = mockStore();
    store.dispatch(UserActions.emptyUser());
    expect(store.getActions()).toEqual(expectActions);
  });

  test('vote', () => {
    const mockErrorFn = jest.fn();
    console.error = mockErrorFn;
    const candidateId = 'candidateId';
    const userId = 'userId';
    const expectActions = [
      {
        type: VOTE_SUCCESS,
        vote_id: candidateId,
      },
      { type: ADD_VOTE_SUCCESS },
    ];
    axiosMock.onPut(API_VOTE).reply(200, null);
    const store = mockStore();

    return store.dispatch(UserActions.vote(userId, candidateId))
      .then(() => {
        expect(store.getActions()).toEqual(expectActions);
        expect(console.error).not.toHaveBeenCalled();
      });
  });

  test('vote with network error', () => {
    const mockErrorFn = jest.fn();
    console.error = mockErrorFn;
    const candidateId = 'candidateId';
    const userId = 'userId';
    axiosMock.onPut(API_VOTE).networkError();
    const store = mockStore();

    return store.dispatch(UserActions.vote(userId, candidateId))
      .then(() => expect(console.error).toHaveBeenCalledTimes(1));
  });
});
