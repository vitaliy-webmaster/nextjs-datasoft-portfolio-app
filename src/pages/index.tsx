import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import PortfolioSection from '~/components/PortfolioSection';
import { API_URL } from '~/constants/API_URL';

interface MainProps {
  portfolioData: any;
}

const Main: NextPage<MainProps> = ({ portfolioData }) => {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
      </Head>
      <main>
        <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          unmountOnExit={true}
          classNames="photo-box"
        >
          <div className="agency-container container">
            <div className="agency">
              <div className="agency-inner  col-sm-offset-3 col-sm-6 col-md-offset-0 col-md-4 col-lg-offset-1">
                <div className="row">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/my_photo_1x.webp 1x, /images/my_photo_2x.webp 2x"
                    />
                    <img
                      className="img-thumbnail"
                      src="/images/my_photo_1x.jpg"
                      srcSet="/images/my_photo_2x.jpg 2x"
                      alt="My Photo"
                    />
                  </picture>
                </div>
              </div>
              <div className="history-cite-box col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-6 col-lg-5">
                <div className="row">
                  <div className="section-title">
                    <span>About me</span>
                  </div>
                  <p>
                    Hello!
                    <br /> I'm Vitaliy, passionate web programmer with more than 3 years of
                    experience as a React Javascript Developer.
                    <br /> On this website I want to tell you about my career story.
                  </p>
                  <Link className="btn grey animsition-link" href="/career">
                    <span>
                      Read More
                      <span className="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <span className="white">Skills</span>
                <p className="white">WEB-developer skills (Front-End, Back-End, DevOps)</p>
              </div>
            </div>
            <div className="services-bg row">
              <div className="services-bg-overlay" />
              <div className="col-md-12 col-md-offset-0 col-lg-8 col-sm-12 col-sm-offset-0 services-left wow fadeInUp">
                <div className="row">
                  <div className="category-bg col-md-offset-1 col-md-5 col-lg-offset-0 col-lg-6 col-sm-6">
                    <div className="row">
                      <i className="icon ion-ios-infinite-outline" />
                      <span className="open-sans-text uppercase service-title">Responsive UI</span>
                      <ul>
                        <li>HTML5, CSS3, JS, JQuery</li>
                        <li>Responsive interfaces</li>
                        <li>Cross-browser, valid markup</li>
                        <li>Flexbox, Grid, Media Queries</li>
                        <li>CSS Transitions & Animations</li>
                        <li>Material UI, Ant Design</li>
                        <li>Accessibility & PageSpeed</li>
                        <li>Google Analytics</li>
                      </ul>
                    </div>
                  </div>
                  <div className="category-bg col-md-offset-0 col-md-5 col-lg-offset-0 col-lg-6 col-sm-6">
                    <div className="row">
                      <i className="icon ion-ios-shuffle" />
                      <span className="open-sans-text uppercase service-title">ReactJS apps</span>
                      <ul>
                        <li>Typescript, ESNext Features</li>
                        <li>React SSR with NextJS</li>
                        <li>Context, Hooks, Patterns</li>
                        <li>Redux-Toolkit, Thunk, Saga</li>
                        <li>Formik, React-Hook-Form</li>
                        <li>Authorization & OAuth 2.0</li>
                        <li>Component Tests (Jest, Enzyme)</li>
                        <li>Integration & E2E (RTL, Cypress)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="category-bg col-md-offset-1 col-md-5 col-lg-offset-0 col-lg-6 col-sm-6">
                    <div className="row">
                      <i className="icon ion-ios-cart-outline" />
                      <span className="open-sans-text uppercase service-title">NodeJS API's</span>
                      <ul>
                        <li>Typescript, ESNext Features</li>
                        <li>REST API & GraphQL (Apollo)</li>
                        <li>Express, Passport etc.</li>
                        <li>MongoDB, PostgreSQL, Redis</li>
                        <li>Realtime apps via WebSockets</li>
                        <li>Authentication cookies & JWT</li>
                        <li>Docker & Kubernetes</li>
                        <li>AWS deployment (EC2, ECS, EKS)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="category-bg col-md-offset-0 col-md-5 col-lg-offset-0 col-lg-6 col-sm-6">
                    <div className="row">
                      <i className="icon ion-ios-settings" />
                      <span className="open-sans-text uppercase service-title">
                        DevOps & Infrastructure
                      </span>
                      <ul>
                        <li>Networking, Linux, Bash</li>
                        <li>CI/CD (GitHub Actions, Gitlab CI)</li>
                        <li>AWS deployment (EC2, ECS, EKS)</li>
                        <li>Terraform & Ansible</li>
                        <li>Eslint & Prettier</li>
                        <li>Webpack, Babel, Git</li>
                        <li>English Upper Intermediate</li>
                        <li>Fast touch keyboard typing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 visible-lg services-right wow fadeInUp">
                <div className="row">
                  <img src="/images/web-development-medium.png" alt="Services Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <PortfolioSection itemsData={portfolioData} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<MainProps> = async () => {
  let data: any = {};

  try {
    const response = await fetch(`${API_URL}/api/portfolio-items`);
    if (!response.ok) {
      throw new Error('Unsuccessfull server response');
    }
    data = await response.json();
  } catch (err: unknown) {
    console.error((err instanceof Error && err.message) || 'Error while fetching data');
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { portfolioData: data },
  };
};

export default Main;
