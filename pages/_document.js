import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" type="image/x-icon"
							href="/static/images/favicon.ico" />
				<link href="/static/styles/vendor/bootstrap.min.css" rel="stylesheet" />
				<link href="/static/styles/vendor/bootstrap-theme.min.css" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&amp;subset=cyrillic"
							rel="stylesheet" />
				<link rel="stylesheet" href="/static/styles/vendor/nprogress.css" />
				<link href="/static/styles/vendor/vegas.min.css" rel="stylesheet" />
				<link href="/static/styles/style.css" rel="stylesheet" />
				<script src="/static/js/jquery-1.12.4.min.js" type="text/javascript" />
				<script src="/static/js/vegas.min.js" type="text/javascript" />
				<script src="/static/js/isotope.pkgd.min.js" type="text/javascript" />
			</Head>
			<body id="portfolio-body">
			<Main />
			<NextScript />
			</body>
			</Html>
		);
	}
}

export default MyDocument;