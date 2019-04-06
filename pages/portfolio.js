import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import PortfolioSection from "../components/PortfolioSection";
import config from "../config";


class Portfolio extends Component {

	static async getInitialProps() {
		const { HOST_URI } = config;
		let data;

		try {
			const response = await fetch(`${HOST_URI}/api/portfolio-items`);
			data = await response.json();
		} catch (error) {
			console.log("getInitialProps(): Fetching data error");
			data = [];
		}
		return { data };
	}

	render() {
		return (
			<React.Fragment>
				<PortfolioSection itemsData={this.props.data} />
			</React.Fragment>

		);
	}
}

export default Portfolio;