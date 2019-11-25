import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-media";
import "./Footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  render() {

	return (
		<div className="ftr-div">
			<Container className="footer-menu">
				<Media query="(min-width: 319px) and (max-width: 450px)" render={() =>
		          	(
						<footer className="ftr">
							<Row className="rw">
								<Col className="ftr-col-1">
									<Link to="/terms-conditions"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/TnC.png" className="ftr-icon-1" />
												<p className="ftr-p">T&C's</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-2">
									<Link to="/privacy-policy"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/PrivacyPolicyIcon.png" className="ftr-icon-2" />
												<p className="ftr-p">Privacy</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-3">
									<Link to="/fees"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/FeeIcon.png" className="ftr-icon-3" />
												<p className="ftr-p">Instagram</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-4">
									<Link to="/ca-dmv-bpa-license"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/OLicenseIcon.png" className="ftr-icon-4" />
												<p className="ftr-p">Jobs</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-5">
									<Link to="/support"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/SupportIcon.png" className="ftr-icon-5" />
												<p className="ftr-p">Support</p>
											</div>
										</section>
									</Link>
								</Col>
							</Row>
						</footer>
		          	)}
		        />

				<Media query="(min-width: 451px) and (max-width: 850px)" render={() =>
		          	(
						<footer className="ftr">
							<Row className="rw">
								<Col className="ftr-col-1">
									<Link to="/terms-conditions"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/TnC.png" className="ftr-icon-1a" />
												<p className="ftr-pa">Terms &</p>
												<p className="ftr-pa">Conditions</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-2">
									<Link to="/privacy-policy"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/PrivacyPolicyIcon.png" className="ftr-icon-2a" />
												<p className="ftr-pa">Privacy Policy</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-3">
									<Link to="/fees"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/FeeIcon.png" className="ftr-icon-3a" />
												<p className="ftr-pa">Instagram</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-4">
									<Link to="/ca-dmv-bpa-license"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/OLicenseIcon.png" className="ftr-icon-4a" />
												<p className="ftr-pa">Jobs</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-5">
									<Link to="/support"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/SupportIcon.png" className="ftr-icon-5a" />
												<p className="ftr-pa">Support</p>
											</div>
										</section>
									</Link>
								</Col>
							</Row>
						</footer>
		          	)}
		        />

				<Media query="(min-width: 851px) and (max-width: 1150px)" render={() =>
		          	(
						<footer className="ftr">
							<Row className="rw">
								<Col className="ftr-col-1">
									<Link to="/terms-conditions"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/TnC.png" className="ftr-icon-1a" />
												<p className="ftr-pa">Terms &</p>
												<p className="ftr-pa">Conditions</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-2">
									<Link to="/privacy-policy"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/PrivacyPolicyIcon.png" className="ftr-icon-2a" />
												<p className="ftr-pa">Privacy Policy</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-3">
									<Link to="/fees"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/FeeIcon.png" className="ftr-icon-3a" />
												<p className="ftr-pa">Instagram</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-4">
									<Link to="/ca-dmv-bpa-license"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/OLicenseIcon.png" className="ftr-icon-4a" />
												<p className="ftr-pa">Jobs</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-5">
									<Link to="/support"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div className="p-parent">
												<Image src="../img/FooterIcons/SupportIcon.png" className="ftr-icon-5a" />
												<p className="ftr-pa">Support</p>
											</div>
										</section>
									</Link>
								</Col>
							</Row>
						</footer>
		          	)}
		        />

				<Media query="(min-width: 1151px) and (max-width: 1300px)" render={() =>
		          	(
						<footer className="ftr">
							<Row className="rw">
								<Col className="ftr-col-1">
									<Link to="/terms-conditions"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/TnC.png" className="ftr-icon-1a" />
												<p className="ftr-pa">Terms &</p>
												<p className="ftr-pa">Conditions</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-2">
									<Link to="/privacy-policy"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/PrivacyPolicyIcon.png" className="ftr-icon-2a" />
												<p className="ftr-pa">Privacy Policy</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-3">
									<Link to="/fees"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/FeeIcon.png" className="ftr-icon-3a" />
												<p className="ftr-pa">Instagram</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-4">
									<Link to="/ca-dmv-bpa-license"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/OLicenseIcon.png" className="ftr-icon-4a" />
												<p className="ftr-pa">Jobs</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-5">
									<Link to="/support"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div className="p-parent">
												<Image src="../img/FooterIcons/SupportIcon.png" className="ftr-icon-5a" />
												<p className="ftr-pa">Support</p>
											</div>
										</section>
									</Link>
								</Col>
							</Row>
						</footer>
		          	)}
		        />

				<Media query="(min-width: 1301px)" render={() =>
		          	(
						<footer className="ftr">
							<Row className="rw">
								<Col className="ftr-col-1">
									<Link to="/terms-conditions"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/TnC.png" className="ftr-icon-1b" />
												<p className="ftr-pa">Terms &</p>
												<p className="ftr-pa">Conditions</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-2">
									<Link to="/privacy-policy"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/PrivacyPolicyIcon.png" className="ftr-icon-2b" />
												<p className="ftr-pa">Privacy Policy</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-3">
									<Link to="/fees"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/FeeIcon.png" className="ftr-icon-3b" />
												<p className="ftr-pa">Instagram</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-4">
									<Link to="/ca-dmv-bpa-license"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div>
												<Image src="../img/FooterIcons/OLicenseIcon.png" className="ftr-icon-4b" />
												<p className="ftr-pa">Jobs</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col className="ftr-col-5">
									<Link to="/support"
										className="ftr-block"
										onClick={ void (0) }
										onTouchStart={ () => "" }
									>
										<section className="ftr-button" onClick={ void (0) } onTouchStart={ () => "" }>
											<div className="p-parent">
												<Image src="../img/FooterIcons/SupportIcon.png" className="ftr-icon-5b" />
												<p className="ftr-pa">Support</p>
											</div>
										</section>
									</Link>
								</Col>

								<Col xl={3}>
									<p className="ftr-txt-1a">
										© 2019 Heya is a registered trademark of Heya, Inc. a California Corporation. All rights reserved.
									</p>
								</Col>
							</Row>
						</footer>
		          	)}
		        />
		        
			</Container>
		</div>
	);
  }
}

// eslint-disable-next-line
