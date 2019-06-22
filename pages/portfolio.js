import React, { Component } from "react";
import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";

class Portfolio extends Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<PortfolioSection itemsData={this.props.portfolioData} />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Portfolio;