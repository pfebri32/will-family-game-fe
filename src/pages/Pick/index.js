import React from 'react';
import styles from './index.module.css';

// Components
import Button from '../../components/partials/Buttons/ButtonA';
import Search from '../../components/partials/Inputs/Search';

const index = () => {
  return (
    <div className="container-fluid screen flex-vertical flex-center">
      <div>
        <div className={styles.title}>PICK A GAME</div>
        <div className="flex-vertical flex-center" style={{ marginTop: 15 }}>
          <Search placeholder="Search your game..." />
        </div>
        <div className="flex-vertical flex-center" style={{ marginTop: 15 }}>
          <Button>Hear The Lyrics</Button>
        </div>
      </div>
    </div>
  );
};

export default index;
