import React from 'react';
import TextEditor from './text_editor';
import QuestionEditor from './question_editor';
import Console from './console';
import ConsoleContainer from './console_container';
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
    // return this.finishStudying();
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
        <div className="editor-cc">
          <p className="editor-label">Console</p>
          <ConsoleContainer />
        </div>
      );
    } else {
      return (
        <div className="editor-cc">
          <p className="editor-label">Solution</p>
            <TextEditor
              json={this.props.note.answer}
              updateAttr={this.props.updateAttr}
              attrKey="answer"
              editMode={this.props.editMode}
              studyMode={this.props.studyMode}
              hideSolution={this.props.hideSolution} />
        </div>
      );
    }
  }

  question() {
    if (this.props.editMode) {
      return (
        <div className="note-header-container">
          <div className="editor-cc">
            <p className="question-editor-label">Question</p>
            <QuestionEditor
              question={this.props.note.question}
              updateAttr={this.props.updateAttr}
              attrKey="question"
              className="note-header"
              noteId={this.props.note.id} />
          </div>
        </div>
      );
    }
    return (
      <div className="static-note-header-container">
        {this.cancel()}
        <div className="static-cc">
          <span className="header-question">{this.props.note.question}</span>
        </div>
      </div>
    );
  }

  cancel() {
    if (this.props.studyMode) {
      return (
        <div className="cancel" onClick={this.props.exitStudy}>
          <img src="http://res.cloudinary.com/oblaka/image/upload/v1490215536/cancel_tcfjby.png" />
        </div>
      );
    }
  }

  renderedNote() {
    console.log((this.props.studyMode || this.props.editMode));
    const note = this.props.note;
    let leftPaneLabel = "Skeleton";
    if (this.props.studyMode) {
      leftPaneLabel = "Attempt";
    }
    return (
      <div className="note-container" id={(this.props.studyMode || this.props.editMode) ? "editable" : "not-editable"}>
        <div className="note">

          {this.question()}

          <div className="note-body-container">
            <div className="note-body">

              <div className="editor-ccc" id="editor-left">
                <div className="editor-cc">
                  <p className="editor-label">{leftPaneLabel}</p>
                  <TextEditor
                    json={note.skeleton}
                    updateAttr={this.props.updateAttr}
                    attrKey="skeleton"
                    editMode={this.props.editMode}
                    studyMode={this.props.studyMode} />
                </div>
              </div>

              <div className="editor-ccc" id="editor-right">
                {this.rightPane()}
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

        <div className="congrats-container">
          <img src="http://res.cloudinary.com/oblaka/image/upload/v1490207145/dancing_pyw0tk.png" />
          <h1><br/>Congratulations!</h1>
          <h2><br/>Don't you already feel so much smarter?</h2>
          <h2><br/>
            <span onClick={ this.props.toggleSearch }>Return to dashboard.</span>
          </h2>
          <div id="blank-space"></div>
        </div>
      </div>
    );
  }
}
 // or <span onClick={ this.props.studyAgain }>study some more.</span>
export default Note;
