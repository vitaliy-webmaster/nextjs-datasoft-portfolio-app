import React, { Component } from "react";
import { withRouter } from "next/router";
import Router from "next/router";
import NProgress from "nprogress";

class Vegas extends Component {

	state = {
		heroHeight: 750
	};


	setHeroHeight = () => {
		const bodyWidth = document.getElementById("portfolio-body").offsetWidth;

		if (this.props.router.pathname === "/" && bodyWidth >= 751) {
			this.setState({
				heroHeight: 750
			});
		} else {
			this.setState({
				heroHeight: 480
			});
		}
	};

	componentDidMount() {

		this.setHeroHeight();
		window.addEventListener("resize", this.setHeroHeight.bind(this));

		jQuery(".vegas_bg").vegas({
			timer: false,
			animation: "kenburns",
			delay: 12500,
			transition: "fade",
			slides: [
				{ src: "/static/images/slider-img/img1.jpg" },
				{ src: "/static/images/slider-img/img2.jpg" },
				{ src: "/static/images/slider-img/img3.jpg" }
			]
		});
	}

	render() {
		return (
			<div className="site-hero vegas_bg" style={{ height: this.state.heroHeight }}>
				<div className="h1">
					WEB-программирование<br /> <span>Профессиональная вёрстка и Full-Stack разработка</span>
				</div>
			</div>
		);
	}
}

export default withRouter(Vegas);