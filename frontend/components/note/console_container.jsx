import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote, updateAttr, studyAgain, runCode } from '../../actions/note_actions';
import { addNote, toggleSearch, exitStudy } from '../../actions/navigation_actions';
import Console from './console';

const mapStateToProps = state => ({
  // note: state.currentNote,
  // footerType: state.navigation.footerType,
  // dueNotesCount: state.study.dueNotes.length
  console: state.currentNote.console
});

const mapDispatchToProps = dispatch => ({
  addNote: id => dispatch(addNote()),
  updateAttr: keyValuePair => dispatch(updateAttr(keyValuePair)),
  toggleSearch: () => dispatch(toggleSearch()),
  studyAgain: () => dispatch(studyAgain()),
  exitStudy: () => dispatch(exitStudy()),
  runCode: () => dispatch(runCode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console);
