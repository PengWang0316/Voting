import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CacheableImage from 'react-native-cacheable-image';
import { Icon } from 'react-native-elements';

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
      <View style={Styles.voteView}>
        <Icon
          name="tag-heart"
          type="material-community"
          color="white"
        />
        <Text style={Styles.voteText}>{candidate.votes}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
export default CandidateWithBackground;
