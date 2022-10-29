export default function PortfolioItem({image,heading}) {
    return (
        
        <div className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
                <div className="card-img">
                    <a href="#">
                        <img
                            className="card-img-top"
                            src={image}
                            alt=""
                        />
                        <div className="overlay">
                            <i className="fas fa-arrows-alt"></i>
                        </div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{heading}</a>
                    </h4>
                </div>
            </div>
        </div>
        
    );
}