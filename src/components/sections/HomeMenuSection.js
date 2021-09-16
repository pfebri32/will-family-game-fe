import React from 'react';
import styles from './HomeMenuSection.module.css';

// Components
import Button from '../partials/Buttons/Button';

const HomeMenuSection = ({ ...rest }) => {
  return (
    <div className={styles.container} {...rest}>
      <Button to="/games" type="link">
        Start Game
      </Button>
      <Button to="/option" type="link">
        Option
      </Button>
      <Button to="/about" type="link">
        About
      </Button>
    </div>
  );
};

export default HomeMenuSection;
