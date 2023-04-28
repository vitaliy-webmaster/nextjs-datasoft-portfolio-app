import { NextPage } from 'next';
import Head from 'next/head';
import USPBox from '~/components/USPBox';

const Career: NextPage = () => {
  return (
    <>
      <Head>
        <title>Career</title>
      </Head>
      <main>
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <span>Career</span>
                <p>The story of developing a professional career</p>
              </div>
            </div>

            <div className="about-story">
              <p>
                My career path started building simple <strong>HTML</strong> websites while studying
                in university. Back then, I helped numerous offline businesses establish online
                presence in the Web and thereby achieve quick growth in their customer base.
                Although I developed websites as a part-time job, I gained valuable experience which
                trained me to recognize core business needs and implement the solutions on a tight
                deadline.
              </p>
              <p>
                After completing a university degree and working for a few years in IT-related
                industries I strongly determined my desire to pursue a career as a full-time web
                developer. My focus in web development had been on technologies such as{' '}
                <strong>HTML/CSS, JavaScript, NodeJS, and React</strong> which I decided to focus
                on. Thereafter, <strong>from 2018 to 2020</strong> I worked as a{' '}
                <strong>full-stack freelance developer</strong> and finished{' '}
                <strong>up to 15 small to medium sized projects</strong>. This experience has
                allowed me to ensure a deep understanding of best practices and to stay current with
                the latest trends and technologies in the field.
              </p>
              <p>
                Next two years <strong>from 2020 to 2022</strong> I have had a great opportunity to
                continue my career path working for <strong>Wezom</strong> company. Over this time,
                I have advanced from a middle-level to a senior-level developer and improved my
                confidence in implementing scalable, secure, and user-friendly web applications. The
                fast-paced working environment, which included a variety of projects was greatly
                beneficial for me and allowed me to broaden the skillset in different areas of
                full-stack development.
              </p>
              <p>
                In <strong>February 2022</strong> the whole country was plunged into a nightmare
                called war. At first it impacted my working and living conditions, but after taking
                time to regain my strength, I returned to hard work. As of now, I continue to
                develop websites on an ongoing basis helping clients to evolve their businesses and
                thereby to contribute to my country's efforts to overcome the enemy.
              </p>
            </div>
          </div>
        </section>
        <USPBox />
      </main>
    </>
  );
};

export default Career;
