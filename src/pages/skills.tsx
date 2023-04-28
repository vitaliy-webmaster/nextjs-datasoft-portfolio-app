import { NextPage } from 'next';
import Head from 'next/head';
import USPBox from '~/components/USPBox';

const Skills: NextPage = () => {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <main>
        <section className="services-section">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <span>Skills</span>
                <p>Full-Stack web development and maintenance</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 about-one">
                <h3>HTML5, CSS3, JavaScript + JQuery, Bootstrap 3(4), WordPress</h3>
                <p>- верстка веб-страниц произвольного уровня сложности:</p>
                <p>
                  - адаптивность под любые размеры экранов с помощью CSS3 Media Queries, FlexBox и
                  Bootstrap 4(3)
                </p>
                <p>
                  - адаптация вашего лендинга под CMS WordPress с настройкой дополнительных плагинов
                  и установкой на хостинге, а также доработка существующих сайтов на CMS WordPress;
                </p>
                <p>- использование WP REST API и клиентской авторизации с помощью cookies и JWT;</p>
                <p>
                  - подключение аналитических сервисов (Google Analytics, Яндекс.Метрика), настройка
                  хостинга и домена и т.д
                </p>
              </div>

              <div className="col-md-6 about-two">
                <h3>ES6-ES8, NodeJS, ReactJS, SSR (NextJS), React-Native, Typescript</h3>
                <p>
                  - <strong>NodeJS:</strong> создание backend с использованием Express.js, REST,
                  Passport, Axios и других популярных пакетов;{' '}
                </p>
                <p>
                  - настройка клиентской аутентификации с помощью cookies и JWT; создание real-time
                  приложений (чатов) с применением WebSockets (Socket.io);
                </p>
                <p>- поддерживаемые базы данных: MongoDB (Mongoose), PostgreSQL, MySQL, Oracle;</p>
                <p>
                  - <strong>ReactJS:</strong> создание виджетов и SPA приложений с использованием
                  create-react-app, redux, redux-thunk, redux-saga, react-router, redux-form, formik
                  и др.;{' '}
                </p>
                <p>
                  - поддержка синтаксиса ES6-ES8 и Typescript, React Context, Hooks, Suspense, Lazy
                  Loading и др.;
                </p>
                <p>
                  - <strong>NextJS:</strong> разработка Server-Side Rendering приложений React'a с
                  целью SEO-оптимизации и ускорения первичной загрузки страницы;
                </p>
                <p>
                  - интеграция ReactJS приложений в ваш лендинг или CMS в виде виджетов или
                  отдельных страниц;
                </p>
                <p>
                  - <strong>React-Native:</strong> разработка IOS и Android приложений созданных с
                  помощью expo и react-native-cli;
                </p>
                <p>
                  - подключение Native Modules, использование React-Navigation для постраничной
                  навигации, Geolocation API, Maps, Camera и др.;
                </p>
                <p>
                  - поддержка анимаций в React-Native с помощью Animated and LayoutAnimation API;
                </p>
                <p>- сборка .apk и .ipa файлов, а также публикация приложений в AppStore;</p>
              </div>
            </div>
          </div>
        </section>

        <USPBox />
      </main>
    </>
  );
};

export default Skills;
