import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Landing = () => {
  return (
    <div className={styles.landing}>
      <h1>Esta es la vista de Landing</h1>
      <Link to="/home">
        <button className={styles.button_enter}>
          <span className={styles.button_span}>PRESS START</span>
        </button>
      </Link>
    </div>
  );
};

export default Landing;
