import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import "../static/styles/sass/main.scss";
import Layout from "../components/Layout";

Router.onRouteChangeStart = (url) => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

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
					<title>Datasoft Portfolio</title>
					<link rel="stylesheet" href="/static/styles/vendor/nprogress.css" />
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}

export default MyApp;