import React from 'react';
import { Editor, EditorState } from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    // super(props);
    // this.state = {editorState: EditorState.createEmpty()};
    // this.onChange = (editorState) => this.setState({editorState});

    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.logState = () => console.log(this.state.editorState.toJS());
  }

  // render() {
  //   return (
  //       <Editor editorState={this.state.editorState} onChange={this.onChange} />
  //   );
  // }

  render() {

    const styles = {
      root: {
        fontFamily: '\'Helvetica\', sans-serif',
        padding: 20,
        width: 600,
      },
      editor: {
        border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
        color: "#E3F2FC"
      },
      button: {
        marginTop: 10,
        textAlign: 'center',
      }
    };

    return (
      <div style={styles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Enter some text..."
          ref="editor"
        />
      </div>
    );
  }

}

export default TextEditor;
