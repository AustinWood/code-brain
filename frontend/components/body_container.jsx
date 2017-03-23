import Body from './body';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  studyMode: state.navigation.studyMode
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
