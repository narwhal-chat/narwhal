import React from 'react';
import styles from './ChooseCategory.css';

const chooseCategory = (props) => {
	console.log('props in choosecat', props)
    return <div className={styles.ChooseCategory}>
			<div className={styles.Header}>CHOOSE A CATEGORY</div>
			<div className={styles.Categories}>
				<div className={styles.CategoryBox} id="technology" onClick={props.chooseCategory}>
					<div id="technology" className={styles.Category}>
						TECHNOLOGY
					</div>
				</div>
				<div className={styles.CategoryBox} id="business" onClick={props.chooseCategory}>
					<div id="business" className={styles.Category}>
						BUSINESS
					</div>
				</div>
				<div className={styles.CategoryBox} id="gaming" onClick={props.chooseCategory}>
					<div id="gaming" className={styles.Category}>
						GAMING
					</div>
				</div>
				<div className={styles.CategoryBox} id="television" onClick={props.chooseCategory}>
					<div id="television" className={styles.Category}>
						TELEVISION
					</div>
				</div>
				<div className={styles.CategoryBox} id="design" onClick={props.chooseCategory}>
					<div id="design" className={styles.Category}>
						DESIGN
					</div>
				</div>
				<div className={styles.CategoryBox} id="movies" onClick={props.chooseCategory}>
					<div id="movies" className={styles.Category}>
						MOVIES
					</div>
				</div>
				<div className={styles.CategoryBox} id="music" onClick={props.chooseCategory}>
					<div id="music" className={styles.Category}>
						MUSIC
					</div>
				</div>
				<div className={styles.CategoryBox} id="social" onClick={props.chooseCategory}>
					<div id="social" className={styles.Category}>
						SOCIAL
					</div>
				</div>
			</div>
		</div>;
};

export default chooseCategory;