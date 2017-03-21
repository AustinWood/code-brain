import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote, updateAttr } from '../../actions/note_actions';
import { addNote } from '../../actions/navigation_actions';
import Note from './note';

const mapStateToProps = state => ({
  note: state.currentNote,
  footerType: state.navigation.footerType
});

const mapDispatchToProps = dispatch => ({
  addNote: id => dispatch(addNote()),
  updateAttr: keyValuePair => dispatch(updateAttr(keyValuePair))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
