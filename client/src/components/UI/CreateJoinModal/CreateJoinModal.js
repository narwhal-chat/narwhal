import React from 'react';
import Modal from 'react-modal';

import styles from './CreateJoinModal.css';
import CreateJoin from '../CreateJoin/CreateJoin';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    borderRadius: '50%'
  }
};

const createJoinModal = (props) => {
  return (
    <div>
      <Modal
        className={{
          base: styles.Modal,
          afterOpen: styles.ModalAfterOpen,
          beforeClose: styles.ModalBeforeClose
        }
        }
        overlayClassName={{
          base: styles.Overlay,
          afterOpen: styles.OverlayAfterOpen,
          beforeClose: styles.OverlayBeforeClose
        }}
        style={customStyles}
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={150}>
        <CreateJoin closeModal={props.onRequestClose}/>
      </Modal>
    </div>
  );
}

export default createJoinModal;
