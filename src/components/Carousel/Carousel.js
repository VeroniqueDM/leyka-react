import Carousel from 'react-bootstrap/Carousel';

export default function Header() {
   const carouselInfo = [
      {
          image: 'images/leyka-images/slider-1.jpg',
          heading: 'Welcome to Leyka',
          desc: 'Floral design',
          id: 1
      },
      {
          image: 'images/leyka-images/slider-2.jpg',
          heading: 'Welcome to Leyka 2',
          desc: 'Your florist in Sofia',
          id: 2
      },
      {
          image: 'images/leyka-images/slider-3.jpg',
          heading: 'Welcome to Leyka 3',
          desc: 'Your flowers and gifts with a personal touch',
          id: 3
      }
   ];
   return (
      <header className="slider-main">
       <Carousel  >

      {carouselInfo.map(item =>   
      <Carousel.Item key={item.id}>
      <div className="carousel-item active" style={{backgroundImage: `url(${item.image})`}}>
         <div className="carousel-caption d-none d-md-block">
            <Carousel.Caption>
               <h3>{item.heading}</h3>
               <p>{item.desc}</p>
            </Carousel.Caption> 
         </div>
      </div>       
      </Carousel.Item>
      )}

      {/* <Carousel.Item>
      <div className="carousel-item active" style={{backgroundImage: `url('images/slider-01.jpg')`}}>
         <div className="carousel-caption d-none d-md-block">
            <Carousel.Caption>
               <h3>Welcome to N & LW Lawn Care</h3>
               <p>A Great Theme For Garden Lawn Care</p>
            </Carousel.Caption> 
         </div>
      </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-item" style={{backgroundImage: `url('images/slider-02.jpg')`}}>
                 <div className="carousel-caption d-none d-md-block">
                 <Carousel.Caption>
        <h3>Beautiful Garden</h3>
                    <p>A Great Theme For Garden Lawn Care</p>
        </Carousel.Caption>
                 </div>
              </div>

       
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-item" style={{backgroundImage: `url('images/slider-03.jpg')`}}>
                 <div className="carousel-caption d-none d-md-block">
                 <Carousel.Caption>
        <h3>Welcome to N & LW Lawn Care</h3>
                    <p>A Great Theme For Garden Lawn Care</p>
        </Carousel.Caption>
                 </div>
              </div>

        
      </Carousel.Item> */}
    </Carousel>
  </header>
   );
}