import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'
import { useState } from 'react';

const Plf = () => {

    const [Plftab ,setPlftab] = useState(1)
    const PlfToggleTab = (index) =>{
        setPlftab(index);
    }

    const ActivePlf = (index ,activeclass) =>
     Plftab === index ? activeclass : "" ;

    return (
        <>
            <Helmet>
                <title>Cricfeel | Football Schedule</title>
            </Helmet>
            <Header />
            <section className="Navbar">
                <div className="primary-navigation">
                    <div className="nav-items">
                        <div className="secondary-navigation">
                            <div className="nav-group">
                                <div className="active-item">EPL</div>
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
                                <li className=""><Link to="/epl">Home</Link> </li>
                                <li className=""><Link to="/news">News</Link></li>
                                <li className=""><Link to="/clean-sheets">EPL Clean Sheets</Link></li>
                                <li className=""><Link to="/result">EPL Results</Link></li>
                                <li className="active"><Link to="/plf">Premier League Fixtures</Link></li>
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
                            <li><Link to="">PLF 2023 </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="mt-200 mb-4">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8">
                            <section className="Feedsection">
                                <div className="feed-header">
                                    <h3>Premier League Fixtures 2022-23</h3>
                                    <span> 
                                        <img src="assets/images/ic-share-gray.svg" alt="" /> Share
                                    </span>
                                </div>
                                <section className="plf-schedule-matches">
                                    <div className="plf-schedul">
                                        <ul className="plf-tabs">
                                            <li className={` ${ActivePlf(1,'active')}`} onClick={()=>PlfToggleTab(1)}> Matches </li>
                                            <li className={` ${ActivePlf(2,'active')}`} onClick={()=>PlfToggleTab(2)}> Point Tables </li>
                                        </ul>
                                        <div className="plfContainer">
                                            {/* Matches */}
                                            <div id="matches" className={`plf-panel ${ActivePlf(1,'p-active')}`}>
                                                <div className="plf-schedul">
                                                    <div className="plf-shedulebox">
                                                        <a href="">
                                                            <i className="fa fa-angle-left" />
                                                        </a>
                                                        <span className="eplrounds">Round 51</span>
                                                        <a href="">
                                                            <i className="fa fa-angle-right" />
                                                        </a>
                                                    </div>
                                                    <table className="custom-table plf-table">
                                                        <tbody>
                                                            <tr className="epl-result-tr plf-tr">
                                                                <td>
                                                                    <span className="eplrft">FT</span>
                                                                </td>
                                                                <td>
                                                                    <div className="sheet-team-logo epl-r-logo">
                                                                        <a href="">
                                                                            <img
                                                                                className="team-logo"
                                                                                title="Newcastle"
                                                                                src="assets/images/flag/bournemouth.webp"
                                                                            />
                                                                            BRN
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td>0 - 2</td>
                                                                <td>
                                                                    <div className="sheet-team-logo epl-r-logo">
                                                                        <a href="">
                                                                            {" "}
                                                                            <span> BRN</span>{" "}
                                                                            <img
                                                                                className="team-logo"
                                                                                title="Newcastle"
                                                                                src="assets/images/flag/brighton-hove-albion.webp"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="epl-result-tr plf-tr">
                                                                <td>
                                                                    <span className="eplrft">FT</span>
                                                                </td>
                                                                <td>
                                                                    <div className="sheet-team-logo epl-r-logo">
                                                                        <a href="">
                                                                            <img
                                                                                className="team-logo"
                                                                                title="Newcastle"
                                                                                src="assets/images/flag/bournemouth.webp"
                                                                            />
                                                                            BRN
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td>3 - 2</td>
                                                                <td>
                                                                    <div className="sheet-team-logo epl-r-logo">
                                                                        <a href="">
                                                                            {" "}
                                                                            <span> BRN</span>{" "}
                                                                            <img
                                                                                className="team-logo"
                                                                                title="Newcastle"
                                                                                src="assets/images/flag/brighton-hove-albion.webp"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="epl-result-tr plf-tr">
                                                                <td>
                                                                    <span className="eplrft">FT</span>
                                                                </td>
                                                                <td>
                                                                    <div className="sheet-team-logo epl-r-logo">
                                                                        <a href="">
                                                                            <img
                                                                                className="team-logo"
                                                                                title="Newcastle"
                                                                                src="assets/images/flag/bournemouth.webp"
                                                                            />
                                                                            BRN
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td>0 - 2</td>
                                                                <td>
                                                                    <div className="sheet-team-logo epl-r-logo">
                                                                        <a href="">
                                                                            {" "}
                                                                            <span> BRN</span>{" "}
                                                                            <img
                                                                                className="team-logo"
                                                                                title="Newcastle"
                                                                                src="assets/images/flag/bournemouth.webp"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* End Matches */}
                                            {/* TableS */}
                                            <div id="tables" className={`plf-panel ${ActivePlf(2,'p-active')}`}>
                                                <div>
                                                    <table className="_table_stands mb-3 points-tables">
                                                        <tbody>
                                                            <tr>
                                                                <th style={{ width: "6%" }}>#</th>
                                                                <th style={{ width: "70%" }}>Club</th>
                                                                <th>P</th>
                                                                <th>W</th>
                                                                <th>D</th>
                                                                <th>Pts</th>
                                                            </tr>
                                                            <tr>
                                                                <td className="keeda_football_table_position green">
                                                                    1
                                                                </td>
                                                                <td className="team-name-points-table">
                                                                    <div className="keeda_widget_football_flag">
                                                                        <img src="assets/images/arsenal.webp" alt="" />
                                                                        <span>Arsenal</span>
                                                                    </div>
                                                                </td>
                                                                <td>30</td>
                                                                <td>23</td>
                                                                <td>4</td>
                                                                <td>73</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="keeda_football_table_position green">
                                                                    2
                                                                </td>
                                                                <td className="team-name-points-table">
                                                                    <div className="keeda_widget_football_flag">
                                                                        <img
                                                                            src="assets/images/manchester-city.webp"
                                                                            alt=""
                                                                        />
                                                                        <span>Man City</span>
                                                                    </div>
                                                                </td>
                                                                <td>30</td>
                                                                <td>23</td>
                                                                <td>4</td>
                                                                <td>73</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="keeda_football_table_position green">
                                                                    3
                                                                </td>
                                                                <td className="team-name-points-table">
                                                                    <div className="keeda_widget_football_flag">
                                                                        <img
                                                                            src="assets/images/manchester-city.webp"
                                                                            alt=""
                                                                        />
                                                                        <span>Man City</span>
                                                                    </div>
                                                                </td>
                                                                <td>30</td>
                                                                <td>23</td>
                                                                <td>4</td>
                                                                <td>73</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="keeda_football_table_position green">
                                                                    4
                                                                </td>
                                                                <td className="team-name-points-table">
                                                                    <div className="keeda_widget_football_flag">
                                                                        <img
                                                                            src="assets/images/manchester-city.webp"
                                                                            alt=""
                                                                        />
                                                                        <span>Man City</span>
                                                                    </div>
                                                                </td>
                                                                <td>30</td>
                                                                <td>23</td>
                                                                <td>4</td>
                                                                <td>73</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="keeda_football_table_position blue">
                                                                    5
                                                                </td>
                                                                <td className="team-name-points-table">
                                                                    <div className="keeda_widget_football_flag">
                                                                        <img
                                                                            src="assets/images/tottenham-hotspur.webp"
                                                                            alt=""
                                                                        />
                                                                        <span>Tottenham</span>
                                                                    </div>
                                                                </td>
                                                                <td>30</td>
                                                                <td>23</td>
                                                                <td>4</td>
                                                                <td>73</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="keeda_football_table_position">6</td>
                                                                <td className="team-name-points-table">
                                                                    <div className="keeda_widget_football_flag">
                                                                        <img
                                                                            src="assets/images/tottenham-hotspur.webp"
                                                                            alt=""
                                                                        />
                                                                        <span>Tottenham</span>
                                                                    </div>
                                                                </td>
                                                                <td>30</td>
                                                                <td>23</td>
                                                                <td>4</td>
                                                                <td>73</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* End Tables */}
                                        </div>
                                    </div>
                                </section>
                                <section className="cs-section">
                                    <div className="clear-sheet">
                                        <h4 className="sheet-titlle">
                                            English Premier League Fixtures - All "Big Six" Fixtures this
                                            Season (2022-23)
                                        </h4>
                                    </div>
                                    <div className="mt-5">
                                        <div className="clear-sheet">
                                            <h4 className="sheet-titlle">
                                                EPL Fixtures Big 6: August 2022
                                            </h4>
                                        </div>
                                        <div className="cs-paragraphs">
                                            <img
                                                src="assets/images/img/695a8-16554700559678-1920.avif"
                                                alt=""
                                            />
                                            <span className="sk-figcaption">
                                                Liverpool and Manchester United will face each other in August
                                            </span>
                                        </div>
                                        <table className="_table_stands mb-3">
                                            <tbody>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Team 1</th>
                                                    <th>Versus</th>
                                                    <th>Team 2</th>
                                                    <th />
                                                </tr>
                                                <tr>
                                                    <td>Aug 13th</td>
                                                    <td>Chelsea</td>
                                                    <td>vs</td>
                                                    <td>Spurs</td>
                                                    <td />
                                                </tr>
                                                <tr>
                                                    <td>Aug 13th</td>
                                                    <td>Chelsea</td>
                                                    <td>vs</td>
                                                    <td>Spurs</td>
                                                    <td />
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h4>EPL Fixtures Big 6: September 2022</h4>
                                        <div className="table_scroll">
                                            <table className="_table_stands mb-3">
                                                <tbody>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Team 1</th>
                                                        <th>Versus</th>
                                                        <th>Team 2</th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <td>Aug 13th</td>
                                                        <td>Manchester United</td>
                                                        <td>vs</td>
                                                        <td>Arsenal</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>September 10</td>
                                                        <td>Manchester City </td>
                                                        <td>vs</td>
                                                        <td>Spurs</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>September 17</td>
                                                        <td>Chelsea</td>
                                                        <td>vs</td>
                                                        <td>Liverpool</td>
                                                        <td />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                        <div className="col-lg-4 mt-3"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Plf