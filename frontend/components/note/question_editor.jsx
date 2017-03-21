import React from 'react';
import { Editor, EditorState, ContentState,
         convertFromRaw, convertToRaw } from 'draft-js';

class QuestionEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorState(props.question);
    this.focus = () => this.refs.editor.focus();
    this.updateGlobalState = this.updateGlobalState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setEditorState(nextProps.question);
  }


  setEditorState(plainText) {
    if (plainText === null) {
        this.state = {editorState: EditorState.createEmpty()};
    } else {
      const content = ContentState.createFromText(plainText);
      this.state = ({editorState: EditorState.createWithContent(content)});
    }
  }

  updateGlobalState(editorState) {
    this.setState({ editorState });
    const key = this.props.attrKey;
    const val = editorState.getCurrentContent().getPlainText();
    let newState = {};
    newState[key] = val;
    this.props.updateAttr(newState);
  }

  render() {
    if (this.props.attrKey === "question") {
      return (
        <div onClick={this.focus} className="editor-question-container">
          <Editor
            editorState={this.state.editorState}
            onChange={this.updateGlobalState}
            ref="editor"
          />
        </div>
      );
    }
    return (
      <div onClick={this.focus} className="editor-container">
        <Editor
          editorState={this.state.editorState}
          onChange={this.updateGlobalState}
          ref="editor"
        />
      </div>
    );
  }
}

export default QuestionEditor;
