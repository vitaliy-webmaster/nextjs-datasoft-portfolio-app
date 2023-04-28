import Link from 'next/link';
import FooterForm from './Form';

const Footer: React.FC = () => {
  return (
    <>
      <section className="blue-section wow fadeInUp" style={{ padding: '50px 0' }}>
        <div className="blue-section-bg-overlay" />
        <div className="container">
          <div className="col-md-5 col-sm-12 blue-section-text-box">
            <div className="row">
              <span className="white-text open-sans-text footer-header-text">
                Any suggestions for cooperation? <br /> <br /> Send me a message - and <br />
                we will surely discuss them.
              </span>
            </div>
          </div>

          <div className="col-md-offset-1 col-md-6  col-sm-offset-2 col-sm-8">
            <div className="row">
              <div className="white-section" style={{ padding: '20px' }}>
                <div className="feedback-header open-sans-text uppercase">Send message:</div>
                <p>Within 24 hours you will receive a response to the specified e-mail</p>
                <FooterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="main-footer wow fadeInUp">
        <div className="container">
          <div className="col-md-8 col-sm-12">
            <div className="row">
              <nav className="footer-nav">
                <ul id="menu-menu-2" className="menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item menu-item-13">
                    <Link className="animsition-link" href="/">
                      Main
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
                    <Link className="animsition-link" href="/career">
                      Career
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
                    <Link className="animsition-link" href="/skills">
                      Skills
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59">
                    <Link className="animsition-link" href="/portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57">
                    <Link className="animsition-link" href="/contacts">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-md-4 col-sm-12" style={{ textAlign: 'right' }}>
            <div className="row">
              <div className="gray-text">
                Development & Maintenance: Vitaliy Ch.
                <br /> &copy; {new Date().getFullYear()} All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
