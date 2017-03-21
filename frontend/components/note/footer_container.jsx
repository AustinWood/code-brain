import { connect } from 'react-redux';
// import { createNote, updateNote, deleteNote, updateAttr } from '../../actions/note_actions';
import Footer from './footer';

const mapStateToProps = state => ({
  // note: state.currentNote,
  // footerType: state.navigation.footerType,
  // authorId: state.session.currentUser ? state.session.currentUser.id : null
});

const mapDispatchToProps = dispatch => ({
  // createNote: note => dispatch(createNote(note)),
  // updateNote: note => dispatch(updateNote(note)),
  // deleteNote: id => dispatch(deleteNote(id)),
  // addNote: id => dispatch(addNote()),
  // updateAttr: keyValuePair => dispatch(updateAttr(keyValuePair))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
