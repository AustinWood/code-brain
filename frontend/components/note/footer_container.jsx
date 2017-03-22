import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote } from '../../actions/note_actions';
import { revealAnswer } from '../../actions/navigation_actions';
import { submitScore } from '../../actions/note_actions';
import Footer from './footer';

const mapStateToProps = state => ({
  note: state.currentNote,
  footerType: state.navigation.footerType,
  authorId: state.session.currentUser ? state.session.currentUser.id : null
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),
  revealAnswer: id => dispatch(revealAnswer(id)),
  submitScore: id => dispatch(submitScore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
