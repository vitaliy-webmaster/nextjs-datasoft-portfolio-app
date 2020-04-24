import React, { Component } from "react";
import Footer from "../components/Footer";
import UTPBox from "../components/UTPBox";

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<section className="about-section">
						<div className="container">
							<div className="row">
								<div className="section-title">
									<span>Обо мне</span>
									<p>Детально о моих навыках и не только</p>
								</div>
							</div>

							<div>Work in progress..</div>
						</div>
					</section>

					<UTPBox />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default About;