import React from 'react';
import TextEditor from './text_editor';
import NoteFooter from './note_footer';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {note: null, text: "old"};
  }

  componentWillReceiveProps() {
    const note = this.props.note;
    if (note !== null) {
      this.setState({note: note});
    }
  }

  // handleSave() {
  //   this.props.updateNote(this.state.note);
  //
  //   // if (this.props.note.id === null) {
  //   //   // this.props.createNote(note);
  //   // } else {
  //   //   // this.props.updateNote(note);
  //   // }
  // }

  updateSkeleton() {
    this.setState({note: {skeleton: "new text!"}});
    // this.setState({text: "new!"});
  }

  nullNoteMessage() {
    return (
      <div className="note-container">
        <div className="null-note-message">
          <p>Select a note on the left,<br/>
          <span onClick={ this.props.addNote }>or create a new one.</span>
          </p>
        </div>
      </div>
    );
  }

  renderedNote(note) {
    return (
      <div className="note-container">
        <div className="note">

          <div className="note-header-container">
            <p className="note-header">{note.question}</p>
          </div>

          <div className="note-body-container">
            <div className="note-body">

              <div className="editor-container-container-container" id="editor-left">
                <div className="editor-container-container">
                  <TextEditor json={note.skeleton} />
                </div>
              </div>

              <div className="editor-container-container-container" id="editor-right">
                <div className="editor-container-container">
                  <TextEditor json={note.answer} />
                </div>
              </div>

            </div>
          </div>

          <div className="note-footer-container">
            <NoteFooter
              noteId={note.id}
              deleteNote={this.props.deleteNote}
              footerType={this.props.footerType} />
          </div>

        </div>
      </div>
    );
  }

  render() {
    if (this.props.note.question === null) {
      return this.nullNoteMessage();
    }

    return this.renderedNote(this.props.note);
  }
}

export default Note;
