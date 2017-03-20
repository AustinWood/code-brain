import React from 'react';
import { Editor, EditorState, ContentState,
         convertFromRaw, convertToRaw } from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorState();

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this.setState({ editorState });

    this.convertToJson = this.convertToJson.bind(this);
    this.logJson = this.logJson.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // this.setEditorState();

    if (nextProps.json === null) {
        this.state = {editorState: EditorState.createEmpty()};
    } else {
      // Convert JSON string to Draf.js content
      const content = convertFromRaw(JSON.parse(nextProps.json));
      // Create a new editor state using the saved content
      this.state = ({editorState: EditorState.createWithContent(content)});
    }
  }

  setEditorState() {
    if (this.props.json === null) {
        this.state = {editorState: EditorState.createEmpty()};
    } else {
      // Convert JSON string to Draf.js content
      const content = convertFromRaw(JSON.parse(this.props.json));
      // Create a new editor state using the saved content
      this.state = ({editorState: EditorState.createWithContent(content)});
    }
  }

  convertToJson(editorState) {
    const rawContent = convertToRaw(editorState);
    return JSON.stringify(rawContent);
  }

  // Useful for creating seed data. Type in the text editor,
  // then log the Draft.js content to the console as JSON.
  logJson() {
    const editorState = this.state.editorState.getCurrentContent();
    console.log(this.convertToJson(editorState));
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

  render() {
    return (
      <div onClick={this.focus} className="editor-container">
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          ref="editor"
        />
      </div>
    );
  }
}

export default TextEditor;
