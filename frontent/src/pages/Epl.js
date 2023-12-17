import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7 - 1.5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const responsives = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Epl = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Football Schedule</title>
            </Helmet>
            <Header />
            <section className="Navbar">
                <div className="primary-navigation">
                    <div className="nav-items">
                        <div className="secondary-navigation">
                            <div className="nav-group">
                                <div className="active-item">EPL</div>
                                <div className="secondary-nav-items-indicator"></div>
                            </div>
                            <div className="secondary-nav-items">
                                <ul>
                                    <li><Link to="/football">Football Home</Link> </li>
                                    <li><Link to="">Newsletters</Link></li>
                                    <li className="active"><Link to="">EPL</Link></li>
                                    <li><Link to="">Schedule</Link></li>
                                    <li><Link to="">FIFA WC</Link></li>
                                    <li><Link to="">Nations League</Link></li>
                                    <li><Link to="">La Liga</Link></li>
                                    <li><Link to="">Ligue 1</Link></li>
                                    <li><Link to="">Champions League</Link></li>
                                    <li><Link to="">MLS </Link></li>
                                    <li><Link to="">Bundesliga </Link></li>
                                    <li><Link to="">Serie A </Link></li>
                                    <li><Link to="">Netherlands vs USA live score</Link></li>
                                    <li><Link to="">Argentina vs Australia live score</Link></li>
                                    <li><Link to="">France vs Poland Live Score</Link></li>
                                    <li><Link to="">England vs Senegal Live Score</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="primary-nav-items">
                            <ul>
                                <li className="active"><Link to="/epl">Home</Link> </li>
                                <li className=""><Link to="/news">News</Link></li>
                                <li className=""><Link to="/clean-sheets">EPL Clean Sheets</Link></li>
                                <li className=""><Link to="/result">EPL Results</Link></li>
                                <li className=""><Link to="/plf">Premier League Fixtures</Link></li>
                                <li className=""><Link to="/standings">EPL Points Table 2022-23</Link></li>
                                <li className=""><Link to="/top-scorers">EPL Top Scorers</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="breadcrumb-container">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><a href=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></a></li>
                            <li><a href="">Football <i class="fa fa-angle-right"></i></a></li>
                            <li><a href="">EPL 2023 </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section class="mr-none">
                <div class="container">
                    <div class="tabbedPanels CustomContainer leaqueContain">
                        <Carousel responsive={responsive} className='for-button-class'>
                            <div class="item">
                                <a href="" class="keramasterBox">
                                    <div class="tabBox">
                                        <div class="tabBoxPadding PremierPadding">
                                            <div class="matchShedule">
                                                <span class="upcomingMatch">Round 50</span>
                                            </div>
                                            <div class="keeda-cricket-widget">
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/manchester-city.webp" alt="" /> <span>
                                                            MCI</span></div>
                                                    <div class="keeda-scoreBoard">2</div>
                                                </div>
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/liverpool.webp" alt="" /> <span
                                                            class="least-team"> LIV</span></div>
                                                    <div class="keeda-scoreBoard">1</div>
                                                </div>
                                                <div class="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="" class="keramasterBox">
                                    <div class="tabBox">
                                        <div class="tabBoxPadding PremierPadding">
                                            <div class="matchShedule">
                                                <span class="upcomingMatch">Round 50</span>
                                            </div>
                                            <div class="keeda-cricket-widget">
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/manchester-city.webp" alt="" /> <span>
                                                            MCI</span></div>
                                                    <div class="keeda-scoreBoard">2</div>
                                                </div>
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/liverpool.webp" alt="" /> <span
                                                            class="least-team"> LIV</span></div>
                                                    <div class="keeda-scoreBoard">1</div>
                                                </div>
                                                <div class="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="" class="keramasterBox">
                                    <div class="tabBox">
                                        <div class="tabBoxPadding PremierPadding">
                                            <div class="matchShedule">
                                                <span class="upcomingMatch">Round 50</span>
                                            </div>
                                            <div class="keeda-cricket-widget">
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/manchester-city.webp" alt="" /> <span>
                                                            MCI</span></div>
                                                    <div class="keeda-scoreBoard">2</div>
                                                </div>
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/liverpool.webp" alt="" /> <span
                                                            class="least-team"> LIV</span></div>
                                                    <div class="keeda-scoreBoard">1</div>
                                                </div>
                                                <div class="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="" class="keramasterBox">
                                    <div class="tabBox">
                                        <div class="tabBoxPadding PremierPadding">
                                            <div class="matchShedule">
                                                <span class="upcomingMatch">Round 50</span>
                                            </div>
                                            <div class="keeda-cricket-widget">
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/manchester-city.webp" alt="" /> <span>
                                                            MCI</span></div>
                                                    <div class="keeda-scoreBoard">2</div>
                                                </div>
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/liverpool.webp" alt="" /> <span
                                                            class="least-team"> LIV</span></div>
                                                    <div class="keeda-scoreBoard">1</div>
                                                </div>
                                                <div class="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="" class="keramasterBox">
                                    <div class="tabBox">
                                        <div class="tabBoxPadding PremierPadding">
                                            <div class="matchShedule">
                                                <span class="upcomingMatch">Round 50</span>
                                            </div>
                                            <div class="keeda-cricket-widget">
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/manchester-city.webp" alt="" /> <span>
                                                            MCI</span></div>
                                                    <div class="keeda-scoreBoard">2</div>
                                                </div>
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/liverpool.webp" alt="" /> <span
                                                            class="least-team"> LIV</span></div>
                                                    <div class="keeda-scoreBoard">1</div>
                                                </div>
                                                <div class="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="item">
                                <a href="" class="keramasterBox">
                                    <div class="tabBox">
                                        <div class="tabBoxPadding PremierPadding">
                                            <div class="matchShedule">
                                                <span class="upcomingMatch">Round 50</span>
                                            </div>
                                            <div class="keeda-cricket-widget">
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/manchester-city.webp" alt="" /> <span>
                                                            MCI</span></div>
                                                    <div class="keeda-scoreBoard">2</div>
                                                </div>
                                                <div class="keeda-series">
                                                    <div class="keedaFlags PLeage"><img
                                                        src="assets/images/flag/liverpool.webp" alt="" /> <span
                                                            class="least-team"> LIV</span></div>
                                                    <div class="keeda-scoreBoard">1</div>
                                                </div>
                                                <div class="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Carousel>

                    </div>
                </div>
            </section>
            <section className="mt-200">
                <div className="container CustomContainer">
                    <div className="heading">
                        <h2>EPL 2022-23</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img
                                            src="assets/images/img/cd824-16814218230785-1920.avif"
                                            alt="Viral"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                "Have problems finding the right words" - Manchester United's
                                                Marcel Sabitzer admits team conceded 'stupid goals' in 2-2
                                                draw against Sevilla
                                            </div>
                                        </div>
                                    </a>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="football-details-news.php">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/1ff20-16814057580753-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        Premier League club plotting move to sign Arsenal star
                                                        this summer - Reports
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="football-details-news.php">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/6bb03-16804243193121-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="football-details-news.php">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/6bb03-16804243193121-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                            {/* Video Section */}
                            <section className="feed-section first-border-section">
                                <div className="video-feed-container">
                                    <div className="video-feed-header">
                                        <h4>EPL Videos</h4>
                                        <a href=""> View All <i className="fa fa-angle-right" /> </a>
                                    </div>
                                    <Carousel responsive={responsives} className='for-button-class'>
                                        <div class="item">
                                            <div class="feed-carousel-item">
                                                <a href="" class="item-cta" aria-label="video carousel item"></a>
                                                <div class="thumbnail">
                                                    <img width="220" height="130" alt="Spurs vs Manchester "
                                                        src="assets/images/img/d0ac7-15472911690018-800.jpg"
                                                        class="lazy-img-bg"/>
                                                        <div class="meta-duration-container">
                                                            <div class="meta-duration">0:50</div>
                                                        </div>
                                                </div>
                                                <div class="content">
                                                    <div class="title">Spurs vs Manchester United Match Preview </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="feed-carousel-item">
                                                <a href="" class="item-cta" aria-label="video carousel item"></a>
                                                <div class="thumbnail">
                                                    <img width="220" height="130" alt="Spurs vs Manchester "
                                                        src="assets/images/img/d0ac7-15472911690018-800.jpg"
                                                        class="lazy-img-bg"/>
                                                        <div class="meta-duration-container">
                                                            <div class="meta-duration">0:50</div>
                                                        </div>
                                                </div>
                                                <div class="content">
                                                    <div class="title">Spurs vs Manchester United Match Preview </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="feed-carousel-item">
                                                <a href="" class="item-cta" aria-label="video carousel item"></a>
                                                <div class="thumbnail">
                                                    <img width="220" height="130" alt="Spurs vs Manchester "
                                                        src="assets/images/img/d0ac7-15472911690018-800.jpg"
                                                        class="lazy-img-bg"/>
                                                        <div class="meta-duration-container">
                                                            <div class="meta-duration">0:50</div>
                                                        </div>
                                                </div>
                                                <div class="content">
                                                    <div class="title">Spurs vs Manchester United Match Preview </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="feed-carousel-item">
                                                <a href="" class="item-cta" aria-label="video carousel item"></a>
                                                <div class="thumbnail">
                                                    <img width="220" height="130" alt="Spurs vs Manchester "
                                                        src="assets/images/img/d0ac7-15472911690018-800.jpg"
                                                        class="lazy-img-bg"/>
                                                        <div class="meta-duration-container">
                                                            <div class="meta-duration">0:50</div>
                                                        </div>
                                                </div>
                                                <div class="content">
                                                    <div class="title">Spurs vs Manchester United Match Preview </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </section>
                            {/* End Video Section */}
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img
                                            src="assets/images/img/5c55a-16804664755510-1920.avif"
                                            alt="Viral"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                {" "}
                                                Who is Bruno Saltor? Ex-Brighton man will take charge of
                                                Chelsea on interim basis after Graham Potter's sacking
                                            </div>
                                        </div>
                                    </a>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/1b800-16804564388478-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/c654f-16804642270580-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/6bb03-16804243193121-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/c654f-16804642270580-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                            <div className="pagination-container">
                                <span className="pagination-number disabled">Back</span>
                                <div className="pagination-numbers">
                                    <a className="pagination-number selected" href="?page=1">
                                        1
                                    </a>
                                    <a className="pagination-number " href="?#">
                                        2
                                    </a>
                                    <a className="pagination-number " href="#">
                                        3
                                    </a>
                                    <a className="pagination-number " href="#">
                                        4
                                    </a>
                                    <a className="pagination-number " href="#">
                                        5
                                    </a>
                                </div>
                                <a className="pagination-number" href="#">
                                    Next
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <section className="sportNewsSection" style={{ height: 500 }}></section>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Epl