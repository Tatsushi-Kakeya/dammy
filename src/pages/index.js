import React from "react"
import { Link } from 'gatsby'
// import Image from "gatsby-image"
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
				<Link className="navbar-brand" to="index.html">FULLSPEED TECHNOLOGIES.inc</Link>
			</div>
		
			<div className="collapse navbar-collapse" id="custom-collapse">
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown"><Link to="/" className="dropdown-toggle" data-toggle="dropdown">Home</Link></li>
					<li><Link to="/">About</Link></li>
					<li className="dropdown"><Link to="/" className="dropdown-toggle" data-toggle="dropdown">Recruit</Link></li>
					<li className="dropdown"><Link to="/" className="dropdown-toggle" data-toggle="dropdown">Blog</Link></li>
					<li className="dropdown"><Link to="/" className="dropdown-toggle" data-toggle="dropdown">Features</Link></li>
					<li><Link to="/">Contact</Link></li>
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
											<li><Link to="#">Home</Link></li>
											<li><Link to="about.html">About</Link></li>
											<li><Link to="#">Portfolio</Link></li>
											<li><Link to="#">Blog</Link></li>
											<li><Link to="#">Features</Link></li>
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
	<div id="home" className="module-hero module-parallax module-fade module-full-height white-bg-30">
	<img src="./assets/images-fullspeed/oppotunities_2.png" alt="top" />
		<div className="hs-caption container">
			<div className="caption-content hm-drk">
				<div className="hs-title-size-4 font-alt m-b-30">
					Welcome to FULLSPEED
				</div>
			</div>
		</div>
	</div  >
	{/* <!-- /HOME --> */}
	<div>
		<h1>Our Story</h1>
		<h2>WHO WE ARE</h2>
		<p>
			Fullspeed Technologies Inc. is composed of Japanese and Filipino Software Developers collaborating to bring the<br/>
			best products to our customers. We are a product-based company and not just a project-based BPO company.
		</p>

		<h2>WHEN WE STARTED</h2>
		<p>
			Born from Fullspeed Inc., the biggest advertising technology and marketing company in Japan, the company was<br/>
			established in one of the most advanced area in the queen city of the South, Cebu, Philippines. It officially runs as<br/>
			a company in Cebu last January 9, 2017.Now, the company has gathered all the most talented engineers working<br/>
			to keep our customers and stakeholders satisfied.
		</p>
		<img src="./assets/images-fullspeed/ourstory_1.png" alt="Our story" />
		
		<h1>Vision and Mission</h1>
		<p>
			We, the Fullspeed Technologies Inc. Cebu team, live through our vision, “We create organizations and businesses that make people<br/>
			happy and the world borderless”. And we work along with our mission: “Beyond such borders as countries and organizations, We<br/>
			lead all businesses to be successful based on our technologies and business development skills. We pursue to create creative and<br/>
			high performance organizations that make all our stakeholders happy.”
		</p>
	 </div>


	 <div>
		 <h1>Our Services</h1>
		 <p>Over the years of being in the industry, we’ve made sure to have a lineup of services.</p>
	 </div>
	 <div>
		 <img src="./assets/images-fullspeed/Logomakr_4eJ66Y_e1519954970791.png" alt="Software Consulting" />
		 <h1>Software Consulting</h1>
		 <p>
			Implement Research & Development<br/>
			from the global perspective of<br/>
			Advertising Technology fields including<br/>
			Demand Side Platform, Video Advertising<br/>
			Network, Affiliate Service Provider<br/>
		</p>

		<img src="./assets/images-fullspeed/Logomakr_3sKOka_e1519955674880.png" alt="Digital Marketing" />
		 <h1>Digital Marketing</h1>
		 <p>
			Comprehensive digital marketing<br/>
			campany which is a consultant of SEO,<br/>
			SEM, and SMM and also a trading desk of<br/>
			Programmatic Advertising.<br/>
		</p>

		<img src="./assets/images-fullspeed/Logomakr_9hPily_e1519955689241.png" alt="Offshore Development Centre" />
		 <h1>Offshore Development Centre</h1>
		 <p>
			Our offshore development team are<br/>
			experienced in areas requiring<br/>
			advanced technologies such as ad<br/>
			technology. This team provides efficient<br/>
			service without sacrificing efficiency and<br/>
			quality. It is also characterized by direct<br/>
			communication using English.<br/>
		</p>
	 </div>
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
							<li><Link to="#" data-filter=".illustration" className="wow fadeInUp" data-wow-delay="0.2s">Sample</Link></li>
							<li><Link to="#" data-filter=".marketing" className="wow fadeInUp" data-wow-delay="0.4s">Sample</Link></li>
							<li><Link to="#" data-filter=".photography" className="wow fadeInUp" data-wow-delay="0.6s">Sample</Link></li>
							<li><Link to="#" data-filter=".webdesign" className="wow fadeInUp" data-wow-delay="0.8s">Sample</Link></li>
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