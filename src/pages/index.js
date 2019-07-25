import React from "react"
import { Link } from 'gatsby'
import './assets/css/style.css'
import './assets/css/custom.css'

export default class IndexPage extends React.Component {
    render() {
        return (
            <div>
	{/* <!-- NAVIGATION --> */}
	<nav className="navbar navbar-custom navbar-fixed-top" >

			<div className="container">
		
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link className="navbar-brand" to="index.html">Insee</Link>
				</div>
		
				<div className="collapse navbar-collapse" id="custom-collapse">
		
					<ul className="nav navbar-nav navbar-right">
		
						<li className="dropdown">
							<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Home</Link>
							<ul className="dropdown-menu">
								<li><Link to="index.html">Image Parallax 1</Link></li>
								<li><Link to="index-2.html">Image Parallax 2</Link></li>
								<li><Link to="index-3.html">Slider Parallax 1</Link></li>
								<li><Link to="index-4.html">Slider Parallax 2</Link></li>
								<li><Link to="index-5.html">Text rotator 1</Link></li>
								<li><Link to="index-6.html">Text rotator 2</Link></li>
								<li><Link to="#">Video background 1 comming soon</Link></li>
								<li><Link to="#">Video background 2 comming soon</Link></li>
							</ul>
						</li>
		
						<li><Link to="about.html">About</Link></li>
		
						<li className="dropdown">
							<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Portfolio</Link>
							<ul className="dropdown-menu" role="menu">
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Boxed</Link>
									<ul className="dropdown-menu">
										<li><Link to="portfolio-boxed-col2.html">2 Columns</Link></li>
										<li><Link to="portfolio-boxed-col3.html">3 Columns</Link></li>
										<li><Link to="portfolio-boxed-col4.html">4 Columns</Link></li>
										<li><Link to="portfolio-boxed-hover-black.html">Hover Black</Link></li>
										<li><Link to="portfolio-boxed-hover-gradient.html">Hover Gradient</Link></li>
									</ul>
								</li>
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Boxed - Gutter</Link>
									<ul className="dropdown-menu">
										<li><Link to="portfolio-boxed-gutter-col2.html">2 Columns</Link></li>
										<li><Link to="portfolio-boxed-gutter-col3.html">3 Columns</Link></li>
										<li><Link to="portfolio-boxed-gutter-col4.html">4 Columns</Link></li>
										<li><Link to="portfolio-boxed-gutter-hover-black.html">Hover Black</Link></li>
										<li><Link to="portfolio-boxed-gutter-hover-gradient.html">Hover Gradient</Link></li>
									</ul>
								</li>
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Boxed - Masonry</Link>
									<ul className="dropdown-menu">
										<li><Link to="portfolio-boxed-masonry-col2.html">2 Columns</Link></li>
										<li><Link to="portfolio-boxed-masonry-col3.html">3 Columns</Link></li>
										<li><Link to="portfolio-boxed-masonry-col4.html">4 Columns</Link></li>
										<li><Link to="portfolio-boxed-masonry-hover-black.html">Hover Black</Link></li>
										<li><Link to="portfolio-boxed-masonry-hover-gradient.html">Hover Gradient</Link></li>
									</ul>
								</li>
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Wide</Link>
									<ul className="dropdown-menu">
										<li><Link to="portfolio-wide-col2.html">2 Columns</Link></li>
										<li><Link to="portfolio-wide-col3.html">3 Columns</Link></li>
										<li><Link to="portfolio-wide-col4.html">4 Columns</Link></li>
										<li><Link to="portfolio-wide-hover-black.html">Hover Black</Link></li>
										<li><Link to="portfolio-wide-hover-gradient.html">Hover Gradient</Link></li>
									</ul>
								</li>
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Wide - Gutter</Link>
									<ul className="dropdown-menu">
										<li><Link to="portfolio-wide-gutter-col2.html">2 Columns</Link></li>
										<li><Link to="portfolio-wide-gutter-col3.html">3 Columns</Link></li>
										<li><Link to="portfolio-wide-gutter-col4.html">4 Columns</Link></li>
										<li><Link to="portfolio-wide-gutter-hover-black.html">Hover Black</Link></li>
										<li><Link to="portfolio-wide-gutter-hover-gradient.html">Hover Gradient</Link></li>
									</ul>
								</li>
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Wide - Masonry</Link>
									<ul className="dropdown-menu">
										<li><Link to="portfolio-wide-masonry-col2.html">2 Columns</Link></li>
										<li><Link to="portfolio-wide-masonry-col3.html">3 Columns</Link></li>
										<li><Link to="portfolio-wide-masonry-col4.html">4 Columns</Link></li>
										<li><Link to="portfolio-wide-masonry-hover-black.html">Hover Black</Link></li>
										<li><Link to="portfolio-wide-masonry-hover-gradient.html">Hover Gradient</Link></li>
									</ul>
								</li>
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Single</Link>
									<ul className="dropdown-menu">
										<li><Link to="portfolio-single-1.html">Single 1</Link></li>
										<li><Link to="portfolio-single-2.html">Single 2</Link></li>
										<li><Link to="portfolio-single-3.html">Single 3</Link></li>
										<li><Link to="portfolio-single-4.html">Single 4</Link></li>
										<li><Link to="portfolio-single-5.html">Single 5</Link></li>
										<li><Link to="portfolio-single-6.html">Single 6</Link></li>
										<li><Link to="portfolio-single-7.html">Single 7</Link></li>
									</ul>
								</li>
		
							</ul>
						</li>
		
						<li className="dropdown">
							<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Blog</Link>
							<ul className="dropdown-menu" role="menu">
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Grid</Link>
									<ul className="dropdown-menu">
										<li><Link to="blog-grid-2col.html">2 Columns</Link></li>
										<li><Link to="blog-grid-3col.html">3 Columns</Link></li>
										<li><Link to="blog-grid-4col.html">4 Columns</Link></li>
									</ul>
								</li>
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Standart</Link>
									<ul className="dropdown-menu">
										<li><Link to="blog-standart-1.html">Standart 1</Link></li>
										<li><Link to="blog-standart-2.html">Standart 2</Link></li>
									</ul>
								</li>
		
								<li className="dropdown">
									<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Single</Link>
									<ul className="dropdown-menu">
										<li><Link to="blog-single.html">Single 1</Link></li>
										<li><Link to="blog-single-2.html">Single 2</Link></li>
									</ul>
								</li>
		
							</ul>
						</li>
		
						<li className="dropdown">
							<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Features</Link>
							<ul className="dropdown-menu" role="menu">
								<li><Link to="comp-alerts-wells.html"><i className="fa fa-bolt"></i> Alerts and Wells</Link></li>
								<li><Link to="comp-buttons.html"><i className="fa fa-link fa-sm"></i> Buttons</Link></li>
								<li><Link to="comp-collapses-tabs.html"><i className="fa fa-tasks"></i> Collapses &amp; Tabs</Link></li>
								<li><Link to="comp-content-box.html"><i className="fa fa-list-alt"></i> Contents Box</Link></li>
								<li><Link to="comp-forms.html"><i className="fa fa-check-square-o"></i> Forms</Link></li>
								<li><Link to="comp-icons.html"><i className="fa fa-star"></i> Icons</Link></li>
								<li><Link to="comp-progress-bars.html"><i className="fa fa-server"></i> Progress Bars</Link></li>
								<li><Link to="comp-typography.html"><i className="fa fa-font"></i> Typography</Link></li>
							</ul>
						</li>
		
						<li><Link to="contact.html">Contact</Link></li>
		
					</ul>
				</div>
		
			</div>
			
			{/* <!--[ MOBILE-MENU-AREA START ]-->  */}
			<div className="mobile-menu-area">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="mobile-area">
								<div className="mobile-menu">
									<nav id="mobile-nav">
										<ul>
											<li>
												<Link to="#">Home</Link>
												<ul>
													<li><Link to="index.html">Image Parallax 1</Link></li>
													<li><Link to="index-2.html">Image Parallax 2</Link></li>
													<li><Link to="index-3.html">Slider Parallax 1</Link></li>
													<li><Link to="index-4.html">Slider Parallax 2</Link></li>
													<li><Link to="index-5.html">Text rotator 1</Link></li>
													<li><Link to="index-6.html">Text rotator 2</Link></li>
													<li><Link to="#">Video background 1 comming soon</Link></li>
													<li><Link to="#">Video background 2 comming soon</Link></li>
												</ul>
											</li>
							
											<li><Link to="about.html">About</Link></li>
							
											<li>
												<Link to="#">Portfolio</Link>
												<ul>
													<li>
														<Link to="#">Boxed</Link>
														<ul>
															<li><Link to="portfolio-boxed-col2.html">2 Columns</Link></li>
															<li><Link to="portfolio-boxed-col3.html">3 Columns</Link></li>
															<li><Link to="portfolio-boxed-col4.html">4 Columns</Link></li>
															<li><Link to="portfolio-boxed-hover-black.html">Hover Black</Link></li>
															<li><Link to="portfolio-boxed-hover-gradient.html">Hover Gradient</Link></li>
														</ul>
													</li>
							
													<li>
														<Link to="#">Boxed - Gutter</Link>
														<ul>
															<li><Link to="portfolio-boxed-gutter-col2.html">2 Columns</Link></li>
															<li><Link to="portfolio-boxed-gutter-col3.html">3 Columns</Link></li>
															<li><Link to="portfolio-boxed-gutter-col4.html">4 Columns</Link></li>
															<li><Link to="portfolio-boxed-gutter-hover-black.html">Hover Black</Link></li>
															<li><Link to="portfolio-boxed-gutter-hover-gradient.html">Hover Gradient</Link></li>
														</ul>
													</li>
													<li>
														<Link to="#">Boxed - Masonry</Link>
														<ul>
															<li><Link to="portfolio-boxed-masonry-col2.html">2 Columns</Link></li>
															<li><Link to="portfolio-boxed-masonry-col3.html">3 Columns</Link></li>
															<li><Link to="portfolio-boxed-masonry-col4.html">4 Columns</Link></li>
															<li><Link to="portfolio-boxed-masonry-hover-black.html">Hover Black</Link></li>
															<li><Link to="portfolio-boxed-masonry-hover-gradient.html">Hover Gradient</Link></li>
														</ul>
													</li>
													<li>
														<Link to="#">Wide</Link>
														<ul>
															<li><Link to="portfolio-wide-col2.html">2 Columns</Link></li>
															<li><Link to="portfolio-wide-col3.html">3 Columns</Link></li>
															<li><Link to="portfolio-wide-col4.html">4 Columns</Link></li>
															<li><Link to="portfolio-wide-hover-black.html">Hover Black</Link></li>
															<li><Link to="portfolio-wide-hover-gradient.html">Hover Gradient</Link></li>
														</ul>
													</li>
							
													<li>
														<Link to="#">Wide - Gutter</Link>
														<ul>
															<li><Link to="portfolio-wide-gutter-col2.html">2 Columns</Link></li>
															<li><Link to="portfolio-wide-gutter-col3.html">3 Columns</Link></li>
															<li><Link to="portfolio-wide-gutter-col4.html">4 Columns</Link></li>
															<li><Link to="portfolio-wide-gutter-hover-black.html">Hover Black</Link></li>
															<li><Link to="portfolio-wide-gutter-hover-gradient.html">Hover Gradient</Link></li>
														</ul>
													</li>
							
													<li>
														<Link to="#">Wide - Masonry</Link>
														<ul>
															<li><Link to="portfolio-wide-masonry-col2.html">2 Columns</Link></li>
															<li><Link to="portfolio-wide-masonry-col3.html">3 Columns</Link></li>
															<li><Link to="portfolio-wide-masonry-col4.html">4 Columns</Link></li>
															<li><Link to="portfolio-wide-masonry-hover-black.html">Hover Black</Link></li>
															<li><Link to="portfolio-wide-masonry-hover-gradient.html">Hover Gradient</Link></li>
														</ul>
													</li>
							
													<li>
														<Link to="#">Single</Link>
														<ul>
															<li><Link to="portfolio-single-1.html">Single 1</Link></li>
															<li><Link to="portfolio-single-2.html">Single 2</Link></li>
															<li><Link to="portfolio-single-3.html">Single 3</Link></li>
															<li><Link to="portfolio-single-4.html">Single 4</Link></li>
															<li><Link to="portfolio-single-5.html">Single 5</Link></li>
															<li><Link to="portfolio-single-6.html">Single 6</Link></li>
															<li><Link to="portfolio-single-7.html">Single 7</Link></li>
														</ul>
													</li>
							
												</ul>
											</li>
							
											<li>
												<Link to="#">Blog</Link>
												<ul>
													<li>
														<Link to="#">Grid</Link>
														<ul>
															<li><Link to="blog-grid-2col.html">2 Columns</Link></li>
															<li><Link to="blog-grid-3col.html">3 Columns</Link></li>
															<li><Link to="blog-grid-4col.html">4 Columns</Link></li>
														</ul>
													</li>
													<li>
														<Link to="#">Standart</Link>
														<ul>
															<li><Link to="blog-standart-1.html">Standart 1</Link></li>
															<li><Link to="blog-standart-2.html">Standart 2</Link></li>
														</ul>
													</li>
													<li>
														<Link to="#">Single</Link>
														<ul>
															<li><Link to="blog-single.html">Single 1</Link></li>
															<li><Link to="blog-single-2.html">Single 2</Link></li>
														</ul>
													</li>
							
												</ul>
											</li>
											<li>
												<Link to="#">Features</Link>
												<ul>
													<li><Link to="comp-alerts-wells.html"><i className="fa fa-bolt"></i> Alerts and Wells</Link></li>
													<li><Link to="comp-buttons.html"><i className="fa fa-link fa-sm"></i> Buttons</Link></li>
													<li><Link to="comp-collapses-tabs.html"><i className="fa fa-tasks"></i> Collapses &amp; Tabs</Link></li>
													<li><Link to="comp-content-box.html"><i className="fa fa-list-alt"></i> Contents Box</Link></li>
													<li><Link to="comp-forms.html"><i className="fa fa-check-square-o"></i> Forms</Link></li>
													<li><Link to="comp-icons.html"><i className="fa fa-star"></i> Icons</Link></li>
													<li><Link to="comp-progress-bars.html"><i className="fa fa-server"></i> Progress Bars</Link></li>
													<li><Link to="comp-typography.html"><i className="fa fa-font"></i> Typography</Link></li>
												</ul>
											</li>
											<li><Link to="contact.html">Contact</Link></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--[ MOBILE-MENU-AREA END  ]-->	 */}
	</nav>
	{/* <!-- /NAVIGATION --> */}

	{/* <!-- HOME --> */}
	<div id="home" className="module-hero module-parallax module-fade module-full-height white-bg-30" data-background="assets/images/section-1.jpg">

		<div className="hs-caption container">
			<div className="caption-content hm-drk">
				<div className="hs-title-size-4 font-alt m-b-30">
					Welcome to Insee
				</div>
				<div className="hs-title-size-1 font-inc">
					A wonderful serenity has taken possession of my entire soul, like these<br/> sweet mornings of spring which I enjoy with my whole heart
				</div>
				<div className="sld-btn">
					<Link to="#">Contact Us </Link>
				</div>
			</div>
		</div>

	</div  >
	{/* <!-- /HOME --> */}

	{/* <!-- WRAPPER --> */}
	<div className="wrapper">

		{/* <!-- PORTFOLIO --> */}
		<div className="module-small p-t-80 p-b-80 p-t-sm-0 portfolio_area">

			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12">
						<div className="section-title">
							<h2>CASE STUDY</h2>
						</div>
					</div>
				</div>

				{/* <!-- PORTFOLIO FILTER --> */}
				<div className="row">
					<div className="col-sm-12">

						<ul id="filters" className="filter font-inc">
							<li><Link to="#" data-filter="*" className="current wow fadeInUp">All</Link></li>
							<li><Link to="#" data-filter=".illustration" className="wow fadeInUp" data-wow-delay="0.2s">Illustration</Link></li>
							<li><Link to="#" data-filter=".marketing" className="wow fadeInUp" data-wow-delay="0.4s">Marketing</Link></li>
							<li><Link to="#" data-filter=".photography" className="wow fadeInUp" data-wow-delay="0.6s">Photography</Link></li>
							<li><Link to="#" data-filter=".webdesign" className="wow fadeInUp" data-wow-delay="0.8s">Web Design</Link></li>
						</ul>

					</div>
				</div>
				{/* <!-- /PORTFOLIO FILTER --> */}
				<div className="row">
					<div className="col-sm-12">
						{/* <!-- PORTFOLIO LIST --> */}
						<ul id="works-grid" className="works-grid works-grid-masonry works-grid-gut works-grid-3 works-hover-w">

							{/* <!-- PORTFOLIO ITEM --> */}
							<li className="work-item illustration webdesign">
								<Link to="portfolio-single-1.html">
									<div className="work-image">
										<img src="assets/images/work-masonry-1.jpg" alt=""/>
									</div>
									<div className="work-caption ">
										<h3 className="work-title font-alt">Corporate Identity</h3>
										<div className="work-descr font-inc">
											Illustration
										</div>
									</div>
								</Link>
							</li>
							{/* <!-- /PORTFOLIO ITEM --> */}

							{/* <!-- PORTFOLIO ITEM --> */}
							<li className="work-item marketing photography">
								<Link to="portfolio-single-1.html">
									<div className="work-image">
										<img src="assets/images/work-2.jpg" alt=""/>
									</div>
									<div className="work-caption">
										<h3 className="work-title font-alt">Bag MockUp</h3>
										<div className="work-descr font-inc">
											Marketing
										</div>
									</div>
								</Link>
							</li>
							{/* <!-- /PORTFOLIO ITEM --> */}

							{/* <!-- PORTFOLIO ITEM --> */}
							<li className="work-item illustration photography">
								<Link to="portfolio-single-1.html">
									<div className="work-image">
										<img src="assets/images/work-3.jpg" alt=""/>
									</div>
									<div className="work-caption">
										<h3 className="work-title font-alt">Disk Cover</h3>
										<div className="work-descr font-inc">
											Illustration
										</div>
									</div>
								</Link>
							</li>
							{/* <!-- /PORTFOLIO ITEM --> */}

							{/* <!-- PORTFOLIO ITEM --> */}
							<li className="work-item marketing photography">
								<Link to="portfolio-single-1.html">
									<div className="work-image">
										<img src="assets/images/work-4.jpg" alt=""/>
									</div>
									<div className="work-caption">
										<h3 className="work-title font-alt">Business Card</h3>
										<div className="work-descr font-inc">
											Photography
										</div>
									</div>
								</Link>
							</li>
							{/* <!-- /PORTFOLIO ITEM --> */}

							{/* <!-- PORTFOLIO ITEM --> */}
							<li className="work-item illustration webdesign">
								<Link to="portfolio-single-1.html">
									<div className="work-image">
										<img src="assets/images/work-masonry-2.jpg" alt=""/>
									</div>
									<div className="work-caption">
										<h3 className="work-title font-alt">knife and fork</h3>
										<div className="work-descr font-inc">
											Webdesign
										</div>
									</div>
								</Link>
							</li>
							{/* <!-- /PORTFOLIO ITEM --> */}

							{/* <!-- PORTFOLIO ITEM --> */}
							<li className="work-item marketing webdesign">
								<Link to="portfolio-single-1.html">
									<div className="work-image">
										<img src="assets/images/work-6.jpg" alt=""/>
									</div>
									<div className="work-caption">
										<h3 className="work-title font-alt">Mobile Phone </h3>
										<div className="work-descr font-inc">
											Marketing
										</div>
									</div>
								</Link>
							</li>
							{/* <!-- /PORTFOLIO ITEM --> */}

							{/* <!-- PORTFOLIO ITEM --> */}
							<li className="work-item marketing webdesign">
								<Link to="portfolio-single-1.html">
									<div className="work-image">
										<img src="assets/images/work-7.jpg" alt=""/>
									</div>
									<div className="work-caption">
										<h3 className="work-title font-alt">Business Cards</h3>
										<div className="work-descr font-inc">
											Marketing
										</div>
									</div>
								</Link>
							</li>
							{/* <!-- /PORTFOLIO ITEM --> */}
						</ul>
						{/* <!-- /PORTFOLIO LIST --> */}
						<div className="sld-btn-more">
							<div className="sld-btn">
								<Link to="#"> Show More </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
		{/* <!-- /PORTFOLIO --> */}

		{/* <!-- Home Blog --> */}
		<div className="module p-b-0 home_blog_area home_blog_areas">

			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12">
						<div className="section-title">
							<h2>our journal</h2>
						</div>
					</div>
				</div>

				<div className="row multi-columns-row post-columns">
					{/* <!-- POST ITEM --> */}
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="post">
							<div className="post-thumbnail">
								<Link to="blog-single.html"><img src="assets/images/post-4.jpg" alt=""/></Link>
							</div>
							<div className="post-header">
								<h2 className="post-title font-alt"><Link to="blog-single.html">Our trip to the Alps</Link></h2>
								<div className="post-meta font-inc">
									By <Link to="#">Michael Goodman</Link> | 31 DEC 2019
								</div>
							</div>
							<div className="post-entry">
								<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
							</div>
							<div className="post-more font-inc">
								<Link to="blog-single.html" className="more-link">Read more</Link>
							</div>
						</div>
					</div>
					{/* <!-- /POST ITEM --> */}

					{/* <!-- POST ITEM --> */}
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="post">
							<div className="post-thumbnail">
								<div className="post_video">
									<iframe src="https://player.vimeo.com/video/123234110?title=0&byline=0&portrait=0" width="640" height="370"  allowFullScreen></iframe>
								</div>
							</div>
							<div className="post-header">
								<h2 className="post-title font-alt"><Link to="blog-single.html">Shore after the tide</Link></h2>
								<div className="post-meta font-inc">
									By <Link to="#">Michael </Link> | 25 DEC 2019
								</div>
							</div>
							<div className="post-entry">
								<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
							</div>
							<div className="post-more font-inc">
								<Link to="blog-single.html" className="more-link">Read more</Link>
							</div>
						</div>
					</div>
					{/* <!-- /POST ITEM --> */}

					{/* <!-- POST ITEM --> */}
					<div className="col-sm-6 col-md-4 col-lg-4">
						<div className="post">
							<div className="post-thumbnail">
								<Link to="blog-single.html"><img src="assets/images/post-6.jpg" alt=""/></Link>
							</div>
							<div className="post-header">
								<h2 className="post-title font-alt"><Link to="blog-single.html">We in New Zealand</Link></h2>
								<div className="post-meta font-inc">
									By <Link to="#">Michael Good</Link> | 22 DEC 2019
								</div>
							</div>
							<div className="post-entry">
								<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
							</div>
							<div className="post-more font-inc">
								<Link to="blog-single.html" className="more-link">Read more</Link>
							</div>
						</div>
					</div>
					{/* <!-- /POST ITEM --> */}
				</div>
			</div>
		</div >
		{/* <!--/ Home Blog --> */}
		
		{/* <!-- CONTACT --> */}
		<div className="module-small">
			<div className="container">
				<div className="row">
					{/* <!-- CONTENT BOX --> */}
					<div className="col-sm-4">
						<div className="content-box">
							<div className="content-box-icon">
								<span className="icon-map-pin"></span>
							</div>
							<div className="content-box-title font-inc">
								 Los Angeles, CA 69, US
							</div>
						</div>
					</div>
					{/* <!-- /CONTENT BOX --> */}
		
					{/* <!-- CONTENT BOX --> */}
					<div className="col-sm-4">
						<div className="content-box">
							<div className="content-box-icon">
								<span className="icon-phone"></span>
							</div>
							<div className="content-box-title font-inc">
								+1 234 567 89 00
							</div>
						</div>
					</div>
					{/* <!-- /CONTENT BOX --> */}
		
					{/* <!-- CONTENT BOX --> */}
					<div className="col-sm-4">
						<div className="content-box">
							<div className="content-box-icon">
								<span className="icon-envelope"></span>
							</div>
							<div className="content-box-title font-inc">
								Insee@email.com
							</div>
						</div>
					</div>
					{/* <!-- /CONTENT BOX --> */}
				</div>
			</div>
		</div >
		{/* <!-- /CONTACT --> */}

		{/* <!-- FOOTER --> */}
		{/* <!-- Main content area end --> */}
		<footer className="footer-area">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-6">
						<div className="copy-right">
							<p>All &copy; reserved <Link to="#" target="_blank">Insee</Link></p>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="social-bookmark-wrapper">
							<ul className="social-bookmark-wrapper">
								<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
								<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
								<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
								<li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
								<li><Link to="#"><i className="fa fa-dribbble"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
		{/* <!-- /FOOTER --> */}

	</div>
	{/* <!-- /WRAPPER --> */}

	{/* <!-- Scroll-up --> */}
	<div className="scroll-up">
		<Link to="#totop"><i className="fa fa-angle-double-up"></i></Link>
	</div>
	{/* <!-- Javascript files --> */}
            </div>
        );
    }
}

