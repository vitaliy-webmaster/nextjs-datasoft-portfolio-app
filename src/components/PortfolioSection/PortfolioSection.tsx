import { FC, useEffect } from 'react';
import Link from 'next/link';

interface PortfolioSectionProps {
  itemsData: any[];
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ itemsData }) => {
  useEffect(() => {
    const filterSaved = localStorage.getItem('filter');
    setTimeout(() => {
      document.querySelector('.portfolio_filter .active')?.classList.remove('active');
      document
        .querySelector(".portfolio_filter a[data-filter='" + filterSaved + "']")
        ?.classList.add('active');
      jQuery('.portfolio_container').isotope({
        filter: filterSaved || '*',
      });

      document.querySelector('.portfolio_filter')?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        if (target.tagName.toLowerCase() === 'a') {
          event.preventDefault();
          document.querySelector('.portfolio_filter .active')?.classList.remove('active');
          target.classList.add('active');

          const selector = target.getAttribute('data-filter');
          localStorage.setItem('filter', selector || '*');
          jQuery('.portfolio_container').isotope({
            filter: selector,
            animationOptions: {
              duration: 1000,
              // animationEngine: "jquery"
            },
          });
        }
      });
    }, 500);
  }, []);

  const portfolioItems = itemsData.map((item) => {
    return (
      <div key={item._id} className={`col-md-6 single-work ${item.category}`}>
        <Link
          className="portfolio_item work-grid wow fadeInUp animsition-link"
          href={`/portfolio-item/${item.portfolioUrl}`}
        >
          <img
            width="400"
            height="225"
            src={item.previewImg}
            className="attachment-400x225 size-400x225 wp-post-image"
            alt=""
          />
          <div className="portfolio_item_hover">
            <div className="item_info">
              <span>{item.title}</span>
              <em>click to view</em>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <span>Portfolio</span>
              <p>Collection of completed projects</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row categories-grid wow fadeInLeft">
              <span className="open-sans-text uppercase">Choose the category</span>

              <nav className="categories">
                <ul className="portfolio_filter">
                  <li>
                    <a href="" className="active" data-filter="*">
                      All categories
                    </a>
                  </li>
                  <li>
                    <a href="" data-filter=".category-landing">
                      Landing Page
                    </a>
                  </li>
                  <li>
                    <a href="" data-filter=".category-react">
                      React / Next.JS
                    </a>
                  </li>
                  <li>
                    <a href="" data-filter=".category-mobile">
                      React-Native / Mobile
                    </a>
                  </li>
                  <li>
                    <a href="" data-filter=".category-cms">
                      WordPress / Drupal
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row portfolio_container">{portfolioItems}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
