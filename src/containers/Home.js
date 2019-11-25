import React, {Component }from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typist from "react-typist";
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
			<article className="LandingPage">

				<Container>
				  <Row>
				    <Col>
				      <Image src="/img/HeyaLogo.jpg" className="logo-icon" thumbnail />
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
				      <Image src="/img/iOSapp.png" className="ios-icon" thumbnail />
				    </Col>
				  </Row>
				</Container>

			</article>
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
