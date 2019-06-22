import React from "react";
import { PageTransition } from "next-page-transitions";
import Layout from "./_app";
import Footer from "../components/Footer";
import { CSSTransition } from "react-transition-group";

class Error extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		return (
			<React.Fragment>
				<main>
					<div className="under-development-title">
						<img src="/static/images/warning.png" alt="" />
						<p>
							{this.props.statusCode
								? `Error ${this.props.statusCode} occurred on server`
								: "Error occurred on client"}
						</p>
					</div>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Error;