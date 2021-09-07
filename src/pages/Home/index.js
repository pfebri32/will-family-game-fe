import React from "react";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.css";

// Components
import Button from "../../components/partials/ButtonA";
import SocialButton from "../../components/partials/SocialButton";

const index = () => {
  // Handlers
  const onStartHandler = () => {
    console.log("Start Game");
  };

  const onOptionsHandler = () => {
    console.log("Options");
  };

  const onAboutsHandlers = () => {
    console.log("Abouts");
  };

  const onFacebookShareHandlers = () => {
    console.log("Facebook Share");
  };

  const onInstagramShareHandlers = () => {
    console.log("Instagram Share");
  };

  const onTwitterShareHandlers = () => {
    console.log("Twitter Share");
  };

  return (
    <div className="container-fluid screen flex-vertical flex-center">
      <div>
        <div className={styles.title}>WILL FAMILY GAME</div>
        <div style={{ marginTop: 15 }}>
          <Button onClick={onStartHandler}>Start Game</Button>
          <Button onClick={onOptionsHandler}>Options</Button>
          <Button onClick={onAboutsHandlers}>Abouts</Button>
        </div>
        <div style={{ marginTop: 15 }}>
          <div className="align-center font-weight-500">Share It</div>
          <div className="flex flex-center">
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

export default index;
