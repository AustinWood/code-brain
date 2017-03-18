import React from 'react';
import { Editor, EditorState, ContentState,
         convertFromRaw, convertToRaw } from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorState();
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.logJson = this.logJson.bind(this);
  }

  componentWillReceiveProps() {
    this.setEditorState();
  }

  setEditorState() {
    if (this.props.json === "") {
      // If there is no JSON to parse (e.g. on initial load
      // or when creating a new note), then start with an empty state
      this.state = {editorState: EditorState.createEmpty()};
    } else {
      // If there is saved JSON, convert it to Draf.js content
      const content = convertFromRaw(JSON.parse(this.props.json));
      // Create a new editor state using the saved content
      this.state = {editorState: EditorState.createWithContent(content)};
    }
  }

  // Useful for creating seed data. Type in the text editor,
  // then log the Draft.js content to the console as JSON.
  logJson() {
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());
    const json = JSON.stringify(rawContent);
    console.log(json);
  }

  logJsonButton() {
    const showLogJsonButton = true;
    // Change `showLogJsonButton` to `true` to render a button
    // in the text editor that will call `logJson()`
    if (showLogJsonButton) {
      return (
        <input
          onClick={this.logJson}
          type="button"
          value="Log JSON"
          style={{marginTop: '20px', color: '#80d135'}}
        />
      );
    }
  }

  render() {
    return (
      <div onClick={this.focus}>
        <Editor
          className="text-editor"
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder=""
          ref="editor"
        />
        {this.logJsonButton()}
      </div>
    );
  }
}

export default TextEditor;
