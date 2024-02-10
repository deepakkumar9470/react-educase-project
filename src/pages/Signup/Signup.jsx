import React from 'react'
import styles from './signup.module.scss'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className={styles.container}>
            <div
            className={styles.inner}>
              <h2 className={styles.headingTitle}>Create your <br /> PopX account</h2>
           
           <form className={styles.formWrapper} action="">
           <div className={styles.inputWrapper}>
               <label htmlFor="name">Full Name</label>
                <input type="text" placeholder='Enter email address' />
             </div>
             <div className={styles.inputWrapper}>
               <label htmlFor="phone">Phone number</label>
                <input type="number" placeholder='Enter email address' />
             </div>
             <div className={styles.inputWrapper}>
               <label htmlFor="email">Email Address</label>
                <input type="text" placeholder='Enter email address' />
             </div>

             <div className={styles.inputWrapper}>
               <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter password' />
             </div>

             <div className={styles.inputWrapper}>
               <label htmlFor="company">Company name</label>
                <input type="text" placeholder='Enter email address' />
             </div>
             <div className={styles.radioWrapper}>
                <label htmlFor="name">Are you an Agency?</label>
               <div className={styles.radiosInputs}>
               <input type="radio" value="Yes"/> <span>Yes</span>
                <input type="radio" value="No" /> <span>No</span>
               </div>
             </div>
             <button className={styles.signupBtn} 
              >
               Create Account
           </button>
           <Link className={styles.link} to="/login">Already Signup ? Login here</Link>
            </form>
            </div>
   </div>
  )
}

export default Signup