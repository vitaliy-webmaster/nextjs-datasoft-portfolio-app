import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { PageTransition } from "next-page-transitions";

import "../static/styles/sass/main.scss";
import Layout from "../components/Layout";

NProgress.doStart = NProgress.start;
NProgress.doDone = NProgress.done;
NProgress.clearDelay = function () {
	if (this.startDelay) {
		clearTimeout(this.startDelay);
		this.startDelay = undefined;
	}
};
NProgress.start = function () {
	this.clearDelay();
	this.startDelay = setTimeout(function () {
		NProgress.doStart();
	}, this.settings.delay || 0);
};
NProgress.done = function () {
	this.clearDelay();
	this.doDone();
};

Router.onRouteChangeStart = (url) => {
	NProgress.configure({ trickle: false, showSpinner: false, delay: 300 }).start();
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps, router };
	}

	componentDidMount() {
		// window.history.scrollRestoration = "manual";
	}

	render() {
		const { Component, pageProps, router } = this.props;

		return (
			<Container>
				<Head>
					<title>Datasoft Portfolio</title>
				</Head>
				<Layout>
					<PageTransition timeout={300} classNames="page-transition">
						<Component {...pageProps} key={router.route} />
					</PageTransition>
					<style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
				</Layout>
			</Container>
		);
	}
}

export default MyApp;