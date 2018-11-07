import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CacheableImage from 'react-native-cacheable-image';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Styles from './Styles';
import { vote } from '../../actions/UserActions';

const MAIN_SCREEN = 'Main';

type Props = {
  candidate: Object,
  user: Object,
  vote: Function,
  navigation: Object,
};

/** The component to show the detailed information for a candidate. */
export class CandidateDetail extends Component<Props> {
  state = { isSubmited: false };

  /**
   * Somehow the test will fail if the Component that extends from Component does not call the super(props) manually.
   * It could relate to babel, react-native, or metro-react-native-babel-preset.
   * Will be removed if the problem disappear in the future.
   * @param {object} props has all props value
   */
  constructor(props) {
    super(props);
  }

  /**
   * Calling the vote action and change the isSubmited state to true.
   * @return {null} No return.
   */
  handleVoteBtnClick = () => this.setState(
    { isSubmited: true },
    () => {
      this.props.vote(this.props.user.jwt, this.props.candidate.id);
      this.props.navigation.navigate(MAIN_SCREEN);
    },
  );

  /**
   * The render method
   * @return {jsx} Return jsx for the component.
   */
  render() {
    const { candidate, user } = this.props;
    const { isSubmited } = this.state;
    return (
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
              disabled={!user.id || !!(user.vote_id) || isSubmited}
              onPress={this.handleVoteBtnClick}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  user: state.user,
});
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  vote: (userId, candidateId) => dispatch(vote(userId, candidateId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CandidateDetail);
