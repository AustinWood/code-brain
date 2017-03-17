import Note from './note';
import { connect } from 'react-redux';
// import { fetchNotes, fetchNote } from '../../actions/note_actions';

const demoNote = {
  question: "You have array of integers. Write a recursive solution to find the sum of the integers.",

  skeleton: `function sumRecur(array) {

  }

  console.log(sumRecur([1, 3, 5, 7, 9, 2, 4, 6, 8]) === 45);
  console.log(sumRecur([-3, 0, 3, 7, 1, 0, -7, 32]) === 33);
  console.log(sumRecur([]) === 0);`,

  solution: `function sumRecur(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    let sum = sumRecur(array.slice(1));
    return sum + array[0];
  }`
}

const mapStateToProps = state => ({
  note: demoNote
});

const mapDispatchToProps = dispatch => ({
  // requestNotes: () => dispatch(fetchNotes())
  // ,
  // createTodo: todo => dispatch(createTodo(todo)),
  // updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Note);
