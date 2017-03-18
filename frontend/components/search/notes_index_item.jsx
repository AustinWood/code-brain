import React from 'react';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectCurrentNote = this.selectCurrentNote.bind(this);
  }

  selectCurrentNote() {
    this.props.selectNote(this.props.note);
  }

  render() {
    return (
      <div className="notes-index-item" onClick={this.selectCurrentNote}>
        <p>{this.props.note.question}</p>
      </div>
    );
  }
}
//
export default NotesIndexItem;
