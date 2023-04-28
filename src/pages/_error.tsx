import { NextPage, NextPageContext } from 'next';
import Footer from '~/components/Footer';

interface ErrorProps {
  statusCode?: number | null;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <>
      <main>
        <div className="under-development-title">
          <img src="/images/warning.png" alt="" />
          <p>
            {statusCode ? `Error ${statusCode} occurred on server` : 'Error occurred on client'}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
