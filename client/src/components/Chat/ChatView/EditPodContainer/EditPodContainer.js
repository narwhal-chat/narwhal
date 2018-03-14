import React from 'react';
import styles from './EditPodContainer.css';
import EditPodHeader from './EditPodHeader/EditPodHeader';
import EditPodInfo from './EditPodInfo/EditPodInfo';

const EditPodContainer = () => {
	return (
		<div className={styles.EditPodContainer}>
			<EditPodHeader />
			<EditPodInfo />
		</div>
	);
};

export default EditPodContainer;
