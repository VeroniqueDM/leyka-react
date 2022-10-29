export default function Footer() {
    return (
        <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">
                            Find us
                        </h5>
                        {/* <!--headin5_amrc--> */}
                        <p className="mb10">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                        </p>
                        <p>
                            <i className="fa fa-location-arrow"></i> 9878/25 sec
                            9 rohini 35{" "}
                        </p>
                        <p>
                            <i className="fa fa-phone"></i> +91-9999878398{" "}
                        </p>
                        <p>
                            <i className="fa fa fa-envelope"></i>{" "}
                            info@example.com{" "}
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">
                            Follow us
                        </h5>
                        {/* <!--headin5_amrc ends here--> */}
                        <ul className="footer_ul2_amrc">
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                                </a>
                                <p>
                                    Lorem Ipsum is simply dummy printing...
                                    <a href="#">https://www.lipsum.com/</a>
                                </p>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                                </a>
                                <p>
                                    Lorem Ipsum is simply dummy printing...
                                    <a href="#">https://www.lipsum.com/</a>
                                </p>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter fleft padding-right"></i>{" "}
                                </a>
                                <p>
                                    Lorem Ipsum is simply dummy printing...
                                    <a href="#">https://www.lipsum.com/</a>
                                </p>
                            </li>
                        </ul>
                        {/* <!--footer_ul2_amrc ends here--> */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 className="headin5_amrc col_white_amrc pt2">
                            Quick links
                        </h5>
                        {/* <!--headin5_amrc--> */}
                        <ul className="footer_ul_amrc">
                            <li>
                                <a href="#">Default Version</a>
                            </li>
                            <li>
                                <a href="#">Boxed Version</a>
                            </li>
                            <li>
                                <a href="#">Our Team </a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            <li>
                                <a href="#">Get In Touch</a>
                            </li>
                        </ul>
                        {/* <!--footer_ul_amrc ends here--> */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <h5 className="headin5_amrc col_white_amrc pt2">
                            Recent posts
                        </h5>
                        {/* <!--headin5_amrc--> */}
                        <ul className="footer_ul_amrc">
                            <li className="media">
                                <div className="media-left">
                                    <img
                                        className="img-fluid"
                                        src="images/post-img-01.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="media-body">
                                    <p>What Flowers Are In Season?</p>
                                    <span>22 Sep 2018</span>
                                </div>
                            </li>
                            <li className="media">
                                <div className="media-left">
                                    <img
                                        className="img-fluid"
                                        src="images/post-img-02.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="media-body">
                                    <p>What Flowers Are In Season?</p>
                                    <span>34 Sep 2018</span>
                                </div>
                            </li>
                            <li className="media">
                                <div className="media-left">
                                    <img
                                        className="img-fluid"
                                        src="images/post-img-03.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="media-body">
                                    <p>What Flowers Are In Season?</p>
                                    <span>30 Sep 2018</span>
                                </div>
                            </li>
                        </ul>
                        {/* <!--footer_ul_amrc ends here--> */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-logo">
                    <a href="#">
                        <img className="footer-logo" src="images/footer-logo.png" alt="footer logo" />
                    </a>
                </div>
                {/* <!--foote_bottom_ul_amrc ends here--> */}
                <p className="copyright text-center">
                    All Rights Reserved. &copy; 2022{" "}
                    {/* <a href="#">Leyka</a> */}
                     {/* Design By :
                    <a href="https://html.design/">html design</a> */}
                </p>
                <ul className="social_footer_ul">
                    <li>
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                {/* <!--social_footer_ul ends here--> */}
            </div>
        </footer>
    );
}
