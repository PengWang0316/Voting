import React from 'react';
import renderer from 'react-test-renderer';

import { LoginPanel } from '../../app/components/LoginPanel/LoginPanel';

jest.mock('../../app/components/LoginForm', () => 'LoginForm');

describe('LoginPanel', () => {
  const defaultProps = { handleSnackbarUpdate: jest.fn() };
  test('Snapshot', () => expect(renderer.create(<LoginPanel {...defaultProps} />).toJSON()).toMatchSnapshot());
});
