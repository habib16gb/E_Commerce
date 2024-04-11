import { Badge } from "react-bootstrap";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HeaderBasket } from "@components/index";
import { NavLink } from "react-router-dom";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our </span>
          <Badge bg='info'>ECommerce</Badge>
        </h1>
        <HeaderBasket />
      </div>

      <Navbar
        expand='lg'
        className='bg-body-tertiary'
        bg='dark'
        data-bs-theme='dark'
      >
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='categories'>
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to='products'>
                Products
              </Nav.Link>
              <Nav.Link as={NavLink} to='about'>
                About
              </Nav.Link>
            </Nav>
            <Nav className=''>
              <Nav.Link as={NavLink} to='login'>
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to='register'>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
