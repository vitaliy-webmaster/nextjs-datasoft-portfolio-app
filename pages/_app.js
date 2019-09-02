import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import fetch from "isomorphic-unfetch";
import { PageTransition } from "next-page-transitions";

import "../static/styles/sass/main.scss";
import Layout from "../components/Layout";
import config from "../config";

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

// Router.events.on("beforeHistoryChange", () => {
// 	document.getElementById("portfolio-body").classList.add("scrollHeightLong");
// });

Router.events.on("routeChangeStart", () => {
	NProgress.configure({ trickle: false, showSpinner: false, delay: 300 }).start();
	NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
	// setTimeout(() => {
	// 	document.getElementById("portfolio-body").classList.remove("scrollHeightLong");
	// }, 1500);
	NProgress.done();
});

Router.events.on("routeChangeError", () => {
	// setTimeout(() => {
	// 	document.getElementById("portfolio-body").classList.remove("scrollHeightLong");
	// }, 1500);
	NProgress.done();
});

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};
		const { HOST_URI } = config;
		const isServer = ctx.req;
		let data = isServer ? null : JSON.parse(localStorage.getItem("portfolioItems"));

		if (!data) {
			try {
				const response = await fetch(`${HOST_URI}/api/portfolio-items`);
				data = await response.json();
				if (!isServer) localStorage.setItem("portfolioItems", JSON.stringify(data));
				// console.log("_app.js: Successfull fetching portfolio items" + Date.now());
			} catch (err) {
				console.log("_app.js: Error while fetching portfolio items");
			}
		}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps, route: router.route, portfolioData: data };
	}


	// componentDidMount() {
	// 	if ("scrollRestoration" in window.history) {
	// 		window.history.scrollRestoration = "manual";
	// 	}
	// }

	componentDidMount() {
		const cachedPageHeight = [];

		Router.events.on("routeChangeStart", () => {
			cachedPageHeight.push(document.documentElement.offsetHeight);
		});

		Router.events.on("routeChangeComplete", () => {
			setTimeout(() => {
				document.documentElement.style.height = "initial";
			}, 1500);
		});

		Router.beforePopState(() => {
			document.documentElement.style.height = `${cachedPageHeight.pop()}px`;
			return true;
		});
	}

	render() {
		const { Component, pageProps, route, portfolioData } = this.props;

		return (
			<Container>
				<Head>
					<title>Datasoft Portfolio</title>
					<meta name='freelancehunt' content='02a429747d2d25a' />
				</Head>
				<Layout>
					<PageTransition timeout={400} classNames="page-transition">
						<Component {...pageProps} portfolioData={portfolioData} key={route} />
					</PageTransition>
					<style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 400ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 400ms;
            }
          `}</style>
				</Layout>
			</Container>
		);
	}
}

export default MyApp;
