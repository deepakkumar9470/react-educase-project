import React from "react";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.container}>
       <div className={styles.main}>
       <h2 className={styles.headingTitle}>Welcome to PopX
       <Link to="/account">
        Account
      </Link>
       </h2>
      <p className={styles.mainDesc}>Lorem ipsum dolor, sit amet, </p>
      <p className={styles.mainDesc}>consectetur adipisicing elit.</p>
      <Link className={styles.signupBtn} to="/signup">
        Create Account
      </Link>
      <Link className={styles.loginBtn} to="/login">
        Already Registered? Login
      </Link>
       </div>
    </div>
  );
};

export default Home;
