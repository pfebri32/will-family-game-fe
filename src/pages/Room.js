import React from 'react';
import styles from './Room.module.css';

// Components
import Button from '../components/partials/Buttons/Button';
import Player from '../components/partials/Player';

const Room = () => {
  const roomId = '82jak2';
  return (
    <>
      <div className={styles.population}>99 Players</div>
      <div className={`container ${styles.container}`}>
        <div>
          <div className={styles.title}>Your room ID:</div>
          <div className={styles.field}>{roomId}</div>
        </div>
        <div
          className={`row ${styles.players}`}
          style={{ marginTop: '1.5rem' }}
        >
          <Player name="Febriansyah Putra" isReady />
          <Player name="Febriansyah Putra" isReady />
          <Player name="Febriansyah Putra" isReady />
        </div>
        <Button className={styles.button} style={{ marginTop: '1.5rem' }}>
          Start Game
        </Button>
      </div>
    </>
  );
};

export default Room;
