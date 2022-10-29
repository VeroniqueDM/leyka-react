
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light top-nav fixed-top">
            <div className="container">
                <Navbar.Brand className="navbar-brand" to="/">
                    {/* <a className="navbar-brand" href="index.html"> */}
                    <img className="nav-logo"
                        src="images//footer-logo.png"
                        alt="logo"
                    />
                    {/* </a> */}
                </Navbar.Brand>
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                >
                    <span className="fas fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Nav.Link className="nav-link active" to="/">
                                Home
                            </Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" to="/about">
                                About
                            </Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" to="/services">
                                Services
                            </Nav.Link>
                        </li>
                        <li className="nav-item dropdown">
                            <NavDropdown
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownPortfolio"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Portfolio
                            </NavDropdown>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="navbarDropdownPortfolio"
                            >
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="portfolio-1-col.html"
                                >
                                    1 Column Portfolio
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="portfolio-2-col.html"
                                >
                                    2 Column Portfolio
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="portfolio-3-col.html"
                                >
                                    3 Column Portfolio
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="portfolio-4-col.html"
                                >
                                    4 Column Portfolio
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="portfolio-item.html"
                                >
                                    Single Portfolio Item
                                </NavDropdown.Item>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavDropdown
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownBlog"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Blog
                            </NavDropdown>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="navbarDropdownBlog"
                            >
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="blog-home-1.html"
                                >
                                    Blog Home 1
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="blog-home-2.html"
                                >
                                    Blog Home 2
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="blog-post.html"
                                >
                                    Blog Post
                                </NavDropdown.Item>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavDropdown
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownBlog"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Pages
                            </NavDropdown>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="navbarDropdownBlog"
                            >
                                <NavDropdown.Item className="dropdown-item" href="faq.html">
                                    FAQ
                                </NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-item" href="404.html">
                                    404
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="dropdown-item"
                                    href="pricing.html"
                                >
                                    Pricing Table
                                </NavDropdown.Item>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className="nav-link" to="/contact">
                                Contact
                            </Nav.Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
