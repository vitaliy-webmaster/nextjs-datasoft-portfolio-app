import React, { Component } from "react";
import Footer from "../components/Footer";

class Services extends Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<section className="services-section">
						<div className="container">
							<div className="row">
								<div className="section-title">
									<span>НАВЫКИ</span>
									<p>Full-Stack Web и Mobile разработка, настройка и поддержка.</p>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 about-one">
									<h3>HTML5, CSS3, JavaScript + JQuery, Bootstrap 3(4), WordPress</h3>
									<p>- верстка веб-страниц произвольного уровня сложности:</p>
									<p>- адаптивность под любые размеры экранов с помощью CSS3 Media Queries, FlexBox и Bootstrap 4(3)</p>
									<p>- адаптация вашего лендинга под CMS WordPress с настройкой дополнительных плагинов и установкой на
										хостинге, а также доработка существующих сайтов на CMS WordPress;</p>
									<p>- использование WP REST API и клиентской авторизации с помощью cookies и JWT;</p>
									<p>- подключение аналитических сервисов (Google Analytics, Яндекс.Метрика),
										настройка хостинга и домена и т.д</p>
								</div>

								<div className="col-md-6 about-two">
									<h3>NodeJS, ES6-ES8, SSR (NextJS), ReactJS, Typescript, React-Native</h3>
									<p>- ReactJS: создание виджетов и SPA приложений с использованием create-react-app, redux,
										redux-thunk, redux-saga, react-router, redux-form, formik и др.; </p>
									<p>- поддержка синтаксиса ES6-ES8 и Typescript, React Context, Hooks, Suspense, Lazy Loading и др.;</p>
									<p>- NextJS: разработка Server-Side Rendering приложений React'a с целью SEO-оптимизации и ускорения
										первичной загрузки страницы;</p>
									<p>- интеграция ReactJS приложений в ваш лендинг или CMS в виде виджетов или отдельных
										страниц;</p>
									<p>- NodeJS: создание backend с использованием Express.js, REST, Passport, Axios и
										других популярных пакетов; </p>
									<p>- React-Native: разработка IOS и Android приложений созданных с помощью expo и react-native-cli;</p>
									<p>- подключение Native Modules, использование React-Navigation для постраничной навигации, Geolocation API, Maps, Camera и др.;</p>
									<p>- поддержка анимаций в React-Native с помощью Animated and LayoutAnimation API;</p>
									<p>- сборка .apk и .ipa файлов, а также публикация приложений в AppStore;</p>
									<p>- включение клиентской аутентификации с помощью cookies и JWT; создание real-time приложений
										(чатов) с применением WebSockets (Socket.io);</p>
									<p>- поддерживаемые базы данных: MongoDB (Mongoose), PostgreSQL, MySQL, Oracle;</p>
								</div>
							</div>
						</div>
					</section>

					<section className="container utp-box white">
						<div className="row">
							<div className="col-sm-6 col-md-3">
								<div className="grey-box-icon">
									<div className="icon-box-top grey-box-icon-pos"><i
										className="fa medium circle-white center icon-results"></i></div>
									<h4>Результат</h4>
									<p>Чистый, валидный код, соответствующий последним web-стандартам.</p></div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="grey-box-icon">
									<div className="icon-box-top grey-box-icon-pos"><i
										className="fa medium circle-white center icon-responsibility"></i></div>
									<h4>Ответственность</h4>
									<p>Я требователен к себе плане проработки всех деталей проекта.</p></div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="grey-box-icon">
									<div className="icon-box-top grey-box-icon-pos"><i
										className="fa medium circle-white center icon-payment"></i></div>
									<h4>Послеоплата</h4>
									<p>Для большинства проектов я выбираю схему оплаты по факту выполненой работы.</p></div>
							</div>
							<div className="col-sm-6 col-md-3">
								<div className="grey-box-icon">
									<div className="icon-box-top grey-box-icon-pos"><i
										className="fa medium circle-white center icon-support"></i></div>
									<h4>Поддержка</h4>
									<p>Провожу небольшие правки по завершенным проектам ещё в течении 2 недель.</p>
								</div>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Services;