import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote, saveChanges } from '../../actions/note_actions';
import { addNote } from '../../actions/navigation_actions';
import Note from './note';

const mapStateToProps = (state) => ({
  note: state.currentNote,
  footerType: state.navigation.footerType
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),
  addNote: id => dispatch(addNote()),
  saveChanges: note => dispatch(saveChanges())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
