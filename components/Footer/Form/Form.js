import React, { Component } from "react";

class Form extends Component {

	state = {
		name: "",
		email: "",
		message: "",
		errors: [],
		successMessage: ""
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch("/api/message", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(this.state)
		});
		const data = await response.json();
		if (data && data.type === "message" && data.status === "error") {
			this.setState({
				errors: data.payload
			});
		} else if (data && data.type === "message" && data.status === "success") {
			this.setState({
				name: "",
				email: "",
				message: "",
				errors: [],
				successMessage: "Спасибо, ваше сообщение отправлено!"
			});
		}
	}
	;

	render() {

		const errorsArr = this.state.errors.map((item, index) => {
			return (
				<div key={index} className="error">
					{item.msg}
				</div>
			);
		});

		return (
			<div id="footer-form-box">
				<div className="form-container">
					<div id="note" />
					<div id="fields">
						<form id="ajax-contact-form" noValidate onSubmit={this.handleSubmit}>
							<div className="input-box-name">
								<label htmlFor="name">Ваше имя</label>
								<div className="input-field">
									<input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
								</div>
							</div>

							<div className="input-box-email">
								<label htmlFor="email">Ваш e-mail</label>
								<div className="input-field">
									<input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
								</div>
							</div>

							<div className="input-box-message">
								<label htmlFor="message">Ваше сообщение</label>
								<div className="input-field-textarea">
									<textarea name="message" id="message" cols="10" rows="7" value={this.state.message}
														onChange={this.handleChange} />
								</div>
							</div>


							{this.state.errors.length > 0 ? (
								<div className="errors-box">
									{errorsArr}
								</div>
							) : null}

							{this.state.successMessage ? (
								<div className="success">
									{this.state.successMessage}
								</div>
							) : null}

							<div className="submit-button">
								<input className="btn grey" type="submit" name="submit" value="Отправить" />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Form;