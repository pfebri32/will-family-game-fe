import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Home.module.css';

// Components
import HomeMenuSection from '../components/sections/HomeMenuSection';
import SocialSection from '../components/sections/SocialSection';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const renderTitle = () => (
    <>
      {!isMobile ? (
        <div className={styles.title}>WILL FAMILY GAME</div>
      ) : (
        <div className={styles.title}>
          WILL
          <br />
          FAMILY
          <br />
          GAME
        </div>
      )}
    </>
  );
  return (
    <div className="container">
      <div className={styles.content}>
        <div>
          {renderTitle()}
          <HomeMenuSection style={{ marginTop: '1.5rem' }} />
          <SocialSection style={{ marginTop: '1rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
