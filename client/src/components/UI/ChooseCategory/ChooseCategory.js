import React from 'react';
import styles from './ChooseCategory.css';

const chooseCategory = (props) => {
    return <div className={styles.ChooseCategory}>
			<div className={styles.Header}>CHOOSE A CATEGORY</div>
			<div className={styles.Categories}>
				<div className={styles.CategoryBox} id="technology" onClick={props.chooseCategory}>
					<div id="technology" className={styles.Category}>
						Technology
					</div>
				</div>
				<div className={styles.CategoryBox} id="business" onClick={props.chooseCategory}>
					<div id="business" className={styles.Category}>
						Business
					</div>
				</div>
				<div className={styles.CategoryBox} id="gaming" onClick={props.chooseCategory}>
					<div id="gaming" className={styles.Category}>
						Gaming
					</div>
				</div>
				<div className={styles.CategoryBox} id="television" onClick={props.chooseCategory}>
					<div id="television" className={styles.Category}>
						Television
					</div>
				</div>
				<div className={styles.CategoryBox} id="design" onClick={props.chooseCategory}>
					<div id="design" className={styles.Category}>
						Design
					</div>
				</div>
				<div className={styles.CategoryBox} id="movies" onClick={props.chooseCategory}>
					<div id="movies" className={styles.Category}>
						Movies
					</div>
				</div>
				<div className={styles.CategoryBox} id="music" onClick={props.chooseCategory}>
					<div id="music" className={styles.Category}>
						Music
					</div>
				</div>
				<div className={styles.CategoryBox} id="social" onClick={props.chooseCategory}>
					<div id="social" className={styles.Category}>
						Social
					</div>
				</div>
			</div>
		</div>;
};

export default chooseCategory;
