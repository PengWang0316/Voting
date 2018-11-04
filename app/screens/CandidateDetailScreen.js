/**
 * @format
 * @flow
 */
import React from 'react';

import SafeAreaScreen from './SafeAreaScreen';
import CandidateDetail from '../components/CandidateDetail';

type Props = {
  navigation: Object,
};

export const CandidateDetailScreen = ({ navigation }: Props) => (
  <SafeAreaScreen>
    <CandidateDetail
      candidate={navigation.getParam('candidate')}
      navigation={navigation}
    />
  </SafeAreaScreen>
);

export default CandidateDetailScreen;
