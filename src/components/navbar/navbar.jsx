import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '../button/button';
import './navbar.css'; // Import your custom CSS file for more control

function UpperNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark custom-navbar">
      <Container>
        <Navbar.Brand className="text-white custom-logo">Logo Here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#collection" className="text-white">Collection</Nav.Link>
            <Nav.Link href="#creator" className="text-white">Creator</Nav.Link>
            <Nav.Link href="#roadmap" className="text-white">Road Map</Nav.Link>
            <Button text="Sign In" bgColor="#DA8F4D" textColor="#FFFFFF" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UpperNavbar;
