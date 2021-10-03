import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ completed }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}  style={{ width: `${completed}%` }}>
                <span className={styles.label}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;