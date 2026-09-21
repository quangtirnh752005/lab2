import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PriceTag from './PriceTag.jsx';
import { useCart } from './CartContext.js';
import product from '../data/products.js'

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const badgeClass = product.badge === 'NEW' ? 'ph-badge-new' : 'ph-badge-sale';

  return (
    <Card className="ph-card position-relative">
      {product.badge && <span className={`ph-badge ${badgeClass}`}>{product.badge}</span>}

      <Link to={`/pizza/${product.id}`}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
      </Link>

      <Card.Body className="d-flex flex-column">
        <Card.Title as="h5" className="fs-6">
          
        </Card.Title>

        <div className="mb-3">
            {product.name}    
        </div>
        <div className="mb-3">
            {product.price}
        </div>
        <div className="mb-3">
            {product.status}    
        </div>

        <Button className="ph-buy-btn mt-auto w-100" onClick={() => addToCart(product)}>
          Add Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired,
};
