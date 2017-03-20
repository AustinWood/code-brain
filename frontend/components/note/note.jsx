import React from 'react';
import TextEditor from './text_editor';
import NoteFooter from './note_footer';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      skeleton: "",
      answer: "",
    };
    this.updateQuestion = this.updateQuestion.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      question: nextProps.note.question,
      skeleton: nextProps.note.skeleton,
      answer: nextProps.note.answer
    });
  }

  render() {
    if (this.props.note.question === null) {
      return this.nullNoteMessage();
    }
    return this.renderedNote();
  }

  updateQuestion(e) {
    this.props.updateAttr({question: e.target.value});
  }

  renderedNote() {
    const note = this.props.note;
    return (
      <div className="note-container">
        <div className="note">

          <div className="note-header-container">
            <input type="text"
              value={this.state.question}
              onChange={this.updateQuestion}
              className="note-header" />
          </div>

          <div className="note-body-container">
            <div className="note-body">

              <div className="editor-ccc" id="editor-left">
                <div className="editor-cc">
                  <TextEditor json={note.skeleton} updateAttr={this.props.updateAttr} attrKey="skeleton" />
                </div>
              </div>

              <div className="editor-ccc" id="editor-right">
                <div className="editor-cc">
                  <TextEditor json={note.answer} updateAttr={this.props.updateAttr} attrKey="answer" />
                </div>
              </div>

            </div>
          </div>

          <div className="note-footer-container">
            <NoteFooter
              note={note}
              deleteNote={this.props.deleteNote}
              createNote={this.props.createNote}
              updateNote={this.props.updateNote}
              footerType={this.props.footerType}
              authorId={this.props.authorId} />
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
