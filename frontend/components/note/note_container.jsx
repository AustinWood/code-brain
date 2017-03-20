import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote } from '../../actions/note_actions';
import { addNote } from '../../actions/navigation_actions';
import Note from './note';

const mapStateToProps = (state) => ({
  note: state.currentNote,
  noteFooterType: state.navigation.noteFooterType
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id)),
  addNote: id => dispatch(addNote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
