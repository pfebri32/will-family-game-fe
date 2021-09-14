import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialButton.module.css';

const index = ({ icon, size, ...rest }) => {
  return (
    <div className={styles.button} {...rest}>
      <FontAwesomeIcon icon={icon} size={size} />
    </div>
  );
};

export default index;
