import { React, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

const TennisSingle = () => {

    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    const getActiveClass = (index, className2) =>
      ToggleState === index ? className2 : "";

    return (
        <>
            <Helmet>
                <title>Cricfeel | Tennis Single Page</title>
            </Helmet>
            <Header />
            <section className="Navbar">
                <div className="primary-navigation">
                    <div className="nav-items">
                        <div className="secondary-navigation">
                            <div className="nav-group">
                                <div className="active-item" style={{ FontSize: '14px' }}>Morno</div>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="primary-nav-items">
                            <ul>
                                <li className="active"><Link to="/tennis">Home</Link> </li>
                                <li className=""><Link to="/news">News</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div class="breadcrumb-container">
                <div class="conatainer">
                    <div class="wrapper-container">
                        <ul>
                            <li><a href=""><i class="fa fa-home"></i> <i class="fa fa-angle-right"></i></a></li>
                            <li><a href="tennis">Tennis News <i class="fa fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="heading">
                        <h2>Tennis Single Page</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img
                                            src="assets/images/img/771cb-16817810392736-1920.avif"
                                            alt="Viral"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Minus ipsa quidem sed laboriosam, blanditiis praesentium
                                                inventore numquam,
                                            </div>
                                        </div>
                                    </a>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/3c51c-16816655264128-1920.avif"
                                                    alt="sdgs"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        Lorem Ispis diolhj jydasfsgx
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
                                                    src="assets/images/img/3c51c-16816655264128-1920.avif"
                                                    alt="sdg"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        Ravindra Jadeja's 3 best catches in the IPL
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
                                                    src="assets/images/img/3c51c-16816655264128-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img
                                            src="assets/images/img/56ece-16816172613317-1920.avif"
                                            alt="Viral"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                Ex-Brighton man will take charge of Chelsea on interim basis
                                                after Graham Potter's sacking
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
                                            More Tennis News
                                        </a>
                                    </div>
                                </div>
                            </section>
                            {/* About Section */}
                            <section className="feed-section first-border-section">
                                <div className="video-feed-container">
                                    <div className="video-feed-header">
                                        <h4>About Monte Carlo Masters 2023</h4>
                                    </div>
                                    <div className="page-seo-content">
                                        <div className="cms-content">
                                            <h5>Monte-Carlo Masters</h5> <br />
                                            <h5>About</h5>
                                            <p>
                                                The Monte-Carlo Masters is a clay-court event that usually
                                                takes place in April every year. While King of Clay Rafael
                                                Nadal will not compete, many top players such as Novak
                                                Djokovic, Stefanos Tsitsipas, Andrey Rublev, Casper Ruud and
                                                Daniil Medvedev will participate.
                                            </p>
                                            <div className="crms-moretext">
                                                <p>
                                                    Tsitsipas is the two-time defending champion at the men’s
                                                    singles event. He clinched the title last year by defeating
                                                    Alejandro Davidovich Fokina 6–3, 7–6(3) in the final. Rajeev
                                                    Ram and Joe Salisbury won the men's doubles title by beating
                                                    Juan Sebastian Cabal and Robert Farah in the final.
                                                </p>
                                                <p>
                                                    Every year, the last 3 teams on the table are relegated to
                                                    the English first division league and the top 3 teams from
                                                    the first division are promoted to the Premier League.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="read-more-cmd">
                             <a class="moreless-button" href="#">Read more</a>
                           </div> */}
                                </div>
                            </section>
                            {/* End About */}
                        </div>
                        <div className="col-lg-4">
                            <section className="sportNewsSection">
                                <ul className="sport-news">
                                    <li className={`tabs ${getActiveClass(1, "active")}`} onClick={() => toggleTab(1)}>
                                        Latest News 
                                    </li>
                                    <li className={`tabs ${getActiveClass(2, "active")}`} onClick={() => toggleTab(2)}>
                                        Most Popular
                                    </li>
                                </ul>
                                <div className="NewPanel">
                                    <div id="latestNews" className={`sport-news-panel ${getActiveClass(1, "active-content")}`}>
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
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">5</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers
                                                        positive update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="mostpopular" className={`sport-news-panel ${getActiveClass(2, "active-content")}`}>
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

export default TennisSingle