import React, { Component } from "react";

class Services extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="page-services-box">
					<div className="container">
						<div className="row">
							<div className="section-title">
								<span>УСЛУГИ</span>
								<p>Услуги профессиональной верстки сайтов, настройка и поддержка.</p>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6 wow fadeInUp services-box-left">
								<h3>Предлагаю услуги web-разработчика (верстальщика) по направлениям:</h3>
								<p>- верстка валидная, кроссбраузерная
									(<span>HTML5</span>, <span>CSS3</span>, <span>JQuery</span>, <span>LESS</span>) по вашему psd-макету;
									рассмотрю макеты разной сложности, от сайта-визитки до сложного продающего лендинга;</p>
								<p>- адаптивная верстка под разные размеры экранов с помощью <span>CSS3 Media Queries</span> и <span>Bootstrap 3</span>;
								</p>
								<p>- адаптация вашего лендинга под <span>CMS WordPress</span> с дальнейшей установкой и настройкой на
									хостинге; доработка сайтов на <span>CMS WordPress</span>;</p>
								<p>- дополнительные услуги: подключение аналитических сервисов
									(<span>Google Analytics</span>, <span>Яндекс.Метрика</span>), настройка хостинга и домена,
									консультации по <span>CMS WordPress</span>.</p>
								<div className="row services-box-left-list">
									<div className="col-md-6">
										<div className="row">
											<ul className="list">
												<li><span>HTML5, CSS3, LESS, JQuery, PHP</span></li>
												<li>Валидный, кроссбраузерный код</li>
												<li>"Резиновая" верстка</li>
												<li>Все размеры экранов</li>
												<li>Подключение аналитических сервисов</li>
											</ul>
										</div>
									</div>
									<div className="col-md-6">
										<div className="row">
											<ul className="list">
												<li>Адаптация сайтов под <span>CMS WordPress</span></li>
												<li>Разработка тем</li>
												<li>Адаптивность в <span>CMS WordPress</span></li>
												<li>Установка и настройка на хостинге</li>
												<li>Консультации</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6 visible-md visible-lg wow fadeInUp services-box-right" data-wow-delay=".1s">
								<img src="/static/images/services-1.jpg" alt="Services Image" />
							</div>
						</div>
					</div>
				</section>


				<section className="section-my-advantages">
					<div className="container">
						<div className="row">
							<h3>Мои преимущества: </h3>
							<div className="col-md-3 col-sm-offset-0 col-sm-6 col-xs-offset-1 col-xs-10 wow fadeInUp">
								<div className="benefits_1_single">
									<i className="icon ion-ios-pulse" />
									<div className="title montserrat-text uppercase">Качественный результат в разумные сроки</div>
									<p>
										Чистый, валидный код, соответствующий последним web-стандартам.
									</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-offset-0 col-sm-6 col-xs-offset-1 col-xs-10 wow fadeInUp">
								<div className="benefits_1_single">
									<i className="icon ion-ios-infinite-outline" />
									<div className="title montserrat-text uppercase"><span>Добросовестность и ответственность</span></div>
									<p>
										Я требователен к себе в плане проработки всех деталей верстки. <br />Несу ответственность за
										результат.
									</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-offset-0 col-sm-6 col-xs-offset-1 col-xs-10 wow fadeInUp">
								<div className="benefits_1_single">
									<i className="icon ion-ios-lightbulb-outline" />
									<div className="title montserrat-text uppercase">Послеоплата</div>
									<p>
										Для большинства проектов я выбираю схему оплаты по факту выполненой работы.
									</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-offset-0 col-sm-6 col-xs-offset-1 col-xs-10 wow fadeInUp">
								<div className="benefits_1_single">
									<i className="icon ion-ios-settings" />
									<div className="title montserrat-text uppercase">Обучение и Поддержка</div>
									<p>
										Провожу небольшие правки и консультации по завершенным проектам ещё в течении 2 недель.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Services;