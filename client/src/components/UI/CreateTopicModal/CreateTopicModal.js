import React from 'react';
import Modal from 'react-modal';

import styles from './CreateTopicModal.css';
import CreateTopic from '../CreateTopic/CreateTopic';

// Modal.setAppElement('#root');

const createTopicModal = (props) => {
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
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={150}>
        <CreateTopic closeModal={props.onRequestClose}/>
      </Modal>
    </div>
  );
}

export default createTopicModal;
