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
      <div className={`container ${styles.container}`}>
        <div className={styles.title}>Hello, developers here!</div>
        <div className={styles.description}>
          We are just a ordinary developers who create this game for fun and
          learn. You can check out who we are to our social media.
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <div className={styles.content}>
            <div className={styles.name}>Febriansyah Putra</div>
            <div className={styles.image}>
              <img
                src="/img/pexels-ike-louie-natividad-2709385.jpg"
                alt="Febriansyah Putra"
              />
              <div className={styles.overlay}>
                <div className={`row ${styles.row}`}>
                  <SocialButton
                    icon={faFacebookSquare}
                    size="2x"
                    style={{ color: '#fff' }}
                  />
                  <SocialButton
                    icon={faInstagramSquare}
                    size="2x"
                    style={{ color: '#fff' }}
                  />
                  <SocialButton
                    icon={faTwitterSquare}
                    size="2x"
                    style={{ color: '#fff' }}
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
