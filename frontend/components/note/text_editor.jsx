import React from 'react';
import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw } from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setEditorState();
    // debugger;

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});

    // Put these somewhere else?
    this.logState = () => console.log(this.state.editorState.toJS());
    this.logRaw = () => console.log(convertToRaw(this.state.editorState.getCurrentContent()));
    this.jsonState = () => console.log(JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())));
  }

  componentWillReceiveProps() {
    this.setEditorState();
  }

  setEditorState() {
    if (this.props.json === "") {
      // If there is no JSON to parse (e.g. on initial load or new note),
      // then create an empty state
      this.state = {editorState: EditorState.createEmpty()};
    } else {
      // If there is saved JSON, convert it to Draf.js content
      const content = convertFromRaw(JSON.parse(this.props.json));
      // Create a new editor state using the saved content
      this.state = {editorState: EditorState.createWithContent(content)};
    }
  }

  render() {

    const styles = {
      root: {
        fontFamily: '\'Helvetica\', sans-serif',
        padding: 20,
        width: 600,
      },
      editor: {
        cursor: 'text',
        minHeight: 80,
        padding: 18,
        color: "#E3F2FC"
      },
      button: {
        marginTop: 50,
        textAlign: 'center',
      }
    };

    // debugger;


    return (
      <div style={styles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder=""
          ref="editor"
        />
        <input
         onClick={this.logRaw}
         style={styles.button}
         type="button"
         value="Log State"
       />
      </div>
    );
  }

}

export default TextEditor;
