import React, { Component } from "react";
import Link from "next/link";
import FooterForm from "./Form";

class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="blue-section wow fadeInUp" style={{ padding: "50px 0" }}>
					<div className="blue-section-bg-overlay" />
					<div className="container">
						<div className="col-md-5 col-sm-12 blue-section-text-box">
							<div className="row">
          <span className="white-text open-sans-text footer-header-text">
            Есть предложения для сотрудничества? <br /> <br /> Отправьте мне сообщение - <br />и мы обязательно их обсудим.
          </span>
							</div>
						</div>

						<div className="col-md-offset-1 col-md-6  col-sm-offset-2 col-sm-8">
							<div className="row">
								<div className="white-section" style={{ padding: "20px" }}>
									<div className="feedback-header open-sans-text uppercase">Отправить сообщение:</div>
									<p>В течении 24 часов вы получите ответ на указанный e-mail.</p>
									<FooterForm />
								</div>
							</div>
						</div>
					</div>
				</section>

				<footer className="main-footer wow fadeInUp">
					<div className="container">
						<div className="col-md-8 col-sm-12">
							<div className="row">
								<nav className="footer-nav">
									<ul id="menu-menu-2" className="menu">
										<li
											className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item menu-item-13">
											<Link href="/"><a className="animsition-link">Главная</a></Link></li>
										<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
											<Link href="/about"><a className="animsition-link">Обо мне</a></Link></li>
										<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
											<Link href="/services"><a className="animsition-link">Услуги</a></Link></li>
										<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59">
											<Link href="/portfolio"><a className="animsition-link">Портфолио</a></Link></li>
										<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58">
											<Link href="/blog"><a className="animsition-link">Блог</a></Link></li>
										<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
											<Link href="/contact"><a className="animsition-link">Контакты</a></Link></li>
									</ul>
								</nav>
							</div>
						</div>

						<div className="col-md-4 col-sm-12" style={{ textAlign: "right" }}>
							<div className="row">
								<div className="gray-text">
									Разработка и поддержка сайта: Vitaliy Ch.
									<br /> &copy; {new Date().getFullYear()} Все права защищены.
								</div>
								{/*<ul className="social-icons">*/}
								{/*<li><LogoFacebook fontSize="60px" color="#5589FA" /></li>*/}
								{/*<li><LogoGithub fontSize="60px" color="#5589FA" /></li>*/}
								{/*<li><a href="#"><i className="icon ion-social-pinterest"></i></a></li>*/}
								{/*</ul>*/}
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;