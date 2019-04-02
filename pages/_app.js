import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import "../static/styles/main.scss";
import Layout from "../components/Layout";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Head>
					<title>Datasoft Studio</title>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}

export default MyApp;