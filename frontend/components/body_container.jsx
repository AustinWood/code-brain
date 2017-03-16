import Body from './body';
// import { logout } from '../../actions/session_actions';
// import { setMode, addNote } from '../../actions/navigation_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ display }) => ({
  display: display
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Body);
