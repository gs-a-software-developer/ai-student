import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import styles from './Styles.module.css';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.authContainer}>
      {isLogin ? (
        <Login handleSwitch={handleSwitch} />
      ) : (
        <Register handleSwitch={handleSwitch} />
      )}
    </div>
  );
};

export default Authentication;
