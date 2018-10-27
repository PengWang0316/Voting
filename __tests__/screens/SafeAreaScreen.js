import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import { SafeAreaScreen } from '../../app/screens/SafeAreaScreen';

jest.mock('SafeAreaView', () => 'SafeAreaView');
jest.mock('../../app/components/DarkerStatusBar', () => 'DarkerStatusBar');

describe('SafeAreaScreen Test', () => {
  test('Snapshot test', () => expect(renderer.create(<SafeAreaScreen><Text>text</Text></SafeAreaScreen>).toJSON()).toMatchSnapshot());
});
