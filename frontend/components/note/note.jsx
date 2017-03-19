import React from 'react';
import TextEditor from './text_editor';
import NoteFooterContainer from './note_footer_container';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {note: null, text: "old"};
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateSkeleton = this.updateSkeleton.bind(this);
  }

  componentWillReceiveProps() {
    const note = this.props.note;
    if (note !== null) {
      this.setState({note: note});
    }
  }

  handleSave() {
    this.props.updateNote(this.state.note);

    // if (this.props.note.id === null) {
    //   // this.props.createNote(note);
    // } else {
    //   // this.props.updateNote(note);
    // }
  }

  updateSkeleton() {
    this.setState({note: {skeleton: "new text!"}});
    // this.setState({text: "new!"});
  }

  handleDelete() {
    if (this.props.note.id === null) {
      // close component
    } else {
      this.props.deleteNote(this.props.note.id);
    }
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
    // debugger;
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
                  <TextEditor json={note.skeleton} updateParentState={this.updateSkeleton} />
                </div>
              </div>

              <div className="editor-container-container-container" id="editor-right">
                <div className="editor-container-container">
                  <TextEditor json={note.answer} updateParentState={this.updateSkeleton} />
                </div>
              </div>

            </div>
          </div>

          <div className="note-footer-container">
            <div className="note-footer">

              <div className="note-footer-repl">
                <p className="note-footer-repl-text">REPL :</p>
                <button>
                  <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/toggle_daxw3f.png"} className="note-footer-img" id="note-footer-toggle" />
                </button>
              </div>

              <div className="note-footer-right">
                <button onClick={ this.handleDelete }>
                  <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/trash_hr3gzp.png"} className="note-footer-img" id="note-footer-trash" />
                </button>
                <button onClick={ this.handleSave }>
                  <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489764678/save_ukfo7q.png"} className="note-footer-img" id="note-footer-save" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }

  render() {
    if (note === null && this.props.mode !=='add') {
      return this.nullNoteMessage();
    }

    let note = this.props.note || {question: "", skeleton: "", answer: ""};

    return this.renderedNote(note);
  }
}

export default Note;
