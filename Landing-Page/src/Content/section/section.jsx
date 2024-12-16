import styles from './section.module.css'
function Section(){

    return(
        <>
        <div className={styles.body}>
            <div className={styles.content}>
                <h1 className={`display-3 ${styles.welcome}`}>welcome</h1>
                <p className={`h5 ${styles.firstpagecontent}`}>Welcome to Our Website! We are thrilled to have you here. Explore our services, browse our content, and enjoy your stay. If you have any questions, feel free to reach out to us! Get Started...</p>
                <div className={styles.button}>
                    <button className={`btn btn-light rounded-pill ${styles.button1}`} >Get Started Now</button>
                    <button className={`btn btn-outline-light rounded-pill ${styles.button2}`} >Learn More</button></div>
            </div>
        </div>
        </> 
    );
}
export default Section