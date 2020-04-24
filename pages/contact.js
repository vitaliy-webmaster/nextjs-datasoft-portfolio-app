import React, { Component } from "react";
import Footer from "../components/Footer";
import UTPBox from "../components/UTPBox";

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
									<p>telegram: <span><a href="https://t.me/vitaliy_webmaster">Ссылка</a></span></p>

									<p>VK: <span><a href="https://vk.com/vvchernyshenko">Ссылка</a></span></p>
									<p>FB: <span><a href="https://www.facebook.com/vvchernyshenko">Ссылка</a></span></p>
									<p>или по e-mail: <br />
										<span className="contacts-email">vitaliy.webmaster<span
											className="domain">gmail.com</span></span>
									</p>
								</div>

								<div className="col-md-6 visible-md visible-lg wow fadeInUp services-box-right" data-wow-delay=".1s">
									<img src="/static/images/services-1.png" alt="" />
								</div>
							</div>
						</div>
					</section>

					<UTPBox />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Contact;