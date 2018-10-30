import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import SafeAreaScreen from './SafeAreaScreen';
import CandidateWithBackground from '../components/CandidateWithBackground';
import { fetchCandidatesInfo } from '../actions/CandidateActions';

type Props = {
  candidates: Object,
  fetchCandidatesInfo: Function,
};

const CANDIDATE_DETAIL_PAGE = 'CandidateDetail';

const styles = StyleSheet.create({
  rootView: {
    width: '100%',
    height: '100%',
  },
  // menuCategoryContainer: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   marginTop: 20,
  //   width: '90%',
  //   paddingBottom: 200,
  // },
});

/**
 * Menu Screen component
 */
export class MainScreen extends Component<Props> {
  /**
   * Call the fetchCandidatesInfo action if Redux does not have candidates info yet.
   * @param {object} props has all component's prop value.
   */
  constructor(props) {
    super(props);
    if (!props.candidates) props.fetchCandidatesInfo();
  }

  /**
   * Navigate to the candidate detial page
   * @param {Object} candidate is an object that has all candidate's information
   * @return {null} No return.
   */
  handleClickCandidate = candidate => {
    this.props.navigation.navigate(CANDIDATE_DETAIL_PAGE, { candidate });
  };

  /**
   * The render method
   * @return {jsx} Return the jsx for the component.
   */
  render() {
    const { candidates } = this.props;
    return (
      <SafeAreaScreen>
        <View style={styles.rootView}>
          {candidates && candidates.map(candidate => (
            <CandidateWithBackground
              key={candidate.id}
              candidate={candidate}
              onClick={this.handleClickCandidate}
            />
          ))}
        </View>
      </SafeAreaScreen>
    );
  }
}
/* istanbul ingore next */
const mapStateToProps = state => ({ candidates: state.candidates });
/* istanbul ingore next */
const mapDispatchToProps = dispatch => ({
  fetchCandidatesInfo: () => dispatch(fetchCandidatesInfo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
