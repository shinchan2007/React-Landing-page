// import { useEffect, useState } from 'react';
import styles from './bottom.module.css'
function Footer(){
    let Year = new Date();

    return(<>
    <div className={styles.footer}>
<div className={styles.placeholder}></div>
        <div className={styles.bottom}>
            <div className={styles.copyright}>
            <small><i className='fa fa-copyright'></i> {Year.getFullYear()} Boundless Journeys</small>
        </div>

        <div className={styles.bottompolicy}>
            <small>PrivacyPolicy</small>         <i className='fa fa-circle'></i>         <small>CookiePolicy</small>         <i className='fa fa-circle'></i>         <small>Legal</small>
        </div>

        <div className={styles.bottomlogo}>
            <i className='fa fa-linkedin-square'></i>
            <i className='fa fa-facebook-square'></i>
            <i>𝕏</i>
        </div>
    </div>
        </div>
    
</>);
}
export default Footer;