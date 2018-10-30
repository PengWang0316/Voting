import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import CacheableImage from 'react-native-cacheable-image';

import Styles from './Styles';

type Props = {
  candidate: Object,
  onClick: Function,
};

export const CandidateWithBackground = ({ candidate, onClick }: Props) => (
  <View
    style={[Styles.root, candidate.isDemocracy ? Styles.democracyBg : Styles.republicBg]}
  >
    <TouchableOpacity onPress={() => onClick(candidate)} style={Styles.root}>
      <CacheableImage
        style={Styles.avatar}
        source={{ uri: candidate.photo }}
      />
    </TouchableOpacity>
  </View>
);
export default CandidateWithBackground;
