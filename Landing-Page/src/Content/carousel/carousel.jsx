import styles from './carousel.module.css' 
function Carousel(){


    return(<>
    <div className={styles.Carouselholder}>
<div id="carouselExampleAutoplaying" className="carousel carousel-dark slide" data-bs-ride="carousel"  data-bs-pause="false">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying"  data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying"  data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying"  data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying"  data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying"  data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying"  data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h1 className='display-1'>TAJ MAHAL</h1>
        <p className='h3'>Visit the Taj Mahal for a timeless, majestic, and unforgettable symbol of eternal love.</p>
      </div>


    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h1 className='display-1'>EIFFEL TOWER</h1>
        <p className='h3'>Visit the Eiffel Tower for a breathtaking, and unforgettable panoramic experience.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/17615498/pexels-photo-17615498/free-photo-of-great-wall-of-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h1 className='display-1'>GREAT WALL OF CHINA</h1>
        <p className='h3'>Visit the Great Wall of China for a historic, majestic, and unforgettable journey through ancient marvels.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/18848776/pexels-photo-18848776/free-photo-of-red-asian-temple-in-kyoto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h1 className='display-1'>KYOTO</h1>
        <p className='h3'>Visit Kyoto for a serene, cultural, and unforgettable journey through Japan's timeless beauty.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://images.squarespace-cdn.com/content/v1/56aa3705c21b862fcfdb0996/1572905430749-Y0A8LM97374VPNJHB033/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/01005F4B-AB97-42B4-AAE3-FB2811E68AF7.JPG" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h1 className='display-1'>PISA TOWER</h1>
        <p className='h3'>Visit the Leaning Tower of Pisa for a unique, iconic, and unforgettable architectural wonder.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
        <h1 className='display-1'>DUBAI</h1>
        <p className='h3'>Visit Dubai for a vibrant, luxurious, and unforgettable blend of modernity and tradition</p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"  data-bs-slide="prev">
    <span className=" carousel-control-prev-icon rounded-pill p-3" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"  data-bs-slide="next">
    <span className=" rounded-pill carousel-control-next-icon p-3" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</>);
}
export default Carousel;