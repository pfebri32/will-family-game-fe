import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.css';

const index = ({ ...rest }) => {
  return (
    <div className={styles.container}>
      <input className={styles.field} type="text" {...rest} />
      <div className={styles.button}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
    </div>
  );
};

export default index;
