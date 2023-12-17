import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from './Navbar'
import './style.css';
import './cricket.css';
import './responsive.css';

const Livescore = () => {

  const [LiveScore ,setLiveScore] = useState(1);
  const LiveScoretoggle = (index) =>{
    setLiveScore(index)
  }
  const ActiveLiveScore = (index , activeclass) => 
     LiveScore === index ? activeclass : "";
  
   
 
  return (
    <>
      <Helmet>
        <title>Cricfeel | Videos</title>
      </Helmet>
      <Header />
      <Navbar />
      <section className="mt-20">
        <div className="container CustomContainer">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <div className="LiveTab live-cricket-tab-contain">
                <ul className="live-cricket-tabs">
                  <li><Link className={` ${ActiveLiveScore(1,'active')}`} onClick={()=>LiveScoretoggle(1)}> Upcoming</Link> </li>
                  <li><Link className={` ${ActiveLiveScore(2,'active')}`} onClick={()=>LiveScoretoggle(2)}>Results</Link> </li>
                </ul>
                <div className="LiveScoreConetent">
                  {/* upcoming */}
                  <div id="upcoming" className={`live-cricket-panel ${ActiveLiveScore(1,'live-active')}`}>
                    <section className="py-live">
                      {/* Start */}
                      <div className="_cricket_event_card _live_cc">
                        <a
                          href="live-score-detail.php"
                          className="_cricket_event_match pre"
                        >
                          <div className="_cricket_event_date">
                            Today <br /> 07:30 PM
                          </div>
                          <div className="_cricket_venue">
                            <span>
                              <div className="match-description">
                                Match 14 , Rajiv Gandhi International Stadium, Uppal,
                                Hyderabad
                              </div>
                            </span>
                            <div className="_cricket_team_name">
                             
                              <img
                                src="assets/images/royal-challengers-bangalore.webp"
                                alt=""
                              />
                              RCB
                              <span className="_match_results" />
                            </div>
                            <div className="_cricket_team_name">
                             
                              <img
                                src="assets/images/lucknow-super-giants.webp"
                                alt=""
                              />
                              LSG
                              <span className="_match_results" />
                            </div>
                            <div className="_match_result_cont"></div>
                          </div>
                        </a>
                      </div>
                      {/* End */}
                      {/* Start */}
                      <div className="_cricket_event_card _live_cc">
                        <a
                          href="live-score-detail.php"
                          className="_cricket_event_match pre"
                        >
                          <div className="_cricket_event_date">
                            Tomorrow <br />
                            07 PM
                          </div>
                          <div className="_cricket_venue">
                            <span>
                              <div className="match-description">
                                Match 14 , Rajiv Gandhi International Stadium, Uppal,
                                Hyderabad
                              </div>
                            </span>
                            <div className="_cricket_team_name">
                             
                              <img
                                src="assets/images/royal-challengers-bangalore.webp"
                                alt=""
                              />
                              RCB
                              <span className="_match_results" />
                            </div>
                            <div className="_cricket_team_name">
                             
                              <img
                                src="assets/images/lucknow-super-giants.webp"
                                alt=""
                              />
                              LSG
                              <span className="_match_results" />
                            </div>
                            <div className="_match_result_cont"></div>
                          </div>
                        </a>
                      </div>
                      {/* End */}
                      <div className="live-all-upcoming">
                        <a href="">All upcoming matches</a>
                      </div>
                    </section>
                  </div>
                  {/* End upcoming */}
                  {/* Result */}
                  <div id="liveresults" className={`live-cricket-panel ${ActiveLiveScore(2,'live-active')}`}>
                    <section className="py-live">
                      {/* Start */}
                      <div className="_cricket_event_card _live_cc">
                        <a href="" className="_cricket_event_match pre">
                          <div className="_cricket_event_date">April 09</div>
                          <div className="_cricket_venue">
                            <span>
                              <div className="match-description">
                                Match 14 , Rajiv Gandhi International Stadium, Uppal,
                                Hyderabad
                              </div>
                            </span>
                            <div className="_cricket_team_name">
                             
                              <img
                                src="assets/images/royal-challengers-bangalore.webp"
                                alt=""
                              />
                              RCB
                              <span className="_match_results">160/9 (20 ov)</span>
                            </div>
                            <div className="_cricket_team_name">
                             
                              <img
                                src="assets/images/lucknow-super-giants.webp"
                                alt=""
                              />
                              LSG
                              <span className="_match_results">155/9 (20 ov)</span>
                            </div>
                            <div className="_match_result_cont">
                              Royal Challengers Bangalore won by 4 runs
                            </div>
                          </div>
                        </a>
                      </div>
                      {/* End */}
                      {/* Start */}
                      <div className="_cricket_event_card _live_cc">
                        <a href="" className="_cricket_event_match pre">
                          <div className="_cricket_event_date">April 09</div>
                          <div className="_cricket_venue">
                            <span>
                              <div className="match-description">
                                Match 14 , Rajiv Gandhi International Stadium, Uppal,
                                Hyderabad
                              </div>
                            </span>
                            <div className="_cricket_team_name">
                             
                              <img
                                src="assets/images/royal-challengers-bangalore.webp"
                                alt=""
                              />
                              RCB
                              <span className="_match_results">160/9 (20 ov)</span>
                            </div>
                            <div className="_cricket_team_name">
                             
                              <img
                                src="assets/images/lucknow-super-giants.webp"
                                alt=""
                              />
                              LSG
                              <span className="_match_results">155/9 (20 ov)</span>
                            </div>
                            <div className="_match_result_cont">
                              Royal Challengers Bangalore won by 4 runs
                            </div>
                          </div>
                        </a>
                      </div>
                      {/* End */}
                      <div className="live-all-upcoming">
                        <a href="">All upcoming matches</a>
                      </div>
                    </section>
                  </div>
                  {/* End upcoming */}
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Livescore