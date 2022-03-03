import { Navbar , Container , Nav } from 'react-bootstrap';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
              <img src={require('../../assets/zid-logo.png')} alt="zid-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto header-links">
              <Nav.Link href="#home">الرئيسية</Nav.Link>
              <Nav.Link href="#link">التصنيفات</Nav.Link>
              <Nav.Link href="#link">التطبيقات</Nav.Link>
              <Nav.Link href="#link">طور تطبيق</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
