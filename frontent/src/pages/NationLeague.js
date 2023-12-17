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
        items: 5
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
const responsive2 = {
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

const NationLeague = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Nation League</title>
            </Helmet>
            <Header />
            <section className="Navbar">
                <div className="primary-navigation">
                    <div className="nav-items">
                        <div className="secondary-navigation">
                            <div className="nav-group">
                                <div className="active-item">Nation League</div>
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
                            <li><Link to=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">Football <i class="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">UEFA Nations League 2022-23 </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="mr-none">
                <div className="container">
                    <div className="tabbedPanels CustomContainer leaqueContain">
                       <Carousel responsive={responsive} className='for-button-class'> 
                            {/* Box Start */}
                            <div className="item">
                                <a href="" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding PremierPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Round 50</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img
                                                            src="assets/images/flag/manchester-city.webp"
                                                            alt=""
                                                        />{" "}
                                                        <span>MCI</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">2</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img src="assets/images/flag/liverpool.webp" alt="" />{" "}
                                                        <span className="least-team"> LIV</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">1</div>
                                                </div>
                                                <div className="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                             {/* Box Start */}
                             <div className="item">
                                <a href="" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding PremierPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Round 50</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img
                                                            src="assets/images/flag/manchester-city.webp"
                                                            alt=""
                                                        />{" "}
                                                        <span>MCI</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">2</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img src="assets/images/flag/liverpool.webp" alt="" />{" "}
                                                        <span className="least-team"> LIV</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">1</div>
                                                </div>
                                                <div className="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                             {/* Box Start */}
                             <div className="item">
                                <a href="" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding PremierPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Round 50</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img
                                                            src="assets/images/flag/manchester-city.webp"
                                                            alt=""
                                                        />{" "}
                                                        <span>MCI</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">2</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img src="assets/images/flag/liverpool.webp" alt="" />{" "}
                                                        <span className="least-team"> LIV</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">1</div>
                                                </div>
                                                <div className="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                             {/* Box Start */}
                             <div className="item">
                                <a href="" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding PremierPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Round 50</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img
                                                            src="assets/images/flag/manchester-city.webp"
                                                            alt=""
                                                        />{" "}
                                                        <span>MCI</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">2</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img src="assets/images/flag/liverpool.webp" alt="" />{" "}
                                                        <span className="least-team"> LIV</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">1</div>
                                                </div>
                                                <div className="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                             {/* Box Start */}
                             <div className="item">
                                <a href="" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding PremierPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Round 50</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img
                                                            src="assets/images/flag/manchester-city.webp"
                                                            alt=""
                                                        />{" "}
                                                        <span>MCI</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">2</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img src="assets/images/flag/liverpool.webp" alt="" />{" "}
                                                        <span className="least-team"> LIV</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">1</div>
                                                </div>
                                                <div className="live keeda-descript keed-pre-desc">
                                                    <span>Ft</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                             {/* Box Start */}
                             <div className="item">
                                <a href="" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding PremierPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Round 50</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img
                                                            src="assets/images/flag/manchester-city.webp"
                                                            alt=""
                                                        />{" "}
                                                        <span>MCI</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">2</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags PLeage">
                                                        <img src="assets/images/flag/liverpool.webp" alt="" />{" "}
                                                        <span className="least-team"> LIV</span>
                                                    </div>
                                                    <div className="keeda-scoreBoard">1</div>
                                                </div>
                                                <div className="live keeda-descript keed-pre-desc">
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
                        <h2>UEFA Nations League 2022-23</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img
                                            src="assets/images/img/66a6f-16723165283608-1920.avif"
                                            alt="Viral"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                Russia prepared to leave UEFA and join Asian Football
                                                Confederation: Reports
                                            </div>
                                        </div>
                                    </a>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="football-details-news.php">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/a33e8-16644699912286-1920.avif"
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
                                                    src="assets/images/img/a33e8-16644699912286-1920.avif"
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
                                        <h4>UEFA Champions League Videos</h4>
                                        <a href="">
                                            View All <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                    <Carousel responsive={responsive2} className='for-button-class'> 
                                        <div className="item">
                                            <div className="feed-carousel-item">
                                                <a
                                                    href=""
                                                    className="item-cta"
                                                    aria-label="video carousel item"
                                                />
                                                <div className="thumbnail">
                                                    <img
                                                        width={220}
                                                        height={130}
                                                        alt="Spurs vs Manchester "
                                                        src="assets/images/img/6e936-15601181440568-800.jpg"
                                                        className="lazy-img-bg"
                                                    />
                                                    <div className="meta-duration-container">
                                                        <div className="meta-duration">0:50</div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="title">
                                                        UEFA Nations League: Portugal vs Netherlands Review{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="feed-carousel-item">
                                                <a
                                                    href=""
                                                    className="item-cta"
                                                    aria-label="video carousel item"
                                                />
                                                <div className="thumbnail">
                                                    <img
                                                        width={220}
                                                        height={130}
                                                        alt="Spurs vs Manchester "
                                                        src="assets/images/img/6e936-15601181440568-800.jpg"
                                                        className="lazy-img-bg"
                                                    />
                                                    <div className="meta-duration-container">
                                                        <div className="meta-duration">0:50</div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="title">
                                                        UEFA Nations League: Portugal vs Netherlands Review{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="feed-carousel-item">
                                                <a
                                                    href=""
                                                    className="item-cta"
                                                    aria-label="video carousel item"
                                                />
                                                <div className="thumbnail">
                                                    <img
                                                        width={220}
                                                        height={130}
                                                        alt="Spurs vs Manchester "
                                                        src="assets/images/img/6e936-15601181440568-800.jpg"
                                                        className="lazy-img-bg"
                                                    />
                                                    <div className="meta-duration-container">
                                                        <div className="meta-duration">0:50</div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="title">
                                                        UEFA Nations League: Portugal vs Netherlands Review{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="feed-carousel-item">
                                                <a
                                                    href=""
                                                    className="item-cta"
                                                    aria-label="video carousel item"
                                                />
                                                <div className="thumbnail">
                                                    <img
                                                        width={220}
                                                        height={130}
                                                        alt="Spurs vs Manchester "
                                                        src="assets/images/img/6e936-15601181440568-800.jpg"
                                                        className="lazy-img-bg"
                                                    />
                                                    <div className="meta-duration-container">
                                                        <div className="meta-duration">0:50</div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="title">
                                                        UEFA Nations League: Portugal vs Netherlands Review{" "}
                                                    </div>
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
                                            src="assets/images/img/de20e-16643871429366-1920.avif"
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
                                    <div className="more-news">
                                        <a href="" className="view-more-cta">
                                            More UEFA Champions League News
                                        </a>
                                    </div>
                                </div>
                            </section>
                            <section className="feed-section first-border-section">
                                <div className="keeda_champoin">
                                    <div className="panel-header">
                                        <h4>About UEFA Nations League 2022-23</h4>
                                    </div>
                                    <div className="page-seo-content">
                                        <div className="cms-content">
                                            <h4>UEFA Nations League</h4> <br />
                                            <p>
                                                The European Cup was reformed into the UEFA Champions League
                                                in the year 1992 and since then, it’s been the biggest Cup
                                                competition in European club football. The UEFA Champions
                                                League (abbreviated as UCL) is an annual club football
                                                competition organised by the Union of European Football
                                                Associations (UEFA) and contested by European clubs of the
                                                top division. It is considered as one of the most
                                                prestigious football tournaments in the world and the most
                                                prestigious club competition in European football.{" "}
                                            </p>
                                            <img
                                                src="assets/images/img/e56c6-16561526058359-1920.avif"
                                                style={{ width: "100%" }}
                                                alt=""
                                            />
                                            <br /> <br />
                                            <br />
                                            <p>
                                                From the 2017-18 season, the Premier League,{" "}
                                                <a href="">Bundesliga, Serie A, La Liga</a> will be
                                                represented by four sides in the Champions League. Prior to
                                                the changed allotments, only the Premier, Bundesliga and the
                                                La Liga were allotted four slots.
                                            </p>
                                            <br /> <br />
                                            <h5>Champions League 2021-22</h5>
                                            <img
                                                src="assets/images/img/42ca6-16541064964053-1920.avif"
                                                style={{ width: "100%" }}
                                                alt=""
                                            />
                                            <span>Enter caption</span>
                                            <br /> <br />
                                            <p>
                                                Spanish super giants Real Madrid were crowned as the
                                                champions of Europe when they defeated English side
                                                Liverpool in the UCL finals. This was Madrid's 14th
                                                Champions League victory and the whole Madrid celebrated
                                                enormously. Los Blancos defeated Liverpool 1-0, thanks to a
                                                great team play which was finished by Brazilian wonderkid,
                                                Vinicius Junior.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <section
                                className="latest-popular-news-section"
                                style={{ height: 500 }}
                            >
                                <div className="panel-header">
                                    <h4>Latest News</h4>
                                </div>
                                <div className="panel-body">
                                    <div className="newtabContent">
                                        <a className="newAnchorTag" href="#">
                                            <div className="news-index">1</div>
                                            <div className="news-title-container">
                                                <div className="news-detail">
                                                    “He’s back smiling” – Trent Alexander-Arnold offers
                                                    positive update on ‘exciting’ Liverpool star
                                                </div>
                                            </div>
                                        </a>
                                        <a className="newAnchorTag" href="#">
                                            <div className="news-index">2</div>
                                            <div className="news-title-container">
                                                <div className="news-detail">
                                                    “He’s back smiling” – Trent Alexander-Arnold offers
                                                    positive update on ‘exciting’ Liverpool star
                                                </div>
                                            </div>
                                        </a>
                                        <a className="newAnchorTag" href="#">
                                            <div className="news-index">3</div>
                                            <div className="news-title-container">
                                                <div className="news-detail">
                                                    “He’s back smiling” – Trent Alexander-Arnold offers
                                                    positive update on ‘exciting’ Liverpool star
                                                </div>
                                            </div>
                                        </a>
                                        <a className="newAnchorTag" href="#">
                                            <div className="news-index">4</div>
                                            <div className="news-title-container">
                                                <div className="news-detail">
                                                    “He’s back smiling” – Trent Alexander-Arnold offers
                                                    positive update on ‘exciting’ Liverpool star
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
             

            <Footer />
        </>
    )
}

export default NationLeague