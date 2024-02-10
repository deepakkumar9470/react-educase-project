import React from 'react'
import styles from './login.module.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={styles.container}>
           <div className={styles.inner}>
           <h2 className={styles.headingTitle}>Signin to your <br /> PopX account</h2>
            <p className={styles.mainDesc}>Lorem ipsum dolor, sit amet, </p>
            <p className={styles.mainDesc}>consectetur adipisicing elit.</p>
            
            <form>
              <div className={styles.inputWrapper}>
                <label htmlFor="email">Email Address</label>
                 <input type="text" placeholder='Enter email address' />
              </div>

              <div className={styles.inputWrapper}>
                <label htmlFor="password">Password</label>
                 <input type="password" placeholder='Enter password' />
              </div>
              <button className={styles.loginBtn} 
               >
                Login
            </button>
            <Link className={styles.link} to="/signup">Don't have an account ? Signup here</Link>

            </form>
           </div>
   </div>
  )
}

export default Login