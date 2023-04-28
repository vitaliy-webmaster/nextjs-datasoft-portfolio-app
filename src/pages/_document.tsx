import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="freelancehunt" content="02a429747d2d25a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />

        <link href="/styles/vendor/bootstrap.min.css" rel="stylesheet" />
        <link href="/styles/vendor/bootstrap-theme.min.css" rel="stylesheet" />
        <link href="/styles/vendor/nprogress.css" rel="stylesheet" />
        <link href="/styles/vendor/vegas.min.css" rel="stylesheet" />
        <link href="/styles/style.css" rel="stylesheet" />

        <script src="/js/jquery-1.12.4.min.js" />
        <script src="/js/vegas.min.js" />
        <script src="/js/isotope.pkgd.min.js" />
      </Head>
      <body id="portfolio-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
