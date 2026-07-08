import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from './ProductCard';
import TradeList from './TradeList';

function Store() {
	const [filter, setFilter] = useState('available');

	const filteredProducts = productsArray.filter((product) =>
		product.category.includes(filter)
	);

	// Render Store
	return (
		<>
			<section className="page-section bg-blue text-white portfolio" id="catalogue">
				<Container>
					<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Catalogue</h2>
					<div className="divider-custom">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
							<FontAwesomeIcon icon="fa-seedling" />
						</div>
						<div className="divider-custom-line"></div>
					</div>
					<Row className="text-secondary mb-4">
						<Col className="text-center">
							<div className="lead">Please request the plants you would like to order via the contact form.</div>
							<div className="lead">We will get back to you shortly with availability, a final quote and delivery cost.</div>
							<div className="lead">Listed prices are GST exclusive.</div>
						</Col>
					</Row>
					<div className="d-flex justify-content-center">
						<div className="tabs">
							<Button
								className="mx-2 btn btn-primary bg-red fw-bold"
								id="available"
								aria-label="Available"
								active={filter === 'available'}
								onClick={() => setFilter("available")}>Available</Button>
							<Button
								className="mx-2 btn btn-primary bg-red fw-bold"
								id="small"
								aria-label="Small"
								active={filter === 'small'}
								onClick={() => setFilter("small")}>Small</Button>
							<Button
								className="mx-2 btn btn-primary bg-red fw-bold"
								id="large"
								aria-label="Large"
								active={filter === 'large'}
								onClick={() => setFilter("large")}>Large</Button>
							<Button
								className="mx-2 btn btn-primary bg-red fw-bold"
								id="exotic"
								aria-label="Exotic"
								active={filter === 'exotic'}
								onClick={() => setFilter("exotic")}>Exotic</Button>
						</div>
					</div>
					{filter === 'available' ? (
						// Show trade list table for the "Available" tab
						<div className="card-background">
							<TradeList />
						</div>
					) : (
						<Row xs={1} md={2} className="g-1 card-background">
							{filteredProducts.map((product) => (
								<Col align="center" key={`product.${product.id}`}>
									<ProductCard product={product} />
								</Col>
							))}
						</Row>
					)}
				</Container>
			</section>
		</>
	);
}

export default Store;