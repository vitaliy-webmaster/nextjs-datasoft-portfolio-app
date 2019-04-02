import React, { Component } from "react";
import Link from "next/link";

class Layout extends Component {
	render() {
		return (
			<div>
				<header>
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/about">
						<a>About</a>
					</Link>
				</header>
				<main>
					{this.props.children}
				</main>
				<footer>
					&copy; 2019 All rights reserved.
				</footer>
			</div>
		);
	}
}

export default Layout;