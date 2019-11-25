import React, {Component }from "react";
import Media from "react-media";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typist from "react-typist";
import Footer from "../components/Footer";
// import { Auth, API } from "aws-amplify";
// import DashboardUiCard from "../components/DashboardUiCard";
import "./Home.css";

export default class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			isLoading: false
		};
	}

	renderLandingPage() {
		return(
			<Container className="LandingPage">
		        <Media query="(max-width: 599px)" render={() =>
		          	(
		          		<article>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/HeyaLogo.jpg" className="logo-icon-sm" thumbnail />
							    </Col>
							  </Row>
							</Container>

							<Typist className="my-typist" cursor={{ show: false, hideWhenDone: true }}>
								<h5>
									The dating app for people who hate dating apps.
								</h5>
							</Typist>

							<p>
								Stop messaging. Start meeting #IRL.
							</p>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/InstaIcon.png" className="insta-icon-sm" thumbnail />
							    </Col>
							  </Row>
							</Container>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/iOSapp.png" className="ios-icon-sm" thumbnail />
							    </Col>
							  </Row>
							</Container>

							{/* Need the Footer Menu to display new features */}
							<Footer />

						</article>
		          	)}
		        />







		        <Media query="(min-width: 600px) and (max-width: 799px)" render={() =>
		          	(
		          		<article>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/HeyaLogo.jpg" className="logo-icon-md" thumbnail />
							    </Col>
							  </Row>
							</Container>

							<Typist className="my-typist" cursor={{ show: false, hideWhenDone: true }}>
								<h5>
									The dating app for people who hate dating apps.
								</h5>
							</Typist>

							<p>
								Stop messaging. Start meeting #IRL.
							</p>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/iOSapp.png" className="ios-icon-md" thumbnail />
							    </Col>
							  </Row>
							</Container>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/InstaIcon.png" className="insta-icon-md" thumbnail />
							    </Col>
							  </Row>
							</Container>

							{/* Need the Footer Menu to display new features */}
							<Footer />
							
						</article>
		          	)}
		        />







		        <Media query="(min-width: 800px)" render={() =>
		          	(
		          		<article>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/HeyaLogo.jpg" className="logo-icon-lg" thumbnail />
							    </Col>
							  </Row>
							</Container>

							<Typist className="my-typist" cursor={{ show: false, hideWhenDone: true }}>
								<h5>
									The dating app for people who hate dating apps.
								</h5>
							</Typist>

							<p>
								Stop messaging. Start meeting #IRL.
							</p>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/iOSapp.png" className="ios-icon-lg" thumbnail />
							    </Col>
							  </Row>
							</Container>

							<Container>
							  <Row>
							    <Col>
							      <Image src="/img/InstaIcon.png" className="insta-icon-lg" thumbnail />
							    </Col>
							  </Row>
							</Container>

							{/* Need the Footer Menu to display new features */}
							<Footer />
							
						</article>
		          	)}
		        />

			</Container>
		);
	}

	render(){
		return(
			<main className="Home">
				{ this.renderLandingPage() }
			</main>
		);
	}
}
