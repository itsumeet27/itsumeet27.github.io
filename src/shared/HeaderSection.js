/* eslint-disable react/no-typos */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationBar(props) {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand><Link to="/" className='nav-link'>{props.title}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Link to="/" className='nav-link px-2'>Home</Link>
            <Link to="/about" className='nav-link px-2'>{props.about}</Link>
            {/* <Link to="/contact" className='nav-link px-2'>{props.contact}</Link> */}
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