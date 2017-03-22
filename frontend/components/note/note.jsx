import React from 'react';
import TextEditor from './text_editor';
import QuestionEditor from './question_editor';
import Console from './console';
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
  }

  render() {
    if (this.props.footerType === 'finish_studying') {
      return this.finishStudying();
    }
    if (this.props.note.question === null) {
      return this.nullNoteMessage();
    }
    // else if (this.props.footerType === 'ask') {
    //   return this.renderedNote("{\"entityMap\":{},\"blocks\":[{\"key\":\"6ks1t\",\"text\":\"> \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}");
    // }
    return this.renderedNote();
  }

  updateQuestion(e) {
    this.props.updateAttr({question: e.target.value});
  }

  rightPane() {
    if (this.props.footerType === 'ask') {
      return (
        <Console
          console={this.props.note.console}
          updateAttr={null}
          attrKey="console" />
      );
    } else {
      return (
        <TextEditor
          json={this.props.note.answer}
          updateAttr={this.props.updateAttr}
          attrKey="answer" />
      );
    }
  }

  question() {
    if (this.props.footerType === 'edit') {
      return (
        <div className="note-header-container">
          <div className="editor-cc">
            <QuestionEditor
              question={this.props.note.question}
              updateAttr={this.props.updateAttr}
              attrKey="question"
              className="note-header" />
          </div>
        </div>
      );
    }
    return (
      <p className="header-question">{this.props.note.question}</p>
    );
  }

  renderedNote() {
    const note = this.props.note;
    return (
      <div className="note-container">
        <div className="note">

          {this.question()}

          <div className="note-body-container">
            <div className="note-body">

              <div className="editor-ccc" id="editor-left">
                <div className="editor-cc">
                  <TextEditor
                    json={note.skeleton}
                    updateAttr={this.props.updateAttr}
                    attrKey="skeleton" />
                </div>
              </div>

              <div className="editor-ccc" id="editor-right">
                <div className="editor-cc">
                  {this.rightPane()}
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

  finishStudying() {
    return (
      <div className="note-container">
        <div className="null-note-message">
          <p>
            Congratulations!
          </p>
        </div>
      </div>
    );
  }
}

export default Note;
