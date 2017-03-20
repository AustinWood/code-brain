import { connect } from 'react-redux';
import { fetchNotes, selectNote } from '../../actions/note_actions';
import { asArray } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = state => {
  let selectedNoteId = null;
  if (state.navigation.note !== null) {
    selectedNoteId = state.navigation.note.id;
  }
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
