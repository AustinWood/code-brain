import Note from './note';
import { connect } from 'react-redux';
// import { fetchNotes, fetchNote } from '../../actions/note_actions';

// const demoNote = {
//   question: "You have an array of integers. Write a recursive solution to find the sum of the integers.",
//   skeleton: `{"entityMap":{},"blocks":[{"key":"du6sp","text":"function sumRecur(array) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"33gec","text":"  if (array.length === 0) return 0;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1b9jr","text":"  if (array.length === 1) return array[0];","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6tcg6","text":"  let sum = sumRecur(array.slice(1));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1n9pc","text":"  return sum + array[0];","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e8q8u","text":"}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}`,
//   solution: `{"entityMap":{},"blocks":[{"key":"du6sp","text":"function sumRecur(array) {","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"33gec","text":"  if (array.length === 0) return 0;","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1b9jr","text":"  if (array.length === 1) return array[0];","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6tcg6","text":"  let sum = sumRecur(array.slice(1));","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1n9pc","text":"  return sum + array[0];","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e8q8u","text":"}","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}`
// };

const mapStateToProps = ({ display }) => ({
  note: display.note
});

const mapDispatchToProps = dispatch => ({
  // requestNotes: () => dispatch(fetchNotes())
  // ,
  // createTodo: todo => dispatch(createTodo(todo)),
  // updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
