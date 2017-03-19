import { connect } from 'react-redux';

import NoteFooter from './note_footer';
import { createNote, updateNote, deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  note: state.display.note
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteFooter);
