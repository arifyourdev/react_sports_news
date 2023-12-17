import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from './Navbar'
import './style.css';
import './cricket.css';
import './responsive.css';

const Purplecap = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Purple Cap</title>
            </Helmet>
            <Header />
            <Navbar />
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <section className="_match_point_tables mt-2">
                                <div className="_mactch_event_contents table_scroll">
                                    <table className="_table_stands2 mb-3">
                                        <tbody>
                                            <tr>
                                                <th data-row={1}>PLAYER</th>
                                                <th data-row={1}>TEAM</th>
                                                <th data-row={1}>MAT</th>
                                                <th data-row={1}>INN</th>
                                                <th data-row={1}>WTKs</th>
                                                <th data-row={1}>OV</th>
                                                <th data-row={1}>MAID</th>
                                                <th data-row={1}>RUNS</th>
                                                <th data-row={1}>5WKTs</th>
                                                <th data-row={1}>4WKTs</th>
                                                <th data-row={1}>ECO</th>
                                                <th data-row={1}>AVG</th>
                                                <th data-row={1}>SR</th>
                                                <th data-row={1}>BBI</th>
                                                <th data-row={1}>BBM</th>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>1</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Rashid Khan
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        GT
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>2</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Yuzvendra Chahal
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        RR
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>3</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Mark Wood
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        LSG
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>4</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Ravi Bishnoi
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        LSG
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>5</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        SP Narine
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        KKR
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>6</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Alzarri Joseph
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        GT
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>7</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        M Shami
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        GT
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>8</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Arshdeep Singh
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        GT
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>9</span>
                                                    <a
                                                        href=""
                                                        style={{
                                                            textDecoration: "underline",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Varun Chakravarthy{" "}
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        GT
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>8</td>
                                                <td data-row={2}>12</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>200</td>
                                                <td data-row={2}>7.56</td>
                                                <td data-row={2}>11.55</td>
                                                <td data-row={2}>9</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                                <td data-row={2}>3/30</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="_match_point_table mt-2">
                                <h5 className="mt-2">
                                    <strong>IPL 2023 Purple Cap</strong>
                                </h5>
                                <p>
                                    The Purple Cap is one of the most prestigious awards in the Indian
                                    Premier League, presented to the bowler with the highest number of
                                    wickets in the tournament.{" "}
                                </p>
                                <p>
                                    It is undoubtedly a huge achievement for any bowler as the title not
                                    only showcases your sheer determination throughout the championship,
                                    but also places you as a brilliant bowler in the T20 format because
                                    of the level of cricket displayed in the league.
                                </p>
                                <p>
                                    Hence, it's like a golden ticket for bowlers to come into the eyes
                                    of the right people and accelerate their cricketing career. The
                                    competition has seen some exceptional performances from individuals
                                    who won the Purple Cap at the end of the season.
                                </p>
                                <p>
                                    For the first time since its inception. The award earned a title
                                    sponsor in the form of Saudi Aramco last year. Rajasthan Royals’
                                    leggie Yuzvendra Chahal bagged the first-ever Aramco Purple Cap with
                                    27 wickets in 17 matches which was the first time he won this title
                                    in his IPL career.
                                </p>
                                <p>
                                    As far as records are concerned, former CSK all-rounder Dwayne Bravo
                                    and RCB fast bowler Harshal Patel share the top spot for most
                                    wickets in a season of IPL with 32 scalps.
                                </p>
                                <p>
                                    Bravo retired from the championship after playing his last the
                                    previous season. He will join CSK as their Bowling Coach in the
                                    upcoming season. On the other hand, Harshal Patel will play for RCB
                                    this season too.
                                </p>
                                <p>
                                    This year, we have some really exciting prospects playing in the 10
                                    franchises and it’ll be one tough fight for the Purple Cap. Another
                                    interesting thing to look out for would be the number 32, can any
                                    bowler breach this mark in the 2023 IPL and surpass Bravo’s as well
                                    as Harshal’s record?{" "}
                                </p>
                                <img
                                    src="assets/images/img/download.png"
                                    alt=""
                                    style={{ width: "100%", marginBottom: 5 }}
                                />
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

export default Purplecap