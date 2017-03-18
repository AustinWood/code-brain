import React from 'react';
import TextEditorContainer from './text_editor_container';
import TextEditor from './text_editor';

class Note extends React.Component {
  nullNoteMessage() {
    return (
      <div>hello</div>
    );
  }

  renderedNote(note) {
    return (
      <div className="note">

        <div className="note-header">
          <p className="note-header-text">{note.question}</p>
        </div>

        <div className="note-body">
          <div className="note-body-sub" id="note-body-left">
            <TextEditor json={note.skeleton} />
          </div>
          <div className="note-body-sub" id="note-body-right">
            <TextEditor json={note.answer} />
          </div>
        </div>

        <div className="note-footer">

          <div className="note-footer-repl">
            <p className="note-footer-repl-text">REPL :</p>
            <button>
              <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/toggle_daxw3f.png"} className="note-footer-img" id="note-footer-toggle" />
            </button>
          </div>

          <div className="note-footer-right">
            <button>
              <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/trash_hr3gzp.png"} className="note-footer-img" id="note-footer-trash" />
            </button>
            <button>
              <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489764678/save_ukfo7q.png"} className="note-footer-img" id="note-footer-save" />
            </button>
          </div>

        </div>
      </div>
    );
  }

  render() {
    // const note = this.props.note || { question: "", skeleton: "", answer: "" };
    const note = this.props.note;
    if (note === null) {
      return this.nullNoteMessage();
    }
    return this.renderedNote(note);
  }
}

export default Note;
