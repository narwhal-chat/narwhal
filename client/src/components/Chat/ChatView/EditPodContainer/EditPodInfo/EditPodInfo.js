import React from 'react';
import styles from './EditPodInfo.css';

const EditPodInfo = () => {
	return <div className={styles.PodProfile}>
			<div className={styles.PodInfo}>
				<div className={styles.ProfileText}>Pod Name</div>
				<input className={styles.ProfileInput} />
			</div>
			<div className={styles.PodInfo}>
				<div className={styles.ProfileText}>Reference</div>
				<input className={styles.ProfileInput} />
			</div>
			<div className={styles.PodInfo}>
				<div className={styles.ProfileText}>Category</div>
				<select required className={styles.ProfileInput}>
					<option value="" selected disabled hidden></option>
					<option className={styles.DropdownValue} value="technology">
						Technology
					</option>
					<option className={styles.DropdownValue} value="business">
						Business
					</option>
					<option className={styles.DropdownValue} value="gaming">
						Gaming
					</option>
					<option className={styles.DropdownValue} value="television">
						Television
					</option>
					<option className={styles.DropdownValue} value="design">
						Design
					</option>
					<option className={styles.DropdownValue} value="movies">
						Movies
					</option>
					<option className={styles.DropdownValue} value="music">
						Music
					</option>
					<option className={styles.DropdownValue} value="social">
						Social
					</option>
				</select>
			</div>
			<div className={styles.PodInfo}>
				<div className={styles.ProfileText}>Description</div>
				<input className={styles.ProfileInputDescription} />
			</div>
			<div className={styles.Buttons}>
				<button className={styles.ButtonUpdate}>Update</button>
				<button className={styles.ButtonCancel}>Cancel</button>
			</div>
		</div>;
};

export default EditPodInfo;
