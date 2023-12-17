import React, { useState } from 'react';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css';

const CricketSchedule = () => {

    const [ToggleSchedule, setToggleSchedule] = useState(1)

    const ScheduletoggleTab = (index) => {
        setToggleSchedule(index);
    };
  
    const scheduleActiveClass = (index, className) =>
       ToggleSchedule === index ? className : "";

    return (
        <>
            <Helmet>
                <title>Cricfeel | Ipl 2023</title>
            </Helmet>
            <Header />
            <div class="breadcrumb-container bc-2">
                <div class="conatainer">
                    <div class="wrapper-container">
                        <ul>
                            <li><Link to=""><i class="fa fa-home"></i> <i class="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">Cricket News <i class="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">A League <i class="fa fa-angle-right"></i> </Link></li>
                            <li><Link to="">Newcastle Jets FC Vs Macarthur FC</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="CricketmasterSection">
                <div className="container">
                    <div className="CustomContainer">
                        <div className="row">
                            <div className="col-lg-8 mb-5">
                                <section className="fragments-container">
                                    <div className="match_holder" style={{ border: "1px solid #E9E9E9 !important" }}>
                                        <div className="scores-container">
                                            <ul className="schedule-tabs">
                                                <li className={`tabs ${scheduleActiveClass(1,"active")}`} onClick={() =>ScheduletoggleTab(1)}> Live </li>
                                                <li className={`tabs ${scheduleActiveClass(2,"active")}`} onClick={() =>ScheduletoggleTab(2)}>Upcoming </li>
                                                <li className={`tabs ${scheduleActiveClass(3,"active")}`} onClick={() =>ScheduletoggleTab(3)}>Result </li>
                                            </ul>
                                        </div>
                                        <div className="footballContainer mt-3">
                                            {/* Live Start */}
                                            <div id="Livec" className={`live-cricket-panel ${scheduleActiveClass(1,'schedule-active')}`}>
                                                <div className="row">
                                                    <div className="tournament-detail">
                                                        <Link to="/live-cricket-score">
                                                            Ireland tour of Sri Lanka{" "}
                                                            <i className="fa fa-angle-right" />{" "}
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="tournament-box-container">
                                                            <div className="keeda_cricket_schedule_row">
                                                                <Link to="/live-cricket-score">
                                                                    <div className="cricket_schedule_col">
                                                                        <span className="match-description">
                                                                            1st Test
                                                                        </span>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/lk.svg"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>SL</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info">
                                                                                <span>*386/4 (88 ov)</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/img/ireland-cricket.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>IRE</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info"></div>
                                                                        </div>
                                                                        <div className="keeda-descript">
                                                                            <span className="match-result">
                                                                                <button className="Livebtn mr-2">Live</button>
                                                                                Stumps : Day 1 Sri Lanka elected to bat
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="tournament-detail">
                                                        <Link to="/live-cricket-score">
                                                            Dhaka Premier Division Cricket League{" "}
                                                            <i className="fa fa-angle-right" />{" "}
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="tournament-box-container">
                                                            <div className="keeda_cricket_schedule_row">
                                                                <Link to="/live-cricket-score">
                                                                    <div className="cricket_schedule_col">
                                                                        <span className="match-description">
                                                                            65th Match
                                                                        </span>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/_gazi-group-cricketers.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>GGC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info"></div>
                                                                        </div>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/shinepukur-cricket-club.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>SCC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info"></div>
                                                                        </div>
                                                                        <div className="keeda-descript">
                                                                            <span className="match-result">
                                                                                <button className="Livebtn mr-2">Live</button>{" "}
                                                                                Not Covered live
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="tournament-box-container">
                                                            <div className="keeda_cricket_schedule_row">
                                                                <a href="">
                                                                    <div className="cricket_schedule_col">
                                                                        <span className="match-description">
                                                                            65th Match
                                                                        </span>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/_gazi-group-cricketers.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>GGC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info"></div>
                                                                        </div>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/shinepukur-cricket-club.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>SCC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info"></div>
                                                                        </div>
                                                                        <div className="keeda-descript">
                                                                            <span className="match-result">
                                                                                <button className="Livebtn mr-2">Live</button>{" "}
                                                                                Not Covered live
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Live End */}

                                            {/* Upcoming */}
                                            <div id="Upcoming" className={`live-cricket-panel ${scheduleActiveClass(2,"schedule-active")}`}>
                                                <div className="upcoming-matches-div">
                                                    <div className="match-date-bar">17 Apr, 2023, Monday</div>
                                                    <div className="upcoming-match-row">
                                                        <div className="tournament-detail pl-0 mb-3">
                                                            <a href="">
                                                                Indian Premier League{" "}
                                                                <i className="fa fa-angle-right" />{" "}
                                                            </a>
                                                        </div>
                                                        <div className="upcoming-match-grids row">
                                                            <div className="col-lg-6">
                                                                <div className="premier-league-box">
                                                                    <a href="">
                                                                        <span className="upcoming-description">
                                                                            Match 24 . 17 Apr at 07:30 PM
                                                                        </span>
                                                                        <div className="" />
                                                                        <div className="upcoming-match-teams">
                                                                            <div className="team-flag">
                                                                                <img
                                                                                    src="assets/images/flag/default-image.webp"
                                                                                    alt=""
                                                                                />
                                                                                <span> RCB</span>
                                                                            </div>
                                                                            <span className="team-vs">Vs</span>
                                                                            <div className="team-flag">
                                                                                <img
                                                                                    src="assets/images/flag/default-image.webp"
                                                                                    alt=""
                                                                                />
                                                                                <span> CSK</span>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Start */}
                                                <div className="upcoming-matches-div">
                                                    <div className="match-date-bar">18 Apr, 2023, Tuesday</div>
                                                    <div className="upcoming-match-row">
                                                        <div className="tournament-detail pl-0 mb-3">
                                                            <a href="">
                                                                Indian Premier League{" "}
                                                                <i className="fa fa-angle-right" />{" "}
                                                            </a>
                                                        </div>
                                                        <div className="upcoming-match-grids row">
                                                            <div className="col-lg-6">
                                                                <div className="premier-league-box">
                                                                    <a href="">
                                                                        <span className="upcoming-description">
                                                                            Match 25 . 18 Apr at 07:30 PM
                                                                        </span>
                                                                        <div className="" />
                                                                        <div className="upcoming-match-teams">
                                                                            <div className="team-flag">
                                                                                <img
                                                                                    src="assets/images/flag/default-image.webp"
                                                                                    alt=""
                                                                                />
                                                                                <span> SRH</span>
                                                                            </div>
                                                                            <span className="team-vs">Vs</span>
                                                                            <div className="team-flag">
                                                                                <img
                                                                                    src="assets/images/flag/default-image.webp"
                                                                                    alt=""
                                                                                />
                                                                                <span> MI</span>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End */}
                                                {/* Start */}
                                                <div className="upcoming-matches-div">
                                                    <div className="match-date-bar">
                                                        19 Apr, 2023, Webnesday
                                                    </div>
                                                    <div className="upcoming-match-row">
                                                        <div className="tournament-detail pl-0 mb-3">
                                                            <a href="">
                                                                Indian Premier League{" "}
                                                                <i className="fa fa-angle-right" />{" "}
                                                            </a>
                                                        </div>
                                                        <div className="upcoming-match-grids row">
                                                            <div className="col-lg-6">
                                                                <div className="premier-league-box">
                                                                    <a href="">
                                                                        <span className="upcoming-description">
                                                                            Match 26 . 18 Apr at 07:30 PM
                                                                        </span>
                                                                        <div className="" />
                                                                        <div className="upcoming-match-teams">
                                                                            <div className="team-flag">
                                                                                <img
                                                                                    src="assets/images/flag/default-image.webp"
                                                                                    alt=""
                                                                                />
                                                                                <span> LSG</span>
                                                                            </div>
                                                                            <span className="team-vs">Vs</span>
                                                                            <div className="team-flag">
                                                                                <img
                                                                                    src="assets/images/flag/default-image.webp"
                                                                                    alt=""
                                                                                />
                                                                                <span> GT</span>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="premier-league-box">
                                                                    <a href="">
                                                                        <span className="upcoming-description">
                                                                            Match 27 . 18 Apr at 07:30 PM
                                                                        </span>
                                                                        <div className="" />
                                                                        <div className="upcoming-match-teams">
                                                                            <div className="team-flag">
                                                                                <img
                                                                                    src="assets/images/flag/default-image.webp"
                                                                                    alt=""
                                                                                />
                                                                                <span> MI</span>
                                                                            </div>
                                                                            <span className="team-vs">Vs</span>
                                                                            <div className="team-flag">
                                                                                <img
                                                                                    src="assets/images/flag/default-image.webp"
                                                                                    alt=""
                                                                                />
                                                                                <span> PBKS</span>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End */}
                                            </div>
                                            {/* End Upcoming */}
                                            {/* Result Start */}
                                            <div id="Result" className={`live-cricket-panel ${scheduleActiveClass(3,"schedule-active")}`}>
                                                <div className="row">
                                                    <div className="tournament-detail">
                                                        <a href="live-cricket-score.php">
                                                            Kuwait Ramadan T10 League{" "}
                                                            <i className="fa fa-angle-right" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="tournament-box-container">
                                                            <div className="keeda_cricket_schedule_row">
                                                                <a href="live-cricket-score.php">
                                                                    <div className="cricket_schedule_col">
                                                                        <span className="match-description">
                                                                            Match 50
                                                                        </span>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/default-image.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>MAC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info">
                                                                                <span>56/10 (10 ov)</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/default-image.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>CECC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info">
                                                                                <span>57/0 (2.4 ov)</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="keeda-descript">
                                                                            <span className="match-result">
                                                                                Ceylinco Express CC won by 10 wickets
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="tournament-detail">
                                                        <Link to="">
                                                            Cool and Smooth T20
                                                            <i className="fa fa-angle-right" />{" "}
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="tournament-box-container">
                                                            <div className="keeda_cricket_schedule_row">
                                                                <a href="">
                                                                    <div className="cricket_schedule_col">
                                                                        <span className="match-description">
                                                                            Match 50
                                                                        </span>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/default-image.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>MAC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info">
                                                                                <span>56/10 (10 ov)</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/default-image.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>CECC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info">
                                                                                <span>57/0 (2.4 ov)</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="keeda-descript">
                                                                            <span className="match-result">
                                                                                Ceylinco Express CC won by 10 wickets
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="tournament-box-container">
                                                            <div className="keeda_cricket_schedule_row">
                                                                <a href="">
                                                                    <div className="cricket_schedule_col">
                                                                        <span className="match-description">
                                                                            Match 50
                                                                        </span>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/default-image.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>MAC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info">
                                                                                <span>56/10 (10 ov)</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="team-info">
                                                                            <div className="team-flag">
                                                                                <span className="flag-icon">
                                                                                    <img
                                                                                        src="assets/images/flag/default-image.webp"
                                                                                        alt=""
                                                                                    />
                                                                                    <span>CECC</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="score-info">
                                                                                <span>57/0 (2.4 ov)</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="keeda-descript">
                                                                            <span className="match-result">
                                                                                Ceylinco Express CC won by 10 wickets
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Result End */}
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-4" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="bottom-navbar">
                <Link to="/cricket">
                    <img src="assets/images/img/ic-home-v2.svg" alt="" />
                    <span>Home</span>
                </Link>
                <Link to="/cricket-schedule" className="active">
                    <img src="assets/images/img/ic-bat-ball-outline.svg" alt="" />
                    <span>Matches</span>
                </Link>
                <Link to="/fantasy-cricket-mantra">
                    <img src="assets/images/img/ic-trophy-v2.svg" alt="" />
                    <span>Fantasy</span>
                </Link>
                <Link to="">
                    <img src="assets/images/img/ic-fantasy-v2.svg" alt="" />
                    <span>Series</span>
                </Link>
            </div>

        </>
    )
}

export default CricketSchedule