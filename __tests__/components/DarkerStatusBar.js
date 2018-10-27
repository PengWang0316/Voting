import React from 'react';
import renderer from 'react-test-renderer';

import { DarkerStatusBar } from '../../app/components/DarkerStatusBar/DarkerStatusBar';

// jest.mock('react-native', () => ({ StatusBar: 'StatusBar' }));
jest.mock('StatusBar', () => 'StatusBar');

describe('DarkerStatusBar Test', () => {
  test('snapshot', () => expect(renderer.create(<DarkerStatusBar />).toJSON()).toMatchSnapshot());
});
