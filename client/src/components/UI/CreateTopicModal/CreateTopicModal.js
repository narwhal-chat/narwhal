import React from 'react';
import Modal from 'react-modal';

import styles from './CreateTopicModal.css';
import CreateTopic from '../CreateTopic/CreateTopic';

Modal.setAppElement('#root');

const createTopicModal = (props) => {
  return (
    <div>
      <Modal
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        shouldCloseOnOverlayClick={true} 
        >
        <CreateTopic closeModal={props.onRequestClose}/>
      </Modal>
    </div>
  );
}

export default createTopicModal;
