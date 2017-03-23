import { connect } from 'react-redux';
import { fetchNotes, selectNote, logSeeds } from '../../actions/note_actions';
import { addNote } from '../../actions/navigation_actions';
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
  addNote: () => dispatch(addNote()),
  requestNotes: () => dispatch(fetchNotes()),
  selectNote: note => dispatch(selectNote(note)),
  logSeeds: note => dispatch(logSeeds(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
