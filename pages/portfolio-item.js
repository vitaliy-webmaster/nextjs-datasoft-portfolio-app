import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import config from "../config";
import Footer from "../components/Footer";


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

	// componentDidMount() {
	// 	window.history.scrollRestoration = "manual";
	// }

	render() {
		const data = this.props.data[0];
		return (
			<React.Fragment>
				<main>
					<div className="container post-single-portfolio-item">
						<div className="row">

							<div className="page-header">
								<h1>{data.title}</h1>
							</div>
							<p className="page-category">
								Категория: <b>{data.category.split("-")[1].toUpperCase()}</b>
								<br />
								{data.demoUrl && (
									<span>
										Демо превью: <b className="demo-preview-link"><a target="_blank" href={data.demoUrl}>{data.demoUrl}</a></b>
									</span>
								)}
							</p>
							<hr />
							<div className="col-md-4 single-item-description">
								<p dangerouslySetInnerHTML={{ __html: data.description }} />
							</div>
							<div className="col-md-offset-1 col-md-7 single-item-screenshot">
								{data.fullscreenImgs.map((item, index) => {
									return (
										<img key={index} src={item} alt="" />
									);
								})}

							</div>
						</div>
					</div>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default PortfolioItem;