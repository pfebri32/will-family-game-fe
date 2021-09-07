import React from 'react';
import styles from './index.module.css';

const index = ({ children, ...rest }) => {
  const renderChildren = () =>
    children.split('').map((c, i) => <pre key={i}>{c}</pre>);
  return (
    <div className={styles.button} {...rest}>
      {renderChildren()}
    </div>
  );
};

export default index;
