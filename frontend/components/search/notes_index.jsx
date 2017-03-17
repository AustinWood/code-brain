import React from 'react';
import NotesIndexItem from './notes_index_item';

// const notesList = (notes = []) => {
//   let notesIndexItems = [];
//   notes.forEach((el, idx) => (
//     <NotesIndexItem question={el} key={idx} />
//   ));
//   return notesIndexItems;
// };
//
// const NotesIndex = (notes) => {
//   // debugger;
//
// };

// see bench_detail.jsx for how to properly pass in props

class NotesIndex extends React.Component {
  componentDidMount() {
    // this.props.requestTodos();
  }

  render() {
    debugger;
    // const { todos, createTodo, updateTodo, errors } = this.props;
    const { notes } = this.props;

    const noteComponents = notes.map(note => (
        <NotesIndexItem
          key={ note.id }
          note={ note } />
      )
    );

    return(
      <div>
        <p className="notes-index-header">Showing {notes.length} of {notes.length} notes</p>
        <ul>
          { noteComponents }
        </ul>
      </div>
    );
  }
}

export default NotesIndex;
