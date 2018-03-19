import React from 'react';
import Modal from 'react-modal';

import styles from './ChatModal.css';
import ChatForm from '../ChatForm/ChatForm';

Modal.setAppElement('#root');

const chatModal = (props) => {
  return (
    <div>
      <Modal
        className={styles.ChatModal}
        // overlayClassName={styles.Overlay}
        isOpen={props.showModal}>
        <ChatForm />
      </Modal>
    </div>
  );
}

export default chatModal;
