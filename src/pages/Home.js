import React, { useEffect } from "react";
import styles from "./Home.module.css";

const Home = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={styles.home}>
      <h1 className={styles.text}>
        Hello, my name is Mahir and I am a Software Developer
      </h1>
    </div>
  );
};

export default Home;
