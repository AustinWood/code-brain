import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { addNote, toggleSearch, nextQuestion } from '../../actions/navigation_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  dueNotesCount: state.study.dueNotes.length
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
