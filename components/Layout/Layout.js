import React, { Component } from "react";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

class Layout extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					{this.props.children}
				</main>
				<Footer />
			</div>
		);
	}
}

export default Layout;