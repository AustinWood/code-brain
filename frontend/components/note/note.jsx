import React from 'react';
import TextEditor from './text_editor';
import NoteFooterContainer from './note_footer_container';

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  nullNoteMessage() {
    return (
      <div className="note-container">
        <div className="null-note-message">
          <p>Select a note on the left,<br/>or create a new one.</p>
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

          <NoteFooterContainer />

        </div>
      </div>
    );
  }

  render() {
    let note = this.props.note;
    if (note === null) {
      if (this.props.mode !== 'add') {
        return this.nullNoteMessage();
      }
      note = {question: "", skeleton: "", answer: ""};
    }
    return this.renderedNote(note);
  }
}

export default Note;
