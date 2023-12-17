import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import './cricket.css';
import './responsive.css';

const Navbar = () => {
    return (
        <>
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
                                <div className="hero-h1-container">
                                    <h1 className="hero-h1">IPL 2023 Live Scores</h1>
                                </div>
                                <div className="hash-tagline">#IPL2023 is Live!</div>
                            </div>
                            <div className="right">
                                <div className="hero-img">
                                    <img width="463" height="263" alt="hero image" src="assets/images/img/desktop.webp"
                                        className="lazy-img-bg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar