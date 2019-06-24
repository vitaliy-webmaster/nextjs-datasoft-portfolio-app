import React, { Component } from "react";
import Footer from "../components/Footer";

class About extends Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<section className="about-section">
						<div className="container">
							<div className="row">
								<div className="section-title">
									<span>Обо мне</span>
									<p>Детально о моих навыках и не только</p>
								</div>
							</div>

							<div>Work in progress..</div>
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

export default About;