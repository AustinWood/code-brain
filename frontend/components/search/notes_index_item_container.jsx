import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
// import { selectNote } from '../../reducers/selectors';
import { selectNote } from '../../actions/notes_index_actions';

// const mapStateToProps = () => ({
//
// });

const mapDispatchToProps = dispatch => ({
  selectNote: noteId => dispatch(selectNote(noteId))
});

export default connect(
  null,
  mapDispatchToProps
)(NotesIndexItem);
