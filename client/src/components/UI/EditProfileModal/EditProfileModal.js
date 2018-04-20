import React from 'react';
import Modal from 'react-modal';

import styles from './EditProfileModal.css';
import EditProfile from './EditProfile/EditProfile';

// Modal.setAppElement('#root');

const editProfileModal = (props) => {
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
        <EditProfile closeModal={props.onRequestClose} />
      </Modal>
    </div>
  );
}

export default editProfileModal;
