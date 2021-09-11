import React from 'react';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import styles from './About.module.css';

// Components
import ReturnButton from '../components/partials/Buttons/ReturnButton';
import SocialButton from '../components/partials/Buttons/SocialButton';

const About = () => {
  return (
    <>
      <ReturnButton />
      <div
        className="container-fluid flex-vertical flex-center screen"
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
      >
        <div className={styles.title}>Hello, developers here!</div>
        <div className={styles.description}>
          We are just a ordinary developers who create this game for fun and
          learn. You can check out who we are to our social media.
        </div>
        <div style={{ marginTop: '2rem' }}>
          <div className={styles.content}>
            <div className={styles.name}>Febriansyah Putra</div>
            <div className="flex-horizontal relative">
              <img
                src="/img/pexels-ike-louie-natividad-2709385.jpg"
                alt="Febriansyah Putra"
              />
              <div
                className={`absolute coverage flex-vertical flex-center ${styles.overlay}`}
              >
                <div className="flex-horizontal">
                  <SocialButton
                    icon={faFacebookSquare}
                    size="3x"
                    style={{ color: '#eee' }}
                  />
                  <SocialButton
                    icon={faInstagramSquare}
                    size="3x"
                    style={{ color: '#eee' }}
                  />
                  <SocialButton
                    icon={faTwitterSquare}
                    size="3x"
                    style={{ color: '#eee' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;