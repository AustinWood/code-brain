import React from 'react';
import merge from 'lodash/merge';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.props.note.id);
  }

  handleSave() {
    if (this.props.note.id === null) {
      const newNote = merge({}, this.props.note, {author_id: this.props.authorId});
      this.props.createNote(newNote);
    } else {
      this.props.updateNote(this.props.note);
    }
  }

  render() {
    if (this.props.footerType === "ask") {
      return this.askFooter();
    } else if (this.props.footerType === "answer") {
      return this.answerFooter();
    } else if (this.props.footerType === "edit") {
      return this.editFooter();
    }
    return this.viewFooter();
    // return (
    //   <div style={{height: "15px"}}></div>
    // );
  }

  ///////////////////////
  ///// EDIT FOOTER /////
  ///////////////////////

  // <p className="note-footer-repl-text">REPL :</p>
  // <button>
  //   <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/toggle_daxw3f.png"} className="note-footer-img" id="note-footer-toggle" />
  // </button>
  viewFooter() {
    return (
      <div className="note-footer">
        <div className="note-footer-left"></div>
        <div className="note-footer-right" id="edit-div" onClick={this.props.editNote}>
          <p>Edit note</p>
          <img src="http://res.cloudinary.com/oblaka/image/upload/v1490190150/edit_l5m66j.png" className="note-footer-img" id="note-footer-edit" />
        </div>

      </div>
    );
  }

  editFooter() {
    return (
      <div className="note-footer">
        <div className="note-footer-left"></div>
        <div className="note-footer-repl">

        </div>

        <div className="note-footer-right">
          <div>
            <p className="trash-label">Delete note</p>
            <p className="save-label">Save changes</p>
            <p className="cancel-label">Cancel</p>
          </div>
          <button onClick={this.handleDelete}>
            <img src="http://res.cloudinary.com/oblaka/image/upload/v1489763112/trash_hr3gzp.png" className="note-footer-img" id="note-footer-trash" />
          </button>
          <button onClick={this.handleSave}>
            <img src="http://res.cloudinary.com/oblaka/image/upload/v1489764678/save_ukfo7q.png" className="note-footer-img" id="note-footer-save" />
          </button>
          <button onClick={this.handleSave}>
            <img src="http://res.cloudinary.com/oblaka/image/upload/v1490215536/cancel_tcfjby.png" className="note-footer-img" id="note-footer-cancel" />
          </button>
        </div>

      </div>
    );
  }

  //////////////////////
  ///// ASK FOOTER /////
  //////////////////////

  // askFooter() {
  //   return (
  //     <div className="note-footer-study">
  //       <div className="ask-centered">
  //
  //         <div onClick={this.props.runCode}>
  //           <img src="http://res.cloudinary.com/oblaka/image/upload/v1490189938/console_wz5ioy.png" className="note-footer-img" id="console-img" />
  //         </div>
  //
  //         <div onClick={this.props.revealAnswer}>
  //           <img src="http://res.cloudinary.com/oblaka/image/upload/v1490190729/show_vcuxmc.png" className="note-footer-img" id="eye" />
  //         </div>
  //
  //         <div onClick={this.props.toggleSearch}>
  //         </div>
  //
  //       </div>
  //     </div>
  //   );
  // }

  ////////////////////////
  ///// STUDY FOOTER /////
  ////////////////////////

  askFooter() {
    return (
      <div className="footer-study">
        <div className="answer-centered" id="reveal-answer" onClick={this.props.revealAnswer}>
          <img src="http://res.cloudinary.com/oblaka/image/upload/v1490190729/show_vcuxmc.png" className="note-footer-img" id="eye" />
          <p>Reveal solution</p>
        </div>
      </div>
    );
  }

  answerFooter() {
    let faceUrls = [
      "http://res.cloudinary.com/oblaka/image/upload/v1490101922/face-1_d7sqvz.png",
      "http://res.cloudinary.com/oblaka/image/upload/v1490101922/face-2_cpasur.png",
      "http://res.cloudinary.com/oblaka/image/upload/v1490101922/face-3_si2jh1.png",
      "http://res.cloudinary.com/oblaka/image/upload/v1490101923/face-4_rnevlo.png",
      "http://res.cloudinary.com/oblaka/image/upload/v1490101923/face-5_rfc7pi.png"
    ];

    return (
      <div className="footer-study">
        <div className="answer-centered">
          <p>How well did you know this answer?</p>
          <div onClick={this.props.submitScore}><img src={faceUrls[0]} className="note-footer-img" id="face-1" /></div>
          <div onClick={this.props.submitScore}><img src={faceUrls[1]} className="note-footer-img" id="face-2" /></div>
          <div onClick={this.props.submitScore}><img src={faceUrls[2]} className="note-footer-img" id="face-3" /></div>
          <div onClick={this.props.submitScore}><img src={faceUrls[3]} className="note-footer-img" id="face-4" /></div>
          <div onClick={this.props.submitScore}><img src={faceUrls[4]} className="note-footer-img" id="face-5" /></div>
        </div>
      </div>
    );
  }
}

export default Footer;
