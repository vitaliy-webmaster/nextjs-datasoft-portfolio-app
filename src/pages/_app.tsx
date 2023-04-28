import { Fragment, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NProgress from 'nprogress';
import { PageTransition } from 'next-page-transitions';

import Layout from '~/components/Layout';
import Footer from '~/components/Footer';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    // if ('scrollRestoration' in window.history) {
    //   window.history.scrollRestoration = 'manual';
    // }

    const handleRouteStart = () => {
      NProgress.start();
      document.getElementById('portfolio-body')?.classList.add('scroll-height-long');
    };

    const handleRouteDone = () => {
      NProgress.done();
      setTimeout(() => {
        document.getElementById('portfolio-body')?.classList.remove('scroll-height-long');
      }, 1500);
    };

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <PageTransition timeout={750} classNames="page-transition">
          <Fragment key={router.route}>
            <Component {...pageProps} />
            <Footer />
          </Fragment>
        </PageTransition>
      </Layout>
    </>
  );
}

export default MyApp;
