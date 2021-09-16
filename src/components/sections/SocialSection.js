import React from 'react';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import styles from './SocialSection.module.css';

// Components
import SocialButton from '../partials/Buttons/SocialButton';

const SocialSection = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div className={styles.title}>Share It</div>
      <div className={`row ${styles.row}`}>
        <SocialButton
          icon={faFacebookSquare}
          size="2x"
          style={{ color: '#4267B2' }}
        />
        <SocialButton icon={faInstagramSquare} size="2x" />
        <SocialButton
          icon={faTwitterSquare}
          size="2x"
          style={{ color: '#1DA1F2' }}
        />
      </div>
    </div>
  );
};

export default SocialSection;
