import { Container, Nav, Navbar } from 'react-bootstrap';
import useScrollSpy from '../ScrollSpy';
import SiteLogo from '../logo.svg?react';

function NavComponent() {

	// Navbar shrink function
	const navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav');
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink')
		} else {
			navbarCollapsible.classList.add('navbar-shrink')
		}
	};
	// Shrink the navbar 
	navbarShrink();
	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink);

	// Scrollspy
	const handleLinkClick = (event) => {
		// prevent the navigation / id adding to url
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute('href');
		document.querySelector(targetId).scrollIntoView();
	};

	const activeId = useScrollSpy(['home', 'about', 'video', 'catalogue', 'contact'], 100);

	// Render Nav
	return (
		<>
			<Navbar expand="sm" className="bg-secondary text-uppercase fixed-top justify-content-end" id="mainNav">
				<Container>
					<Navbar.Brand>
						<a href="#home" onClick={handleLinkClick}>
							<SiteLogo title="Misty Acres" className="justify-content-center site-logo" />
						</a>
					</Navbar.Brand>
					<Nav as="ul" variant="pills" activeKey={activeId} className="justify-content-end align-items-center" id="navbarResponsive">
						<Nav.Item as="li" className="mx-2 mx-md-1">
							<Nav.Link eventKey="about" href="#about" onClick={handleLinkClick}>About</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li" className="mx-2 mx-md-1">
							<Nav.Link eventKey="video" href="#video" onClick={handleLinkClick}>Video</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li" className="mx-2 mx-md-1">
							<Nav.Link eventKey="catalogue" href="#catalogue" onClick={handleLinkClick}>Catalogue</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li" className="mx-2 mx-md-1">
							<Nav.Link eventKey="contact" href="#contact" onClick={handleLinkClick}>Contact</Nav.Link>
						</Nav.Item>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}

export default NavComponent;