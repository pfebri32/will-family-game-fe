import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, className, type, ...rest }) => {
  const renderChildren = () =>
    children.split('').map((c, i) => <pre key={i}>{c}</pre>);
  return (
    <>
      {type === 'link' ? (
        <Link className={`${styles.button} ${className}`} {...rest}>
          {renderChildren()}
        </Link>
      ) : (
        <div className={`${styles.button} ${className}`} {...rest}>
          {renderChildren()}
        </div>
      )}
    </>
  );
};

export default Button;
