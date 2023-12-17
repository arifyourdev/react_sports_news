import { React } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

const TennisSchedule = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Tennis Schedule</title>
            </Helmet>
            <Header />
            <div className="breadcrumb-container bc-2 bc-holder">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><a href=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></a></li>
                            <li><a href="">Tennis News <i className="fa fa-angle-right"></i></a></li>
                            <li><a href="">Tennis Single Page</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tag-page-bg">
                <div className="tag-page-header">
                    <div className="tag-page-header-info">
                        <div className="tag-page-header-title">
                            <h1>Tennis Schedule 2023</h1>
                        </div>
                        <div className="tag-page-header-meta">
                            <div className="tagpage-author">By <a href=""> SK Desk</a> <span>. Last Modified Feb 22, 2023 12:52
                                GMT</span>
                                <button>Share <i className="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                        <div className="smart-menu-holder">
                            <ul>
                                <li><Link to="">ATP Ranking 2023</Link></li>
                                <li><Link to="">WTA Ranking 2023</Link></li>
                                <li><Link to="">ATP Final</Link></li>
                                <li><Link to="">WTA Final</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tag-page-info-container">
                                <div className="tagPage-info-holder">
                                    <h4>Tennis Schedule 2023</h4>
                                    <h3>ATP Schedule 2023</h3>
                                    <div className="tag-schedule-table">
                                        <table className="tennis-table">
                                            <tbody>
                                                <tr>
                                                    <th>Tournament</th>
                                                    <th>Category</th>
                                                    <th>Surface</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                </tr>
                                                <tr>
                                                    <td>United Cup</td>
                                                    <td />
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>U.S. Men's Clay Court Championships </td>
                                                    <td>ATP 250 </td>
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>U.S. Men's Clay Court Championships </td>
                                                    <td>ATP 250 </td>
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>U.S. Men's Clay Court Championships </td>
                                                    <td>ATP 250 </td>
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>U.S. Men's Clay Court Championships </td>
                                                    <td>ATP 250 </td>
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <th>Australian Open </th>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar Open </td>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar Open </td>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar Open </td>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar Open </td>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h3>WTA Schedule 2023</h3>
                                    <div className="tag-schedule-table">
                                        <table className="tennis-table">
                                            <tbody>
                                                <tr>
                                                    <th>Tournament</th>
                                                    <th>Category</th>
                                                    <th>Surface</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                </tr>
                                                <tr>
                                                    <td>United Cup</td>
                                                    <td />
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>U.S. Men's Clay Court Championships </td>
                                                    <td>ATP 250 </td>
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>U.S. Men's Clay Court Championships </td>
                                                    <td>ATP 250 </td>
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>U.S. Men's Clay Court Championships </td>
                                                    <td>ATP 250 </td>
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>U.S. Men's Clay Court Championships </td>
                                                    <td>ATP 250 </td>
                                                    <td>Hard</td>
                                                    <td>29 December, 2022</td>
                                                    <td>8 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <th>Australian Open </th>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar Open </td>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar Open </td>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar Open </td>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Qatar Open </td>
                                                    <td>Grand Slam</td>
                                                    <td>Hard</td>
                                                    <td>16 January, 2023</td>
                                                    <td>29 January, 2023</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <section className="football-section-panel mb-3">
                                <div className="football-section-panel-header">
                                    <h6>Related Stories</h6>
                                </div>
                                <div className="football-section-panel-body no-padding">
                                    <div className="related-articles-container">
                                        <a href="">
                                            <div className="st-wrappers">
                                                <img
                                                    src="assets/images/img/6ea5a-16811888852303-1920.avif"
                                                    alt=""
                                                />
                                                <div className="wrapper-text">
                                                    <p>
                                                        Newcastle Jets vs Macarthur Prediction and Betting Tips |
                                                        April 14th 2023
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="related-articles-container">
                                        <a href="">
                                            <div className="st-wrappers">
                                                <img
                                                    src="assets/images/img/6ea5a-16811888852303-1920.avif"
                                                    alt=""
                                                />
                                                <div className="wrapper-text">
                                                    <p>
                                                        Newcastle Jets vs Macarthur Prediction and Betting Tips |
                                                        April 14th 2023
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default TennisSchedule