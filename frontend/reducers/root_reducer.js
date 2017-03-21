import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NavigationReducer from './navigation_reducer';
import NotesReducer from './notes_reducer';
import NoteDetailReducer from './note_detail_reducer';
import StudyReducer from './study_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  navigation: NavigationReducer,
  notes: NotesReducer,
  currentNote: NoteDetailReducer,
  study: StudyReducer
});

export default RootReducer;
