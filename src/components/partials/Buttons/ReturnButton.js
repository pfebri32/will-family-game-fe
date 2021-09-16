import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './ReturnButton.module.css';

const ReturnButton = () => {
  return (
    <div className={styles.button}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} size="3x" />
    </div>
  );
};

export default ReturnButton;
