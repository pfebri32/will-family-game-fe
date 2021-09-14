import React from 'react';
import styles from './Room.module.css';

// Components
import Button from '../components/partials/Buttons/Button';
import Player from '../components/partials/Player';

const Room = () => {
  const roomId = '82jak2';
  return (
    <div className="container-fluid screen flex-column flex-center overflow-x-hidden">
      <div
        className={styles.title}
        style={{ marginBottom: 15, marginTop: '5%' }}
      >
        Your room ID:
      </div>
      <div className={styles.field} style={{ marginBottom: 45 }}>
        {roomId}
      </div>
      <div className={styles.players}>
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
        <Player name="Febriansyah Putra" style={{ margin: 15 }} isReady />
      </div>
      <Button style={{ marginTop: 10, marginBottom: '5%' }}>Start Game</Button>
    </div>
  );
};

export default Room;
