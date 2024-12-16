import styles from './review.module.css'

function Review(){

    return(<>
    <div className={`display-1 ${styles.mainhead}`}>Reviews</div>
        <div className={styles.cardholder}>


 {/* card-1 */}
    <div className={`card text-center `}>
  <div className={`card-header ${styles.title}`}>
  1 Week ago <i className='fa fa-comments-o'></i>
  </div>
  <div className={`card-body `}>
    <h5 className={`card-title ${styles.subtitle}`}>Ethan Roberts</h5>
    <i className={`card-text ${styles.content}`}>"I had an amazing experience booking my vacation through this agency! The personalized itinerary was spot-on, and every detail was taken care of. The recommendations were fantastic, from the hotels to the local tours. I’ll definitely be using this service again for my future trips!"</i>
    {/* <a href="#" className={`btn btn-primary ${styles.button}`}>Go somewhere</a> */}
  </div>
  <div className={`card-footer text-body-secondary ${styles.date}`}>
  <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`} ></i>   <i className={`fa fa-star `}></i>

  </div>
</div>


{/* card-2 */}
<div className={`card text-center `}>
  <div className={`card-header ${styles.title}`}>
  4 days ago <i className='fa fa-comments-o'></i>
  </div>
  <div className={`card-body `}>
    <h5 className={`card-title ${styles.subtitle}`}>Olivia Hayes</h5>
    <i className={`card-text ${styles.content}`}>"This is by far the best travel agency I’ve ever used. I was able to plan a perfect trip without any worries. The recommendations for unique experiences really made the trip memorable, and the booking process was smooth. I’ll always trust them with my travel plans!"</i>
    {/* <a href="#" className={`btn btn-primary ${styles.button}`}>Go somewhere</a> */}
  </div>
  <div className={`card-footer text-body-secondary ${styles.date}`}>
  <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`} ></i>   <i className={`fa fa-star ${styles.checked}`}></i>

  </div>
</div>


{/* card-3 */}
<div className={`card text-center `}>
  <div className={`card-header ${styles.title}`}>
  2 days ago <i className='fa fa-comments-o'></i>
  </div>
  <div className={`card-body `}>
    <h5 className={`card-title ${styles.subtitle}`}>Mason Clark</h5>
    <i className={`card-text ${styles.content}`}>"I can't thank this travel agency enough for helping me plan my dream getaway. From start to finish, everything was seamless and hassle-free. The customer service team was so helpful, and I felt completely taken care of. Highly recommend for anyone looking for a stress-free vacation!"</i>
    {/* <a href="#" className={`btn btn-primary ${styles.button}`}>Go somewhere</a> */}
  </div>
  <div className={`card-footer text-body-secondary ${styles.date}`}>
    <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`}></i>   <i className={`fa fa-star checked ${styles.checked}`} ></i>   <i className={`fa fa-star-half-o ${styles.checked}`}></i>
    </div>
</div>

</div>
</>);
}
export default Review;