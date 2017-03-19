import { connect } from 'react-redux';
// import { createNote, updateNote, deleteNote } from '../../actions/note_actions';
import TextEditor from './text_editor';

const mapStateToProps = (state, params) => {
  const json = params.json;
};

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextEditor);
