import { NextPage } from 'next';
import Head from 'next/head';
import USPBox from '~/components/USPBox';

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <main>
        <section className="page-contacts-section">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <span>Contacts</span>
                <p>My contact information for your needs</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 wow fadeInUp contacts-box-left">
                <p>
                  <span>Kyiv city, Ukraine</span>
                </p>
                <p>
                  skype: <span>vvchernyshenko</span> <small>(without live: prefix)</small>
                </p>
                <p>
                  telegram:{' '}
                  <span>
                    <a href="https://t.me/vchernyshenko">t.me/vchernyshenko</a>
                  </span>
                </p>

                <p>
                  facebook:{' '}
                  <span>
                    <a href="https://www.facebook.com/vvchernyshenko">
                      www.facebook.com/vvchernyshenko
                    </a>
                  </span>
                </p>
                <p>
                  e-mail:{' '}
                  <span>
                    vitaliy.webmaster<span className="domain">gmail.com</span>
                  </span>
                </p>
              </div>

              <div
                className="col-md-6 visible-md visible-lg wow fadeInUp services-box-right"
                data-wow-delay=".1s"
              >
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/services_1x.png 1x, /images/services_2x.png 2x, /images/services_3x.png 3x"
                  />
                  <img
                    src="/images/services_1x.png"
                    srcSet="/images/services_2x.png 2x, /images/services_3x.png 3x"
                    alt="Decorative image"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>
        <USPBox />
      </main>
    </>
  );
};

export default Contacts;
