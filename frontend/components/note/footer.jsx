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
    if (this.props.footerType === "ask" || this.props.footerType === "answer") {
      return this.studyFooter();
    } else {
      return this.editFooter();
    }
  }

  ///////////////////////
  ///// EDIT FOOTER /////
  ///////////////////////

  // <p className="note-footer-repl-text">REPL :</p>
  // <button>
  //   <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/toggle_daxw3f.png"} className="note-footer-img" id="note-footer-toggle" />
  // </button>
  editFooter() {
    return (
      <div className="note-footer">

        <div className="note-footer-repl">

        </div>

        <div className="note-footer-right">
          <button onClick={this.handleDelete}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/trash_hr3gzp.png"} className="note-footer-img" id="note-footer-trash" />
          </button>
          <button onClick={this.handleSave}>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489764678/save_ukfo7q.png"} className="note-footer-img" id="note-footer-save" />
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
  //           <img src="http://res.cloudinary.com/oblaka/image/upload/v1490190150/edit_l5m66j.png" className="note-footer-img" id="edit" />
  //         </div>
  //
  //       </div>
  //     </div>
  //   );
  // }

  ////////////////////////
  ///// STUDY FOOTER /////
  ////////////////////////

  studyFooter() {
    return (
      <div className="footer-study">

        <div onClick={this.props.runCode}>
          <img src="http://res.cloudinary.com/oblaka/image/upload/v1490189938/console_wz5ioy.png" className="note-footer-img" id="console-img" />
        </div>

        <div>
          {this.studyCenter()}
        </div>

        <div onClick={this.props.exitStudy}>
          <img src="http://res.cloudinary.com/oblaka/image/upload/v1490190150/edit_l5m66j.png" className="note-footer-img" id="edit" />
        </div>

      </div>
    );
  }

  studyCenter() {
    if (this.props.footerType === "ask") {
      return (
        <div onClick={this.props.revealAnswer} className="reveal-answer">
          <img src="http://res.cloudinary.com/oblaka/image/upload/v1490190729/show_vcuxmc.png" className="note-footer-img" id="eye" />
        </div>
      );
    } else {
      return this.faces();
      // return;
    }
  }

  faces() {
    let faceUrls = [
      "http://res.cloudinary.com/oblaka/image/upload/v1490101922/face-1_d7sqvz.png",
      "http://res.cloudinary.com/oblaka/image/upload/v1490101922/face-2_cpasur.png",
      "http://res.cloudinary.com/oblaka/image/upload/v1490101922/face-3_si2jh1.png",
      "http://res.cloudinary.com/oblaka/image/upload/v1490101923/face-4_rnevlo.png",
      "http://res.cloudinary.com/oblaka/image/upload/v1490101923/face-5_rfc7pi.png"
    ];

    return (
      <div className="answer-centered">
        <p>How well did you<br/>know this answer?</p>
        <div onClick={this.props.submitScore}><img src={faceUrls[0]} className="note-footer-img" id="face-1" /></div>
        <div onClick={this.props.submitScore}><img src={faceUrls[1]} className="note-footer-img" id="face-2" /></div>
        <div onClick={this.props.submitScore}><img src={faceUrls[2]} className="note-footer-img" id="face-3" /></div>
        <div onClick={this.props.submitScore}><img src={faceUrls[3]} className="note-footer-img" id="face-4" /></div>
        <div onClick={this.props.submitScore}><img src={faceUrls[4]} className="note-footer-img" id="face-5" /></div>
      </div>
    );
  }
}

export default Footer;
