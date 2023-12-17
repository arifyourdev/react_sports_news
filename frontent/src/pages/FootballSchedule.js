import React, { useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

const FootballSchedule = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Football Schedule</title>
            </Helmet>
            <Header />
            <div className="breadcrumb-container bc-2">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><a href=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></a></li>
                            <li><a href="">Football <i class="fa fa-angle-right"></i></a></li>
                            <li><a href="">Football Schedule </a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="CricketmasterSection">
                <div className="container">
                    <div className="CustomContainer">
                        <div className="row">
                            <div className="col-lg-8 mb-5">
                                <section>
                                    <div className="keeda_football_widget">
                                        <div className="keeda_widget_header00">
                                            Live Football Scores (India Standard Time)
                                        </div>
                                        <div className="keeda_widget_match_listing">
                                            {/* Start */}
                                            <span className="keeda_football_league_title">
                                                <a href="">Australian A-League</a>
                                            </span>
                                            <a href="live-football-score.php">
                                                <div className="keeda_football_match_list">
                                                    <span>Tomorrow</span>
                                                    <div className="keeda_widget_team_group">
                                                        <img src="assets/images/newcastle-jets.webp" alt="" />
                                                        NJ
                                                    </div>
                                                    <span>03:15 PM</span>
                                                    <div className="keeda_widget_team_group">
                                                        MAC
                                                        <img src="assets/images/macarthur-fc.webp" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            {/* End */}
                                            {/* Start */}
                                            <span className="keeda_football_league_title">
                                                <a href="">UEFA Champions League 2022-23</a>
                                            </span>
                                            <a href="live-football-score.php">
                                                <div className="keeda_football_match_list">
                                                    <span>Tomorrow</span>
                                                    <div className="keeda_widget_team_group">
                                                        <img src="assets/images/newcastle-jets.webp" alt="" />
                                                        <b>FT</b>
                                                    </div>
                                                    <span className="goal-points">1 - 0</span>
                                                    <div className="keeda_widget_team_group">
                                                        MAC
                                                        <img src="assets/images/macarthur-fc.webp" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="">
                                                <div className="keeda_football_match_list">
                                                    <span>Tomorrow</span>
                                                    <div className="keeda_widget_team_group">
                                                        <img src="assets/images/newcastle-jets.webp" alt="" />
                                                        <b>FT</b>
                                                    </div>
                                                    <span className="goal-points">2 - 0</span>
                                                    <div className="keeda_widget_team_group">
                                                        MAC
                                                        <img src="assets/images/macarthur-fc.webp" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            {/* End */}
                                            {/* Start */}
                                            <span className="keeda_football_league_title">
                                                <a href="">EPL 2022-23</a>
                                            </span>
                                            <a href="">
                                                <div className="keeda_football_match_list">
                                                    <span>15 April</span>
                                                    <div className="keeda_widget_team_group">
                                                        <img src="assets/images/newcastle-jets.webp" alt="" />
                                                        CFC
                                                    </div>
                                                    <span className="goal-points"> 07:30 PM</span>
                                                    <div className="keeda_widget_team_group">
                                                        BHA
                                                        <img src="assets/images/macarthur-fc.webp" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            {/* End */}
                                            {/* Start */}
                                            <span className="keeda_football_league_title">
                                                <a href="">Serie A 2022-23</a>
                                            </span>
                                            <a href="">
                                                <div className="keeda_football_match_list">
                                                    <span>Tomorrow</span>
                                                    <div className="keeda_widget_team_group">
                                                        <img src="assets/images/newcastle-jets.webp" alt="" />
                                                        <b>FT</b>
                                                    </div>
                                                    <span className="goal-points">1 - 0</span>
                                                    <div className="keeda_widget_team_group">
                                                        MAC
                                                        <img src="assets/images/macarthur-fc.webp" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="">
                                                <div className="keeda_football_match_list">
                                                    <span>Tomorrow</span>
                                                    <div className="keeda_widget_team_group">
                                                        <img src="assets/images/newcastle-jets.webp" alt="" />
                                                        <b>FT</b>
                                                    </div>
                                                    <span className="goal-points">2 - 0</span>
                                                    <div className="keeda_widget_team_group">
                                                        MAC
                                                        <img src="assets/images/macarthur-fc.webp" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            {/* End */}
                                            {/* Start */}
                                            <span className="keeda_football_league_title">
                                                <a href="">Europa League 2022-23</a>
                                            </span>
                                            <a href="">
                                                <div className="keeda_football_match_list">
                                                    <span>Tomorrow</span>
                                                    <div className="keeda_widget_team_group">
                                                        <img src="assets/images/newcastle-jets.webp" alt="" />
                                                        <b>FT</b>
                                                    </div>
                                                    <span className="goal-points">1 - 0</span>
                                                    <div className="keeda_widget_team_group">
                                                        MAC
                                                        <img src="assets/images/macarthur-fc.webp" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="">
                                                <div className="keeda_football_match_list">
                                                    <span>Tomorrow</span>
                                                    <div className="keeda_widget_team_group">
                                                        <img src="assets/images/newcastle-jets.webp" alt="" />
                                                        <b>FT</b>
                                                    </div>
                                                    <span className="goal-points">2 - 0</span>
                                                    <div className="keeda_widget_team_group">
                                                        MAC
                                                        <img src="assets/images/macarthur-fc.webp" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            {/* End */}
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-4" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default FootballSchedule