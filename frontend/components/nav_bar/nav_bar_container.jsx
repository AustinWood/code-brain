import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { toggleSearch } from '../../actions/navigation_actions';
import { nextQuestion } from '../../actions/note_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  dueNotes: state.study.dueNotes,
  studyMode: state.navigation.studyMode
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleSearch: () => dispatch(toggleSearch()),
  nextQuestion: () => dispatch(nextQuestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
