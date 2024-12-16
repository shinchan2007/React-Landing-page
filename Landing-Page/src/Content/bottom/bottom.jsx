// import { useEffect, useState } from 'react';
import styles from './bottom.module.css'
function Footer(){
    let Year = new Date();

    return(<>
    <div className={styles.footer}>
<div className={styles.placeholder}></div>
        <div className={styles.bottom}>
            <div className={styles.copyright}>
            <small><i className={`fa fa-copyright ${styles.facopyright}`}></i> {Year.getFullYear()} Boundless Journeys</small>
        </div>

        <div className={styles.bottompolicy}>
            <small>PrivacyPolicy</small>         <i className='fa fa-circle '></i>         <small>CookiePolicy</small>         <i className='fa fa-circle '></i>         <small>Legal</small>
        </div>

        <div className={styles.bottomlogo}>
          <a href="https://www.linkedin.com">  <i className={`fa fa-linkedin-square ${styles.linkedin}`}></i></a>
          <a href="https://www.facebook.com">  <i className={`fa fa-facebook-square ${styles.facebook}`}></i></a>
          <a href="https://www.x.com">  <i className={`${styles.twitter}`}>𝕏</i></a>
        </div>
    </div>
        </div>
    
</>);
}
export default Footer;