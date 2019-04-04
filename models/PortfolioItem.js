const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioItemSchema = new Schema({
	category: String,
	title: {
		type: String,
		required: true
	},
	portfolioUrl: {
		type: String
	},
	websiteUrl: {
		type: String
	},
	previewImg: String,
	fullscreenImgs: [String],
	description: {
		type: String,
		required: true
	},
	endDate: Date
}, { collection: "portfolioItems" });

module.exports = mongoose.model("PortfolioItem", portfolioItemSchema);