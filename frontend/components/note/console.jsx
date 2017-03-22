import React from 'react';
import { Editor, EditorState, ContentState,
         convertFromRaw, convertToRaw } from 'draft-js';

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorState(props.console);
    this.focus = () => this.refs.editor.focus();

    this.updateGlobalState = this.updateGlobalState.bind(this);
    // this.onFocus = this.onFocus.bind(this);
    // this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setEditorState(nextProps.console);
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
    // const key = this.props.attrKey;
    // const val = editorState.getCurrentContent().getPlainText();
    // let newState = {};
    // newState[key] = val;
    this.props.updateAttr(this.props.console);
  }

  // onFocus() {
  //   const key = this.props.attrKey;
  //   $("#" + key).css( "background-color", "#1A1B25" );
  // }
  //
  // onBlur() {
  //   const key = this.props.attrKey;
  //   $("#" + key).css( "background-color", "#0A0B1A" );
  // }

  runCodeButton() {
    return (
      <div onClick={this.props.runCode} className="run-code-button">
        <img src="http://res.cloudinary.com/oblaka/image/upload/v1490189938/console_wz5ioy.png" className="note-footer-img" id="console-img" />
      </div>
    );
  }

  render() {
    return (
      <div onClick={this.focus} className="console-container" id={this.props.attrKey}>
        {this.runCodeButton()}
        <Editor
          editorState={this.state.editorState}
          onChange={this.updateGlobalState}
          ref="editor"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          readOnly={true} />
      </div>
    );
  }
}

export default Console;
