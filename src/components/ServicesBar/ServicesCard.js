export default function ServicesCard() {
    const services = [
        { name: "Decor", image: "images/leyka-images/services-img-01.jpg" },
        { name: "Design", image: "images/leyka-images/services-img-02.jpg" },
        {
            name: "Arrangements",
            image: "images/leyka-images/services-img-03.jpg",
        },
    ];
    return (
        <div className="row">
            {services.map((service) => (
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <h4 className="card-header">{service.name}</h4>
                        <div className="card-img">
                            <img
                                className="img-fluid"
                                src={service.image}
                                alt="Service Image"
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Sapiente esse necessitatibus
                                neque.
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
