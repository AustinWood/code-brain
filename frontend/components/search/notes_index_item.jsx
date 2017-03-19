import React from 'react';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectCurrentNote = this.selectCurrentNote.bind(this);
  }

  selectCurrentNote() {
    this.props.receiveNote(this.props.note);
  }

  render() {
    const { question } = this.props.note;

    return (
      <div
        className="notes-index-item"
        id={this.props.selected ? "selected-notes-index-item" : ""}
        onClick={this.selectCurrentNote}>
        <p>{question}</p>
      </div>
    );
  }
}

export default NotesIndexItem;
