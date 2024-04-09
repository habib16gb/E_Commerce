import { Badge } from "react-bootstrap";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HeaderBasket } from "../../";

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
              <Nav.Link href='home'>Home</Nav.Link>
              <Nav.Link href='link'>Categories</Nav.Link>
              <Nav.Link href='about'>About</Nav.Link>
            </Nav>
            <Nav className=''>
              <Nav.Link href='login'>Login</Nav.Link>
              <Nav.Link href='register'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
