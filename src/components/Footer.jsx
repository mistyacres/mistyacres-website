import { Container } from 'react-bootstrap';
import { CurrentYear, SiteVariables } from '../App';

function Footer() {

	// Render Footer
	return (
		<footer className="footer pt-4 text-center">
			<Container>
				<div className="d-flex justify-content-center">
					<p className="address mb-0">
						{SiteVariables.footerAddress}
					</p>
				</div>
				<div className="pt-2">
					<a href="https://github.com/mistyacres/mistyacres-awwebsite/issues" className="issues">
						<small>Report an issue</small>
					</a>
				</div>
				<div className="copyright pt-2 pb-4">
					<small>&copy;<CurrentYear /> {SiteVariables.footerCopyright}</small>
				</div>
			</Container>
		</footer >
	);
}

export default Footer;