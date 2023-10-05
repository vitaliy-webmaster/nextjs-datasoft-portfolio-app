import { NextPage } from 'next';
import Footer from '~/components/Footer';

const Error: NextPage = () => {
  return (
    <>
      <main>
        <div className="under-development-title">
          <img src="/images/warning.png" alt="404 error" />
          <p>Error 404 occurred - page not found!</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error;
