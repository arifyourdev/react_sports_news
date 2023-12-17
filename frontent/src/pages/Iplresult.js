import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import './style.css';
import './cricket.css';
import './responsive.css';
import Navbar from './Navbar';

const Iplresult = () => {
  return (
     <>
          <Helmet>
              <title>Cricfeel | IPl Results</title>
          </Helmet>
          <Header />
          <Navbar/>
          <section className="mt-20">
            <div className="container CustomContainer">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="_cricket_event_schedule">
                        <div className="match-tabs ">
                            <Link to="/ipl-schedule" className="match-anchor">Upcomming</Link>
                            <Link to="/ipl-result" className="match-anchor active-match">Results</Link>
                        </div>
                         <div className="_cricket_event_card">
                            <Link to="" className="_cricket_event_match pre">
                               <div className="_cricket_event_date">April 09</div>
                               <div className="_cricket_venue">
                                 <span><div className="match-description">Match 14 , Rajiv Gandhi International Stadium, Uppal, Hyderabad</div></span>
                                 <div className="_cricket_team_name"> <img src="assets/images/royal-challengers-bangalore.webp" alt=""/> RCB 
                                  <span className="_match_results">160/9 (20 ov)</span>
                                </div>
                                 <div className="_cricket_team_name"> <img src="assets/images/lucknow-super-giants.webp" alt=""/>LSG  
                                  <span className="_match_results">155/9 (20 ov)</span></div>
                                  <div className="_match_result_cont">
                                     Royal Challengers Bangalore won by 4 runs
                                  </div>
                               </div>
                            </Link>
                         </div>

                         <div className="_cricket_event_card">
                            <Link to="" className="_cricket_event_match pre">
                               <div className="_cricket_event_date">April 09</div>
                               <div className="_cricket_venue">
                                 <span><div className="match-description">Match 14 , Rajiv Gandhi International Stadium, Uppal, Hyderabad</div></span>
                                 <div className="_cricket_team_name"> <img src="assets/images/royal-challengers-bangalore.webp" alt=""/> RCB 
                                  <span className="_match_results">160/9 (20 ov)</span>
                                </div>
                                 <div className="_cricket_team_name"> <img src="assets/images/lucknow-super-giants.webp" alt=""/>LSG  
                                  <span className="_match_results">155/9 (20 ov)</span></div>
                                  <div className="_match_result_cont">
                                     Royal Challengers Bangalore won by 4 runs
                                  </div>
                               </div>
                            </Link>
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                        <section></section>
                    </div>
                </div>
            </div>
        </section>
          <Footer/>
     </>
  )
}

export default Iplresult