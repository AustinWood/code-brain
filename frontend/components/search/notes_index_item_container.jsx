import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { selectNote } from '../../reducers/selectors';

const mapStateToProps = ({ note }) => ({
  note
});

export default connect(
  mapStateToProps
)(NotesIndexItem);
