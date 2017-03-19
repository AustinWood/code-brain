import { connect } from 'react-redux';

import Note from './note';
import { fetchNote, updateNote, deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state, { params }) => ({
  note: state.display.note
});

const mapDispatchToProps = dispatch => ({
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
