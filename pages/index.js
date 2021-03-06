import React, { Component } from "react";
import Link from "next/link";
import PortfolioSection from "../components/PortfolioSection";
import { CSSTransition } from "react-transition-group";
import Footer from "../components/Footer";

class Index extends Component {

	render() {
		return (
			<React.Fragment>
				<main>

					<CSSTransition
						in={true}
						appear={true}
						timeout={300}
						unmountOnExit={true}
						classNames="photo-box"
					>
						<div className="agency-container container">

							<div className="agency">
								<div
									className="agency-inner  col-sm-offset-3 col-sm-6 col-md-offset-0 col-md-4 col-lg-offset-1">
									<div className="row">
										<img className="img-thumbnail" src="/static/images/my_photo.jpg"
											alt="My Photo" />
									</div>
								</div>
								<div className="history-cite-box col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-6 col-lg-5">
									<div className="row">
										<div className="section-title">
											<span>Обо мне</span>
										</div>
										<p>
											Приветствую!
											<br /> Меня зовут Виталий, и я более 4 лет занимаюсь Front-End разработкой для WEB. <br />На
											этой странице вы сможете ознакомиться с моими навыками и портфолио.
										</p>
										<Link href="/about">
											<a className="btn grey animsition-link"><span>Читать далее<span className="" /></span></a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</CSSTransition>

					<section className="services">
						<div className="container">
							<div className="row">
								<div className="section-title">
									<span className="white">Навыки</span>
									<p className="white">Мои навыки WEB-разработчика (Front-End, Back-End, Mobile).</p>
								</div>
							</div>
							<div className="services-bg row">
								<div className="services-bg-overlay" />
								<div
									className="col-md-12 col-md-offset-0 col-lg-8 col-sm-12 col-sm-offset-0 services-left wow fadeInUp">
									<div className="row">
										<div className="category-bg col-md-offset-1 col-md-5 col-lg-offset-0 col-lg-6 col-sm-6">
											<div className="row">
												<i className="icon ion-ios-infinite-outline" />
												<span className="open-sans-text uppercase service-title">Aдаптивная вёрстка</span>
												<ul>
													<li>HTML5, CSS3, JS, JQuery</li>
													<li>Кроссбраузерность</li>
													<li>Все размеры экранов</li>
													<li>Flexbox, CSS3 Mediaqueries</li>
													<li>Bootstrap 4 (3)</li>
													<li>CSS Transitions & Animations</li>
													<li>Разработка тем WordPress</li>
													<li>Подключ. аналит. сервисов</li>
												</ul>
											</div>
										</div>
										<div className="category-bg col-md-offset-0 col-md-5 col-lg-offset-0 col-lg-6 col-sm-6">
											<div className="row">
												<i className="icon ion-ios-shuffle" />
												<span className="open-sans-text uppercase service-title">ReactJS разработка</span>
												<ul>
													<li>Front-End на ReactJS</li>
													<li>Redux, Redux-Thunk, Redux-Saga</li>
													<li>Router, Redux-Form, Formik</li>
													<li>React Context, Hooks, Patterns</li>
													<li>Server-side rendering (NextJS)</li>
													<li>Typescript, CSS-in-JS, Animations</li>
													<li>Unit Testing (Jest, Enzyme)</li>
													<li>ES6-ES8, REST, Firebase и др.</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="category-bg col-md-offset-1 col-md-5 col-lg-offset-0 col-lg-6 col-sm-6">
											<div className="row">
												<i className="icon ion-ios-cart-outline" />
												<span className="open-sans-text uppercase service-title">NodeJS разработка</span>
												<ul>
													<li>Back-End на NodeJS</li>
													<li>Express, Passport и др.</li>
													<li>Rest API communication </li>
													<li>Typescript, ES6/ES7, Async/Await</li>
													<li>Real-Time apps c WebSockets</li>
													<li>Client Auth с cookies и JWT</li>
													<li>MongoDB, PostgreSQL, MySQL</li>
													<li>Тестирование REST</li>
												</ul>
											</div>
										</div>
										<div className="category-bg col-md-offset-0 col-md-5 col-lg-offset-0 col-lg-6 col-sm-6">
											<div className="row">
												<i className="icon ion-ios-settings" />
												<span className="open-sans-text uppercase service-title">React-Native и другое</span>
												<ul>
													<li>React-Native / Expo</li>
													<li>Geolocation, Maps, Camera</li>
													<li>Animations & Gestures</li>
													<li>AppStore publishing</li>
													<li>Gulp, Webpack, Babel</li>
													<li>Git, GitHub, Heroku</li>
													<li>English Intermediate</li>
													<li>Слепой метод печати RUS/EN</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-4 visible-lg services-right wow fadeInUp">
									<div className="row">
										<img src="/static/images/web-development-medium.png"
											alt="Services Image" />
									</div>
								</div>

							</div>
						</div>
					</section>

					<PortfolioSection itemsData={this.props.portfolioData} />

				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Index;