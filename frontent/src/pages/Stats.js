import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from './Navbar'
import './style.css';
import './cricket.css';
import './responsive.css';

const Stats = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Stats</title>
            </Helmet>
            <Header />
            <Navbar />
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <section className="_match_point_tables mt-2">
                                <div className="cricket-stats-dropdown">
                                    <div className="cricket-stats-dropdown-item">
                                        <select name="" id="" className="cricket-stats-select ">
                                            <optgroup label="Batting stats">
                                                <option value="most_runs">Most Runs</option>
                                                <option value="most_runs_innings">
                                                    Highest Individual Score
                                                </option>
                                                <option value="highest_strikerate">
                                                    Highest Strike Rates
                                                </option>
                                                <option value="highest_strikerate_innings">
                                                    Highest Strike Rates (Innings)
                                                </option>
                                                <option value="highest_average">Highest Average</option>
                                                <option value="most_hundreds">Most Centuries</option>
                                                <option value="most_fifties">Most Fifties</option>
                                                <option value="most_sixes">Most Sixes</option>
                                                <option value="most_sixes_innings">
                                                    Most Sixes (Innings)
                                                </option>
                                                <option value="most_fours">Most Fours</option>
                                                <option value="most_fours_innings">
                                                    Most Fours (Innings)
                                                </option>
                                            </optgroup>
                                            <optgroup label="Bowling stats">
                                                <option value="most_wickets">Top Wicket Takers</option>
                                                <option value="best_economy_rates">Best Economy Rates</option>
                                                <option value="best_economy_rates_innings">
                                                    Best Economy Rates (Innings)
                                                </option>
                                                <option value="best_bowling_figures">
                                                    Best Bowling Figures
                                                </option>
                                                <option value="best_strike_rates">Best Strike Rates</option>
                                                <option value="best_strike_rates_innings">
                                                    Best Strike Rates (Innings)
                                                </option>
                                                <option value="best_averages">Best Averages</option>
                                                <option value="most_runs_conceded_innings">
                                                    Most runs conceded in an innings
                                                </option>
                                                <option value="four_wickets">Four Wickets</option>
                                                <option value="five_wickets">Five Wickets</option>
                                                <option value="maidens">Maidens</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div className="mactch_event_contents table_scroll">
                                    <table className="stats-table mb-3">
                                        <tbody>
                                            <tr>
                                                <th>Pos</th>
                                                <th>PLAYER</th>
                                                <th>TEAM</th>
                                                <th>MAT</th>
                                                <th>INN</th>
                                                <th>RUNS</th>
                                                <th>AVG</th>
                                                <th>SR</th>
                                                <th>4s</th>
                                                <th>6s</th>
                                                <th>100s</th>
                                                <th>50s</th>
                                                <th>NO</th>
                                                <th>HS</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        Faf Du Plassis
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        RCB
                                                    </a>
                                                </td>
                                                <td>8</td>
                                                <td>8</td>
                                                <td className="stats-highligt">422</td>
                                                <td>60.29</td>
                                                <td>167.46</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>5</td>
                                                <td>1</td>
                                                <td>84</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        Virat Kohli
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        RCB
                                                    </a>
                                                </td>
                                                <td>8</td>
                                                <td>8</td>
                                                <td className="stats-highligt">333</td>
                                                <td>40.29</td>
                                                <td>147.46</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>5</td>
                                                <td>1</td>
                                                <td>78</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        Devon Conway
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        CSK
                                                    </a>
                                                </td>
                                                <td>8</td>
                                                <td>8</td>
                                                <td className="stats-highligt">333</td>
                                                <td>40.29</td>
                                                <td>147.46</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>5</td>
                                                <td>1</td>
                                                <td>78</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        RD Gaikwad
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        CSK
                                                    </a>
                                                </td>
                                                <td>8</td>
                                                <td>8</td>
                                                <td className="stats-highligt">333</td>
                                                <td>40.29</td>
                                                <td>147.46</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>5</td>
                                                <td>1</td>
                                                <td>92</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        David Warner
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href=""
                                                        style={{ color: "#0277BD", textDecoration: "underline" }}
                                                    >
                                                        DC
                                                    </a>
                                                </td>
                                                <td>8</td>
                                                <td>8</td>
                                                <td className="stats-highligt">333</td>
                                                <td>40.29</td>
                                                <td>147.46</td>
                                                <td>34</td>
                                                <td>27</td>
                                                <td>0</td>
                                                <td>5</td>
                                                <td>1</td>
                                                <td>65</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="_match_point_table mt-2">
                                <p>
                                    The Indian Premier League (IPL) will continue to provide nail-biting
                                    entertainment to the fans worldwide in its fourteenth edition in
                                    2022. The IPL stats are a good set to measure the entertainment it
                                    provided as some cricketing stars dazzled the competition with their
                                    performances.
                                </p>
                                <p>
                                    <strong>
                                        <em>The </em>
                                    </strong>
                                    <a href="ipl-schedule.php" target="_blank">
                                        <strong>
                                            <em>new IPL schedule</em>
                                        </strong>
                                    </a>
                                    <strong>
                                        <em> and </em>
                                    </strong>
                                    <a href="ipl-news.php" target="_blank">
                                        <strong>
                                            <em>today IPL news</em>
                                        </strong>
                                    </a>
                                    <strong>
                                        <em> updates are available here.</em>
                                    </strong>
                                </p>
                                <h5>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>IPL Stats - Batting</span>
                                </h5>
                                <h6>
                                    <span style={{ color: "rgb(0, 0, 0)" }}>IPL Most Runs</span>
                                </h6>
                                <p />
                                <p>
                                    The record for most IPL runs belongs to the Royal Challengers
                                    Bangalore (
                                    <a href="" target="_blank">
                                        RCB
                                    </a>
                                    ) star Virat Kohli who has scored 6283 runs in 204 matches and is
                                    499 runs ahead of the Punjab Kings batter Shikhar Dhawan.
                                </p>
                                <p />
                            </section>
                        </div>
                        <div className="col-lg-4">
                            <section />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Stats