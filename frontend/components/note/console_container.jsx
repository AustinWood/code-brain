import { connect } from 'react-redux';
import { createNote, updateNote, deleteNote, updateAttr, studyAgain, runCode } from '../../actions/note_actions';
import { addNote, toggleSearch, exitStudy } from '../../actions/navigation_actions';
import Console from './console';

const mapStateToProps = state => ({
  console: state.currentNote.console
});

const mapDispatchToProps = dispatch => ({
  updateAttr: keyValuePair => dispatch(updateAttr(keyValuePair)),
  runCode: () => dispatch(runCode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console);
