import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import './style.css';
import './cricket.css';
import './responsive.css';

const MatchLiveScore = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Videos</title>
            </Helmet>
            <Header />
            <section className="Navbar">
                <div className="primary-navigation">
                    <div className="nav-items">
                        <div className="secondary-navigation">
                            <div className="nav-group">
                                <div className="active-item">Cricket</div>
                                <div className="secondary-nav-items-indicator"></div>
                            </div>
                            <div className="secondary-nav-items">
                                <ul>
                                    <li> <Link to="cricket.php">Cricket</Link> </li>
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
                                    <li> <Link to="">Serie A </Link></li>
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
                                <li className="active"><Link to="/ipl">Home</Link> </li>
                                <li className=""><Link to="/ipl-schedule">Schedule</Link></li>
                                <li className=""><Link to="/points-table">Points Table</Link></li>
                                <li className=""><Link to="/orange-cap">Orange Cap</Link></li>
                                <li className=""><Link to="/ipl-purple-cap">Purple Cap</Link></li>
                                <li className=""><Link to="/stats">Stats</Link></li>
                                <li className=""><Link to="/teams-and-squads">Teams & Squads</Link></li>
                                <li className=""><Link to="/ipl-news">News</Link></li>
                                <li className=""><Link to="/ipl-result">Results</Link></li>
                                <li className=""><Link to="/videos">Videos</Link></li>
                                <li className=""><Link to="/live-score">Live Scores</Link></li>
                                <li className=""><Link to="/matches-live-score">Matches Live Scores</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="breadcrumb-container ipl-breadcrumb">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><Link to=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">Cricket News  <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">IPL 2023 Live Scores</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="hero-section">
            <div className="hero-container">
                <div className="wrapper-container">
                    <div className="hero-content">
                        <div className="left">
                            <div className="hero-h1-container d-block">
                                <h1 className="hero-h1">M0 Live Score, IPL 2023: MI won by six wickets in a last ball finish
                                </h1>
                                <div className="sports-author-text">
                                    <p>By <a href="">Cricfeel</a> | Last Modified Apr</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <div className="live-topic-box">
                                <div className="sticky-clamp-text">
                                    <p>
                                        CSK vs RR Live Score, IPL 2023, Match 17 Updates: After a game
                                        filled with ups and down, RR finally hold their nerves and win the
                                        game by a miniscule 3 runs! CSK were in the chase and almost
                                        pulled it off with Dhoni and Jadeja striking big in the final
                                        overs but it was Sandeep Sharma's brilliant death bowling that
                                        averted the victory for CSK. Ashwin and Chahal were fabulous in
                                        their spells and ensured that Rajasthan beat Chennai at their home
                                        after 15 years! Follow Cricfeel for CSK vs RR Live Score.
                                    </p>
                                </div>
                                <div className="mt-3 sticky-clamp-img">
                                    <img src="assets/images/img/ma_42_1681323545-1200.avif" alt="" />
                                </div>
                                <div className="division-section mt-3">
                                    <div className="topic-timestapm">
                                        <div className="outer-circle">
                                            <img src="assets/images/comment_icon_desktop.svg" alt="" />
                                        </div>
                                        <div className="real-time">
                                            <h6>
                                                23:53 (IST) <span>12 Apr 2023</span>
                                            </h6>
                                            <div className="topic-text00">
                                                <h4>Thank You</h4>
                                                <p>
                                                    Thank you for joining us in today's game, we hope you
                                                    enjoyed the encounter! Stay tuned to Cricfeel as we'll be
                                                    back with another IPL extravaganza tomorrow night!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="topic-timestapm">
                                        <div className="outer-circle">
                                            <img src="assets/images/comment_icon_desktop.svg" alt="" />
                                        </div>
                                        <div className="real-time">
                                            <h6>
                                                23:53 (IST) <span>12 Apr 2023</span>
                                            </h6>
                                            <div className="topic-text00">
                                                <h4>Player of the Match</h4>
                                                <p>
                                                    <b>Ravichandran Ashwin, Player of the Match:</b> I surprised
                                                    people I guess. That's a role given to me, we lost Sanju. i
                                                    am far better at judging my strengths, I take a few balls to
                                                    get going. Every batting innings, I am padded up from the
                                                    start. It's not an easy thing but it is good. I came off
                                                    with good Test form. I feel I am able to get good grip and
                                                    drop the ball at the right lengths. If I was not able to do
                                                    it in the last two years, I wouldn't be able to do it here.
                                                    Even if it is a failure, it willl be on my own terms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="topic-live-scorecard">
                                        <div className="topic-live-title">
                                            <h5>Live Score</h5>
                                        </div>
                                        <div className="topic-top-container">
                                            <div className="topic-live-teams mt-2">
                                                <div className="topic-left-teams">
                                                    <a href="">
                                                        <img
                                                            src="assets/images/b4510-16375673376001-1920.avif"
                                                            className="tl-img"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="">
                                                        <span>Rajistan Royals</span>
                                                    </a>
                                                </div>
                                                <div className="topic-team-scores">
                                                    <span>
                                                        175/8 <small>(20 ov)</small>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="topic-live-teams">
                                                <div className="topic-left-teams">
                                                    <a href="">
                                                        <img
                                                            src="assets/images/b6d04-16375627239327-1920.avif"
                                                            className="tl-img"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="">
                                                        <span>Chennai Super kings</span>
                                                    </a>
                                                </div>
                                                <div className="topic-team-scores">
                                                    <span>
                                                        172/6 <small>(20 ov)</small>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="topic-team-result-text">
                                                <span>Rajistan Royals won by 3 runs</span>
                                            </div>
                                        </div>
                                        <div className="topic-bottom-header">
                                            <a href="">
                                                Ball by Ball Commentary <i className="fa fa-angle-right" />{" "}
                                            </a>
                                            <a href="">
                                                Live Scorecard <i className="fa fa-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>

          
            <Footer />
        </>
    )
}

export default MatchLiveScore