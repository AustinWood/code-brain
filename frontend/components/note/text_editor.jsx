import React from 'react';
import { Editor, EditorState, ContentState,
         convertFromRaw, convertToRaw } from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorState(props.json);
    this.focus = () => this.refs.editor.focus();

    this.convertToJson = this.convertToJson.bind(this);
    this.logJson = this.logJson.bind(this);
    this.updateGlobalState = this.updateGlobalState.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setEditorState(nextProps.json);
  }

  setEditorState(json) {
    if (json === null) {
        this.state = {editorState: EditorState.createEmpty()};
    } else {
      // Convert JSON string to Draf.js content
      const content = convertFromRaw(JSON.parse(json));
      // Create a new editor state using the saved content
      this.state = ({editorState: EditorState.createWithContent(content)});
    }
  }

  updateGlobalState(editorState) {
    this.setState({ editorState });
    const key = this.props.attrKey;
    const val = this.convertToJson(editorState);
    let newState = {};
    newState[key] = val;
    this.props.updateAttr(newState);
  }

  convertToJson(editorState) {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    return JSON.stringify(rawContent);
  }

  // Useful for creating seed data. Type in the text editor,
  // then log the Draft.js content to the console as JSON.
  logJson() {
    console.log(this.convertToJson(this.state.editorState));
  }

  logJsonButton() {
    return (
      <input
        onClick={this.logJson}
        type="button"
        value="Log JSON"
        style={{marginTop: '20px', color: '#80d135'}}
      />
    );
  }

  onFocus() {
    console.log("onFocus");
  }

  onBlur() {
    console.log("onBlur");
  }

  // {this.logJsonButton()}
  render() {
    return (
      <div onClick={this.focus} className="editor-container">
        <Editor
          editorState={this.state.editorState}
          onChange={this.updateGlobalState}
          ref="editor"
          onFocus={this.onFocus}
          onBlur={this.onBlur} />
      </div>
    );
  }
}

export default TextEditor;
