import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { setMode, addNote } from '../../actions/navigation_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  addNote: () => dispatch(addNote()),
  setMode: (mode) => dispatch(setMode(mode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
