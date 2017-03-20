import React from 'react';

class NoteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.props.noteId);
  }

  render() {
    if (this.props.footerType === "ask") {
      return askFooter();
    } else {
      return editFooter(this.handleDelete, this.props.saveChanges);
    }
  }
}

export default NoteFooter;

///////////////////////
///// EDIT FOOTER /////
///////////////////////

const editFooter = (handleDelete, saveChanges) => (
  <div className="note-footer">

    <div className="note-footer-repl">
      <p className="note-footer-repl-text">REPL :</p>
      <button>
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/toggle_daxw3f.png"} className="note-footer-img" id="note-footer-toggle" />
      </button>
    </div>

    <div className="note-footer-right">
      <button onClick={handleDelete}>
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/trash_hr3gzp.png"} className="note-footer-img" id="note-footer-trash" />
      </button>
      <button onClick={saveChanges}>
        <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489764678/save_ukfo7q.png"} className="note-footer-img" id="note-footer-save" />
      </button>
    </div>

  </div>
);

//////////////////////
///// ASK FOOTER /////
//////////////////////

const askFooter = () => (
  <div className="note-footer-study">

    <div className="note-footer-button">
      <p className="note-footer-text">Run Code</p>
    </div>

    <div className="note-footer-button">
      <p className="note-footer-text">Reveal Answer</p>
    </div>

  </div>
);
