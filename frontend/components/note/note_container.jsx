import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote } from '../../actions/note_actions';
import Note from './note';

const mapStateToProps = (state) => ({
  note: state.display.note,
  mode: state.display.mode
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
