import React, { Component } from "react";
import Link from "next/link";

class PortfolioSection extends Component {

	componentDidMount() {
		// initialize isotope
		var container = jQuery(".portfolio_container");
		container.isotope({
			filter: "*"
		});

		jQuery(".portfolio_filter a").click(function () {
			jQuery(".portfolio_filter .active").removeClass("active");
			jQuery(this).addClass("active");

			var selector = jQuery(this).attr("data-filter");
			container.isotope({
				filter: selector,
				animationOptions: {
					duration: 500,
					animationEngine: "jquery"
				}
			});
			return false;
		});
	}

	render() {

		const portfolioItems = this.props.itemsData.map(item => {
			return (
				<div key={item._id} className={`col-md-6 single-work ${item.category}`}>
					<Link href={`/portfolio-item?portfolioUrl=${item.portfolioUrl}`} as={`/portfolio-item/${item.portfolioUrl}`}>
						<a className="portfolio_item work-grid wow fadeInUp animsition-link"
						>
							<img width="400" height="225"
									 src={item.previewImg}
									 className="attachment-400x225 size-400x225 wp-post-image" alt="" />
							<div className="portfolio_item_hover">
								<div className="item_info">
									<span>{item.title}</span>
									<em>click to view</em>
								</div>
							</div>
						</a>
					</Link>
				</div>
			);
		});

		return (
			<React.Fragment>
				<section className="portfolio-section">
					<div className="container">
						<div className="row">
							<div className="section-title">
								<span>Портфолио</span>
								<p>Галерея моих завершенных работ.</p>
							</div>
						</div>

						<div className="col-md-3">
							<div className="row categories-grid wow fadeInLeft">
								<span className="open-sans-text uppercase">Выберите категорию</span>

								<nav className="categories">
									<ul className="portfolio_filter">
										<li><a href="" className="active" data-filter="*">Все категории</a></li>
										<li><a href="" data-filter=".category-landing">Landing Page</a></li>
										<li><a href="" data-filter=".category-wordpress">WordPress</a></li>
									</ul>
								</nav>
							</div>
						</div>

						<div className="col-md-9">
							<div className="row portfolio_container">
								{portfolioItems}
							</div>
							{/* end row */}
						</div>
						{/* all works end */}
					</div>
					{/* end container */}
				</section>
				{/* end portfolio */}
			</React.Fragment>
		);
	}
}

export default PortfolioSection;