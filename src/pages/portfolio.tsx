import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import PortfolioSection from '~/components/PortfolioSection';
import { API_URL } from '~/constants/API_URL';

interface PortfolioProps {
  portfolioData: any;
}

const Portfolio: NextPage<PortfolioProps> = ({ portfolioData }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <main className="portfolio-page">
        <PortfolioSection itemsData={portfolioData} />
      </main>
    </>
  );
};

export const getServerSideProps: GetStaticProps<PortfolioProps> = async () => {
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

export default Portfolio;
