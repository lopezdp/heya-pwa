import React, {Component }from "react";
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
				<h1>Heya</h1>
				<p>
					The dating app for people who hate dating apps. 
				</p>
				<p>
					Stop messaging. Start meeting #IRL.
				</p>
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
