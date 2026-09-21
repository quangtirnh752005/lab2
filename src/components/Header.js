import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import { useCart } from './CartContext.js';
import {FaShoppingCart} from "react-icons/fa"
export default function Header({ onOpenCart }) {
  const { totalItems } = useCart();

  return (
    <Navbar expand="md" variant="dark" style={{ background: 'var(--ph-darker)' }} sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fst-italic fw-bold">
          <img src={'/Images/logo.jpg'} className="App-logo" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="ph-nav" />
        <Navbar.Collapse id="ph-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/men">Men</Nav.Link>
            <Nav.Link as={NavLink} to="/women">Women</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>

          <Button variant="outline-light" onClick={onOpenCart} aria-label="Mở giỏ hàng">
            <FaShoppingCart /> Giỏ <Badge bg="warning" text="dark">{totalItems}</Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
