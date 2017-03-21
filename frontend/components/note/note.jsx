import React from 'react';
import TextEditor from './text_editor';
import FooterContainer from './footer_container';

import { Editor, EditorState, ContentState,
         convertFromRaw, convertToRaw } from 'draft-js';

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
    this.resizeTextArea();
  }

  resizeTextArea() {
    const textArea = document.getElementById('textarea');
    if (textArea) {
      textArea.css({'height':'auto','overflow-y':'hidden'}).height(textArea.scrollHeight);
    }
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
  // <input
  //   type="text"
  //   value={this.state.question}
  //   onChange={this.updateQuestion}
  //   className="note-header"
  //   id="textarea" />
  renderedNote() {
    const note = this.props.note;
    return (
      <div className="note-container">
        <div className="note">

          <div className="note-header-container">
              <div className="editor-cc">
            <TextEditor
              json={note.question}
              updateAttr={this.props.updateAttr}
              attrKey="question"
              className="note-header" />
          </div>
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
            <FooterContainer />
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
