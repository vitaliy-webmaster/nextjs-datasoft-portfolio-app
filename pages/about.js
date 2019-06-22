import React, { Component } from "react";
import Footer from "../components/Footer";

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<div className="under-development-title">
						<img src="/static/images/warning.png" alt="" />
						<p>На текущий момент страница находится в разработке.</p>
					</div>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default About;