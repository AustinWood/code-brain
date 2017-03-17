import React from 'react';

class Note extends React.Component {
  componentDidMount() {

  }

  render() {
    const note = this.props.note;
    return (
      <div className="note">

        <div className="note-header">
          <p className="note-header-text">{note.question}</p>
        </div>

        <div className="note-body">
          <div className="note-body-sub" id="note-body-left" dangerouslySetInnerHTML={{__html: note.skeleton}}></div>
          <div className="note-body-sub" id="note-body-right" dangerouslySetInnerHTML={{__html: note.solution}}></div>
        </div>

        <div className="note-footer">

          <div className="note-footer-repl">
            <p className="note-footer-repl-text">REPL :</p>
            <button>
              <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/toggle_daxw3f.png"} className="note-footer-img" id="note-footer-toggle" />
            </button>
          </div>

          <div className="note-footer-right">
            <button>
              <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/trash_hr3gzp.png"} className="note-footer-img" id="note-footer-trash" />
            </button>
            <button>
              <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489764678/save_ukfo7q.png"} className="note-footer-img" id="note-footer-save" />
            </button>
          </div>

        </div>
      </div>
    );
  }
}

//<button onClick={this.props.addNote}>

export default Note;
