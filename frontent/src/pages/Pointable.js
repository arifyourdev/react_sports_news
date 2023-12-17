import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from './Navbar'
import './style.css';
import './cricket.css';
import './responsive.css';


const Pointable = () => {
    return (
         <>
            <Helmet>
                <title>Cricfeel | Pointable</title>
            </Helmet>
            <Header />
            <Navbar />
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <div className="_match_point_table">
                                <table className="_point_table">
                                    <tr>
                                        <th>Pos</th>
                                        <th>Team</th>
                                        <th>P</th>
                                        <th>W</th>
                                        <th>L</th>
                                        <th>D</th>
                                        <th>NR</th>
                                        <th>NRR</th>
                                        <th>Pts</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div className="_first_stand">
                                                <img src="assets/images/kkr-ipl2015teamlogo-300x300-1459854270.webp"
                                                    className="tt_icon" alt=""/> Kolkata Knight Riders
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2.200</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <div className="_first_stand">
                                                <img src="assets/images/lucknow-super-giants.webp" className="tt_icon" alt=""/>
                                                    Lucknow Super Giants
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2.200</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <div className="_first_stand">
                                                <img src="assets/images/royal-challengers-bangalore.webp" className="tt_icon"
                                                    alt=""/>
                                                    Royal Challengers Bangalore
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2.200</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <div className="_first_stand">
                                                <img src="assets/images/flag/a3b60-16467308946508-1920.avif" className="tt_icon"
                                                    alt=""/>
                                                    Gujrat Titans
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2.200</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>
                                            <div className="_first_stand">
                                                <img src="assets/images/flag/b6d04-16375627239327-1920.avif" className="tt_icon"
                                                    alt=""/>
                                                    Chennai Super Kings
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2.200</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>
                                            <div className="_first_stand">
                                                <img src="assets/images/royal-challengers-bangalore.webp" className="tt_icon"
                                                    alt=""/>
                                                    Royal Challengers Bangalore
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2.200</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <div className="_first_stand">
                                                <img src="assets/images/royal-challengers-bangalore.webp" className="tt_icon"
                                                    alt=""/>
                                                    Royal Challengers Bangalore
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2.200</td>
                                        <td>4</td>
                                    </tr>
                                </table>
                            </div>
                            <section className="_match_point_table mt-2">
                                <div className="_mactch_event_content">
                                    <p>The 2023 edition of the Indian Premier League (IPL) will kickstart on March 31, when
                                        defending champions Gujarat Titans lock horns with the Chennai Super Kings at the
                                        iconic Narendra Modi Stadium in Ahmedabad.</p>
                                    <p>Just like the previous season, this edition will also be a ten-team affair, which
                                        each side playing 7 home and as many away games during their 14-match league cycle.
                                    </p>
                                    <p>The top-4 teams will qualify for the Playoffs. While the top-2 teams will get an
                                        extra chance to qualify for the finals, the teams' ending at the 3rd and 4th spot
                                        will play a sudden death game (Eliminator) to earn their spot in the 2nd Qualifier,
                                        where it will face the loser of Q1.</p>
                                    <p><strong><em>(Note: The points will start getting updated once the IPL 2023
                                        starts.)</em></strong></p>

                                    <h4><strong>IPL Points Table 2023 Rules&nbsp;</strong></h4>
                                    <p>The primary goal of each of the 10 IPL franchises is to finish in the top-4 of the
                                        points-table after the completion of their 14 league-stage fixtures.</p>

                                    <p>Then, the secondary goal is to finish in the top-2 as the first and second seeded
                                        teams get an extra opportunity to quality for the <a href="">IPL Finals.</a></p>

                                    <p><strong><em>Also see - </em></strong><a href="" target="_blank"><strong><em>IPL
                                        Schedule</em></strong></a></p>

                                    <h4><strong>IPL Standings Trivias</strong></h4>
                                    <ol>
                                        <li>No team has ever progressed to Playoffs with less than 12 points in the history
                                            of IPL.</li>
                                        <li>Delhi Daredevils (now Delhi Capitals) and Deccan Chargers (now defunct) are the
                                            only 2 teams to have accumulated 4 points in an IPL Season which is the lowest
                                            points accumulated by any team.</li>
                                        <li>Kolkata Knight Riders and Deccan Chargers (now defunct) are the only teams which
                                            have never finished 1st in the Indian Premier League Points table but have gone
                                            on to win the tournament.</li>
                                        <li>Delhi Daredevils (now Delhi Capitals) is the only team in IPL history to finish
                                            1st in the IPL points table but never win the title. They have done it thrice.
                                        </li>
                                        <li>Two sets of three teams were tied on the same number of points in IPL 2020
                                            (Sunrisers Hyderabad, Royal Challengers Bangalore and Kolkata Knight Riders were
                                            tied on 14 while Punjab Kings, Chennai Super Kings and Rajasthan Royals were
                                            tied on 12 each).</li>
                                        <li>Four teams were tied on 14 points each in IPL 2010 - Chennai Super Kings, Royal
                                            Challengers Bangalore, Delhi Daredevils (now Delhi Capitals) and Kolkata Knight
                                            Riders.</li>
                                        <li>The highest NRR achieved by any team at the end of the league stage is +1.107 by
                                            the Mumbai Indians in IPL 2020 while the lowest is -1.436 achieved by Kings XI
                                            Punjab (now Punjab Kings) in IPL 2015.</li>
                                    </ol>
                                    <h4><strong>Which teams have finished last on the points table in each IPL?</strong>
                                    </h4>
                                    <div className="_match_point_tables">
                                        <table className="_table_stands mb-3">
                                            <tbody>
                                                <tr>
                                                    <td data-row="1"><strong>Season</strong></td>
                                                    <td data-row="1"><strong>Team finishing last</strong></td>
                                                </tr>
                                                <tr>
                                                    <td data-row="2">2008</td>
                                                    <td data-row="2">Deccan Chargers</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="3">2009</td>
                                                    <td data-row="3">Kolkata Knight Riders</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="4">2010</td>
                                                    <td data-row="4">Kings XI Punjab</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="5">2011</td>
                                                    <td data-row="5">Delhi Daredevils</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="6">2012</td>
                                                    <td data-row="6">Pune Warriors India</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="7">2013</td>
                                                    <td data-row="7">Delhi Daredevils</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="8">2014</td>
                                                    <td data-row="8">Delhi Daredevils</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="9">2015</td>
                                                    <td data-row="9">Kings XI Punjab</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="10">2016</td>
                                                    <td data-row="10">Kings XI Punjab</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="11">2017</td>
                                                    <td data-row="11">Royal Challengers Bangalore</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="12">2018</td>
                                                    <td data-row="12">Delhi Daredevils</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="13">2019</td>
                                                    <td data-row="13">Royal Challengers Bangalore</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="14">2020</td>
                                                    <td data-row="14">Rajasthan Royals</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="15">2021</td>
                                                    <td data-row="15">Sunrisers Hyderabad</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="row-js77">2022</td>
                                                    <td data-row="row-js77">Mumbai Indians</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p><strong><em>Catch the latest </em></strong><a href="" target="_blank"><strong><em>IPL
                                        news</em></strong></a><strong><em> updates here on
                                            Cricfeel.</em></strong></p>

                                    <h4><strong>IPL Points Table (2021)</strong></h4>
                                    <div className="_match_point_tables">
                                        <table className="_table_stands mb-3">
                                            <tbody>
                                                <tr>
                                                    <td data-row="1">POS</td>
                                                    <td data-row="1">Team</td>
                                                    <td data-row="1">Matches</td>
                                                    <td data-row="1">Won</td>
                                                    <td data-row="1">Lost</td>
                                                    <td data-row="1">Tied</td>
                                                    <td data-row="1">NR</td>
                                                    <td data-row="1">Points</td>
                                                    <td data-row="1">NRR</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="2">1</td>
                                                    <td data-row="2">Gujarat Titana</td>
                                                    <td data-row="2">14</td>
                                                    <td data-row="2">10</td>
                                                    <td data-row="2">4</td>
                                                    <td data-row="2">0</td>
                                                    <td data-row="2">0</td>
                                                    <td data-row="2">20</td>
                                                    <td data-row="2">0.316</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="3">2</td>
                                                    <td data-row="3">Rajasthan Royals</td>
                                                    <td data-row="3">14</td>
                                                    <td data-row="3">9</td>
                                                    <td data-row="3">5</td>
                                                    <td data-row="3">0</td>
                                                    <td data-row="3">0</td>
                                                    <td data-row="3">18</td>
                                                    <td data-row="3">0.298</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="4">3</td>
                                                    <td data-row="4">Lucknow SuperGiants</td>
                                                    <td data-row="4">14</td>
                                                    <td data-row="4">9</td>
                                                    <td data-row="4">5</td>
                                                    <td data-row="4">0</td>
                                                    <td data-row="4">0</td>
                                                    <td data-row="4">18</td>
                                                    <td data-row="4">0.251</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="5">4</td>
                                                    <td data-row="5">Royal Challengers Bangalore</td>
                                                    <td data-row="5">14</td>
                                                    <td data-row="5">8</td>
                                                    <td data-row="5">6</td>
                                                    <td data-row="5">0</td>
                                                    <td data-row="5">0</td>
                                                    <td data-row="5">16</td>
                                                    <td data-row="5">-0.253</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="6">5</td>
                                                    <td data-row="6">Delhi Capitals</td>
                                                    <td data-row="6">14</td>
                                                    <td data-row="6">7</td>
                                                    <td data-row="6">7</td>
                                                    <td data-row="6">0</td>
                                                    <td data-row="6">0</td>
                                                    <td data-row="6">14</td>
                                                    <td data-row="6">0.204</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="7">6</td>
                                                    <td data-row="7">Punjab Kings</td>
                                                    <td data-row="7">14</td>
                                                    <td data-row="7">7</td>
                                                    <td data-row="7">7</td>
                                                    <td data-row="7">0</td>
                                                    <td data-row="7">0</td>
                                                    <td data-row="7">14</td>
                                                    <td data-row="7">0.126</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="8">7</td>
                                                    <td data-row="8">Kolkata Knight Riders</td>
                                                    <td data-row="8">14</td>
                                                    <td data-row="8">6</td>
                                                    <td data-row="8">8</td>
                                                    <td data-row="8">0</td>
                                                    <td data-row="8">0</td>
                                                    <td data-row="8">12</td>
                                                    <td data-row="8">0.146</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="9">8</td>
                                                    <td data-row="9">SunRisers Hyderabad</td>
                                                    <td data-row="9">14</td>
                                                    <td data-row="9">6</td>
                                                    <td data-row="9">8</td>
                                                    <td data-row="9">0</td>
                                                    <td data-row="9">0</td>
                                                    <td data-row="9">12</td>
                                                    <td data-row="9">-0.379</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="10">9</td>
                                                    <td data-row="10">Chennai Super Kings</td>
                                                    <td data-row="10">14</td>
                                                    <td data-row="10">4</td>
                                                    <td data-row="10">10</td>
                                                    <td data-row="10">0</td>
                                                    <td data-row="10">0</td>
                                                    <td data-row="10">8</td>
                                                    <td data-row="10">-0.203</td>
                                                </tr>
                                                <tr>
                                                    <td data-row="11">10</td>
                                                    <td data-row="11">Mumbai Indians</td>
                                                    <td data-row="11">14</td>
                                                    <td data-row="11">4</td>
                                                    <td data-row="11">10</td>
                                                    <td data-row="11">0</td>
                                                    <td data-row="11">0</td>
                                                    <td data-row="11">8</td>
                                                    <td data-row="11">-0.506</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-4">
                            <section></section>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Pointable