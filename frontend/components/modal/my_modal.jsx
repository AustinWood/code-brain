import React from 'react';
import Modal from 'react-modal';

class MyModal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { username: "", password: "" };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoLogin = this.props.demoLogin.bind(this);
    // this.demo = this.demo.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    const bool = false;
    const afterOpenFn = () => console.log("onAfterOpen");
    const requestCloseFn = () => console.log("onRequestClose");
    const n = 500;

    const customStyle = {
      overlay: {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position                   : 'absolute',
        top                        : '40px',
        left                       : '40px',
        right                      : '40px',
        bottom                     : '40px',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'

      }
    };

    return (
      <Modal
        isOpen={bool}
        onAfterOpen={afterOpenFn}
        onRequestClose={requestCloseFn}
        closeTimeoutMS={n}
        style={customStyle}
        contentLabel="Modal"
        className="Modal">

        <h1>Modal Content</h1>
        <p>Etc.</p>

      </Modal>
    );
  }
}

export default MyModal;
