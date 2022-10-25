/* eslint-disable react/no-typos */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';

function NavigationBar(props) {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="./">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">{props.about}</Nav.Link>
            <Nav.Link href="/contact">{props.contact}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  contact: PropTypes.string
}

NavigationBar.defaultProps = {
  title: 'Sumeet Sharma',
  about: 'About',
  contact: 'Contact'
}

export default NavigationBar;