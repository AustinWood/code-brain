import React from 'react';
import merge from 'lodash/merge';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    // this.faceClicked = this.faceClicked.bind(this);
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
    } else {
      return this.editFooter();
    }
  }

  ///////////////////////
  ///// EDIT FOOTER /////
  ///////////////////////

  editFooter() {
    return (
      <div className="note-footer">

        <div className="note-footer-repl">
          <p className="note-footer-repl-text">REPL :</p>
          <button>
            <img src={"http://res.cloudinary.com/oblaka/image/upload/v1489763112/toggle_daxw3f.png"} className="note-footer-img" id="note-footer-toggle" />
          </button>
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

  askFooter() {
    return (
      <div className="note-footer-study">

        <div className="note-footer-button">
          <p className="note-footer-text">Run Code</p>
        </div>

        <div className="note-footer-button" onClick={this.props.revealAnswer}>
          <p className="note-footer-text">Reveal Answer</p>
        </div>

      </div>
    );
  }

  /////////////////////////
  ///// ANSWER FOOTER /////
  /////////////////////////

  faceClicked(item, e) {
    console.log("face clicked!");
    console.log(item);
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
      <div className="note-footer-answer">
        <div className="answer-centered">
          <p>How well did you<br/>know this answer?</p>
          <div onClick={this.props.nextQuestion}><img src={faceUrls[0]} className="note-footer-img" id="face-1" /></div>
          <div onClick={this.props.nextQuestion}><img src={faceUrls[1]} className="note-footer-img" id="face-2" /></div>
          <div onClick={this.props.nextQuestion}><img src={faceUrls[2]} className="note-footer-img" id="face-3" /></div>
          <div onClick={this.props.nextQuestion}><img src={faceUrls[3]} className="note-footer-img" id="face-4" /></div>
          <div onClick={this.props.nextQuestion}><img src={faceUrls[4]} className="note-footer-img" id="face-5" /></div>
        </div>
      </div>
    );
  }
}

export default Footer;
