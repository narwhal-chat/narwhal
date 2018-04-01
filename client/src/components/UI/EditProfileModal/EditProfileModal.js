import React from 'react';
import Modal from 'react-modal';

import styles from './EditProfileModal.css';
import EditProfile from './EditProfile/EditProfile';

Modal.setAppElement('#root');

const editProfileModal = (props) => {
  return (
    <div>
      <Modal
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        shouldCloseOnOverlayClick={true}>
        <EditProfile closeModal={props.onRequestClose} />
      </Modal>
    </div>
  );
}

export default editProfileModal;
