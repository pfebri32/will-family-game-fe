import React from 'react';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Home.module.css';

// Components
import Button from '../components/partials/Buttons/ButtonA';
import SocialButton from '../components/partials/Buttons/SocialButton';

const Home = () => {
  // Handlers.
  const onOptionsHandler = () => {
    console.log('Options');
  };

  const onAboutsHandlers = () => {
    console.log('Abouts');
  };

  const onFacebookShareHandlers = () => {
    console.log('Facebook Share');
  };

  const onInstagramShareHandlers = () => {
    console.log('Instagram Share');
  };

  const onTwitterShareHandlers = () => {
    console.log('Twitter Share');
  };

  return (
    <div className="container-fluid screen flex-vertical flex-center">
      <div>
        <div className={styles.title}>WILL FAMILY GAME</div>
        <div className="flex-vertical flex-center" style={{ marginTop: 15 }}>
          <Button to="/pick" type="link">
            Start Game
          </Button>
          <Button onClick={onOptionsHandler}>Options</Button>
          <Button onClick={onAboutsHandlers}>About</Button>
        </div>
        <div style={{ marginTop: 15 }}>
          <div className="align-center font-weight-500">Share It</div>
          <div className="flex-horizontal flex-center">
            <SocialButton
              icon={faFacebookSquare}
              onClick={onFacebookShareHandlers}
              size="2x"
            />
            <SocialButton
              icon={faInstagramSquare}
              onClick={onInstagramShareHandlers}
              size="2x"
            />
            <SocialButton
              icon={faTwitterSquare}
              onClick={onTwitterShareHandlers}
              size="2x"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
