import { NextPage } from 'next';
import Footer from '~/components/Footer';

const Error: NextPage = () => {
  return (
    <>
      <main>
        <div className="under-development-title">
          <img src="/images/warning.png" alt="500 error" />
          <p>Server internal error occurred!</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error;
