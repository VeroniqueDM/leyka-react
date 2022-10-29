export default function Header() {
    return (
       <header className="slider-main">
       <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
           <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-slide-to="2"></li>
           </ol>
           <div className="carousel-inner" role="listbox">
              {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
              <div className="carousel-item active" style={{backgroundImage: `url('images/slider-01.jpg')`}}>
                 <div className="carousel-caption d-none d-md-block">
                    <h3>Welcome to N & LW Lawn Care</h3>
                    <p>A Great Theme For Garden Lawn Care</p>
                 </div>
              </div>
              {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
              <div className="carousel-item" style={{backgroundImage: `url('images/slider-02.jpg')`}}>
                 <div className="carousel-caption d-none d-md-block">
                    <h3>Beautiful Garden</h3>
                    <p>A Great Theme For Garden Lawn Care</p>
                 </div>
              </div>
              {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
              <div className="carousel-item" style={{backgroundImage: `url('images/slider-03.jpg')`}}>
                 <div className="carousel-caption d-none d-md-block">
                    <h3>Welcome to N & LW Lawn Care</h3>
                    <p>A Great Theme For Garden Lawn Care</p>
                 </div>
              </div>
           </div>
           <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
           </a>
           <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
           </a>
       </div>
   </header>
    );
 }