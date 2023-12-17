import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from './Navbar'
import './style.css';
import './cricket.css';
import './responsive.css';

const Orangecap = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Orange Cap</title>
            </Helmet>
            <Header />
            <Navbar />
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <section className="_match_point_table mt-2">
                                <div className="_mactch_event_contents">
                                    <table className="_table_stands2 mb-3">
                                        <tbody>
                                            <tr>
                                                <th data-row={1}>PLAYER</th>
                                                <th data-row={1}>TEAM</th>
                                                <th data-row={1}>MAT</th>
                                                <th data-row={1}>INN</th>
                                                <th data-row={1}>RUNS</th>
                                                <th data-row={1}>AVG</th>
                                                <th data-row={1}>SR</th>
                                                <th data-row={1}>4s</th>
                                                <th data-row={1}>6s</th>
                                                <th data-row={1}>100s</th>
                                                <th data-row={1}>50s</th>
                                                <th data-row={1}>NO</th>
                                                <th data-row={1}>HS</th>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    {" "}
                                                    <span style={{ marginRight: 10 }}>1</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        Shikhar Dhawan
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        PBKS
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>255</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>149.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    <span style={{ marginRight: 10 }}>2</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        RD Gaikwad
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        CSK
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>189</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    <span style={{ marginRight: 10 }}>3</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        David Warner
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        DC
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>189</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    <span style={{ marginRight: 10 }}>4</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        Jos Buttler
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        RR
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>189</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    <span style={{ marginRight: 10 }}>5</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        Jos Buttler
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        RR
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>160</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    <span style={{ marginRight: 10 }}>6</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        Kyle Mayers
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        LSG
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>139</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    <span style={{ marginRight: 10 }}>7</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        {" "}
                                                        Sai Sudharsan
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        GT
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>120</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    <span style={{ marginRight: 10 }}>8</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        {" "}
                                                        Yashasvi Jaiswal
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        RR
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>120</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>
                                                    <span style={{ marginRight: 10 }}>9</span>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        {" "}
                                                        VR Iyer
                                                    </a>
                                                </td>
                                                <td data-row={2}>
                                                    <a href="" style={{ textDecoration: "underline" }}>
                                                        KKR
                                                    </a>
                                                </td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>120</td>
                                                <td data-row={2}>255.00</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>49</td>
                                                <td data-row={2}>25</td>
                                                <td data-row={2}>0</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>
                                                    99 <span style={{ marginLeft: 10 }}>149</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="_match_point_table mt-2">
                                <h5>
                                    <strong>IPL 2023 Orange Cap</strong>
                                </h5>
                                <p>
                                    Orange Cap in IPL 2023 will be awarded to the player who ends the
                                    season with the most runs. The Orange Cap is one of the iconic
                                    awards presented by the organisers since the inception of the IPL in
                                    2008.{" "}
                                </p>
                                <p>
                                    Saudi Aramco was the sponsor for the Orange Cap in IPL 2022 as it
                                    was the first time that the Board of Control for Cricket in India
                                    (BCCI) to get a distinguished partner for Orange and Purple Cap.
                                </p>
                                <p>
                                    Australian batter Shaun Marsh was the first player to win the Orange
                                    Cap in IPL 2008, having scored 616 runs in 11 matches for Kings XI
                                    Punjab (now Punjab Kings) at a strike rate of 139.68.
                                </p>
                                <p>
                                    Royal Challengers Bangalore (RCB) Virat Kohli, who is the highest
                                    run-scorer in the IPL with 6624 runs, scored the most runs in a
                                    season (973 in 2016).{" "}
                                </p>
                                <p>
                                    Kohli's former RCB teammate Chris Gayle is the only player to retain
                                    the Orange Cap in the IPL after winning it in 2011 (608 runs) and
                                    2012 (733 runs) seasons.
                                </p>
                                <div className="table_scroll">
                                    <table className="_table_stands mb-2">
                                        <tbody>
                                            <tr>
                                                <td data-row={1}>
                                                    <strong>No</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>Player</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>TEAM</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>Run</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>SR</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>Mat</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>Inn</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>No</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>HS</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>Avg</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>30s</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>50s</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>100s</strong>
                                                </td>
                                                <td data-row={1}>
                                                    <strong>6s</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-row={2}>1</td>
                                                <td data-row={2}>Jos Buttler</td>
                                                <td data-row={2}>RR</td>
                                                <td data-row={2}>863</td>
                                                <td data-row={2}>149</td>
                                                <td data-row={2}>17</td>
                                                <td data-row={2}>17</td>
                                                <td data-row={2}>2</td>
                                                <td data-row={2}>116</td>
                                                <td data-row={2}>57</td>
                                                <td data-row={2}>3</td>
                                                <td data-row={2}>4</td>
                                                <td data-row={2}>4</td>
                                                <td data-row={2}>45</td>
                                            </tr>
                                            <tr>
                                                <td data-row={3}>2</td>
                                                <td data-row={3}>KL Rahul</td>
                                                <td data-row={3}>LSG</td>
                                                <td data-row={3}>616</td>
                                                <td data-row={3}>135</td>
                                                <td data-row={3}>15</td>
                                                <td data-row={3}>15</td>
                                                <td data-row={3}>3</td>
                                                <td data-row={3}>103*</td>
                                                <td data-row={3}>51</td>
                                                <td data-row={3}>2</td>
                                                <td data-row={3}>4</td>
                                                <td data-row={3}>2</td>
                                                <td data-row={3}>30</td>
                                            </tr>
                                            <tr>
                                                <td data-row={4}>3</td>
                                                <td data-row={4}>Quinton de Kock</td>
                                                <td data-row={4}>LSG</td>
                                                <td data-row={4}>508</td>
                                                <td data-row={4}>148</td>
                                                <td data-row={4}>15</td>
                                                <td data-row={4}>15</td>
                                                <td data-row={4}>1</td>
                                                <td data-row={4}>140*</td>
                                                <td data-row={4}>36</td>
                                                <td data-row={4}>2</td>
                                                <td data-row={4}>3</td>
                                                <td data-row={4}>1</td>
                                                <td data-row={4}>23</td>
                                            </tr>
                                            <tr>
                                                <td data-row={5}>4</td>
                                                <td data-row={5}>Hardik Pandya</td>
                                                <td data-row={5}>GT</td>
                                                <td data-row={5}>487</td>
                                                <td data-row={5}>131</td>
                                                <td data-row={5}>15</td>
                                                <td data-row={5}>15</td>
                                                <td data-row={5}>4</td>
                                                <td data-row={5}>87*</td>
                                                <td data-row={5}>44</td>
                                                <td data-row={5}>4</td>
                                                <td data-row={5}>4</td>
                                                <td data-row={5}>0</td>
                                                <td data-row={5}>12</td>
                                            </tr>
                                            <tr>
                                                <td data-row={6}>5</td>
                                                <td data-row={6}>Shubman Gill</td>
                                                <td data-row={6}>GT</td>
                                                <td data-row={6}>483</td>
                                                <td data-row={6}>132</td>
                                                <td data-row={6}>16</td>
                                                <td data-row={6}>16</td>
                                                <td data-row={6}>2</td>
                                                <td data-row={6}>96</td>
                                                <td data-row={6}>34</td>
                                                <td data-row={6}>3</td>
                                                <td data-row={6}>4</td>
                                                <td data-row={6}>0</td>
                                                <td data-row={6}>11</td>
                                            </tr>
                                            <tr>
                                                <td data-row={7}>6</td>
                                                <td data-row={7}>David Miller</td>
                                                <td data-row={7}>GT</td>
                                                <td data-row={7}>481</td>
                                                <td data-row={7}>142</td>
                                                <td data-row={7}>16</td>
                                                <td data-row={7}>16</td>
                                                <td data-row={7}>9</td>
                                                <td data-row={7}>94*</td>
                                                <td data-row={7}>68</td>
                                                <td data-row={7}>5</td>
                                                <td data-row={7}>2</td>
                                                <td data-row={7}>0</td>
                                                <td data-row={7}>23</td>
                                            </tr>
                                            <tr>
                                                <td data-row={8}>7</td>
                                                <td data-row={8}>Faf du Plessis</td>
                                                <td data-row={8}>RCB</td>
                                                <td data-row={8}>468</td>
                                                <td data-row={8}>127</td>
                                                <td data-row={8}>16</td>
                                                <td data-row={8}>16</td>
                                                <td data-row={8}>1</td>
                                                <td data-row={8}>96</td>
                                                <td data-row={8}>31</td>
                                                <td data-row={8}>2</td>
                                                <td data-row={8}>3</td>
                                                <td data-row={8}>0</td>
                                                <td data-row={8}>13</td>
                                            </tr>
                                            <tr>
                                                <td data-row={9}>8</td>
                                                <td data-row={9}>Shikhar Dhawan</td>
                                                <td data-row={9}>PBKS</td>
                                                <td data-row={9}>460</td>
                                                <td data-row={9}>122</td>
                                                <td data-row={9}>14</td>
                                                <td data-row={9}>14</td>
                                                <td data-row={9}>2</td>
                                                <td data-row={9}>88*</td>
                                                <td data-row={9}>38</td>
                                                <td data-row={9}>4</td>
                                                <td data-row={9}>3</td>
                                                <td data-row={9}>0</td>
                                                <td data-row={9}>12</td>
                                            </tr>
                                            <tr>
                                                <td data-row={10}>9</td>
                                                <td data-row={10}>Sanju Samson</td>
                                                <td data-row={10}>RR</td>
                                                <td data-row={10}>458</td>
                                                <td data-row={10}>146</td>
                                                <td data-row={10}>17</td>
                                                <td data-row={10}>17</td>
                                                <td data-row={10}>1</td>
                                                <td data-row={10}>55</td>
                                                <td data-row={10}>28</td>
                                                <td data-row={10}>5</td>
                                                <td data-row={10}>2</td>
                                                <td data-row={10}>0</td>
                                                <td data-row={10}>26</td>
                                            </tr>
                                            <tr>
                                                <td data-row={11}>10</td>
                                                <td data-row={11}>Deepak Hooda</td>
                                                <td data-row={11}>LSG</td>
                                                <td data-row={11}>451</td>
                                                <td data-row={11}>136</td>
                                                <td data-row={11}>15</td>
                                                <td data-row={11}>14</td>
                                                <td data-row={11}>0</td>
                                                <td data-row={11}>59</td>
                                                <td data-row={11}>32</td>
                                                <td data-row={11}>3</td>
                                                <td data-row={11}>4</td>
                                                <td data-row={11}>0</td>
                                                <td data-row={11}>18</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h5 className="mt-4">
                                    <strong>Rules for Orange Cap in IPL 2023</strong>
                                </h5>
                                <ol>
                                    <li>
                                        The player with the most runs at the end of IPL 2033, including
                                        playoffs fixtures, will get the Orange Cap.
                                    </li>
                                    <li>
                                        Once the season progress ahead, players who are leading on the
                                        run-scoring list can wear the Orange Cap on the field.{" "}
                                    </li>
                                    <li>
                                        In csse of more than one batter has the same number of runs at the
                                        season end then the batter with the best strike raye will take the
                                        Orange Cap.
                                    </li>
                                    <li>
                                        The runs of Super Over won't considered in the race of Orange Cap.{" "}
                                    </li>
                                </ol>
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

export default Orangecap