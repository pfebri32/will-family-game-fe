import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

const index = () => {
  return (
    <div className={`fixed ${styles.button}`}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} size="3x" />
    </div>
  );
};

export default index;
