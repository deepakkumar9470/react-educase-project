import React from "react";
import styles from "./signup.module.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.headingTitle}>
          Create your <br /> PopX account
        </h2>

        <form className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <input type="text" required />
            <label className={styles.lebeline} htmlFor="name">
              Full Name
            </label>
          </div>
          <div className={styles.inputWrapper}>
            <input type="number" required />
            <label className={styles.lebeline} htmlFor="phone">
              Phone number
            </label>
          </div>
          <div className={styles.inputWrapper}>
            <input type="text" required />
            <label className={styles.lebeline} htmlFor="email">
              Email Address
            </label>
          </div>

          <div className={styles.inputWrapper}>
            <input type="password" required/>
            <label className={styles.lebeline} htmlFor="password">Password</label>
          </div>

          <div className={styles.inputWrapper}>
            <input type="text" required/>
            <label className={styles.lebeline} htmlFor="company">Company name</label>
          </div>
          <div className={styles.radioWrapper}>
            <label className={styles.lebeline} htmlFor="name">Are you an Agency?</label>
            <div className={styles.radiosInputs}>
              <input type="radio" value="Yes" /> <span>Yes</span>
              <input type="radio" value="No" /> <span>No</span>
            </div>
          </div>
          <button className={styles.signupBtn}>Create Account</button>
          <Link className={styles.link} to="/login">
            Already Signup ? Login here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
