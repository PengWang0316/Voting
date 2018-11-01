import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CacheableImage from 'react-native-cacheable-image';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Styles from './Styles';

type Props = {
  candidate: Object,
  user: Object,
};

export const CandidateDetail = ({ candidate, user }: Props) => (
  <View style={[Styles.root, candidate.isDemocracy ? Styles.democracyBg : Styles.republicBg]}>
    <ScrollView>
      <View style={Styles.interView}>
        <CacheableImage
          style={Styles.avatar}
          source={{ uri: candidate.photo }}
        />
        <Text style={Styles.nameText}>{candidate.name}</Text>
        <Text style={Styles.descriptionText}>{candidate.description}</Text>
        <Button
          icon={(
            <Icon
              name="vote"
              type="material-community"
              color="white"
            />
          )}
          title="VOTE FOR ME"
          buttonStyle={Styles.voteBtn}
          disabled={!user.id}
        />
      </View>
    </ScrollView>
  </View>
);
/* istanbul ignore next */
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps, null)(CandidateDetail);
