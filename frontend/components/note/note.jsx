import React from 'react';
import TextEditor from './text_editor';
import NoteFooter from './note_footer';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: ""
    };
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({question: nextProps.note.question});
  }

  render() {
    if (this.props.note.question === null) {
      return this.nullNoteMessage();
    }
    return this.renderedNote(this.props.note);
  }

  update(e) {
    console.log('update me');
    // this.setState({ question: e.target.value });
    this.props.updateAttr({question: e.target.value});
  }

  renderedNote(note) {
    return (
      <div className="note-container">
        <div className="note">

          <div className="note-header-container">
            <input type="text"
              value={this.state.question}
              onChange={this.update}
              className="note-header" />
          </div>

          <div className="note-body-container">
            <div className="note-body">

              <div className="editor-ccc" id="editor-left">
                <div className="editor-cc">
                  <TextEditor json={note.skeleton} />
                </div>
              </div>

              <div className="editor-ccc" id="editor-right">
                <div className="editor-cc">
                  <TextEditor json={note.answer} />
                </div>
              </div>

            </div>
          </div>

          <div className="note-footer-container">
            <NoteFooter
              noteId={note.id}
              deleteNote={this.props.deleteNote}
              footerType={this.props.footerType}
              saveChanges={this.props.saveChanges}
              parentState />
          </div>

        </div>
      </div>
    );
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
}

export default Note;
