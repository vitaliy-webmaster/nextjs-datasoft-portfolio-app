import React, { Component } from "react";
import { withRouter } from "next/router";

class Vegas extends Component {

	state = {
		heroHeight: (this.props.router.pathname === "/") ? 730 : 480
	};


	setHeroHeight = () => {
		const bodyWidth = document.getElementById("portfolio-body").offsetWidth;

		if (this.props.router.pathname === "/") {
			if (bodyWidth >= 751) {
				this.setState({
					heroHeight: 730
				});
			} else {
				this.setState({
					heroHeight: 480
				});
			}
		} else {
			if (bodyWidth >= 751) {
				this.setState({
					heroHeight: 480
				});
			} else {
				this.setState({
					heroHeight: 360
				});
			}
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
				{ src: "/static/images/slider-img/img2.jpg" }
			]
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.router.pathname !== this.props.router.pathname) {
			this.setHeroHeight();
		}
	}

	render() {
		return (
			<div className={`site-hero vegas_bg ${[360, 480].includes(this.state.heroHeight) ? "with-margin-top" : ""}`}
				style={{ height: this.state.heroHeight }}>
				<div className="h1">
					WEB-программирование<br /> <span>Профессиональная Full-Stack разработка на NodeJS и React</span>
				</div>
			</div>
		);
	}
}

export default withRouter(Vegas);