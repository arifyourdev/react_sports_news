import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './style.css';
import './cricket.css';
import './responsive.css';
import BoxImg1 from '../images/img/virat.avif';
import BoxImg2 from '../images/img/miller.avif';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {homecarousel,homecarousel2, responsive,responsive2} from '../FunctionData.js';
import { useAuth } from '../context/auth';
 

const Home = () => {

    const [auth,setAuth] = useAuth()

    const [scheduleTab, setscheduleTab] = useState(1);
    const HandleSchedule = (index) => {
        setscheduleTab(index)
    }
    const ActiveSchedule = (index, activeClass) =>
        scheduleTab === index ? activeClass : "";

    const [tab, setTab] = useState(1);
    const ToggleTab = (index) => {
        setTab(index);
    }
    const ActiveTab = (index, className) =>
        tab === index ? className : "";

    const [Icctab, setIccTab] = useState(1);
    const IccToggleTab = (index) => {
        setIccTab(index);
    }
    const ActiveIccTab = (index, icc) =>
        Icctab === index ? icc : "";

    const [Team, setTeam] = useState(1);
    const TeamTab = (index) => {
        setTeam(index);
    }
    const ActiveTeam = (index, team) =>
        Team === index ? team : "";

     return (
        <>
            <Helmet>
                <title>Cricfeel | Home</title>
            </Helmet>
            <div>
                <h4 style={{color:"red",marginTop:"80px"}}>
                   
                </h4>
            </div>
            <Header />

            <div className='mt-5rem'>

            </div>
            
            <div className='main-section'>
                <div className="container">
                    <div className="tabbedPanels CustomContainer">
                        <ul class="tabs">
                            <li className={`${ActiveSchedule(1, 'active')}`} onClick={() => HandleSchedule(1)}>Featured</li>
                            <li className={`${ActiveSchedule(2, 'active')}`} onClick={() => HandleSchedule(2)}>IPL 2023</li>
                            <li>WPL</li>
                            <li>WI vs SA</li>
                            <li>PSL</li>
                            <li>NZ vs SL</li>
                            <li>BAN vs IRE</li>
                            <li>ECS T10 Gibraltar</li>
                            <div class="hero_fix_tag"> <Link to="/cricket-schedule"> <span id="fix_a_tag" class="fix_home_tag">All Fixtures <i class="fa fa-angle-right" style={{ FontSize: "12px" }}></i></span></Link></div>
                        </ul>
                        <div className="panelContainer home-panelContainer">
                            <div id="Featured" className={`home-panel ${ActiveSchedule(1, 'home-active')}`}>
                            <Carousel responsive={homecarousel} className='for-button-class'>
                                    <div className="item home-item">
                                        <Link to="/live-cricket-score" className="keramasterBox">
                                            <div className="tabBox">
                                                <div className="tabBoxPadding">
                                                    <div className="matchShedule">
                                                        <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                                    </div>
                                                    <div className="keeda-cricket-widget">
                                                        <div className="keeda-series">
                                                            <div className="keedaFlags"><img src="assets/images/flag/lk.svg"
                                                                alt="" /> <span> SL</span></div>
                                                            <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                        </div>
                                                        <div className="keeda-series">
                                                            <div className="keedaFlags"><img src="assets/images/flag/nz.svg"
                                                                alt="" /> <span> NZ</span></div>
                                                            <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                        </div>
                                                        <div className="live keeda-descript">
                                                            <span><button className="Livebtn">Live</button> NZ need 78 runs in
                                                                26.4 remaining over</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tabBoxfooter">
                                                    <Link to="/cricket-schedule">Schedule <i
                                                        className="fa-solid fa-angle-right"></i></Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Carousel>
                            </div>
                            <div id="Featured" className={`home-panel ${ActiveSchedule(2, 'home-active')}`}>
                                <Carousel responsive={homecarousel2} className='for-button-class'>
                                    <div className="item home-item">
                                        <Link to="/live-cricket-score" className="keramasterBox">
                                            <div className="tabBox">
                                                <div className="tabBoxPadding">
                                                    <div className="matchShedule">
                                                        <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                                    </div>
                                                    <div className="keeda-cricket-widget">
                                                        <div className="keeda-series">
                                                            <div className="keedaFlags"><img src="assets/images/flag/lk.svg"
                                                                alt="" /> <span> SL</span></div>
                                                            <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                        </div>
                                                        <div className="keeda-series">
                                                            <div className="keedaFlags"><img src="assets/images/flag/nz.svg"
                                                                alt="" /> <span> NZ</span></div>
                                                            <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                        </div>
                                                        <div className="live keeda-descript">
                                                            <span><button className="Livebtn">Live</button> NZ need 78 runs in
                                                                26.4 remaining over</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tabBoxfooter">
                                                    <Link to="/cricket-schedule">Schedule <i
                                                        className="fa-solid fa-angle-right"></i></Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-200'>
                <div className='container CustomContainer'>
                    <div className='heading'>
                        <h2>Cricket</h2>
                    </div>
                    <Carousel responsive={responsive} className='for-button-class'>
                        <Link to="/cricket-schedule" class="buttons-items">Schedule</Link>
                        <Link to="/ipl" class="buttons-items">IPL 2023</Link>
                        <Link to="/cricket-single-page" class="buttons-items">NZ vs PAK</Link>
                        <Link to="/cricket-single-page" class="buttons-items">GT vs CSK</Link>
                        <Link to="/cricket-single-page" class="buttons-items">BAN vs IRE</Link>
                        <Link to="" class="buttons-items">ECS T10 Gibraltar</Link>
                        <Link to="" class="buttons-items">Plunket Sheild</Link>
                        <Link to="" class="buttons-items">ICCA Arabian T20 </Link>
                        <Link to="" class="buttons-items">IPL 2023</Link>
                        <Link to="" class="buttons-items">IPL 2023</Link>
                        <Link to="" class="buttons-items">IPL 2023</Link>
                    </Carousel>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <Link className="sports-feed-item" to="cricket-news-breaking">
                                        <img src={BoxImg1} alt="Viral" />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">Picking the best fielder in each IPL 2023 team
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="feed-item-secondary">
                                        <Link className="cover-link-tag" to="cricket-news-breaking">
                                            <div className="sports-feed-item-secondary-element">
                                                <img className="feed-element-img lazy-img-bg"
                                                    src={BoxImg2} alt="Miller" />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">5 star players who are missing the start
                                                        of IPL 2023</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="feed-item-secondary">
                                        <Link className="cover-link-tag" to="/cricket-news-breaking">
                                            <div className="sports-feed-item-secondary-element">
                                                <img className="feed-element-img lazy-img-bg"
                                                    src={BoxImg2} alt="Miller" />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">5 star players who are missing the start
                                                        of IPL 2023</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="feed-item-secondary">
                                        <Link className="cover-link-tag" to="/cricket-news-breaking">
                                            <div className="sports-feed-item-secondary-element">
                                                <img className="feed-element-img lazy-img-bg"
                                                    src={BoxImg2} alt="Miller" />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">5 star players who are missing the start
                                                        of IPL 2023</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="more-news">
                                        <Link to="cricket-news-breaking" className="view-more-cta">More News</Link>
                                    </div>

                                </div>
                            </section>
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <Link className="sports-feed-item" to="/cricket-news-breaking">
                                        <img src={BoxImg1} alt="Viral" />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">Picking the best fielder in each IPL 2023 team
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="feed-item-secondary">
                                        <Link className="cover-link-tag" to="/cricket-news-breaking">
                                            <div className="sports-feed-item-secondary-element">
                                                <img className="feed-element-img lazy-img-bg"
                                                    src={BoxImg2} alt="Miller" />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">5 star players who are missing the start
                                                        of IPL 2023</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="feed-item-secondary">
                                        <Link className="cover-link-tag" to="/cricket-news-breaking">
                                            <div className="sports-feed-item-secondary-element">
                                                <img className="feed-element-img lazy-img-bg"
                                                    src={BoxImg2} alt="Miller" />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">5 star players who are missing the start
                                                        of IPL 2023</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="feed-item-secondary">
                                        <Link className="cover-link-tag" to="/cricket-news-breaking">
                                            <div className="sports-feed-item-secondary-element">
                                                <img className="feed-element-img lazy-img-bg"
                                                    src={BoxImg2} alt="Miller" />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">5 star players who are missing the start
                                                        of IPL 2023</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="more-news">
                                        <Link to="/cricket-news-breaking" className="view-more-cta">More News</Link>
                                    </div>

                                </div>
                            </section>
                        </div>
                        <div className='col-lg-4'>

                            <section className="cricket-points-table">
                                <div className="points-table-panel">
                                    <div className="panel-header">
                                        <div className="panel-heading">IPL 2023 Points Table</div>
                                        <a href="/points-table">
                                            Full Table <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                    <div className="widget--tournament-points-table">
                                        <table className="tournament-points-table">
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        <div className="ta-l">Pos</div>
                                                    </th>
                                                    <th>
                                                        <div className="ta-l">Pos</div>
                                                    </th>
                                                    <th>
                                                        <div className="ta-l">P</div>
                                                    </th>
                                                    <th>
                                                        <div className="ta-l">W</div>
                                                    </th>
                                                    <th>
                                                        <div className="ta-l">L</div>
                                                    </th>
                                                    <th>
                                                        <div className="ta-l">D</div>
                                                    </th>
                                                    <th>
                                                        <div className="ta-l">NRR</div>
                                                    </th>
                                                    <th>
                                                        <div className="ta-l">PTS</div>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <a href="">
                                                            <div className="points-table-team">
                                                                <img
                                                                    src="assets/images/flag/rajasthan-royals.webp"
                                                                    alt=""
                                                                />
                                                                <span>RR</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td>5</td>
                                                    <td>4</td>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>1.354</td>
                                                    <td>8</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <a href="">
                                                            <div className="points-table-team">
                                                                <img
                                                                    src="assets/images/flag/lucknow-super-giants.webp"
                                                                    alt=""
                                                                />
                                                                <span>LSG</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td>5</td>
                                                    <td>3</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>.754</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <a href="">
                                                            <div className="points-table-team">
                                                                <img
                                                                    src="assets/images/flag/chennai-super-kings.webp"
                                                                    alt=""
                                                                />
                                                                <span>CSK</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td>5</td>
                                                    <td>3</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>2.354</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <a href="">
                                                            <div className="points-table-team">
                                                                <img src="assets/images/flag/gujarat-titans.webp" alt="" />
                                                                <span>GT</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td>5</td>
                                                    <td>3</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>.354</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>
                                                        <a href="">
                                                            <div className="points-table-team">
                                                                <img src="assets/images/flag/kings-xi-punjab.webp" alt="" />
                                                                <span>PBKS</span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td>5</td>
                                                    <td>3</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>.354</td>
                                                    <td>6</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                            <section className="cap-holder-container mb-3">
                                <div className="caps-holder">
                                    <div className="ipl-caps-box">
                                        <Link to="/orange-cap" className="caps-tag">
                                            <div className="player-details-holder">
                                                <img src="assets/images/img/85afe-16741988874800.avif" alt="" />
                                                <div className="player-team-name-holder">
                                                    <div className="player-name">F Plessis</div>
                                                    <div className="player-team">RCB</div>
                                                </div>
                                            </div>
                                            <div className="orange-cap-holder">
                                                <img
                                                    className="ipl-cap"
                                                    src="assets/images/img/ipl-orange-cap.webp"
                                                    height={36}
                                                    width={59}
                                                    alt="orange-cap-icon"
                                                />
                                            </div>
                                            <div className="runs-scored">259 Runs</div>
                                        </Link>
                                    </div>
                                    <div className="ipl-caps-box">
                                        <Link to="/ipl-purple-cap" className="caps-tag">
                                            <div className="player-details-holder">
                                                <img src="assets/images/img/4c698-16762829465214-1920.avif" alt="" />
                                                <div className="player-team-name-holder">
                                                    <div className="player-name">Y Chahal</div>
                                                    <div className="player-team">RR</div>
                                                </div>
                                            </div>
                                            <div className="orange-cap-holder">
                                                <img className="ipl-cap"
                                                    src="assets/images/img/ipl-purple-cap.webp"
                                                    height={36}
                                                    width={59}
                                                    alt="orange-cap-icon"
                                                />
                                            </div>
                                            <div className="runs-scored">11 Wicket</div>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <section className="sportNewsSection">
                                <ul className="sport-news">
                                    <li className={` ${ActiveTab(1, 'active')}`} onClick={() => ToggleTab(1)}> Latest News </li>
                                    <li className={` ${ActiveTab(2, 'active')}`} onClick={() => ToggleTab(2)}> Most Popular </li>
                                </ul>
                                <div className="NewPanel">
                                    <div id="latestNews" className={`sport-news-panel ${ActiveTab(1, 'news-active')}`}>
                                        <div className="newtabContent">
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">1</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">2</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">3</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">4</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">5</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div id="mostpopular" className={`sport-news-panel ${ActiveTab(2, 'news-active')}`}>
                                        <div className="newtabContent">
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">1</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">2</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">3</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">4</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        “He’s back smiling” – Trent Alexander-Arnold offers positive
                                                        update on ‘exciting’ Liverpool star
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="cricket-points-table">
                                <div className="points-table-panel">
                                    <div className="panel-header">
                                        <div className="panel-heading">ICC Rankings</div>
                                        <Link to="/points-table">
                                            View All <i className="fa fa-angle-right" />
                                        </Link>
                                    </div>
                                    <div className="icc-rankings">
                                        <ul className="icc-rankings-tab">
                                            <li className={` ${ActiveIccTab(1, 'active')}`} onClick={() => IccToggleTab(1)}> T20 Ranking </li>
                                            <li className={` ${ActiveIccTab(2, 'active')}`} onClick={() => IccToggleTab(2)}> ODI Ranking </li>
                                            <li className={` ${ActiveIccTab(3, 'active')}`} onClick={() => IccToggleTab(3)}>Test Ranking </li>
                                        </ul>
                                        <div className="icc-ranking-container">
                                            {/* T20 */}
                                            <div id="t20ranking" className={`icc-category-tabs-panel ${ActiveIccTab(1, 'icc-active')}`}>
                                                <div className="icc-catagory">
                                                    <ul className="icc-category-tabs">
                                                        <li className={` ${ActiveTeam(1, 'active')}`} onClick={() => TeamTab(1)}>Team</li>
                                                        <li className={` ${ActiveTeam(2, 'active')}`} onClick={() => TeamTab(2)}>Batting</li>
                                                        <li className={` ${ActiveTeam(3, 'active')}`} onClick={() => TeamTab(3)}>Bowling</li>
                                                        <li className={` ${ActiveTeam(4, 'active')}`} onClick={() => TeamTab(4)}>All Rounder</li>
                                                    </ul>
                                                    <div className="icc-category-container">
                                                        {/* Team */}
                                                        <div id="team" className={`icc-category-tabs-panel ${ActiveTeam(1, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/india-national-cricket-team.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">India</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>267</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/england-cricket.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">England</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>261</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/pakistan-cricket-team.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">Pakistan</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/south-africa.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">South Africa</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/new-zealand-2.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">New Zealand</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>252</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Team */}
                                                        {/* Batting */}
                                                        <div id="batting" className={`icc-category-tabs-panel ${ActiveTeam(2, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9fe3a-16758644119163-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">SouryaKumar Yadav</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">IND</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>906</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/a2e07-16760084941787-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Mohammad Rizwan</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>811</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Batting */}
                                                        {/* Bowling */}
                                                        <div id="bowling" className={`icc-category-tabs-panel ${ActiveTeam(3, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9f61e-16762780361656-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Rashid Khan</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">AFG</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>710</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/904a8-16752319492346-1920.jpg"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Fazalhaq Farooqi</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">AFG</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>692</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Bowling */}
                                                        {/* All Rounder */}
                                                        <div id="allrounder" className={`icc-category-tabs-panel ${ActiveTeam(4, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9e252-16732607910432.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Shakib Al Hasan</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">BAN</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>269</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/5f9be-16766303987094-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Hardik Pandya</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">IND</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>692</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End All Rounder */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End T20 */}
                                            {/* ODI Start */}
                                            <div id="odiranking" className={`icc-category-tabs-panel ${ActiveIccTab(2, 'icc-active')}`}>
                                                <div className="icc-catagory">
                                                    <ul className="icc-category-tabs">
                                                        <li className={`${ActiveTeam(1, 'active')}`} onClick={() => TeamTab(1)}>Team</li>
                                                        <li className={`${ActiveTeam(2, 'active')}`} onClick={() => TeamTab(2)}>Batting</li>
                                                        <li className={`${ActiveTeam(3, 'active')}`} onClick={() => TeamTab(3)}>Bowling</li>
                                                        <li className={`${ActiveTeam(4, 'active')}`} onClick={() => TeamTab(4)}>All Rounder</li>
                                                    </ul>
                                                    <div className="icc-category-container">
                                                        {/* Team */}
                                                        <div id="team2" className={`icc-category-tabs-panel ${ActiveTeam(1, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/australian-cricket-team.avif"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">Australia</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/new-zealand-2.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">New Zealand</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>252</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/india-national-cricket-team.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">India</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>267</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/england-cricket.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">England</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>261</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/pakistan-cricket-team.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">Pakistan</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Team */}
                                                        {/* Batting */}
                                                        <div id="batting2" className={`icc-category-tabs-panel ${ActiveTeam(2, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/19252-15559277464610-800.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Rassie van der Dussen</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>777</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9fe3a-16758644119163-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">SouryaKumar Yadav</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">IND</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>887</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Batting */}
                                                        {/* Bowling */}
                                                        <div id="bowling2" className={`icc-category-tabs-panel ${ActiveTeam(3, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9f61e-16762780361656-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Rashid Khan</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">AFG</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>710</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/904a8-16752319492346-1920.jpg"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Fazalhaq Farooqi</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">AFG</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>692</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Bowling */}
                                                        {/* All Rounder */}
                                                        <div id="allrounder2" className={`icc-category-tabs-panel ${ActiveTeam(4, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9e252-16732607910432.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Shakib Al Hasan</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">BAN</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>269</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/5f9be-16766303987094-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Hardik Pandya</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">IND</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>692</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End All Rounder */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End ODI */}
                                            {/* Test */}
                                            <div id="testranking" className={`icc-category-tabs-panel ${ActiveIccTab(3, 'icc-active')}`}>
                                                <div className="icc-catagory">
                                                    <ul className="icc-category-tabs">
                                                        <li className={`${ActiveTeam(1, 'active')}`} onClick={() => TeamTab(1)}>Team</li>
                                                        <li className={`${ActiveTeam(2, 'active')}`} onClick={() => TeamTab(2)}>Batting</li>
                                                        <li className={`${ActiveTeam(3, 'active')}`} onClick={() => TeamTab(3)}>Bowling</li>
                                                        <li className={`${ActiveTeam(4, 'active')}`} onClick={() => TeamTab(4)}>All Rounder</li>
                                                    </ul>
                                                    <div className="icc-category-container">
                                                        {/* Team */}
                                                        <div id="team3" className={`icc-category-tabs-panel ${ActiveTeam(1, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/australian-cricket-team.avif"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">Australia</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/new-zealand-2.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">New Zealand</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>252</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/india-national-cricket-team.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">India</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>267</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/england-cricket.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">England</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>261</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value_">
                                                                                    <img
                                                                                        src="assets/images/img/pakistan-cricket-team.webp"
                                                                                        width={40}
                                                                                        height={30}
                                                                                        alt=""
                                                                                    />
                                                                                    <span>
                                                                                        <a href="">Pakistan</a>
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Team */}
                                                        {/* Batting */}
                                                        <div id="batting3" className={`icc-category-tabs-panel ${ActiveTeam(2, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/19252-15559277464610-800.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Rassie van der Dussen</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>777</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9fe3a-16758644119163-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">SouryaKumar Yadav</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">IND</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>887</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Batting */}
                                                        {/* Bowling */}
                                                        <div id="bowling3" className={`icc-category-tabs-panel ${ActiveTeam(3, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9f61e-16762780361656-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Rashid Khan</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">AFG</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>710</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/904a8-16752319492346-1920.jpg"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Fazalhaq Farooqi</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">AFG</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>692</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End Bowling */}
                                                        {/* All Rounder */}
                                                        <div id="allrounder3" className={`icc-category-tabs-panel ${ActiveTeam(4, 'icc-active')}`}>
                                                            <div className="ranking-table">
                                                                <table className="icc-ranking-table">
                                                                    <tbody>
                                                                        <tr className="icc-ranking-ttr">
                                                                            <th className="rank-header">
                                                                                <div className="table-header">Rank</div>
                                                                            </th>
                                                                            <th>
                                                                                <div className="left-align player-team">Team</div>
                                                                            </th>
                                                                            <th className="rating-header">
                                                                                <div className="table-header">Rating</div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/9e252-16732607910432.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Shakib Al Hasan</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">BAN</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>269</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/5f9be-16766303987094-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Hardik Pandya</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">IND</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>692</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/35e25-16758651589922-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Babar Azam</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">PAk</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>255</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>4</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/298d5-16762766866063-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Aiden Markram</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">SA</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>254</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>5</td>
                                                                            <td>
                                                                                <div className="name-value">
                                                                                    <div className="bat-img">
                                                                                        <img
                                                                                            src="assets/images/img/51acd-16762835627229-1920.avif"
                                                                                            width={40}
                                                                                            height={30}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
                                                                                    <div className="player-team-names">
                                                                                        <span>
                                                                                            <a href="">Devon Conway</a>
                                                                                        </span>
                                                                                        <div className="player-country-value">NZ</div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>745</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        {/* End All Rounder */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Test */}
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
            {/* Trending */}
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="trending-section">
                        <div className="tren-header">
                            <div className="trend_title">#Trending</div>
                            <Link to="/social-all-news">
                                View All <i className="fa fa-angle-right" />
                            </Link>
                        </div>
                        <Carousel responsive={responsive2} className='for-button-class'>
                            <div className="item">
                                <div className="t20-page-scroll-section">
                                    <Link to="/social-all-news" className="scroll-section"></Link>
                                    <div className="social-wrapper">
                                        <Link to="/social-all-news" className="scroll-section"></Link>
                                        <div className="tweet-container">
                                            <Link href="social-all-news" className="scroll-section">
                                                <div className="tweet-header">
                                                    <div className="tweet-user-image">
                                                        <img src="assets/images/img/vzRouYvh_normal.jpg" alt="" />
                                                    </div>
                                                    <div className="tweet-user-info">
                                                        <div className="tweet-username-block">
                                                            <span className="tweet-user-name">Cricfeel</span>
                                                            <div className="verified" title="Verified Profile" />
                                                        </div>
                                                        <span className="tweet-user-handle">@Cricfeel</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="socila-twitter">
                                                <Link
                                                    to="/social-all-news"
                                                    className="scroll-section"
                                                ></Link>
                                                <Link to="/social-all-news">
                                                    <span>
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="tweet-body media-tweet">
                                            <span> Here are the probable playing XIs and substitutes for the
                                                upcoming match between PBKS &amp; RCB 🏏
                                                <br /> <Link to="">...</Link>
                                            </span>
                                        </div>
                                        <div className="tweet-images-container">
                                            <img src="assets/images/img/4914c-16819714887136-1920.avif" alt="" />
                                        </div>
                                        <div className="social-reaction-info">
                                            <div className="reaction-icon-holder">
                                                <a id="likebutton" className="likebutton">
                                                    <i className="fa-regular fa-thumbs-up" />{" "}
                                                    <span>Like</span>
                                                </a>
                                                <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                    <i className="fa-regular fa-comment" />
                                                    <span> Comment</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="t20-page-scroll-section">
                                    <Link to="/social-all-news" className="scroll-section"></Link>
                                    <div className="social-wrapper">
                                        <Link to="/social-all-news" className="scroll-section"></Link>
                                        <div className="tweet-container">
                                            <Link href="social-all-news" className="scroll-section">
                                                <div className="tweet-header">
                                                    <div className="tweet-user-image">
                                                        <img src="assets/images/img/vzRouYvh_normal.jpg" alt="" />
                                                    </div>
                                                    <div className="tweet-user-info">
                                                        <div className="tweet-username-block">
                                                            <span className="tweet-user-name">Cricfeel</span>
                                                            <div className="verified" title="Verified Profile" />
                                                        </div>
                                                        <span className="tweet-user-handle">@Cricfeel</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="socila-twitter">
                                                <Link
                                                    to="/social-all-news"
                                                    className="scroll-section"
                                                ></Link>
                                                <Link to="/social-all-news">
                                                    <span>
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="tweet-body media-tweet">
                                            <span> Here are the probable playing XIs and substitutes for the
                                                upcoming match between PBKS &amp; RCB 🏏
                                                <br /> <Link to="">...</Link>
                                            </span>
                                        </div>
                                        <div className="tweet-images-container">
                                            <img src="assets/images/img/4914c-16819714887136-1920.avif" alt="" />
                                        </div>
                                        <div className="social-reaction-info">
                                            <div className="reaction-icon-holder">
                                                <a id="likebutton" className="likebutton">
                                                    <i className="fa-regular fa-thumbs-up" />{" "}
                                                    <span>Like</span>
                                                </a>
                                                <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                    <i className="fa-regular fa-comment" />
                                                    <span> Comment</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="t20-page-scroll-section">
                                    <Link to="/social-all-news" className="scroll-section"></Link>
                                    <div className="social-wrapper">
                                        <Link to="/social-all-news" className="scroll-section"></Link>
                                        <div className="tweet-container">
                                            <Link href="social-all-news" className="scroll-section">
                                                <div className="tweet-header">
                                                    <div className="tweet-user-image">
                                                        <img src="assets/images/img/vzRouYvh_normal.jpg" alt="" />
                                                    </div>
                                                    <div className="tweet-user-info">
                                                        <div className="tweet-username-block">
                                                            <span className="tweet-user-name">Cricfeel</span>
                                                            <div className="verified" title="Verified Profile" />
                                                        </div>
                                                        <span className="tweet-user-handle">@Cricfeel</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="socila-twitter">
                                                <Link
                                                    to="/social-all-news"
                                                    className="scroll-section"
                                                ></Link>
                                                <Link to="/social-all-news">
                                                    <span>
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="tweet-body media-tweet">
                                            <span> Here are the probable playing XIs and substitutes for the
                                                upcoming match between PBKS &amp; RCB 🏏
                                                <br /> <Link to="">...</Link>
                                            </span>
                                        </div>
                                        <div className="tweet-images-container">
                                            <img src="assets/images/img/4914c-16819714887136-1920.avif" alt="" />
                                        </div>
                                        <div className="social-reaction-info">
                                            <div className="reaction-icon-holder">
                                                <a id="likebutton" className="likebutton">
                                                    <i className="fa-regular fa-thumbs-up" />{" "}
                                                    <span>Like</span>
                                                </a>
                                                <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                    <i className="fa-regular fa-comment" />
                                                    <span> Comment</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="t20-page-scroll-section">
                                    <Link to="/social-all-news" className="scroll-section"></Link>
                                    <div className="social-wrapper">
                                        <Link to="/social-all-news" className="scroll-section"></Link>
                                        <div className="tweet-container">
                                            <Link href="social-all-news" className="scroll-section">
                                                <div className="tweet-header">
                                                    <div className="tweet-user-image">
                                                        <img src="assets/images/img/vzRouYvh_normal.jpg" alt="" />
                                                    </div>
                                                    <div className="tweet-user-info">
                                                        <div className="tweet-username-block">
                                                            <span className="tweet-user-name">Cricfeel</span>
                                                            <div className="verified" title="Verified Profile" />
                                                        </div>
                                                        <span className="tweet-user-handle">@Cricfeel</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="socila-twitter">
                                                <Link
                                                    to="/social-all-news"
                                                    className="scroll-section"
                                                ></Link>
                                                <Link to="/social-all-news">
                                                    <span>
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="tweet-body media-tweet">
                                            <span> Here are the probable playing XIs and substitutes for the
                                                upcoming match between PBKS &amp; RCB 🏏
                                                <br /> <Link to="">...</Link>
                                            </span>
                                        </div>
                                        <div className="tweet-images-container">
                                            <img src="assets/images/img/4914c-16819714887136-1920.avif" alt="" />
                                        </div>
                                        <div className="social-reaction-info">
                                            <div className="reaction-icon-holder">
                                                <a id="likebutton" className="likebutton">
                                                    <i className="fa-regular fa-thumbs-up" />{" "}
                                                    <span>Like</span>
                                                </a>
                                                <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                    <i className="fa-regular fa-comment" />
                                                    <span> Comment</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="t20-page-scroll-section">
                                    <Link to="/social-all-news" className="scroll-section"></Link>
                                    <div className="social-wrapper">
                                        <Link to="/social-all-news" className="scroll-section"></Link>
                                        <div className="tweet-container">
                                            <Link href="social-all-news" className="scroll-section">
                                                <div className="tweet-header">
                                                    <div className="tweet-user-image">
                                                        <img src="assets/images/img/vzRouYvh_normal.jpg" alt="" />
                                                    </div>
                                                    <div className="tweet-user-info">
                                                        <div className="tweet-username-block">
                                                            <span className="tweet-user-name">Cricfeel</span>
                                                            <div className="verified" title="Verified Profile" />
                                                        </div>
                                                        <span className="tweet-user-handle">@Cricfeel</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="socila-twitter">
                                                <Link
                                                    to="/social-all-news"
                                                    className="scroll-section"
                                                ></Link>
                                                <Link to="/social-all-news">
                                                    <span>
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="tweet-body media-tweet">
                                            <span> Here are the probable playing XIs and substitutes for the
                                                upcoming match between PBKS &amp; RCB 🏏
                                                <br /> <Link to="">...</Link>
                                            </span>
                                        </div>
                                        <div className="tweet-images-container">
                                            <img src="assets/images/img/4914c-16819714887136-1920.avif" alt="" />
                                        </div>
                                        <div className="social-reaction-info">
                                            <div className="reaction-icon-holder">
                                                <a id="likebutton" className="likebutton">
                                                    <i className="fa-regular fa-thumbs-up" />{" "}
                                                    <span>Like</span>
                                                </a>
                                                <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                    <i className="fa-regular fa-comment" />
                                                    <span> Comment</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </section>
            {/* End Trending */}

            <section className="mt-200">
                <div className="container CustomContainer">
                    <div className="heading">
                        <h2>Fantasy Cricket</h2>
                    </div>
                    <div className="scroll-bar-keeda">
                        <ul>
                            <li>
                                <Link className='anchor'>IPL 2023</Link>
                            </li>
                            <li>
                                <Link className='anchor'>IPL 2023</Link>
                            </li>
                            <li>
                                <Link className='anchor'>IPL 2023</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <Link className="sports-feed-item" to="#">
                                        <img
                                            src="assets/images/img/8e9a8-16811038457427-1920.avif"
                                            alt="Viral"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                Picking the best fielder in each IPL 2023 team
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="feed-item-secondary">
                                        <Link className="cover-link-tag" to="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/miller.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <Link className="cover-link-tag" to="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/miller.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/miller.avif"
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
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img src="assets/images/img/virat.avif" alt="Viral" />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                Picking the best fielder in each IPL 2023 team
                                            </div>
                                        </div>
                                    </a>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/miller.avif"
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
                                                    src="assets/images/img/miller.avif"
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
                                                    src="assets/images/img/miller.avif"
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
                        </div>
                        <div className="col-lg-4">
                            <section className="sportNewsSection">
                                <ul className="sport-news">
                                    <li style={{ background: "#D32F2F", color: "#fff" }}>
                                        <a>
                                            Latest News
                                        </a>
                                    </li>
                                </ul>
                                <div className="NewPanel">
                                    <div className="sport-news-panels">
                                        <div className="newtabContent">
                                            <a className="newAnchorTag" href="#">
                                                <div className="news-index">1</div>
                                                <div className="news-title-container">
                                                    <div className="news-detail">
                                                        He 's back smiling” – Trent Alexander-Arnold offers
                                                        positive update on ‘exciting’ Liverpool star
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
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-200">
                <div className="container CustomContainer">
                    <div className="heading">
                        <h2>Tennis</h2>
                    </div>
                    <div className="scroll-bar-keeda">
                        <ul>
                            <li>
                                <Link className='anchor'>Tennis Calender</Link>
                            </li>
                            <li>
                                <Link className='anchor'>Monte Carlo Masters 2023</Link>
                            </li>
                            <li>
                                <Link className='anchor'>ATP Ranking</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img
                                            src="assets/images/img/e3bf9-16817798486414-1920.avif"
                                            alt="Viral"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                Novak Djokovic: "The elbow is not in ideal condition"
                                            </div>
                                        </div>
                                    </a>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/88004-16817815698220-1920.avif"
                                                    alt="img"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        The charismatic Carlos Alcaraz taking over after Rafael
                                                        Nadal leaves is "really incredible", says Pablo Andujar
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
                                                    src="assets/images/img/afca4-16814689824701-1920.avif"
                                                    alt="imfd"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        The charismatic Carlos Alcaraz taking over after Rafael
                                                        Nadal leaves is "really incredible", says Pablo Andujar
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
                                                    src="assets/images/img/miller.avif"
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
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img
                                            src="assets/images/img/6bf13-16817130129991-1920.avif"
                                            alt="Paula Badosa"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                Paula Badosa says she will take Aryna Sabalenka for a car ride
                                                if she wins Stuttgart title
                                            </div>
                                        </div>
                                    </a>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/3c51c-16816655264128-1920.avif"
                                                    alt="3c51"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        Holger Rune not looking to follow in Daniil Medvedev's
                                                        footsteps when it comes to dealing with hostile crowds
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
                                                    alt="img"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        Holger Rune not looking to follow in Daniil Medvedev's
                                                        footsteps when it comes to dealing with hostile crowds
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
                                                    alt="img"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        Holger Rune not looking to follow in Daniil Medvedev's
                                                        footsteps when it comes to dealing with hostile crowds
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-4">
                            <section className="sportNewsSection">
                                <ul className="sport-news">
                                    <li style={{ background: "#D32F2F", color: "#fff" }}>
                                        <a>
                                            Latest News
                                        </a>
                                    </li>
                                </ul>
                                <div className="NewPanel">
                                    <div className="sport-news-panels">
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

export default Home