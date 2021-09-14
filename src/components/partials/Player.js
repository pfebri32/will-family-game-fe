import React from 'react';
import styles from './Player.module.css';

const Player = ({ name, img, isReady, ...rest }) => {
  return (
    <div className="flex-column flex-center" {...rest}>
      <div
        style={{
          borderRadius: 10,
          height: 80,
          width: 80,
          backgroundColor: 'gray',
          marginBottom: 10,
          position: 'relative',
        }}
      >
        <div className={`${styles.status} ${isReady && styles.ready}`}>
          <div className={isReady && styles.ready}>READY!!!</div>
        </div>
      </div>
      <div className={styles.name}>{name.replace(' ', '\n')}</div>
    </div>
  );
};

export default Player;