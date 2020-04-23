import React, { Component } from "react";
import Link from "next/link";
import Vegas from "../Vegas";

class Header extends Component {

	render() {
		return (

			<React.Fragment>
				<header className="main-header">
					<div className="container">
						<div className="logo">
							<Link href="/"><a><span className="h1">Datasoft <small>portfolio</small></span></a></Link>
						</div>

						<div className="menu">
							<nav className="desktop-nav">
								<ul id="menu-menu-1" className="first-level">
									<li id="menu-item-13"
										className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item menu-item-13">
										<Link href="/"><a>Главная</a></Link></li>
									<li id="menu-item-55"
										className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
										<Link href="/about"><a>Обо мне</a></Link></li>
									<li id="menu-item-56"
										className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
										<Link href="/services"><a>Навыки</a></Link></li>
									<li id="menu-item-59"
										className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59">
										<Link href="/portfolio"><a>Портфолио</a></Link></li>
									<li id="menu-item-57"
										className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
										<Link href="/contact"><a>Контакты</a></Link></li>
								</ul>
							</nav>

							<nav className="mobile-nav"></nav>
							<div className="menu-icon">
								<div className="line"></div>
								<div className="line"></div>
								<div className="line"></div>
							</div>
						</div>
					</div>
				</header>
				<Vegas />
			</React.Fragment>
		);
	}
}

export default Header;