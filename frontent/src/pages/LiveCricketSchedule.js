import React, { useState } from 'react';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css';

const LiveCricketSchedule = () => {

    const [LiveTab, setLivetab] = useState(1);
    const LivetoggleTab = (index) => {
        setLivetab(index);
    }
    const LiveActiveTab = (index, liveclass) =>
        LiveTab === index ? liveclass : ""; 


   const [FantasyTab, setFantasyTab] = useState(1);
   const FantasytoggleTab = (index) => {
        setFantasyTab(index);
    }
   const FantasyActiveTab = (index, fabtasyclass) =>
        FantasyTab === index ? fabtasyclass : "";

   const [StatsTab, setStatsTab] = useState(1);
   const StatsToggleTab = (index) => {
    setStatsTab(index);
    }
    const StatsActiveTab = (index, statsclass) =>
    StatsTab === index ? statsclass : "";

   const [TeamComparisonTab, setTeamComparisonTab] = useState(1);
   const TeamComparisonToggleTab = (index) => {
     setTeamComparisonTab(index);
    }
    const TeamActiveTab = (index, teamclass) =>
    TeamComparisonTab === index ? teamclass : "";

    return (
        <>
            <Helmet>
                <title>Cricfeel | Ipl 2023</title>
            </Helmet>
            <Header />
            <div className="breadcrumb-container bc-2">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li>
                                <Link to="">
                                    <i className="fa fa-home" /> <i className="fa fa-angle-right" />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    Cricket News <i className="fa fa-angle-right" />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    A League <i className="fa fa-angle-right" />{" "}
                                </Link>
                            </li>
                            <li>
                                <Link to="">1st Test</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <div className="live-scores-master">
                                <div className="live-macth-venuw">
                                    <a href=""> Match 15 , M.Chinnaswamy Stadium, Bengaluru</a>
                                </div>
                                <div className="pyLive">
                                    <div className="live-match-shdle">
                                        <div className="leftLive">
                                            <img src="assets/images/flag/default-image.webp" alt="" />
                                            <span>
                                                <a href="">Team 1</a>
                                            </span>
                                        </div>
                                        <div className="rightScore">
                                            <span>
                                                212/2 <small>(20 ov)</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="live-match-shdle">
                                        <div className="leftLive">
                                            <img src="assets/images/flag/default-image.webp" alt="" />
                                            <span>
                                                <a href="">Team 2</a>
                                            </span>
                                        </div>
                                        <div className="rightScore">
                                            <span>
                                                213/9 <small>(20 ov)</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="result-text">
                                        <span>Team 1 won by 1 wicket</span>
                                    </div>
                                </div>
                            </div>
                            <div className="LiveTab">
                                <ul className="Livecricket-tabs table_scroll" style={{ position: "sticky", top: "3.2rem", zIndex: 999999999, background: "#ffff" }} >
                                    <li className={`tabss ${LiveActiveTab(1, 'active')}`} onClick={() => LivetoggleTab(1)}>Info </li>
                                    <li className={`tabss ${LiveActiveTab(2, 'active')}`} onClick={() => LivetoggleTab(2)}>Fantasy</li>
                                    <li className={`tabss ${LiveActiveTab(3, 'active')}`} onClick={() => LivetoggleTab(3)}>Predict</li>
                                    <li className={`tabss ${LiveActiveTab(4, 'active')}`} onClick={() => LivetoggleTab(4)}>Live</li>
                                    <li className={`tabss ${LiveActiveTab(5, 'active')}`} onClick={() => LivetoggleTab(5)}>Score</li>
                                    <li className={`tabss ${LiveActiveTab(6, 'active')}`} onClick={() => LivetoggleTab(6)}>Playing XI</li>
                                    <li className={`tabss ${LiveActiveTab(7, 'active')}`} onClick={() => LivetoggleTab(7)}>Trending </li>
                                </ul>
                                <div className="LiveScoreConetent">
                                    {/* Info */}
                                    <div id="info" className={`LiveCricketPanel ${LiveActiveTab(1, 'live-active')}`}>
                                        <section className="table_scroll">
                                            <table className="_table_stands">
                                                <tbody>
                                                    <tr className="live-info-tr">
                                                        <th>Date &amp; Time</th>
                                                        <td>10 Apr, 07:30 PM IST</td>
                                                    </tr>
                                                    <tr className="live-info-tr">
                                                        <th>Venue</th>
                                                        <td>M.Chinnaswamy Stadium, Bengaluru</td>
                                                    </tr>
                                                    <tr className="live-info-tr">
                                                        <th>TV/Streaming</th>
                                                        <td>Star Sports / Jio Cinema</td>
                                                    </tr>
                                                    <tr className="live-info-tr">
                                                        <th>Weather</th>
                                                        <td>Clear sky with no chance of rain</td>
                                                    </tr>
                                                    <tr className="live-info-tr">
                                                        <th>Toss</th>
                                                        <td>Lucknow Super Giants elected to bowl</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </section>
                                        <section>
                                            <div className="live-team-playinXI">
                                                <div className="live-accordion-header" id="live_flip">
                                                    <span>Playing XI</span>
                                                    <div className="arrow__">
                                                        <i className="fa fa-angle-left" />
                                                    </div>
                                                </div>
                                                <div className="display-teams" id="live_panel">
                                                    <div className="team-holder">
                                                        <span>
                                                            <a href="">
                                                                <img
                                                                    src="assets/images/flag/default-image.webp"
                                                                    className="team-img"
                                                                    alt=""
                                                                />
                                                                Team 1
                                                            </a>
                                                        </span>
                                                        <span>Vs</span>
                                                        <span>
                                                            <a href="">
                                                                Team 2
                                                                <img
                                                                    src="assets/images/flag/default-image.webp"
                                                                    className="team-img"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </span>
                                                    </div>
                                                    <div className="squads-container">
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Arif Khan</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>Arif Khan</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Ms Dhoni</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>Dinesh Kartik</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Arif Khan</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>Arif Khan</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="mt-3">
                                            <div className="football-section-panel">
                                                <div className="football-section-panel-header">
                                                    <h6>
                                                        Head To Head Summary{" "}
                                                        <span className="total-matches-count">
                                                            (Last 10 Matches)
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="football-section--panel--body">
                                                    <div className="head-to-head-summary">
                                                        <div className="team_details">
                                                            <div className="team-logo">
                                                                <img
                                                                    src="assets/images/flag/default-image.webp"
                                                                    width={30}
                                                                    height={30}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="team-name">
                                                                <a href="">Team 1</a>
                                                            </div>
                                                        </div>
                                                        <div className="vs-text">Vs</div>
                                                        <div className="team_details">
                                                            <div className="team-name">
                                                                <a href="">Team 2</a>
                                                            </div>
                                                            <div className="team-logo">
                                                                <img
                                                                    src="assets/images/flag/default-image.webp"
                                                                    width={30}
                                                                    height={30}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="head-to-head-summary-details">
                                                        <div className="head-to-head-summary-details-wrapper">
                                                            <div className="head-to-head-stat">
                                                                <div className="head-to-head-stat-value">0 - 0</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="football-section-panel mt-3">
                                            <div className="football-section-panel-header">
                                                <h6>Related Articles</h6>
                                            </div>
                                            <div className="football-section-panel-body no-padding">
                                                <div className="related-articles-container">
                                                    <a href="">
                                                        <div className="st-wrappers">
                                                            <img
                                                                src="assets/images/img/18feb-16815276043350-1920.avif"
                                                                alt=""
                                                            />
                                                            <div className="wrapper-text">
                                                                <p>
                                                                    Newcastle Jets vs Macarthur Prediction and Betting
                                                                    Tips | April 14th 2023
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="related-articles-container">
                                                    <a href="">
                                                        <div className="st-wrappers">
                                                            <img
                                                                src="assets/images/img/18feb-16815276043350-1920.avif"
                                                                alt=""
                                                            />
                                                            <div className="wrapper-text">
                                                                <p>
                                                                    Newcastle Jets vs Macarthur Prediction and Betting
                                                                    Tips | April 14th 2023
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    {/* End Info */}
                                    {/* Fantasy Start */}
                                    <div id="fantasy" className={`LiveCricketPanel ${LiveActiveTab(2, 'live-active')}`}>
                                        <div className="fantasy-tips-tab">
                                            <div className="fantasy-content">
                                                <ul className="fantasy-news">
                                                    <li className={`${FantasyActiveTab(1,'active')}`} onClick={() =>FantasytoggleTab(1)}>Over View</li>
                                                    <li className={`${FantasyActiveTab(2,'active')}`} onClick={() =>FantasytoggleTab(2)}>Team Stats</li>
                                                 </ul>
                                                <div id="fantasy-toss-status"className="fantasy-toss-status active" >
                                                    Yet to take Place
                                                </div>
                                                {/* Overview */}
                                                <div className={`fantasy-news-panel ${FantasyActiveTab(1,'fantasy-active')}`} id="overview">
                                                    <div className="pinned-video-sections">
                                                        <div className="pinned-main-sub-headings">
                                                            <span className="pinned-video-title">
                                                                Fantasy Analysis
                                                            </span>
                                                        </div>
                                                        <div className="pinned-video-link">
                                                            <object
                                                                className="pinned-video-frame"
                                                                data="https://www.youtube.com/embed/5exgmQZ6MhI"
                                                                id="fantasy-pinned-video"
                                                                height="380px"
                                                            />
                                                         </div>
                                                        <div className="overview-sections expert-suggestion">
                                                            <div className="overview-main-sub-heading2">
                                                                <div className="overview-main-sub-heading">
                                                                    <span>Expert team suggestions</span>
                                                                </div>
                                                                <div className="expert-suggestion-internal expert-suggestion-announced">
                                                                    <div className="row">
                                                                        <div className="col-lg-6 responsive-remove-padding">
                                                                            <div className="team-content expert-team-info-0">
                                                                                <div className="heading">
                                                                                    <span>Expert Team 1</span>
                                                                                </div>
                                                                                <div className="content">
                                                                                    <div className="player-info">
                                                                                        <div className="captain-info">
                                                                                            <img src="assets/images/img/captain-icon-new.svg"
                                                                                                width={15}
                                                                                                height={18}
                                                                                                alt="captain-icon"
                                                                                                className="captain-icon"
                                                                                            />
                                                                                            <img  id="captain-image-0"
                                                                                                src="assets/images/img/player2.svg"
                                                                                                width={31}
                                                                                                height={37}
                                                                                                alt="captain"
                                                                                                className="captain-image"
                                                                                            />
                                                                                            <span
                                                                                                id="captain-name-0"
                                                                                                className="player-name-vice-captain"
                                                                                            >
                                                                                                Andre Russell
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="player-info">
                                                                                        <div className="captain-info">
                                                                                            <img
                                                                                                src="assets/images/img/vice-captain-icon-new.svg"
                                                                                                width={15}
                                                                                                height={18}
                                                                                                alt="captain-icon"
                                                                                                className="captain-icon"
                                                                                            />
                                                                                            <img
                                                                                                id="captain-image-0"
                                                                                                src="assets/images/img/player1.svg"
                                                                                                width={31}
                                                                                                height={37}
                                                                                                alt="vice captain"
                                                                                                className="captain-image"
                                                                                            />
                                                                                            <span
                                                                                                id="captain-name-0"
                                                                                                className="player-name-vice-captain"
                                                                                                style={{
                                                                                                    background: "#FBEBEB",
                                                                                                    color: "#2D2D2D"
                                                                                                }}
                                                                                            >
                                                                                                Aiden Markram
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="detail-info">
                                                                                        <button className="expert-team-detail">
                                                                                            Detail View
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="footer" id="expert-footer-content-0">
                                                                                    <div>
                                                                                        <span>WK:</span>{" "}
                                                                                        <span className="player-count">2</span>
                                                                                    </div>
                                                                                    <div>
                                                                                        <span>BAT:</span>{" "}
                                                                                        <span className="player-count">3</span>
                                                                                    </div>
                                                                                    <div>
                                                                                        <span>AR:</span>{" "}
                                                                                        <span className="player-count">3</span>
                                                                                    </div>
                                                                                    <div>
                                                                                        <span>BOWL:</span>{" "}
                                                                                        <span className="player-count">3</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 responsive-remove-padding">
                                                                            <div className="team-content expert-team-info-0">
                                                                                <div className="heading">
                                                                                    <span>Expert Team 1</span>
                                                                                </div>
                                                                                <div className="content">
                                                                                    <div className="player-info">
                                                                                        <div className="captain-info">
                                                                                            <img src="assets/images/img/captain-icon-new.svg"  width={15}  height={18} alt="captain-icon"
                                                                                                className="captain-icon"
                                                                                            />
                                                                                            <img
                                                                                                id="captain-image-0"
                                                                                                src="assets/images/img/player2.svg"
                                                                                                width={31}
                                                                                                height={37}
                                                                                                alt="captain"
                                                                                                className="captain-image"
                                                                                            />
                                                                                            <span
                                                                                                id="captain-name-0"
                                                                                                className="player-name-vice-captain"
                                                                                            >
                                                                                                Andre Russell
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="player-info">
                                                                                        <div className="captain-info">
                                                                                            <img
                                                                                                src="assets/images/img/vice-captain-icon-new.svg"
                                                                                                width={15}
                                                                                                height={18}
                                                                                                alt="captain-icon"
                                                                                                className="captain-icon"
                                                                                            />
                                                                                            <img
                                                                                                id="captain-image-0"
                                                                                                src="assets/images/img/player1.svg"
                                                                                                width={31}
                                                                                                height={37}
                                                                                                alt="vice captain"
                                                                                                className="captain-image"
                                                                                            />
                                                                                            <span
                                                                                                id="captain-name-0"
                                                                                                className="player-name-vice-captain"
                                                                                                style={{
                                                                                                    background: "#FBEBEB",
                                                                                                    color: "#2D2D2D"
                                                                                                }}
                                                                                            >
                                                                                                Aiden Markram
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="detail-info">
                                                                                        <button className="expert-team-detail">
                                                                                            Detail View
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="footer"
                                                                                    id="expert-footer-content-0"
                                                                                >
                                                                                    <div>
                                                                                        <span>WK:</span>{" "}
                                                                                        <span className="player-count">2</span>
                                                                                    </div>
                                                                                    <div>
                                                                                        <span>BAT:</span>{" "}
                                                                                        <span className="player-count">3</span>
                                                                                    </div>
                                                                                    <div>
                                                                                        <span>AR:</span>{" "}
                                                                                        <span className="player-count">3</span>
                                                                                    </div>
                                                                                    <div>
                                                                                        <span>BOWL:</span>{" "}
                                                                                        <span className="player-count">3</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* OverView */}
                                                        <div className="overview-sections">
                                                            <div className="overview-main-sub-heading">
                                                                <div className="heading-title">
                                                                    <span>Players stats in series</span>
                                                                    <span className="playing-xi-info">
                                                                        Stats will be updated (After Toss)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="fantasy-player-stats">
                                                                <ul className="fantasy-stats-tab">
                                                                    <li className={`${StatsActiveTab(1,'active')}`} onClick={()=>StatsToggleTab(1)}> Most Runs </li>
                                                                    <li className={`${StatsActiveTab(2,'active')}`} onClick={()=>StatsToggleTab(2)}> Best Strike Rate</li>
                                                                    <li>Most Wicket </li>
                                                                    <li>Best Eco Rate</li>
                                                                </ul>
                                                                {/* Most Runs */}
                                                                <div className={`fantasy-stats-tab-panel ${StatsActiveTab(1,'stats-active')}`}  id="mostruns">
                                                                    <div className="player-stats-detail">
                                                                        <div className="stats-content">
                                                                            <div className="stats-player-detail left-player-detail">
                                                                                <p className="stats-player-name">
                                                                                    <span className="stats-index">1.</span>
                                                                                    <a className="player-cta" href="">
                                                                                        Venkatesh Iyer
                                                                                    </a>
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    KKR<span className="stats-dots">.</span> BAT{" "}
                                                                                </p>
                                                                            </div>
                                                                            <div className="stats-player-detail right-player-detail">
                                                                                <p className="stats-player-name player-points">
                                                                                    296 Runs
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    9 Matches{" "}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="stats-content">
                                                                            <div className="stats-player-detail left-player-detail">
                                                                                <p className="stats-player-name">
                                                                                    <span className="stats-index">2.</span>
                                                                                    <a className="player-cta" href="">
                                                                                        Venkatesh Iyer
                                                                                    </a>
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    KKR<span className="stats-dots">.</span> BAT{" "}
                                                                                </p>
                                                                            </div>
                                                                            <div className="stats-player-detail right-player-detail">
                                                                                <p className="stats-player-name player-points">
                                                                                    296 Runs
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    9 Matches{" "}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="stats-content">
                                                                            <div className="stats-player-detail left-player-detail">
                                                                                <p className="stats-player-name">
                                                                                    <span className="stats-index">3.</span>
                                                                                    <a className="player-cta" href="">
                                                                                        Venkatesh Iyer
                                                                                    </a>
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    KKR<span className="stats-dots">.</span> BAT{" "}
                                                                                </p>
                                                                            </div>
                                                                            <div className="stats-player-detail right-player-detail">
                                                                                <p className="stats-player-name player-points">
                                                                                    296 Runs
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    9 Matches{" "}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End */}
                                                                {/* Best Strike Rate */}
                                                                <div className={`fantasy-stats-tab-panel ${StatsActiveTab(2,'stats-active')}`} id="beststrikerate">
                                                                    <div className="player-stats-detail">
                                                                        <div className="stats-content">
                                                                            <div className="stats-player-detail left-player-detail">
                                                                                <p className="stats-player-name">
                                                                                    <span className="stats-index">1.</span>
                                                                                    <a className="player-cta" href="">
                                                                                        David Wiese
                                                                                    </a>
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    KKR<span className="stats-dots">.</span> BAT{" "}
                                                                                </p>
                                                                            </div>
                                                                            <div className="stats-player-detail right-player-detail">
                                                                                <p className="stats-player-name player-points">
                                                                                    190.91
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    3 Matches{" "}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="stats-content">
                                                                            <div className="stats-player-detail left-player-detail">
                                                                                <p className="stats-player-name">
                                                                                    <span className="stats-index">2.</span>
                                                                                    <a className="player-cta" href="">
                                                                                        Jason Roy
                                                                                    </a>
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    KKR<span className="stats-dots">.</span> BAT{" "}
                                                                                </p>
                                                                            </div>
                                                                            <div className="stats-player-detail right-player-detail">
                                                                                <p className="stats-player-name player-points">
                                                                                    170.21
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    3 Matches{" "}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="stats-content">
                                                                            <div className="stats-player-detail left-player-detail">
                                                                                <p className="stats-player-name">
                                                                                    <span className="stats-index">3.</span>
                                                                                    <a className="player-cta" href="">
                                                                                        Venkatesh Iyer
                                                                                    </a>
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    KKR<span className="stats-dots">.</span> BAT{" "}
                                                                                </p>
                                                                            </div>
                                                                            <div className="stats-player-detail right-player-detail">
                                                                                <p className="stats-player-name player-points">
                                                                                    296 Runs
                                                                                </p>
                                                                                <p className="stats-player-role">
                                                                                    9 Matches{" "}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* End */}
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                        {/* Start */}
                                                        <div className="team-form-section-v2">
                                                            <div className="team-form-heading">
                                                                <div className="heading-title team-form-title">
                                                                    <span>Team Form</span>
                                                                    <span className="last-five">(Last 5 Matches)</span>
                                                                </div>
                                                                <div className="see-all-stats">
                                                                    <a href="#team_stats" style={{ fontWeight: 400 }}>
                                                                        See all Stats <i className="fa fa-angle-right" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="team-form-info">
                                                                <div className="team-form-stats-detail">
                                                                    <div className="team-form-data">
                                                                        <div className="team-name">
                                                                            Sunrisers Hyderabad
                                                                        </div>
                                                                        <div className="team-matches">
                                                                            <p className="match-result  won "> W </p>
                                                                            <p className="match-result  loss ">L </p>
                                                                            <p className="match-result  loss "> L </p>
                                                                            <p className="match-result  loss ">L </p>
                                                                            <p className="match-result  won ">W </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="team-form-data">
                                                                        <div className="team-name">
                                                                            Kolkata Knight Riders
                                                                        </div>
                                                                        <div className="team-matches">
                                                                            <p className="match-result  loss ">L</p>
                                                                            <p className="match-result  won ">W</p>
                                                                            <p className="match-result  loss ">L</p>
                                                                            <p className="match-result  loss ">L</p>
                                                                            <p className="match-result  loss "> L </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End */}
                                                    </div>
                                                </div>
                                                {/* End */}
                                                {/* Team Stats */}
                                                <div className={`fantasy-news-panel ${FantasyActiveTab(2,'fantasy-active')}`}  id="team_stats">
                                                    <div className="team-head-to-head-section-v2">
                                                        <div className="team-head-to-head-heading">
                                                            <div className="heading-title">
                                                                <span>Head To Head</span>
                                                                <span className="last-five">(Last 10 Matches) </span>
                                                            </div>
                                                        </div>
                                                        <div className="team-head-to-head">
                                                            <div className="team-head-to-head-detail">
                                                                <div className="teama-head_to_head-data">
                                                                    <div className="team-head-to-head-flag">
                                                                        <img
                                                                            className="team-flag"
                                                                            src="assets/images/img/sunrisers-hyderabad.webp"
                                                                            alt="team-image"
                                                                        />
                                                                        SRH
                                                                    </div>
                                                                </div>
                                                                <div className="team-matches-won">
                                                                    <span className="team-matches low-won-matches">
                                                                        4
                                                                    </span>
                                                                    -
                                                                    <span className="team-matches high-won-matches">
                                                                        6
                                                                    </span>
                                                                </div>
                                                                <div className="teamb-head_to_head-data">
                                                                    <div className="team-head-to-head-flag">
                                                                        KKR
                                                                        <img
                                                                            className="team-flag"
                                                                            src="assets/images/img/kolkata-knight-riders.webp"
                                                                            alt="team-image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="overview-sections stats-section">
                                                        <div className="overview-main-sub-heading">
                                                            <div className="heading-title">
                                                                <span>Team Comparison</span>
                                                                <span className="last-five team-comaprison-title">
                                                                    (Last 10 matches)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="fantasy-player-stats">
                                                            <ul className="fantasy-team-stats-tab">
                                                                <li className={`${TeamActiveTab(1,'active')}`} onClick={() =>TeamComparisonToggleTab(1)}>Overall</li>
                                                                <li className={`${TeamActiveTab(2,'active')}`} onClick={() =>TeamComparisonToggleTab(2)}>On Venue</li>
                                                            </ul>
                                                            <div className={`fantasy-team-stats-tab-panel ${TeamActiveTab(1,'team-active')}`}  id="Overall">
                                                                <div className="fantasy-team-comparison-data">
                                                                    <div className="team-head-comaparison-detail">
                                                                        <div className="teama-head_to_head-data">
                                                                            <div className="team-head-to-head-flag">
                                                                                <img
                                                                                    className="team-flag"
                                                                                    src="https://staticg.Cricfeel.com/cricket_widget/sunrisers-hyderabad.png"
                                                                                    width="21px"
                                                                                    height="21px"
                                                                                    alt="team-flag"
                                                                                    loading="lazy"
                                                                                />
                                                                                SRH
                                                                            </div>
                                                                        </div>
                                                                        <div className="team-matches-type team-versus">
                                                                            VS
                                                                        </div>
                                                                        <div className="teamb-head_to_head-data">
                                                                            <div className="team-head-to-head-flag">
                                                                                KKR
                                                                                <img
                                                                                    className="team-flag"
                                                                                    src="https://staticg.Cricfeel.com/cricket_widget/kolkata-knight-riders.png"
                                                                                    width="21px"
                                                                                    height="21px"
                                                                                    alt="team-flag"
                                                                                    loading="lazy"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="team-head-comaparison-detail">
                                                                        <div className="teama-head_to_head-data">10</div>
                                                                        <div className="team-matches-type">
                                                                            Matches Played
                                                                        </div>
                                                                        <div className="teamb-head_to_head-data">10</div>
                                                                    </div>
                                                                    <div className="team-head-comaparison-detail">
                                                                        <div className="teama-head_to_head-data">4</div>
                                                                        <div className="team-matches-type">
                                                                            Matches Won
                                                                        </div>
                                                                        <div className="teamb-head_to_head-data">4</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`fantasy-team-stats-tab-panel ${TeamActiveTab(2,'team-active')}`}>
                                                                 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Start */}
                                                    <div className="team-form-section-v2">
                                                        <div className="team-form-heading">
                                                            <div className="heading-title team-form-title">
                                                                <span>Team Form</span>
                                                                <span className="last-five">(Last 5 Matches)</span>
                                                            </div>
                                                            <div className="see-all-stats">
                                                                <a href="#team_stats" style={{ fontWeight: 400 }}>
                                                                    See all Stats <i className="fa fa-angle-right" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="team-form-info">
                                                            <div className="team-form-stats-detail">
                                                                <div className="team-form-data">
                                                                    <div className="team-name">Sunrisers Hyderabad</div>
                                                                    <div className="team-matches">
                                                                        <p className="match-result  won "> W </p>
                                                                        <p className="match-result  loss ">L </p>
                                                                        <p className="match-result  loss "> L </p>
                                                                        <p className="match-result  loss ">L </p>
                                                                        <p className="match-result  won ">W </p>
                                                                    </div>
                                                                </div>
                                                                <div className="team-form-data">
                                                                    <div className="team-name">
                                                                        Kolkata Knight Riders
                                                                    </div>
                                                                    <div className="team-matches">
                                                                        <p className="match-result  loss ">L</p>
                                                                        <p className="match-result  won ">W</p>
                                                                        <p className="match-result  loss ">L</p>
                                                                        <p className="match-result  loss ">L</p>
                                                                        <p className="match-result  loss "> L </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End */}
                                                </div>
                                                {/* End */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Fantasy */}
                                    {/* Live Start */}
                                    <div className={`LiveCricketPanel ${LiveActiveTab(4, 'live-active')}`} id="live">
                                        <div className="live-score-section">
                                            <div className="score-section">
                                                <div className="score-section-header">
                                                    <div className="heading-highlight">Batters</div>
                                                    <div className="runs" title="Runs made">
                                                        R
                                                    </div>
                                                    <div className="balls" title="Balls taken">
                                                        B
                                                    </div>
                                                    <div className="fours" title="Fours">
                                                        4s
                                                    </div>
                                                    <div className="sixes" title="Sixes">
                                                        6s
                                                    </div>
                                                    <div className="strike-rate" title="Strike Rate">
                                                        SR
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="score-section-body">
                                                <div className="bind player-name">
                                                    <span className="elipse-name">Arun Poulose</span>
                                                    <span className="star">&nbsp;*</span>
                                                    <span />
                                                </div>
                                                <div className="bind runs">33</div>
                                                <div className="bind balls">24</div>
                                                <div className="bind fours">3</div>
                                                <div className="bind sixes">2</div>
                                                <div className="bind strike-rate">137.50</div>
                                            </div>
                                            <div className="score-section-body">
                                                <div className="bind player-name">
                                                    <span className="elipse-name">Rahul Sharma</span>
                                                    <span className="star">&nbsp;*</span>
                                                    <span />
                                                </div>
                                                <div className="bind runs">33</div>
                                                <div className="bind balls">24</div>
                                                <div className="bind fours">3</div>
                                                <div className="bind sixes">2</div>
                                                <div className="bind strike-rate">137.50</div>
                                            </div>
                                            <div className="score-section">
                                                <div className="score-section-header">
                                                    <div className="heading-highlight">Bowlers</div>
                                                    <div className="overs" title="Over">
                                                        O
                                                    </div>
                                                    <div className="maiden" title="Maiden">
                                                        M
                                                    </div>
                                                    <div className="runs" title="Runs">
                                                        R
                                                    </div>
                                                    <div className="wicket" title="Wicket">
                                                        W
                                                    </div>
                                                    <div className="strike-rate" title="Strike Rate">
                                                        SR
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="score-section-body">
                                                <div className="bind player-name">
                                                    <span className="elipse-name">N Afrad </span>
                                                    <span className="star">&nbsp;*</span>
                                                    <span />
                                                </div>
                                                <div className="bind over">2</div>
                                                <div className="bind maiden">0</div>
                                                <div className="bind fours">13</div>
                                                <div className="bind sixes">0</div>
                                                <div className="bind strike-rate">7.60</div>
                                            </div>
                                        </div>
                                        <div className="recent-over-section">
                                            <div className="cmc-over-section">
                                                <div className="over-section">
                                                    <div className="per-ball-section">
                                                        <span className="per-ball zero_ball">0</span>
                                                        <span className="per-ball zero_ball">0</span>
                                                        <span className="per-ball over-ball">1</span>
                                                        <span className="per-ball over-ball">1</span>
                                                        <span className="per-ball zero_ball">0</span>
                                                        <span className="per-ball dot_ball" />
                                                    </div>
                                                    <div className="over-title">This Over</div>
                                                </div>
                                                <div className="over-section">
                                                    <div className="per-ball-section">
                                                        <span className="per-ball over-ball">1wd</span>
                                                        <span className="per-ball zero_ball">0</span>
                                                        <span className="per-ball wicket_ball">W</span>
                                                        <span className="per-ball over-ball">1</span>
                                                        <span className="per-ball four_ball">4</span>
                                                        <span className="per-ball zero_ball">0</span>
                                                        <span className="per-ball zero_ball">0</span>
                                                    </div>
                                                    <div className="over-title">Last Over</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="older_data_wrapper">
                                            <div className="commentary-title">Commentary</div>
                                            <div className="first_commentary_block">
                                                <div className="box-center">
                                                    {" "}
                                                    <span className="timestamp commentary-time" />
                                                    <div className="commentary-box">
                                                        <div className="commentary">
                                                            <div className="over-commentary-bubble">12.6</div>
                                                            <div className="highlight-background-zero ball-commentary-summary">
                                                                0
                                                            </div>
                                                            <div className="commentary-text">
                                                                N Afrad to Arun Poulose, no run
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-center">
                                                    {" "}
                                                    <span className="timestamp commentary-time" />
                                                    <div className="commentary-box">
                                                        <div className="commentary">
                                                            <div className="over-commentary-bubble">12.6</div>
                                                            <div className="highlight-background-zero ball-commentary-summary">
                                                                1
                                                            </div>
                                                            <div className="commentary-text">
                                                                N Afrad to Arun Poulose, no run
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-center">
                                                    {" "}
                                                    <span className="timestamp commentary-time" />
                                                    <div className="commentary-box">
                                                        <div className="commentary">
                                                            <div className="over-commentary-bubble">12.6</div>
                                                            <div className="highlight-background-zero ball-commentary-summary four_ball">
                                                                4
                                                            </div>
                                                            <div className="commentary-text">
                                                                N Afrad to Arun Poulose, no run
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-center">
                                                    {" "}
                                                    <span className="timestamp commentary-time" />
                                                    <div className="commentary-box">
                                                        <div className="commentary">
                                                            <div className="over-commentary-bubble">12.6</div>
                                                            <div className="highlight-background-zero ball-commentary-summary wicket_ball">
                                                                W
                                                            </div>
                                                            <div className="commentary-text">
                                                                N Afrad to Arun Poulose, no run
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Commentary */}
                                                <div className="commentary-box ">
                                                    <div className="commentary-over-summary">
                                                        <div className="total-score">
                                                            <div className="overs-block">
                                                                <div className="over-value">12</div>
                                                                <span className="over-text">Overs</span>
                                                            </div>
                                                            <div className="score-block">
                                                                <span className="run-value">92</span>
                                                                <span className="wicket-value">/2</span>
                                                                <span className="run-text">Score</span>
                                                            </div>
                                                        </div>
                                                        <div className="summary-players-runs">
                                                            <div className="over-summary-runs">
                                                                <div className="over-summary-bubbles">
                                                                    <div className="highlight-background-zero run-per-ball">
                                                                        0
                                                                    </div>
                                                                    <div className="highlight-background-zero run-per-ball">
                                                                        0
                                                                    </div>
                                                                    <div className="run-per-ball">1</div>
                                                                    <div className="run-per-ball">1</div>
                                                                    <div className="highlight-background-zero run-per-ball">
                                                                        0
                                                                    </div>
                                                                    <div className="highlight-background-zero run-per-ball">
                                                                        0
                                                                    </div>
                                                                </div>
                                                                <div className="this-over-runs">
                                                                    <div className="over-runs">
                                                                        <span className="over-run-value">2</span>
                                                                        <span className="over-run-text">runs</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="players-in-over">
                                                                <div className="batsmen-list">
                                                                    <div className="single-player-row">
                                                                        <img
                                                                            className="role-icon"
                                                                            src="//staticg.Cricfeel.com/cricket_images/commentary-bat-icon.svg"
                                                                            alt="cricket bat icon"
                                                                        />
                                                                        <span className="player-value">
                                                                            Rahul Sharma-I
                                                                        </span>
                                                                        <span className="batsman-active">*</span>
                                                                        <div className="player-score">
                                                                            <span className="player-score-part-one">2</span>
                                                                            <span className="player-score-part-two">
                                                                                {" "}
                                                                                (6)
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="single-player-row">
                                                                        <img
                                                                            className="role-icon"
                                                                            src="//staticg.Cricfeel.com/cricket_images/commentary-bat-icon.svg"
                                                                            alt="cricket bat icon"
                                                                        />
                                                                        <span className="player-value">Arun Poulose</span>
                                                                        <div className="player-score">
                                                                            <span className="player-score-part-one">
                                                                                38
                                                                            </span>
                                                                            <span className="player-score-part-two">
                                                                                {" "}
                                                                                (29)
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="separator" />
                                                                <div className="bowlers-list">
                                                                    <div className="single-player-row">
                                                                        <img
                                                                            className="role-icon"
                                                                            src="//staticg.Cricfeel.com/cricket_images/commentary-ball-icon.svg"
                                                                            alt="cricket ball icon"
                                                                        />
                                                                        <span className="player-value">
                                                                            Kiran Sagar Mohan
                                                                        </span>
                                                                        <div className="player-score">
                                                                            <span className="player-score-part-one">0</span>
                                                                            <span className="player-score-part-two">
                                                                                {" "}
                                                                                /12
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End */}
                                                <div className="box-center">
                                                    {" "}
                                                    <span className="timestamp commentary-time" />
                                                    <div className="commentary-box">
                                                        <div className="commentary">
                                                            <div className="over-commentary-bubble">11.6</div>
                                                            <div className="highlight-background-zero ball-commentary-summary">
                                                                2
                                                            </div>
                                                            <div className="commentary-text">
                                                                N Afrad to Arun Poulose, no run
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-center">
                                                    {" "}
                                                    <span className="timestamp commentary-time" />
                                                    <div className="commentary-box">
                                                        <div className="commentary">
                                                            <div className="over-commentary-bubble">11.5</div>
                                                            <div className="highlight-background-zero ball-commentary-summary">
                                                                1
                                                            </div>
                                                            <div className="commentary-text">
                                                                N Afrad to Arun Poulose, no run
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Live */}
                                    {/* Score Start*/}
                                    <div className={`LiveCricketPanel ${LiveActiveTab(5, 'live-active')}`} id="score">
                                        <div className="match-players-section">
                                            <div className="match-player-div">
                                                <a
                                                    className="match-player-link player-cta hidden"
                                                    id="mom-player-link"
                                                    aria-label="match-player"
                                                    href="/player/"
                                                />
                                                <div className="left-section">
                                                    <div className="match-player-img">
                                                        <img
                                                            className="player-img"
                                                            id="match-player-img"
                                                            height={58}
                                                            width={58}
                                                            alt="player-img"
                                                            loading="lazy"
                                                            src="assets/images/img/default-player.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="right-section">
                                                    <div className="player-stats-div">
                                                        <div className="player-name-div">
                                                            <span className="match-palyer">
                                                                Player of the Match
                                                            </span>
                                                            <span
                                                                className="match-player-name"
                                                                id="player-of-match"
                                                            >
                                                                Arun Poulose
                                                            </span>
                                                        </div>
                                                        <div className="match-player-score">
                                                            <div id="batting-stat" className="player-stats-runs">
                                                                62(49)
                                                            </div>
                                                            <div
                                                                id="bowling-stat"
                                                                className="player-stats-runs hidden"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <section className="mt-3 scorecard-section-v2">
                                            <div className="one-innings-div innings-content-0">
                                                <div
                                                    className="scorecard-accordion scorecard-accordion-batsman"
                                                    id="ScoreTab"
                                                >
                                                    <div className="scorecard-accordion-title">
                                                        {" "}
                                                        Swantons Cricket Club Inn
                                                    </div>
                                                    <div className="innings-score-info">
                                                        <p className="innings-total-top">
                                                            147/9<span className="scorecard-overs"> (20)</span>
                                                        </p>
                                                        <img
                                                            className="scorecard-accordion-arrow"
                                                            width={14}
                                                            height={10}
                                                            alt="icon"
                                                            loading="lazy"
                                                            src="//staticg.Cricfeel.com/cricket_images/up-arrow-icon.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="innings-table-batting" id="ScoreTabContent">
                                                    <div className="innings-table-header">
                                                        <div className="innings-batsman">Batters</div>
                                                        <div title="Runs made">R</div>
                                                        <div title="Balls taken">B</div>
                                                        <div title="Fours">4s</div>
                                                        <div title="Sixes">6s</div>
                                                        <div
                                                            className="long-div scorecard-strike-rate"
                                                            title="Strike Rate"
                                                        >
                                                            SR
                                                        </div>
                                                    </div>
                                                    <div className="innings-table-body">
                                                        <div className="innings-table-row-holder ">
                                                            <div className="parent-row-holder">
                                                                <div className="innings-table-row inning-bat">
                                                                    <div className="innings-batsman">
                                                                        <span className="batsman-name">
                                                                            Athuljith M Anu
                                                                        </span>
                                                                    </div>
                                                                    <div className="innings-runs bold">37</div>
                                                                    <div className="innings-balls">29</div>
                                                                    <div className="innings-fours">7</div>
                                                                    <div className="innings-sixes">0</div>
                                                                    <div className="innings-strike-rate  scorecard-strike-rate">
                                                                        127.59{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="innings-bowler-row">
                                                                    <p className="innings-batsman-reason">
                                                                        c Kiran Sagar Mohan b N Afrad
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="parent-row-holder">
                                                                <div className="innings-table-row inning-bat">
                                                                    <div className="innings-batsman">
                                                                        <span className="batsman-name">Arun Poulose</span>
                                                                    </div>
                                                                    <div className="innings-runs bold">62</div>
                                                                    <div className="innings-balls">49</div>
                                                                    <div className="innings-fours">7</div>
                                                                    <div className="innings-sixes">0</div>
                                                                    <div className="innings-strike-rate  scorecard-strike-rate">
                                                                        127.59{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="innings-bowler-row">
                                                                    <p className="innings-batsman-reason">
                                                                        runout (Abdul Farhan-TK / Kiran Sagar Mohan)
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="parent-row-holder batsman-not-out">
                                                                <div className="innings-table-row inning-bat">
                                                                    <div className="innings-batsman">
                                                                        <span className="batsman-name">Arun Poulose</span>
                                                                    </div>
                                                                    <div className="innings-runs bold">62</div>
                                                                    <div className="innings-balls">49</div>
                                                                    <div className="innings-fours">7</div>
                                                                    <div className="innings-sixes">0</div>
                                                                    <div className="innings-strike-rate  scorecard-strike-rate">
                                                                        127.59{" "}
                                                                    </div>
                                                                </div>
                                                                <div className="innings-bowler-row">
                                                                    <p className="innings-batsman-reason">Not out</p>
                                                                </div>
                                                            </div>
                                                            <div className="innings-table-row-holder">
                                                                <div className="innings-table-row innings-extras-row">
                                                                    <div className="innings-extras-label">Extras</div>
                                                                    <div className="innings-balls bold">15</div>
                                                                    <div className="innings-extras-desc" />
                                                                    <div className="innings-extras-desc" />
                                                                    <div className="innings-extras-desc" />
                                                                    <div className="innings-extras-info">
                                                                        (B: 8, LB: 1, NB: 2, W: 4)
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="innings-table-row-holder innings-total-row-holder">
                                                        <div className="innings-table-row innings-total-row">
                                                            <div className="innings-total-label">
                                                                <span>TOTAL</span>
                                                                <p className="innings-total-description">
                                                                    (18.3 Ov, RR: 8.22)
                                                                </p>
                                                            </div>
                                                            <div className="innings-total-runs bold">152/3</div>
                                                            <div className="innings-balls" />
                                                            <div className="innings-total-fours">15</div>
                                                            <div className="innings-total-sixes">5</div>
                                                            <div className="innings-strike-rate" />
                                                        </div>
                                                    </div>
                                                    <div className="innings-dnb">
                                                        <div className="innings-dnb-label">Did not bat</div>
                                                        <div className="innings-dnb-info">
                                                            Shaun Pacha<span>, </span>
                                                            <a className="player-cta" href="/player/a-g-amal">
                                                                AG Amal
                                                            </a>
                                                            <span>, </span>
                                                            <a className="player-cta" href="/player/biju-narayanan">
                                                                Biju Narayanan
                                                            </a>
                                                            <span>, </span>
                                                            <a className="player-cta" href="/player/pavan-raj">
                                                                Pavan Raj
                                                            </a>
                                                            <span>, </span>
                                                            Ashik Muhammad
                                                            <span>, </span>
                                                            Ajayghosh-NS
                                                        </div>
                                                    </div>
                                                    <div className="innings-table-batting">
                                                        <div className="innings-table-header">
                                                            <div className="innings-batsman">Bowling</div>
                                                            <div title="Runs made">O</div>
                                                            <div title="Balls taken">M</div>
                                                            <div title="Fours">R</div>
                                                            <div title="Sixes">W</div>
                                                            <div
                                                                className="long-div scorecard-strike-rate"
                                                                title="Strike Rate"
                                                            >
                                                                ER
                                                            </div>
                                                            <div title="ext">EXT</div>
                                                        </div>
                                                        <div className="innings-table-body">
                                                            <div className="innings-table-row-holder ">
                                                                <div className="parent-row-holder">
                                                                    <div className="innings-table-row inning-bat">
                                                                        <div className="innings-batsman">
                                                                            <span className="batsman-name">
                                                                                <a href=""> Basil Thampi</a>
                                                                            </span>
                                                                        </div>
                                                                        <div className="innings-runs bold">4</div>
                                                                        <div className="innings-balls">0</div>
                                                                        <div className="innings-fours">29</div>
                                                                        <div className="innings-sixes">0</div>
                                                                        <div className="innings-strike-rate  scorecard-strike-rate">
                                                                            7.25
                                                                        </div>
                                                                        <div className="innings-sixes">1</div>
                                                                    </div>
                                                                </div>
                                                                <div className="parent-row-holder">
                                                                    <div className="innings-table-row inning-bat">
                                                                        <div className="innings-batsman">
                                                                            <span className="batsman-name">
                                                                                Harikrishnan D
                                                                            </span>
                                                                        </div>
                                                                        <div className="innings-runs bold">2</div>
                                                                        <div className="innings-balls">0</div>
                                                                        <div className="innings-fours">20</div>
                                                                        <div className="innings-sixes">0</div>
                                                                        <div className="innings-strike-rate  scorecard-strike-rate">
                                                                            10
                                                                        </div>
                                                                        <div className="innings-sixes">1</div>
                                                                    </div>
                                                                </div>
                                                                <div className="parent-row-holder">
                                                                    <div className="innings-table-row inning-bat">
                                                                        <div className="innings-batsman">
                                                                            <span className="batsman-name">
                                                                                Harikrishnan D
                                                                            </span>
                                                                        </div>
                                                                        <div className="innings-runs bold">2</div>
                                                                        <div className="innings-balls">0</div>
                                                                        <div className="innings-fours">20</div>
                                                                        <div className="innings-sixes">0</div>
                                                                        <div className="innings-strike-rate  scorecard-strike-rate">
                                                                            10
                                                                        </div>
                                                                        <div className="innings-sixes">1</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="innings-table-fow ">
                                                            <div className="innings-table-header">
                                                                <div className="innings-fow-batsman">
                                                                    Fall Of Wickets
                                                                </div>
                                                                <div title="Score" className="long-div">
                                                                    Score
                                                                </div>
                                                                <div title="Over" className="long-div">
                                                                    Over
                                                                </div>
                                                            </div>
                                                            <div className="innings-table-body innings-table-fow-body">
                                                                <div className="innings-table-row-holder">
                                                                    <div className="innings-table-row">
                                                                        <div className="innings-fow-batsman">
                                                                            <span className="fow-batsman">
                                                                                Athuljith M Anu
                                                                            </span>
                                                                            <p className=" innings-fow-reason">
                                                                                c Kiran Sagar Mohan b N Afrad
                                                                            </p>
                                                                        </div>
                                                                        <div className="innings-score long-div">1-81</div>
                                                                        <div className="innings-over long-div">8.1</div>
                                                                    </div>
                                                                </div>
                                                                <div className="innings-table-row-holder">
                                                                    <div className="innings-table-row">
                                                                        <div className="innings-fow-batsman">
                                                                            <span className="fow-batsman">Tejas-CM</span>
                                                                            <p className=" innings-fow-reason">b N Afrad</p>
                                                                        </div>
                                                                        <div className="innings-score long-div">2-85</div>
                                                                        <div className="innings-over long-div">10.2</div>
                                                                    </div>
                                                                </div>
                                                                <div className="innings-table-row-holder">
                                                                    <div className="innings-table-row">
                                                                        <div className="innings-fow-batsman">
                                                                            <span className="fow-batsman">
                                                                                Arun Poulose
                                                                            </span>
                                                                            <p className=" innings-fow-reason">
                                                                                runout (Abdul Farhan-TK / Kiran Sagar Mohan)
                                                                            </p>
                                                                        </div>
                                                                        <div className="innings-score long-div">
                                                                            3-133
                                                                        </div>
                                                                        <div className="innings-over long-div">17.4</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    {/* End Score */}
                                    {/* Trending */}
                                    <div id="trending" className={`LiveCricketPanel ${LiveActiveTab(7, 'live-active')}`}>
                                        <section className="trending-section mt-4">
                                            <div className="story-link-overlay ">
                                                <a href="">No one is doubting 😌</a>
                                            </div>
                                            <div className="t20-page-scroll-section">
                                                <a href="" className="scroll-section"></a>
                                                <div className="single-social-wrapper">
                                                    <a href="" className="scroll-section"></a>
                                                    <div className="tweet-container">
                                                        <a href="" className="scroll-section">
                                                            <div className="tweet-header">
                                                                <div className="tweet-user-image">
                                                                    <img
                                                                        src="assets/images/img/vzRouYvh_normal.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="tweet-user-info">
                                                                    <div className="tweet-username-block">
                                                                        <span className="tweet-user-name">Cricfeel</span>
                                                                        <div
                                                                            className="verified"
                                                                            title="Verified Profile"
                                                                        ></div>
                                                                    </div>
                                                                    <span className="tweet-user-handle">@Cricfeel</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="socila-twitter">
                                                            <a href="" className="scroll-section"></a>
                                                            <a href="">
                                                                <span>
                                                                    <i className="fab fa-twitter" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="singlemedia-tweet">
                                                        <span>King Kohli Rules</span>
                                                        <div className="hashtag-social">
                                                            <a href="">#IPL2023 #cricket #RCB</a>
                                                        </div>
                                                    </div>
                                                    <div className="tweet-images">
                                                        <img
                                                            src="assets/images/img/f1c00-16819783856414-1920.avif"
                                                            alt=""
                                                            width="100%"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="social-buttom story-user-actions">
                                                    <a id="likebutton" className="likebutton">
                                                        <i className="fa-regular fa-thumbs-up" />{" "}
                                                        <span>Like</span>
                                                    </a>
                                                    <div
                                                        id="imogies-content"
                                                        className="imogies-content social-reaction-icon"
                                                    >
                                                        <button>
                                                            <img
                                                                src="assets/images/imogies/reaction-like.svg"
                                                                alt=""
                                                            />
                                                        </button>
                                                        <button>
                                                            <img
                                                                src="assets/images/imogies/reaction-excited.svg"
                                                                alt=""
                                                            />
                                                        </button>
                                                        <button>
                                                            <img
                                                                src="assets/images/imogies/reaction-happy.svg"
                                                                alt=""
                                                            />
                                                        </button>
                                                        <button>
                                                            <img
                                                                src="assets/images/imogies/reaction-anxious.svg"
                                                                alt=""
                                                            />
                                                        </button>
                                                        <button>
                                                            <img
                                                                src="assets/images/imogies/reaction-angry.svg"
                                                                alt=""
                                                            />
                                                        </button>
                                                        <button>
                                                            <img
                                                                src="assets/images/imogies/reaction-sad.svg"
                                                                alt=""
                                                            />
                                                        </button>
                                                    </div>
                                                    <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                        <i className="fa-regular fa-comment" />{" "}
                                                        <span>Comment</span>
                                                    </a>
                                                    <a href="">
                                                        <i className="fa-solid fa-share" /> <span>Share</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    {/* End Trending */}
                                    {/* PlayingXI */}
                                    <div className={`LiveCricketPanel ${LiveActiveTab(6, 'live-active')}`} id="playingXI">
                                        <section>
                                            <div className="live-team-playinXI">
                                                <div className="display-teams" id="live_panel">
                                                    <div className="team-holder">
                                                        <span>
                                                            <a href="">
                                                                <img
                                                                    src="assets/images/flag/default-image.webp"
                                                                    className="team-img"
                                                                    alt=""
                                                                />
                                                                Team 1
                                                            </a>
                                                        </span>
                                                        <span>Vs</span>
                                                        <span>
                                                            <a href="">
                                                                Team 2
                                                                <img
                                                                    src="assets/images/flag/default-image.webp"
                                                                    className="team-img"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </span>
                                                    </div>
                                                    <div className="squads-container">
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Arif Khan</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>Arif Khan</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Ms Dhoni</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>Dinesh Kartik</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Arif Khan</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>Arif Khan</div>
                                                                    <div className="player-position">
                                                                        Bat &amp; Bowler
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="bench-title">Bench</div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="squads-holder">
                                                            <div className="player-info">
                                                                <a href="">
                                                                    <div>Virat Kohli</div>
                                                                    <div className="player-position">Bat</div>
                                                                </a>
                                                            </div>
                                                            <div className="player-info">
                                                                <a href="" className="text-align-end">
                                                                    <div>KL Rahul</div>
                                                                    <div className="player-position">Bat &amp; WT</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    {/* End  */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LiveCricketSchedule