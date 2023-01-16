import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/images/logo.png";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className="mb-3 nav-shadow">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
             <Nav.Link>  <span className="text-uppercase purple-color ms-5 fw-bold letter-space">
              Home
            </span></Nav.Link>
            <Nav.Link>
            <span className="text-uppercase purple-color letter-space">hot deals</span>
            </Nav.Link>
          </Nav>
          <Nav.Link>
          
            <span className=" purple-color fs-5">العربية</span>
          </Nav.Link>
          <Nav.Link>
          
            <button className="text-uppercase sign-in-btn fw-bold btn p-0 letter-space">
              sign in
            </button>
          </Nav.Link>
          <Nav.Link>
          
            <button className="btn text-uppercase pink-background sign-up-btn text-light px-3 letter-space">
              sign up
            </button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
