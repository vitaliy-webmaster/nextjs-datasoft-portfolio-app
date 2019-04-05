const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const PortfolioItem = require("./models/PortfolioItem");
const expressValidator = require("express-validator");

require("dotenv").config();
const PORT = parseInt(process.env.PORT, 10) || 7000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const sendMailFromServer = require("./sendMail");

const config = require("./config");

const connectMongoDB = async () => {
	try {
		await mongoose.connect(config.DB_URI, { useNewUrlParser: true });
		console.log("MongoDB connected successfully");
	} catch (err) {
		console.log("MongoDB connection error. Check:", err);
	}
};

connectMongoDB();

app.prepare().then(() => {
	const server = express();

	server.use(express.json());
	server.use(expressValidator());

	server.post("/api/message", (req, res) => {
		req.sanitizeBody("name");
		req.sanitizeBody("email");
		req.sanitizeBody("message");

		req.checkBody("name", "Пожалуйста введите имя.").notEmpty();
		req.checkBody("name", "Имя должно иметь не менее 2 символов.").isLength({ min: 2 });

		req.checkBody("email", "Пожалуйста введите корректный email.").isEmail().normalizeEmail();

		req.checkBody("message", "Пожалуйста введите сообщениею");
		req.checkBody("message", "Сообщение должно иметь не менее 10 символов").isLength({ min: 10 });

		const errors = req.validationErrors();
		// console.log(errors);

		if (errors) {
			return res.status(400).json({ type: "message", status: "error", payload: errors });
		}

		const { name, email, message } = req.body;

		sendMailFromServer(name, email, message)
			.then(() => {
				return res.json({ type: "message", status: "success" });
			})
			.catch(() => {
				return res.status(400).json({
					type: "message",
					status: "error",
					payload: "Ошибка сервера. Email не отправлен."
				});
			});
	});

	server.post("/api/portfolio-items", (req, res) => {
		const { pass, category, priority, title, portfolioUrl, websiteUrl, previewImg, fullscreenImgs, description, endDate } = req.body;
		if (pass !== "passneverforget") {
			return res.status(400).json({ type: "add-portfolio-item", status: "error", payload: "wrong credentials" });
		}
		const item = new PortfolioItem({
			pass,
			category,
			priority,
			title,
			portfolioUrl,
			websiteUrl,
			previewImg,
			fullscreenImgs,
			description,
			endDate
		});
		item.save((err, result) => {
			if (err) return res.status(400).json({
				type: "add-portfolio-item",
				status: "error",
				payload: err
			});
			return res.json({ type: "add-portfolio-item", status: "success", payload: "" });
		});
	});

	server.get("/api/portfolio-items", (req, res) => {
		PortfolioItem.find({}, (err, result) => {
			if (err) return res.status(400).json({
				type: "get-portfolio-items",
				status: "error",
				payload: "internal server error"
			});
			if (!result) {
				return res.json([]);
			}
			return res.status(200).json(result);
		});
	});

	server.get("/api/portfolio-item", (req, res) => {
		PortfolioItem.find({ portfolioUrl: req.query.portfolioUrl }, (err, result) => {
			if (err) return res.status(400).json({
				type: "get-portfolio-item",
				status: "error",
				payload: "internal server error"
			});
			if (!result) return res.json({
				type: "get-portfolio-item",
				status: "success",
				payload: {}
			});

			return res.json({
				type: "get-portfolio-item",
				status: "success",
				payload: result
			});

		});
	});

	server.get("/portfolio-item/:portfolioUrl", (req, res) => {
		return app.render(req, res, "/portfolio-item", { portfolioUrl: req.params.portfolioUrl });
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.use((err, req, res, next) => {
		const statusCode = err.statusCode || 500;
		res.status(statusCode).json({
			type: "error",
			message: err.message
		});
	});

	server.listen(PORT, err => {
		if (err) throw err;
		console.log("Server is ready on port: " + PORT);
	});
});