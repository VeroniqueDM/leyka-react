import PortfolioItem from "./PortfolioItem";

export default function PortfolioMain() {
    const portfolioItems = [
        {
            id: 1,
            heading: "Birthdays",
            image: "images/leyka-images/portfolio-img-01.jpg",
        },
        {
            id: 2,
            heading: "Graduations",
            image: "images/leyka-images/portfolio-img-02.jpg",
        },
        {
            id: 3,
            heading: "Engagements",
            image: "images/leyka-images/portfolio-img-03.jpg",
        },
        {
            id: 4,
            heading: "Weddings",
            image: "images/leyka-images/portfolio-img-04.jpg",
        },
        {
            id: 5,
            heading: "Baby Showers",
            image: "images/leyka-images/portfolio-img-05.jpg",
        },
        {
            id: 6,
            heading: "Other Celebrations",
            image: "images/leyka-images/portfolio-img-06.jpg",
        },
    ];
    return (
        <div className="portfolio-main">
            <h2>Our Portfolio</h2>
            <div className="row">
{portfolioItems.map(item => <PortfolioItem id={item.id} image={item.image} heading={item.heading}/>)}
            </div>
        </div>
    );
}
