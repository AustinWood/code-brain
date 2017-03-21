import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { addNote, toggleSearch, nextQuestion } from '../../actions/navigation_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  addNote: () => dispatch(addNote()),
  toggleSearch: () => dispatch(toggleSearch()),
  nextQuestion: () => dispatch(nextQuestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
