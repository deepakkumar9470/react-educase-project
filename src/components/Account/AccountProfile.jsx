import React from "react";
import styles from "./account.module.scss";
import camera from "../../assets/camera.svg";
import { Link } from "react-router-dom";
const AccountProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingTitle}>Account Settings</div>

      <div className={styles.profile}>
       
        <img
        className={styles.img}
          src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img className={styles.camera} src={camera} alt="camera" />
        
        <div className={styles.profileTexts}>
          <h3>Mayyr Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <p className={styles.bioPara}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro doloribus ipsam ullam numquam soluta voluptatem quisquam libero delectus sapiente tempora.
      </p>
      <Link to="/">Go Back </Link>
    </div>
  );
};

export default AccountProfile;
