const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "qultra.web@gmail.com",
		pass: "Pass_1989"
	},
	tls: { rejectUnauthorized: false }
});

let mailServerIsReady = false;

// verify connection configuration
transporter.verify(function (error, success) {
	if (error) {
		console.log(error);
	} else {
		console.log("-- Mail Server is ready --");
		mailServerIsReady = true;
	}
});

const sendMailFromServer = (name, email, message) => {
	return new Promise((resolve, reject) => {

		// setup email data with unicode symbols
		let mailOptions = {
			from: "\"Website Visitor\" <qultra.web@gmail.com>", // sender address
			replyTo: "\"" + name + "\" " + "<" + email + ">",
			to: "vitaliy.webmaster@gmail.com", // list of receivers
			subject: "Сообщение от " + email, // Subject line
			html: "<p>" + message + "</p>" // html body
		};

		transporter.sendMail(mailOptions)
			.then(info => {
				console.log(`Email message is successfully sent to ${info.accepted.join(", ")}`);
				resolve();
			})
			.catch(err => {
				console.log("Email message sending error:", err);
				reject();
			});
	});
};

module.exports = sendMailFromServer;