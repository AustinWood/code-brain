import React from 'react';
import { Editor, EditorState, ContentState, Modifier,
         convertFromRaw, convertToRaw } from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorState(props.json);
    this.convertToJson = this.convertToJson.bind(this);
    this.logJson = this.logJson.bind(this);
    this.updateGlobalState = this.updateGlobalState.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.focus = this.focus.bind(this);
    this.onTab = this.onTab.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setEditorState(nextProps.json);
  }

  focus() {
    if (this.props.studyMode || this.props.editMode) {
      this.refs.editor.focus();
    }
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
    if (this.props.studyMode || this.props.editMode) {
      this.setState({ editorState });
      const key = this.props.attrKey;
      const val = this.convertToJson(editorState);
      let newState = {};
      newState[key] = val;
      this.props.updateAttr(newState);
    } else {
      // this.setState({ editorState });
      this.props.updateAttr(this.props.json);
    }
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
    if (this.props.studyMode || this.props.editMode) {
      const key = this.props.attrKey;
      $("#" + key).css( "background-color", "#1A1B25" );
    }
  }

  onBlur() {
    const key = this.props.attrKey;
    $("#" + key).css( "background-color", "#0A0B1A" );
  }

  onTab(e) {
    e.preventDefault();

    let currentState = this.state.editorState;
    let newContentState = Modifier.replaceText(
      currentState.getCurrentContent(),
      currentState.getSelection(),
      "  "
    );

    this.setState({
      editorState: EditorState.push(currentState, newContentState, 'insert-characters')
    });
  }

  hideSolutionButton() {
    if (this.props.studyMode && this.props.attrKey === "answer") {
      return (
        <div className="run-code-container" id="hide-solution-container">
          <div className="run-code-button" onClick={this.props.hideSolution}>
            <img src="http://res.cloudinary.com/oblaka/image/upload/v1490363555/hide_q3eagx.png" />
            <p id="run-code-text">hide solution</p>
          </div>
        </div>
      );
    }
    return null;
  }

  // {this.logJsonButton()}
  render() {
    return (
      <div onClick={this.focus} className="editor-container" id={this.props.attrKey}>
        {this.hideSolutionButton()}
        <Editor
          editorState={this.state.editorState}
          onChange={this.updateGlobalState}
          ref="editor"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onTab={this.onTab} />
      </div>
    );
  }
}

export default TextEditor;
