import { connect } from 'react-redux';
import { fetchNotes, selectNote } from '../../actions/note_actions';
import { asArray } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = state => {
  let selectedNoteId = state.currentNote.id;
  return {
    notes: asArray(state),
    navigation: state.navigation,
    selectedNoteId: selectedNoteId
  };
};

const mapDispatchToProps = dispatch => ({
  requestNotes: () => dispatch(fetchNotes()),
  selectNote: note => dispatch(selectNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
