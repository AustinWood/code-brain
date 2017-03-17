import React from 'react';

const Note = () => {
  return (
    <div className="note">

      <div className="note-header">
        <p className="note-header-text">You have array of integers. Write a recursive solution to find the sum of the integers.</p>
      </div>

      <div className="note-body">

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
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/save_ypr6p1.png"} className="note-footer-img" id="note-footer-save" />
          </button>
        </div>

      </div>
    </div>
  );
};

//<button onClick={this.props.addNote}>

export default Note;
