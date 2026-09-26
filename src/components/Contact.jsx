import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Contact() {
	const [status, setStatus] = useState('idle');

	const formRef = useRef(null);

	const handleSubmit = (e) => {
		if (status === 'submitting') {
			return;
		}
		const formData = new FormData(e.target);

		// convert to x-www-form-urlencoded using URLSearchParams
		const params = new URLSearchParams(formData);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: params.toString(),
		})
			.then((res) => {
				if (res.ok) {
					setStatus('submitted');
					formRef.current.reset();
				} else {
					setStatus('error');
				}
			})
			.catch(() => setStatus('error'));

		e.preventDefault();
	};

	// Render Contact Form
	return (
		<section className="page-section bg-purple" id="contact">
			<Container>
				<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Us</h2>
				<div className="divider-custom">
					<div className="divider-custom-line"></div>
					<div className="divider-custom-icon">
						<FontAwesomeIcon icon="fa-seedling" />
					</div>
					<div className="divider-custom-line"></div>
				</div>
				<form ref={formRef} onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bots-r-us">
					<input type="hidden" htmlFor="form-name" name="form-name" value="contact" />
					<Row className="justify-content-center">
						{status === 'submitted' && (
							<button type='button' className="alert alert-dismissible contact-close" data-bs-dismiss='alert' aria-hidden='true'>
								<div className="animate__animated animate__fadeIn contact-success">We have received your message.
								</div>
							</button>
						)}
						{status === 'error' && (
							<button type='button' className="alert alert-dismissible contact-close" data-bs-dismiss='alert' aria-hidden='true'>
								<div className="animate__animated animate__fadeIn contact-failure">An error occurred.
								</div>
							</button>
						)}
						<Col lg={8} xl={7}>
							<div className="form-floating mb-3">
								<input type="hidden" name="form-name" value="contact" />
								<div className="form-floating mb-3 bots-r-us">
									<input type="text" className="form-control" placeholder="Do Not Fill" name="bots-r-us" />
									<label htmlFor="spam">Not for humans<span className="required" /></label>
								</div>
								<div className="form-floating mb-3">
									<input type="text" className="form-control" placeholder="Your name" htmlFor="name" name="name" inputMode="text" data-sb-validations="required" required />
									<label htmlFor="name">Your name<span className="required" /></label>
									<div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
								</div>
								<div className="form-floating mb-3">
									<input type="email" className="form-control" placeholder="name@example.com" htmlFor="email" name="email" data-sb-validations="required,email" inputMode="email" required onChange={(e) => {
										e.target.value = e.target.value.toLowerCase();
									}} />
									<label htmlFor="email">Email address<span className="required" /></label>
									<div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
									<div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
								</div>
								<div className="form-floating mb-3">
									<input type="tel" className="form-control" placeholder="(123) 456-7890" htmlFor="phone" name="phone" inputMode="tel" onInput={(e) => {
										if (e.target.value.startsWith('+')) {
											e.target.value = '+' + e.target.value.substring(1).replace(/[^0-9()]/g, '');
										} else {
											e.target.value = e.target.value.replace(/[^0-9()]/g, '');
										}
									}} />
									<label htmlFor="phone">Phone number</label>
									<div className="invalid-feedback">Please enter a valid phone number.</div>
								</div>
								<div className="form-floating mb-3">
									<textarea className="form-control message" placeholder="Enter your message here..." htmlFor="message" name="message" inputMode="text" data-sb-validations="required" required></textarea>
									<label htmlFor="message">Message<span className="required" /></label>
									<div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
								</div>
								<button disabled={status === 'submitting'} className="btn btn-primary btn-xl" id="submitButton" aria-label="send" data-callback="onSubmit" data-action="submit">Send</button>
							</div>
						</Col>
					</Row>
				</form>
			</Container>
		</section>
	);
}