import AboutMain from "./AboutMain/AboutMain";
import Header from "./Carousel/Carousel";
import GetInTouch from "./GetInTouch/GetInTouch";
import PortfolioMain from "./PortfolioMain/PortfolioMain";
import ServiceBar from "./ServicesBar/ServicesBar";

export default function Home() {
    return (
        <div className="container">
            <Header/>
             {/* <!-- Services Section --> */}
             <ServiceBar/>
            {/* <!-- About Section --> */}
<AboutMain/>
            {/* <!-- Portfolio Section --> */}
<PortfolioMain/>
            <hr />
           
            {/* <!-- Get In Touch Now Section --> */}
            <GetInTouch/>
        </div>
    );
}
