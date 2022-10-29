import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    
    <Navbar bg="light" expand="lg" className="navbar fixed-top navbar-expand-lg navbar-dark bg-light top-nav fixed-top">
      <Container className="container">
        <Navbar.Brand className="navbar-brand" to="/"> 
        <img className="nav-logo"
                        src="images//footer-logo.png"
                        alt="logo"
                    />
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="true"
                    aria-label="Toggle navigation"> <span className="fas fa-bars"></span> </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto "  id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">

          <Nav.Link className="nav-link active" to="/">
                                Home
                            </Nav.Link>
            </li>
           
          <li class="nav-item">

          <Nav.Link className="nav-link" to="/about">
                                About
                            </Nav.Link>
            </li>
            <li class="nav-item">

            <Nav.Link className="nav-link" to="/services">
                                Services
                            </Nav.Link>
            </li>
            <li class="nav-item">

<Nav.Link className="nav-link" to="/portfolio">
                    Portfolio
                </Nav.Link>
</li> 
<li class="nav-item">

<Nav.Link className="nav-link" to="/blog">
                    Blog
                </Nav.Link>
</li>
           
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item to='/faq'>FAQ</NavDropdown.Item>
              <NavDropdown.Item to='/pricing'>
Pricing              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navigation;

