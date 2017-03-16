import React from 'react';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notes-index-item">
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default NotesIndexItem;
