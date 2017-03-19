import Body from './body';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  display: state.display
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Body);
