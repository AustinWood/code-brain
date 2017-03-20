import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { setMode, addNote, toggleSearch, study } from '../../actions/navigation_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  addNote: () => dispatch(addNote()),
  toggleSearch: () => dispatch(toggleSearch()),
  study: () => dispatch(study())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
