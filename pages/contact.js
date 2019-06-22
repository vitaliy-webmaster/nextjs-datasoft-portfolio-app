import React, { Component } from "react";
import Footer from "../components/Footer";

class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<section className="page-contacts-section">
						<div className="container">
							<div className="row">
								<div className="section-title">
									<span>КОНТАКТЫ</span>
									<p>Моя контактная информация</p>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 wow fadeInUp contacts-box-left">
									<h3>Найти меня вы сможете:</h3>
									<p><span>г.Киев, Украина</span></p>
									<p>skype: <span>vvchernyshenko</span></p>
									<p>VK: <span><a href="https://vk.com/vvchernyshenko">ссылка</a></span></p>
									<p>FB: <span><a href="https://www.facebook.com/vvchernyshenko">ссылка</a></span></p>
									<p>или по e-mail: <br />
										<span style={{ marginLeft: "20%" }}>vitaliy.webmaster<span
											className="domain">gmail.com</span></span>
									</p>
								</div>

								<div className="col-md-6 visible-md visible-lg wow fadeInUp services-box-right" data-wow-delay=".1s">
									<img src="/static/images/services-1.jpg" alt="" />
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
										<div className="title montserrat-text uppercase"><span>Добросовестность и ответственность</span>
										</div>
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
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Contact;