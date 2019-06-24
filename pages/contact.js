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
									<p>telegram: <span><a href="https://t.me/vvchernyshenko">Ссылка</a></span></p>

									<p>VK: <span><a href="https://vk.com/vvchernyshenko">Ссылка</a></span></p>
									<p>FB: <span><a href="https://www.facebook.com/vvchernyshenko">Ссылка</a></span></p>
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

export default Contact;