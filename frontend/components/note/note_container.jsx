import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote, updateAttr, studyAgain } from '../../actions/note_actions';
import { addNote, toggleSearch, exitStudy, editNote } from '../../actions/navigation_actions';
import Note from './note';

const mapStateToProps = state => ({
  note: state.currentNote,
  footerType: state.navigation.footerType,
  dueNotesCount: state.study.dueNotes.length,
  studyMode: state.navigation.studyMode,
  editMode: state.navigation.editMode
});

const mapDispatchToProps = dispatch => ({
  addNote: id => dispatch(addNote()),
  editNote: id => dispatch(editNote()),
  updateAttr: keyValuePair => dispatch(updateAttr(keyValuePair)),
  toggleSearch: () => dispatch(toggleSearch()),
  studyAgain: () => dispatch(studyAgain()),
  exitStudy: () => dispatch(exitStudy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
