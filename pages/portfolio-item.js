import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import config from "../config";

class PortfolioItem extends Component {
	static async getInitialProps({ query }) {
		let data;
		try {
			const response = await fetch(`${config.HOST_URI}/api/portfolio-item?portfolioUrl=${query.portfolioUrl}`);
			data = await response.json();
		} catch (event) {
			console.log("Error while fetching data");
			data = {};
		}

		return { data: data.payload };
	}

	render() {
		const data = this.props.data[0];
		return (

			<div className="container post-single-portfolio-item">
				<div className="row">

					<div className="page-header">
						<h1>{data.title}</h1>
					</div>
					<p>
						<em>Category: <b>{data.category.split("-")[1].toUpperCase()}</b></em>
					</p>
					<hr />
					<div className="col-md-3 single-item-description">
						<p dangerouslySetInnerHTML={{ __html: data.description }} />
					</div>
					<div className="col-md-offset-1 col-md-8 single-item-screenshot">
						{data.fullscreenImgs.map((item, index) => {
							return (
								<img key={index} src={item} alt="" />
							);
						})}

					</div>
				</div>
			</div>
		);
	}
}

export default PortfolioItem;