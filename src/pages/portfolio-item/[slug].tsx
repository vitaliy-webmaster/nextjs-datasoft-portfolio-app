import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { API_URL } from '~/constants/API_URL';

interface PortfolioItemProps {
  portfolioItem: any;
}

const PortfolioItem: NextPage<PortfolioItemProps> = ({ portfolioItem }) => {
  // componentDidMount() {
  // 	window.history.scrollRestoration = "manual";
  // }

  return (
    <>
      <Head>
        <title>Portfolio Item</title>
      </Head>
      <main>
        <div className="container post-single-portfolio-item">
          <div className="row">
            <div className="page-header">
              <h1>{portfolioItem.title}</h1>
            </div>
            <p className="page-category">
              Категория: <b>{portfolioItem.category.split('-')[1].toUpperCase()}</b>
              <br />
              {portfolioItem.demoUrl && (
                <span>
                  Демо превью:{' '}
                  <b className="demo-preview-link">
                    <a target="_blank" href={portfolioItem.demoUrl}>
                      {portfolioItem.demoUrl}
                    </a>
                  </b>
                </span>
              )}
            </p>
            <hr />
            <div className="col-md-4 single-item-description">
              <p dangerouslySetInnerHTML={{ __html: portfolioItem.description }} />
            </div>
            <div className="col-md-offset-1 col-md-7 single-item-screenshot">
              {portfolioItem.fullscreenImgs.map((item: any, index: number) => {
                return <img key={index} src={item} alt="" />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<PortfolioItemProps> = async (context) => {
  const { params } = context;
  const slug = params?.slug;

  let data: any = {};

  try {
    if (!slug) throw new Error('No parameter was supplied for portfolio item URL');

    const response = await fetch(`${API_URL}/api/portfolio-item/${slug}`);

    if (!response.ok) {
      throw new Error(`Unsuccessfull server response while fetching ${slug} portfolio item`);
    }

    data = await response.json();
  } catch (err: unknown) {
    console.error((err instanceof Error && err.message) || 'Error while fetching data');
  }

  const portfolioItem = data.payload?.[0];

  if (!portfolioItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: { portfolioItem },
  };
};

export async function getStaticPaths() {
  let data: any = {};

  try {
    const response = await fetch(`${API_URL}/api/portfolio-items`);

    if (!response.ok) {
      throw new Error(`Unsuccessfull server response while fetching all portfolio items`);
    }

    data = await response.json();
  } catch (err: unknown) {
    console.error((err instanceof Error && err.message) || 'Error while fetching data');
  }

  if (!data) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  console.log('data', data);

  // const paths =
  // [{ params: { product: '1' } }, { params: { product: '2' } }]

  return {
    paths: [],
    fallback: false,
  };
}

// PortfolioItem.getInitialProps = async ({ query }: NextPageContext) => {
//   let data: any = {};
//
//   try {
//     const response = await fetch(
//       `${API_URL}/api/portfolio-item?portfolioUrl=${query.portfolioUrl}`,
//     );
//     data = await response.json();
//   } catch (event) {
//     console.error('Error while fetching data');
//   }
//
//   return { portfolioItem: data.payload?.[0] };
// };

export default PortfolioItem;
