import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

import './style.css';
import './cricket.css';
import './responsive.css';

const Teamsquade = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Team & Squads</title>
            </Helmet>
            <Header />
            <div className="breadcrumb-container bc-2 bc-holder">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><Link href=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link href="">Cricket News   <i class="fa fa-angle-right"></i></Link></li>
                            <li><Link href="">IPL 2023 Live Scores <i class="fa fa-angle-right"></i></Link></li>
                            <li><Link href="">IPL 2023 Teams & Players</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tag-page-bg">
                <div className="tag-page-header">
                    <div className="tag-page-header-info">
                        <div className="tag-page-header-title">
                            <h1>IPL 2023 Teams & Players</h1>
                        </div>
                        <div className="tag-page-header-meta">
                            <div className="tagpage-author">By <a href=""> SK Desk</a> <span>. Last Modified Feb 22, 2023 12:52
                                GMT</span>
                                <button>Share <i className="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                        <div id="Team_Squad_Carousel" className="owl-carousel button-nav-owl-icon d-none">
                            <a href="ipl.php" className="buttons-items2">IPL 2023</a>
                            <a href="ipl-schedule.php" className="buttons-items2">Schedule</a>
                            <a href="points-table.php" className="buttons-items2">Points Table</a>
                            <a href="orange-cap.php" className="buttons-items2">Orange Cap</a>
                            <a href="ipl-purple-cap.php" className="buttons-items2">Purple Cap</a>
                            <a href="ipl-news.php" className="buttons-items2">News</a>
                            <a href="ipl-result.php" className="buttons-items2">Results</a>
                            <a href="videos.php" className="buttons-items2">Videos</a>
                            <a href="live-score.php" className="buttons-items2">Live Score</a>
                            <a href="matches-live-score.php" className="buttons-items2">RR vs CSK</a>
                            <a href="" className="buttons-items2">IPL 2023</a>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tag-page-info-container">
                                <section className="sticky-content-holder">
                                    <div className="tag-page-content-holder">
                                        <div className="team-squad-title-holder">
                                            <h2 className="team-squad-title">
                                                Check out the Squads for Below IPL Teams
                                            </h2>
                                        </div>
                                        <div className="team-squad-parent">
                                            <div className="team-squad-container">
                                                <div className="team-items" data-type="CSK">
                                                    <div className="url-captain-holder">
                                                        <a
                                                            className="team-url"
                                                            href="#ipl-teams-and-squads-csk"
                                                            onclick="switchTeams('CSK')"
                                                        >
                                                            <img
                                                                className="captain-image"
                                                                alt="CSK"
                                                                src="assets/images/img/ipl-dhoni.avif"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="team-name-holder">
                                                        <span className="team-name">CSK</span>
                                                    </div>
                                                </div>
                                                <div className="team-items" data-type="LSg">
                                                    <div className="url-captain-holder">
                                                        <a className="team-url" href="#ipl-teams-and-squads-lsg">
                                                            <img
                                                                className="captain-image"
                                                                alt="LSg"
                                                                src="assets/images/img/ipl-rahul.avif"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="team-name-holder">
                                                        <span className="team-name">LSG</span>
                                                    </div>
                                                </div>
                                                <div className="team-items" data-type="RCB">
                                                    <div className="url-captain-holder">
                                                        <a className="team-url" href="#ipl-teams-and-squads-rcb">
                                                            <img
                                                                className="captain-image"
                                                                alt="RCB"
                                                                src="assets/images/img/ipl-faf.avif"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="team-name-holder">
                                                        <span className="team-name">RCB</span>
                                                    </div>
                                                </div>
                                                <div className="team-items" data-type="DC">
                                                    <div className="url-captain-holder">
                                                        <a className="team-url" href="#ipl-teams-and-squads-2">
                                                            <img
                                                                className="captain-image"
                                                                alt="CSK"
                                                                src="assets/images/img/ipl-warner.avif"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="team-name-holder">
                                                        <span className="team-name">DC</span>
                                                    </div>
                                                </div>
                                                <div className="team-items" data-type="GT">
                                                    <div className="url-captain-holder">
                                                        <a className="team-url" href="#ipl-teams-and-squads-2">
                                                            <img
                                                                className="captain-image"
                                                                alt="GT"
                                                                src="assets/images/img/ipl-pandya.avif"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="team-name-holder">
                                                        <span className="team-name">GT</span>
                                                    </div>
                                                </div>
                                                <div className="team-items" data-type="KKR">
                                                    <div className="url-captain-holder">
                                                        <a className="team-url" href="#ipl-teams-and-squads-2">
                                                            <img
                                                                className="captain-image"
                                                                alt="KKR"
                                                                src="assets/images/img/ipl-nitish.webp"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="team-name-holder">
                                                        <span className="team-name">KKR</span>
                                                    </div>
                                                </div>
                                                <div className="team-items" data-type="MI">
                                                    <div className="url-captain-holder">
                                                        <a className="team-url" href="#ipl-teams-and-squads-2">
                                                            <img
                                                                className="captain-image"
                                                                alt="MI"
                                                                src="assets/images/img/ipl-rohit.avif"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="team-name-holder">
                                                        <span className="team-name">MI</span>
                                                    </div>
                                                </div>
                                                <div className="team-items" data-type="RCB">
                                                    <div className="url-captain-holder">
                                                        <a className="team-url" href="#ipl-teams-and-squads-rcb">
                                                            <img
                                                                className="captain-image"
                                                                alt="RCB"
                                                                src="assets/images/img/ipl-faf.avif"
                                                                width={35}
                                                                height={35}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="team-name-holder">
                                                        <span className="team-name">RCB</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <p className="paragraph">
                                    The Indian Premier League 2023 season is set to begin on 31st March
                                    and IPL 2023 squads have already been finalized for the upcoming
                                    season. There will be a total number of 10 teams participating in
                                    the cricketing extravaganza. After the COVID-19 era, this is the
                                    first time IPL will be held in India and fans are eagerly waiting
                                    for the tournament to begin. Let's look at IPL Teams, Squads, and
                                    players list for the 2023 season.
                                </p>
                                <div
                                    className="tagPage-info-holder mt-5"
                                    id="ipl-teams-and-squads-lsg"
                                >
                                    <h4 className="mb-5">IPL 2023 Teams &amp; Squads</h4>
                                    <span className="ipl-teams-and-squads">
                                        <a href="">Lucknow Super Giants (LSG)</a>
                                    </span>
                                    <div className="tag-schedule-table mt-5">
                                        <table className="tennis-table" style={{ width: "65%" }}>
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Role</th>
                                                    <th>Role</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">KL Rahul (c)</a>
                                                    </td>
                                                    <td>Wicket-keeper Batter</td>
                                                    <td>17 Crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Ayush Badoni</a>
                                                    </td>
                                                    <td>Batting All-rounder </td>
                                                    <td>20 Lacks</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Karan Sharma</a>
                                                    </td>
                                                    <td>Batting All-rounder </td>
                                                    <td>20 Lacks</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Karan Sharma</a>
                                                    </td>
                                                    <td>Batting All-rounder </td>
                                                    <td>20 Lacks</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Manan Vohra</a>
                                                    </td>
                                                    <td>Batter</td>
                                                    <td>20 Lacks</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Quinton de Kock</a>
                                                    </td>
                                                    <td>Wicket-keeper Batter</td>
                                                    <td>6.75 Crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Krishnappa Gowtham</a>
                                                    </td>
                                                    <td>Bowling All-rounder</td>
                                                    <td>6.75 Crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Marcus Stoinis</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>90 Lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Deepak Hooda</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>5.75 Crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Kyle Mayers</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>50 Lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Krunal Pandya</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>8.25 Crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Avesh Khan</a>
                                                    </td>
                                                    <td>Bowler</td>
                                                    <td>10 Crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Mohsin Khan</a>
                                                    </td>
                                                    <td>Bowler</td>
                                                    <td>20 Lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Nicolas Pooran</a>
                                                    </td>
                                                    <td>Wicketkeeper Batsman</td>
                                                    <td>16 crores</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-5">
                                        <img
                                            src="assets/images/img/54e52-16718663998003-1920.avif"
                                            width="100%"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div
                                    className="tagPage-info-holder mt-5"
                                    id="ipl-teams-and-squads-rcb"
                                >
                                    <span className="ipl-teams-and-squads">
                                        <a href="">Royal Challengers Bangalore (RCB)</a>
                                    </span>
                                    <div className="tag-schedule-table mt-5">
                                        <table className="tennis-table" style={{ width: "65%" }}>
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Role</th>
                                                    <th>Role</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Faf Du Plessis (c)</a>
                                                    </td>
                                                    <td>Batter</td>
                                                    <td>INR 7 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Virat Kohli</a>
                                                    </td>
                                                    <td>Batter</td>
                                                    <td>INR 15 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Rajat Patidar</a>
                                                    </td>
                                                    <td>Batter</td>
                                                    <td>20 Lacks</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Anuj Rawat</a>
                                                    </td>
                                                    <td>Batter-Wicketkeeper </td>
                                                    <td>INR 3.4 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Glenn Maxwell</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>INR 11 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Suyash Prabhudessai</a>
                                                    </td>
                                                    <td>Batter</td>
                                                    <td>INR 30 lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Dinesh Karthik</a>
                                                    </td>
                                                    <td>Batter-Wicketkeeper</td>
                                                    <td>INR 5.50 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Shahbaz Ahmed</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>INR 2.40 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Harshal Patel</a>
                                                    </td>
                                                    <td>Bowling All-rounder</td>
                                                    <td>INR 10.75 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">David Willey</a>
                                                    </td>
                                                    <td>Bowling All-rounder</td>
                                                    <td>INR 2 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Karn Sharma</a>
                                                    </td>
                                                    <td>Bowling All-rounder</td>
                                                    <td>INR 50 lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Mahipal Lomror</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>INR 95 lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Mohammed Siraj</a>
                                                    </td>
                                                    <td>Bowler</td>
                                                    <td>INR 7 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Josh Hazlewood</a>
                                                    </td>
                                                    <td>Wicketkeeper Batsman</td>
                                                    <td>INR 7.75 crores</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-5">
                                        <img
                                            src="assets/images/img/47594-16718666270283-1920.avif"
                                            width="100%"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div
                                    className="tagPage-info-holder mt-5"
                                    id="ipl-teams-and-squads-csk"
                                >
                                    <span className="ipl-teams-and-squads">
                                        <a href="">Chennai Super Kings (CSK)</a>
                                    </span>
                                    <div className="tag-schedule-table mt-5">
                                        <table className="tennis-table" style={{ width: "65%" }}>
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Role</th>
                                                    <th>Role</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">MS Dhoni (c)</a>
                                                    </td>
                                                    <td>Batsman-wicket-keeper</td>
                                                    <td>INR 12 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Ravindra Jadeja</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>INR 16 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Ben Stokes</a>
                                                    </td>
                                                    <td>All-rounder </td>
                                                    <td>INR 16.25 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Anuj Rawat</a>
                                                    </td>
                                                    <td>Batter-Wicketkeeper </td>
                                                    <td>INR 3.4 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Glenn Maxwell</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>INR 11 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Suyash Prabhudessai</a>
                                                    </td>
                                                    <td>Batter</td>
                                                    <td>INR 30 lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Dinesh Karthik</a>
                                                    </td>
                                                    <td>Batter-Wicketkeeper</td>
                                                    <td>INR 5.50 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Shahbaz Ahmed</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>INR 2.40 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Harshal Patel</a>
                                                    </td>
                                                    <td>Bowling All-rounder</td>
                                                    <td>INR 10.75 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">David Willey</a>
                                                    </td>
                                                    <td>Bowling All-rounder</td>
                                                    <td>INR 2 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Karn Sharma</a>
                                                    </td>
                                                    <td>Bowling All-rounder</td>
                                                    <td>INR 50 lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Mahipal Lomror</a>
                                                    </td>
                                                    <td>All-rounder</td>
                                                    <td>INR 95 lakhs</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Mohammed Siraj</a>
                                                    </td>
                                                    <td>Bowler</td>
                                                    <td>INR 7 crores</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="">Josh Hazlewood</a>
                                                    </td>
                                                    <td>Wicketkeeper Batsman</td>
                                                    <td>INR 7.75 crores</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-5">
                                        <img
                                            src="assets/images/img/a829b-16718693118043-1920.avif"
                                            width="100%"
                                            alt=""
                                        />
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

export default Teamsquade