import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

function Video() {
	// Render Video
	return (
		<section className="page-section bg-purple text-secondary mb-0" id="video">
			<Container>
				<h2 className="page-section-heading text-center text-uppercase text-secondary">Videos</h2>
				<div className="divider-custom">
					<div className="divider-custom-line"></div>
					<div className="divider-custom-icon">
						<FontAwesomeIcon icon="fa-seedling" />
					</div>
					<div className="divider-custom-line"></div>
				</div>
				<Container className="video">
					<Row className="justify-content-md-center">
						<Col lg="auto">
							<iframe
								class="video-frame"
								src='https://www.youtube.com/embed?listType=playlist&list=UUBMaYJ1Cqqi3W1fJwNyghdQ'
								frameborder='0'
								allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Video;