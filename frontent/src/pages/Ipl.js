import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";


const Ipl = () => {
  const [tab, setTab] = useState(1);
  const ToggleTab = (index) => {
    setTab(index);
  }
  const ActiveTab = (index, className) =>
    tab === index ? className : "";

  const [tab2, setTab2] = useState(1);
  const ToggleTab2 = (index) => {
    setTab2(index);
  }
  const ActiveTab2 = (index, className2) =>
    tab2 === index ? className2 : "";

  const [match, setMatch] = useState([]);

  const fetchData = async () => {
     try{
      const res = await fetch('http://localhost:8080/api/cricket')
      const data = await res.json();
      console.log(data.matches)
      setMatch(data.matches)
     }catch(e){
      console.log(e)
     }
    }
  useEffect(() => {
    fetchData();
  }, [])

  // useEffect(() => {
  //   axios.get(`https://push.sportskeeda.com/get-cricket-matches/featuredrm`).then((response) => {
  //     setMatch(response.data);
  //   });
  // }, []);

  return (
    <>
      <Helmet>
        <title>Cricfeel | Ipl 2023</title>
      </Helmet>
      <Header />
      <section className="Navbar">
        <div className="primary-navigation">
          <div className="nav-items">
            <div className="secondary-navigation">
              <div className="nav-group">
                <div className="active-item">Cricket</div>
                <div className="secondary-nav-items-indicator"></div>
              </div>
              <div className="secondary-nav-items">
                <ul>
                  <li> <Link to="cricket.php">Cricket</Link> </li>
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
                  <li> <Link to="">Serie A </Link></li>
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
                <li className="active"><Link to="/ipl">Home</Link> </li>
                <li className=""><Link to="/ipl-schedule">Schedule</Link></li>
                <li className=""><Link to="/points-table">Points Table</Link></li>
                <li className=""><Link to="/orange-cap">Orange Cap</Link></li>
                <li className=""><Link to="/ipl-purple-cap">Purple Cap</Link></li>
                <li className=""><Link to="/stats">Stats</Link></li>
                <li className=""><Link to="/teams-and-squads">Teams & Squads</Link></li>
                <li className=""><Link to="/ipl-news">News</Link></li>
                <li className=""><Link to="/ipl-result">Results</Link></li>
                <li className=""><Link to="/videos">Videos</Link></li>
                <li className=""><Link to="/live-score">Live Scores</Link></li>
                <li className=""><Link to="/matches-live-score">Matches Live Scores</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="breadcrumb-container ipl-breadcrumb">
        <div className="conatainer">
          <div className="wrapper-container">
            <ul>
              <li><Link to=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="">Cricket News  <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="">IPL 2023 Live Scores</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="wrapper-container">
            <div className="hero-content">
              <div className="left">
                <div className="hero-h1-container">
                  <h1 className="hero-h1">IPL 2023 Live Scores</h1>
                </div>
                <div className="hash-tagline">#IPL2023 is Live!</div>
              </div>
              <div className="right">
                <div className="hero-img">
                  <img width="463" height="263" alt="hero image" src="assets/images/img/desktop.webp"
                    className="lazy-img-bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section premier-section">
        <div className="container">
          <div className="tabbedPanels CustomContainer leaqueContain">
            <div id="Premier-league-owlCarousel" className="owl-carousel owl-theme default-owl-icon">
              <Swiper
                slidesPerView={4}
                spaceBetween={2}
                freeMode={true}
                breakpoints={{
                  360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  575: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 6 - 1.8,
                    spaceBetween: 10,
                  },
                }}
                navigation={true} modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide>
                  <div className="item BoxHover">
                    <div className="tabBox">
                      <Link to="/live-cricket-score" className="keramasterBox">
                        <div className="tabBoxPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/chennai-super-kings.webp" alt="" style={{ width: "100%" }} /> <span>
                                  CSK</span></div>
                              <div className="keeda-scoreBoard">178/7 (20 ov)</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/gujarat-titans.webp" alt="" style={{ width: "100%" }} /> <span>
                                  GT</span></div>
                              <div className="keeda-scoreBoard">182/5 (19.2 ov)</div>
                            </div>
                            <div className="live keeda-descript">
                              <span>GT won by 5 wickets</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="tabBoxfooter">
                        <Link to="" className="keramasterBox">
                        </Link><Link to="/points-table">Points Tale <i
                          className="fa-solid fa-angle-right"></i></Link>
                        <Link to="/cricket-schedule">Schedule <i className="fa-solid fa-angle-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item BoxHover">
                    <div className="tabBox">
                      <Link to="/live-cricket-score" className="keramasterBox">
                        <div className="tabBoxPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/chennai-super-kings.webp" alt="" style={{ width: "100%" }} /> <span>
                                  CSK</span></div>
                              <div className="keeda-scoreBoard">178/7 (20 ov)</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/gujarat-titans.webp" alt="" style={{ width: "100%" }} /> <span>
                                  GT</span></div>
                              <div className="keeda-scoreBoard">182/5 (19.2 ov)</div>
                            </div>
                            <div className="live keeda-descript">
                              <span>GT won by 5 wickets</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="tabBoxfooter">
                        <Link to="" className="keramasterBox">
                        </Link><Link to="/points-table">Points Tale <i
                          className="fa-solid fa-angle-right"></i></Link>
                        <Link to="/cricket-schedule">Schedule <i className="fa-solid fa-angle-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item BoxHover">
                    <div className="tabBox">
                      <Link to="/live-cricket-score" className="keramasterBox">
                        <div className="tabBoxPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/chennai-super-kings.webp" alt="" style={{ width: "100%" }} /> <span>
                                  CSK</span></div>
                              <div className="keeda-scoreBoard">178/7 (20 ov)</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/gujarat-titans.webp" alt="" style={{ width: "100%" }} /> <span>
                                  GT</span></div>
                              <div className="keeda-scoreBoard">182/5 (19.2 ov)</div>
                            </div>
                            <div className="live keeda-descript">
                              <span>GT won by 5 wickets</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="tabBoxfooter">
                        <Link to="" className="keramasterBox">
                        </Link><Link to="/points-table">Points Tale <i
                          className="fa-solid fa-angle-right"></i></Link>
                        <Link to="/cricket-schedule">Schedule <i className="fa-solid fa-angle-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item BoxHover">
                    <div className="tabBox">
                      <Link to="/live-cricket-score" className="keramasterBox">
                        <div className="tabBoxPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                            <i className="fa-regular fa-bell"></i>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/chennai-super-kings.webp" alt="" style={{ width: "100%" }} /> <span>
                                  CSK</span></div>
                              <div className="keeda-scoreBoard">178/7 (20 ov)</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/gujarat-titans.webp" alt="" style={{ width: "100%" }} /> <span>
                                  GT</span></div>
                              <div className="keeda-scoreBoard">182/5 (19.2 ov)</div>
                            </div>
                            <div className="live keeda-descript">
                              <span>GT won by 5 wickets</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="tabBoxfooter">
                        <Link to="" className="keramasterBox">
                        </Link><Link to="/points-table">Points Tale <i
                          className="fa-solid fa-angle-right"></i></Link>
                        <Link to="/cricket-schedule">Schedule <i className="fa-solid fa-angle-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item BoxHover">
                    <div className="tabBox">
                      <Link to="/live-cricket-score" className="keramasterBox">
                        <div className="tabBoxPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                            <i className="fa-regular fa-bell"></i>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/chennai-super-kings.webp" alt="" style={{ width: "100%" }} /> <span>
                                  CSK</span></div>
                              <div className="keeda-scoreBoard">178/7 (20 ov)</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags"><img
                                src="assets/images/flag/gujarat-titans.webp" alt="" style={{ width: "100%" }} /> <span>
                                  GT</span></div>
                              <div className="keeda-scoreBoard">182/5 (19.2 ov)</div>
                            </div>
                            <div className="live keeda-descript">
                              <span>GT won by 5 wickets</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="tabBoxfooter">
                        <Link to="" className="keramasterBox">
                        </Link><Link to="/points-table">Points Tale <i
                          className="fa-solid fa-angle-right"></i></Link>
                        <Link to="/cricket-schedule">Schedule <i className="fa-solid fa-angle-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-200 mt-3">
        <div class="container CustomContainer">
          <div class="heading">
            <h2>IPL 2022-23</h2>
          </div>
          <div className='row'>
            <div className='col-lg-8'>
              <section className="feed-section first-border-section">
                <div className="sportKeedaFeed">
                  <a className="sports-feed-item" href="#">
                    <img src="assets/images/img/8e9a8-16811038457427-1920.avif" alt="Viral" />
                    <div className="sports-feed-item-element-meta">
                      <div className="sports-primary-title">"Kohli and Rahul should together score more
                        than 55 runs" - Aakash Chopra makes his predictions for RCB-LSG IPL 2023
                        clash
                      </div>
                    </div>
                  </a>

                  <div className="feed-item-secondary">
                    <a className="cover-link-tag" href="">
                      <div className="sports-feed-item-secondary-element">
                        <img className="feed-element-img lazy-img-bg"
                          src="assets/images/img/07db8-16811073968504-1920.avif" alt="Miller" />
                        <div className="sports-feed-item-secondary-meta">
                          <div className="sports-item-title">Ravindra Jadeja's 3 best catches in the
                            IPL</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="feed-item-secondary">
                    <a className="cover-link-tag" href="">
                      <div className="sports-feed-item-secondary-element">
                        <img className="feed-element-img lazy-img-bg"
                          src="assets/images/img/07db8-16811073968504-1920.avif" alt="Miller" />
                        <div className="sports-feed-item-secondary-meta">
                          <div className="sports-item-title">Ravindra Jadeja's 3 best catches in the
                            IPL</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="feed-item-secondary">
                    <a className="cover-link-tag" href="">
                      <div className="sports-feed-item-secondary-element">
                        <img className="feed-element-img lazy-img-bg"
                          src="assets/images/img/6bb03-16804243193121-1920.avif" alt="Miller" />
                        <div className="sports-feed-item-secondary-meta">
                          <div className="sports-item-title">Ravindra Jadeja's 3 best catches in the
                            IPL</div>
                        </div>
                      </div>
                    </a>
                  </div>

                </div>
              </section>
              <section class="feed-section first-border-section">
                <div class="video-feed-container">
                  <div class="video-feed-header">
                    <h4>IPL Videos</h4>
                    <Link to="/videos">View All <i class="fa fa-angle-right"></i></Link>
                  </div>
                  <div id="Premier-video-owlCarousel" class="owl-carousel owl-theme mt-2">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={2}
                      freeMode={true}
                      breakpoints={{
                        360: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        575: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
                      navigation={true} modules={[Navigation]}
                      className="mySwiper">
                      <SwiperSlide>
                        <div class="item">
                          <div class="feed-carousel-item">
                            <a href="" class="item-cta" aria-label="video carousel item"></a>
                            <div class="thumbnail">
                              <img width="220" height="130" alt="Spurs vs Manchester "
                                src="assets/images/img/eeb35-16810942597062-1920.jpg"
                                class="lazy-img-bg" />
                              <div class="meta-duration-container">
                                <div class="meta-duration">0:50</div>
                              </div>
                            </div>
                            <div class="content">
                              <div class="title">IPL 2023 : कौन हैं 20 लाख में बिकने वाले Sai
                                Sudarshan? जो करोड़ों के खिलाड़ियों पर पड़ा भारी Harry Brook, Cameron
                                Green & Ben Stokes | GT VS KKR</div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="item">
                          <div class="feed-carousel-item">
                            <a href="" class="item-cta" aria-label="video carousel item"></a>
                            <div class="thumbnail">
                              <img width="220" height="130" alt="Spurs vs Manchester "
                                src="assets/images/img/eeb35-16810942597062-1920.jpg"
                                class="lazy-img-bg" />
                              <div class="meta-duration-container">
                                <div class="meta-duration">0:50</div>
                              </div>
                            </div>
                            <div class="content">
                              <div class="title">IPL 2023 : कौन हैं 20 लाख में बिकने वाले Sai
                                Sudarshan? जो करोड़ों के खिलाड़ियों पर पड़ा भारी Harry Brook, Cameron
                                Green & Ben Stokes | GT VS KKR</div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="item">
                          <div class="feed-carousel-item">
                            <a href="" class="item-cta" aria-label="video carousel item"></a>
                            <div class="thumbnail">
                              <img width="220" height="130" alt="Spurs vs Manchester "
                                src="assets/images/img/eeb35-16810942597062-1920.jpg"
                                class="lazy-img-bg" />
                              <div class="meta-duration-container">
                                <div class="meta-duration">0:50</div>
                              </div>
                            </div>
                            <div class="content">
                              <div class="title">IPL 2023 : कौन हैं 20 लाख में बिकने वाले Sai
                                Sudarshan? जो करोड़ों के खिलाड़ियों पर पड़ा भारी Harry Brook, Cameron
                                Green & Ben Stokes | GT VS KKR</div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="item">
                          <div class="feed-carousel-item">
                            <a href="" class="item-cta" aria-label="video carousel item"></a>
                            <div class="thumbnail">
                              <img width="220" height="130" alt="Spurs vs Manchester "
                                src="assets/images/img/eeb35-16810942597062-1920.jpg"
                                class="lazy-img-bg" />
                              <div class="meta-duration-container">
                                <div class="meta-duration">0:50</div>
                              </div>
                            </div>
                            <div class="content">
                              <div class="title">IPL 2023 : कौन हैं 20 लाख में बिकने वाले Sai
                                Sudarshan? जो करोड़ों के खिलाड़ियों पर पड़ा भारी Harry Brook, Cameron
                                Green & Ben Stokes | GT VS KKR</div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </section>
              <section className="feed-section first-border-section">
                <div className="video-feed-container">
                  <div className="video-feed-header">
                    <h4>IPL 2023 Leaderboard</h4>
                    <Link to="/videos">View All <i className="fa fa-angle-right"></i></Link>
                  </div>
                  <div id="Leaderboard-Owl" className="owl-carousel owl-theme mt-2 default-owl-icon">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={2}
                      freeMode={true}
                      breakpoints={{
                        360: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        575: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4 - 1.5,
                          spaceBetween: 10,
                        },
                      }}
                      navigation={true} modules={[Navigation]}
                      className="mySwiper">
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-leaderboard-box">
                            <div className="leaderboard-heading">Orange Cap</div>
                            <a href="">
                              <div className="tournament-leaderboard-flex-box">
                                <div className="leaderboard-player">
                                  <div className="player-name">Faf <br />Du Plassis</div>
                                  <span className="player-runs">354</span>
                                  <div className="player-team">
                                    <img src="assets/images/royal-challengers-bangalore.webp"
                                      className="p-img" alt="" />
                                  </div>
                                </div>
                                <div className="player-profile">
                                  <img src="assets/images/img/07324-16820479297282-1920.avif"
                                    width="70" height="70" alt="" />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/royal-challengers-bangalore.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Virat Kohli</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">322</div>
                          </div>
                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/flag/chennai-super-kings.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Devon Conway</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">317</div>
                          </div>
                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/flag/chennai-super-kings.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Ruturaj Gaikwad</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">333</div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-leaderboard-box">
                            <div className="leaderboard-heading">Purple Cap</div>
                            <a href="">
                              <div className="tournament-leaderboard-flex-box">
                                <div className="leaderboard-player">
                                  <div className="player-name">Mohammad <br />Siraj</div>
                                  <span className="player-runs">15</span>
                                  <div className="player-team">
                                    <img src="assets/images/royal-challengers-bangalore.webp"
                                      className="p-img" alt="" />
                                  </div>
                                </div>
                                <div className="player-profile">
                                  <img src="assets/images/img/b22e2-16760104500343-1920.avif"
                                    width="70" height="70" alt="" />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/flag/gujarat-titans.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Rashid Khan</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">14</div>
                          </div>

                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/flag/chennai-super-kings.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Tushar Deshpande</a>
                              </div>
                            </div>
                            <div className="tournament-leaderboard-item-stat">14</div>
                          </div>

                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/kkr-ipl2015teamlogo-300x300-1459854270.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Varun Chakravarthy</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">333</div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-leaderboard-box">
                            <div className="leaderboard-heading">Purple Cap</div>
                            <a href="">
                              <div className="tournament-leaderboard-flex-box">
                                <div className="leaderboard-player">
                                  <div className="player-name">Mohammad <br />Siraj</div>
                                  <span className="player-runs">15</span>
                                  <div className="player-team">
                                    <img src="assets/images/royal-challengers-bangalore.webp"
                                      className="p-img" alt="" />
                                  </div>
                                </div>
                                <div className="player-profile">
                                  <img src="assets/images/img/b22e2-16760104500343-1920.avif"
                                    width="70" height="70" alt="" />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/flag/gujarat-titans.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Rashid Khan</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">14</div>
                          </div>

                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/flag/chennai-super-kings.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Tushar Deshpande</a>
                              </div>
                            </div>
                            <div className="tournament-leaderboard-item-stat">14</div>
                          </div>

                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/kkr-ipl2015teamlogo-300x300-1459854270.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Varun Chakravarthy</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">333</div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-leaderboard-box">
                            <div className="leaderboard-heading">Purple Cap</div>
                            <a href="">
                              <div className="tournament-leaderboard-flex-box">
                                <div className="leaderboard-player">
                                  <div className="player-name">Mohammad <br />Siraj</div>
                                  <span className="player-runs">15</span>
                                  <div className="player-team">
                                    <img src="assets/images/royal-challengers-bangalore.webp"
                                      className="p-img" alt="" />
                                  </div>
                                </div>
                                <div className="player-profile">
                                  <img src="assets/images/img/b22e2-16760104500343-1920.avif"
                                    width="70" height="70" alt="" />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/flag/gujarat-titans.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Rashid Khan</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">14</div>
                          </div>

                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/flag/chennai-super-kings.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Tushar Deshpande</a>
                              </div>
                            </div>
                            <div className="tournament-leaderboard-item-stat">14</div>
                          </div>

                          <div className="tournament-leaderboard-item-secondary">
                            <div className="tournament-leaderboard-item">
                              <div className="tournament-leaderboard-item-rank">2</div>
                              <img className="tournament-leaderboard-item-team-flag lazy-img-bg"
                                width="24" height="24" alt="team flag" loading="lazy"
                                src="assets/images/kkr-ipl2015teamlogo-300x300-1459854270.webp" />
                              <div className="tournament-leaderboard-item-player">
                                <a href="">Varun Chakravarthy</a>
                              </div>
                            </div>

                            <div className="tournament-leaderboard-item-stat">333</div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </section>
              <section className="feed-section first-border-section">
                <div className="video-feed-container">
                  <div className="video-feed-header">
                    <h4>IPL 2023 Teams</h4>
                  </div>
                  <div id="Ipl-team-Owl" className="owl-carousel owl-theme mt-2 default-owl-icon">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={2}
                      freeMode={true}
                      breakpoints={{
                        360: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        575: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 6 - 1.5,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={true} modules={[Navigation]}
                      className="mySwiper">
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-team-item">
                            <div className="team-item-content" style={{ background: "#ffdbda" }}>
                              <div className="team-item-content2">
                                <img src="assets/images/img/royal-challengers-bangalore.avif" alt="" style={{ border: "2px solid #911410" }} />
                              </div>
                              <div className="team-title">Royals Challengers <br />Bangalore</div>
                            </div>
                            <footer className="team-item-footer" style={{ background: "#911410" }}>
                              <div className="team-item-footer-actions">
                                <Link className="team-item-footer-action-item" to="">
                                  <span>Squads<i className="fa fa-angle-right"></i></span>
                                </Link>
                                <Link className="team-item-footer-action-item" to="">
                                  <span>Schedule<i className="fa fa-angle-right"></i></span>
                                </Link>
                              </div>
                            </footer>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-team-item">
                            <div className="team-item-content" style={{ background: "#fffbed" }}>
                              <div className="team-item-content2">
                                <img src="assets/images/img/chennai-super-kings.webp" alt="" style={{ border: "2px solid #911410" }} />
                              </div>
                              <div className="team-title">Chennai Super <br />Kings</div>
                            </div>
                            <footer className="team-item-footer" style={{ background: "#F3BF00" }}>
                              <div className="team-item-footer-actions">
                                <a className="team-item-footer-action-item" href="">
                                  <span>Squads<i className="fa fa-angle-right"></i></span>
                                </a>
                                <a className="team-item-footer-action-item" href="">
                                  <span>Schedule<i className="fa fa-angle-right"></i></span>
                                </a>
                              </div>
                            </footer>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-team-item">
                            <div className="team-item-content" style={{ background: "#ffdbda" }}>
                              <div className="team-item-content2">
                                <img src="assets/images/img/royal-challengers-bangalore.avif" alt="" style={{ border: "2px solid #911410" }} />
                              </div>
                              <div className="team-title">Royals Challengers <br />Bangalore</div>
                            </div>
                            <footer className="team-item-footer" style={{ background: "#911410" }}>
                              <div className="team-item-footer-actions">
                                <a className="team-item-footer-action-item" href="">
                                  <span>Squads<i className="fa fa-angle-right"></i></span>
                                </a>
                                <a className="team-item-footer-action-item" href="">
                                  <span>Schedule<i className="fa fa-angle-right"></i></span>
                                </a>
                              </div>
                            </footer>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-team-item">
                            <div className="team-item-content" style={{ background: "#fffbed" }}>
                              <div className="team-item-content2">
                                <img src="assets/images/img/chennai-super-kings.webp" alt="" style={{ border: "2px solid #911410" }} />
                              </div>
                              <div className="team-title">Chennai Super <br />Kings</div>
                            </div>
                            <footer className="team-item-footer" style={{ background: "#F3BF00" }}>
                              <div className="team-item-footer-actions">
                                <a className="team-item-footer-action-item" href="">
                                  <span>Squads<i className="fa fa-angle-right"></i></span>
                                </a>
                                <a className="team-item-footer-action-item" href="">
                                  <span>Schedule<i className="fa fa-angle-right"></i></span>
                                </a>
                              </div>
                            </footer>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-team-item">
                            <div className="team-item-content" style={{ background: "#ffdbda" }}>
                              <div className="team-item-content2">
                                <img src="assets/images/img/royal-challengers-bangalore.avif" alt="" style={{ border: "2px solid #911410" }} />
                              </div>
                              <div className="team-title">Royals Challengers <br />Bangalore</div>
                            </div>
                            <footer className="team-item-footer" style={{ background: "#911410" }}>
                              <div className="team-item-footer-actions">
                                <a className="team-item-footer-action-item" href="">
                                  <span>Squads<i className="fa fa-angle-right"></i></span>
                                </a>
                                <a className="team-item-footer-action-item" href="">
                                  <span>Schedule<i className="fa fa-angle-right"></i></span>
                                </a>
                              </div>
                            </footer>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="itemsss">
                          <div className="tournament-team-item">
                            <div className="team-item-content" style={{ background: "#fffbed" }}>
                              <div className="team-item-content2">
                                <img src="assets/images/img/chennai-super-kings.webp" alt="" style={{ border: "2px solid #911410" }} />
                              </div>
                              <div className="team-title">Chennai Super <br />Kings</div>
                            </div>
                            <footer className="team-item-footer" style={{ background: "#F3BF00" }}>
                              <div className="team-item-footer-actions">
                                <a className="team-item-footer-action-item" href="">
                                  <span>Squads<i className="fa fa-angle-right"></i></span>
                                </a>
                                <a className="team-item-footer-action-item" href="">
                                  <span>Schedule<i className="fa fa-angle-right"></i></span>
                                </a>
                              </div>
                            </footer>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </section>
              <section className="feed-section first-border-section">
                <div className="sportKeedaFeed">
                  <a className="sports-feed-item" href="#">
                    <img src="assets/images/img/5c55a-16804664755510-1920.avif" alt="Viral" />
                    <div className="sports-feed-item-element-meta">
                      <div className="sports-primary-title"> Who is Bruno Saltor? Ex-Brighton man will
                        take charge of Chelsea on interim basis after Graham Potter's sacking
                      </div>
                    </div>
                  </a>

                  <div className="feed-item-secondary">
                    <a className="cover-link-tag" href="">
                      <div className="sports-feed-item-secondary-element">
                        <img className="feed-element-img lazy-img-bg"
                          src="assets/images/img/1b800-16804564388478-1920.avif" alt="Miller" />
                        <div className="sports-feed-item-secondary-meta">
                          <div className="sports-item-title">5 star players who are missing the start
                            of IPL 2023</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="feed-item-secondary">
                    <a className="cover-link-tag" href="">
                      <div className="sports-feed-item-secondary-element">
                        <img className="feed-element-img lazy-img-bg"
                          src="assets/images/img/c654f-16804642270580-1920.avif" alt="Miller" />
                        <div className="sports-feed-item-secondary-meta">
                          <div className="sports-item-title">5 star players who are missing the start
                            of IPL 2023</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="feed-item-secondary">
                    <a className="cover-link-tag" href="">
                      <div className="sports-feed-item-secondary-element">
                        <img className="feed-element-img lazy-img-bg"
                          src="assets/images/img/6bb03-16804243193121-1920.avif" alt="Miller" />
                        <div className="sports-feed-item-secondary-meta">
                          <div className="sports-item-title">5 star players who are missing the start
                            of IPL 2023</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="feed-item-secondary">
                    <a className="cover-link-tag" href="">
                      <div className="sports-feed-item-secondary-element">
                        <img className="feed-element-img lazy-img-bg"
                          src="assets/images/img/c654f-16804642270580-1920.avif" alt="Miller" />
                        <div className="sports-feed-item-secondary-meta">
                          <div className="sports-item-title">5 star players who are missing the start
                            of IPL 2023</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="more-news">
                    <Link to="" className="view-more-cta">More EPL News</Link>
                  </div>
                </div>
              </section>
              <section className="feed-section first-border-section">
                <div className="video-feed-container">
                  <div className="video-feed-header">
                    <h4>About EPL</h4>
                  </div>
                  <div className="page-seo-content">
                    <div className="cms-content">
                      <p>The top-flight of the English football league system is called the Premier
                        League. It was founded in 1992 as the FA Premier League after the Football
                        League First Division clubs decided to break away from the original English
                        league that was founded in 1888.</p>
                      <div className="crms-moretext">
                        <img src="assets/images/img/c40b2-15619729093795-800.avif" alt="" />
                        <p>The Premier League is the Football League with the most number of
                          spectators in the world. The Premier League has seen 49 clubs take part
                          so far. However, only six teams have won the league title and they are
                          Manchester United, Chelsea, Arsenal, Manchester City, Blackburn Rovers
                          and Leicester City.</p>
                        <p>Every year, the last 3 teams on the table are relegated to the English
                          first division league and the top 3 teams from the first division are
                          promoted to the Premier League.</p>
                      </div>
                    </div>
                  </div>
                  <div className="read-more-cmd d-none">
                    <Link className="moreless-button" to="#">Read more</Link>
                  </div>
                </div>
              </section>
            </div>
            <div className='col-lg-4'>
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
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                      <a className="newAnchorTag" href="#">
                        <div className="news-index">2</div>
                        <div className="news-title-container">
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                      <a className="newAnchorTag" href="#">
                        <div className="news-index">3</div>
                        <div className="news-title-container">
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                      <a className="newAnchorTag" href="#">
                        <div className="news-index">4</div>
                        <div className="news-title-container">
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                      <a className="newAnchorTag" href="#">
                        <div className="news-index">5</div>
                        <div className="news-title-container">
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div id="mostpopular" className={`sport-news-panel ${ActiveTab(2, 'news-active')}`}>
                    <div className="newtabContent">
                      <a className="newAnchorTag" href="#">
                        <div className="news-index">1</div>
                        <div className="news-title-container">
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                      <a className="newAnchorTag" href="#">
                        <div className="news-index">2</div>
                        <div className="news-title-container">
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                      <a className="newAnchorTag" href="#">
                        <div className="news-index">3</div>
                        <div className="news-title-container">
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                      <a className="newAnchorTag" href="#">
                        <div className="news-index">4</div>
                        <div className="news-title-container">
                          <div className="news-detail">“He’s back smiling” – Trent Alexander-Arnold
                            offers positive update on ‘exciting’ Liverpool star</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section class="cricket-points-table">
                <div class="points-table-panel">
                  <div class="panel-header">
                    <div class="panel-heading">IPL 2023 Points Table</div>
                    <Link to="/points-table">Full Table <i class="fa fa-angle-right"></i></Link>
                  </div>
                  <div className="widget--tournament-points-table">
                    <table className="tournament-points-table">
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
                        <td><a href="">
                          <div className="points-table-team">
                            <img src="assets/images/flag/rajasthan-royals.webp" alt="" />
                            <span>RR</span>
                          </div>
                        </a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1.354</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><a href="">
                          <div className="points-table-team">
                            <img src="assets/images/flag/lucknow-super-giants.webp" alt="" />
                            <span>LSG</span>
                          </div>
                        </a></td>
                        <td>5</td>
                        <td>3</td>
                        <td>2</td>
                        <td>0</td>
                        <td>.754</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><a href="">
                          <div className="points-table-team">
                            <img src="assets/images/flag/chennai-super-kings.webp" alt="" />
                            <span>CSK</span>
                          </div>
                        </a></td>
                        <td>5</td>
                        <td>3</td>
                        <td>2</td>
                        <td>0</td>
                        <td>2.354</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><a href="">
                          <div className="points-table-team">
                            <img src="assets/images/flag/gujarat-titans.webp" alt="" />
                            <span>GT</span>
                          </div>
                        </a></td>
                        <td>5</td>
                        <td>3</td>
                        <td>2</td>
                        <td>0</td>
                        <td>.354</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td><a href="">
                          <div className="points-table-team">
                            <img src="assets/images/flag/kings-xi-punjab.webp" alt="" />
                            <span>PBKS</span>
                          </div>
                        </a></td>
                        <td>5</td>
                        <td>3</td>
                        <td>2</td>
                        <td>0</td>
                        <td>.354</td>
                        <td>6</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </section>
              <section className="cricket-points-table">
                <div className="points-table-panel">
                  <div className="panel-header">
                    <div className="panel-heading">IPL 2023 Schedule & Results</div>
                    <Link to="/ipl-schedule">View All <i className="fa fa-angle-right"></i></Link>
                  </div>
                  <div className="icc-rankings ipl-schedule-result">
                    <ul className="icc-rankings-tab">
                      <li className={` ${ActiveTab2(1, 'active')}`} onClick={() => ToggleTab2(1)}>Upcoming</li>
                      <li className={` ${ActiveTab2(2, 'active')}`} onClick={() => ToggleTab2(2)}>Results</li>
                    </ul>
                    <div className="icc-ranking-container">
                      <div id="upcoming" className={`icc-rankings-panel ${ActiveTab2(1, 'ur-active')}`}>
                        <div className="schedule-results-tab-content">
                          <div className="schedule-results-item">
                            <a href="ipl-schedule.php">
                              <div className="schedule-results-item-wrapper">
                                <div className="schedule-results-item-team-info">
                                  <img src="assets/images/flag/rajasthan-royals.webp"
                                    height="25" width="25" alt="" />
                                  <div className="schedule-results-item-team-name">RR</div>
                                </div>
                                <div className="schedule-results-item-content">
                                  <div className="schedule-results-item-upcoming-content">
                                    <div
                                      className="cricket-schedule-results-item-match-number">
                                      Match 31</div>
                                    <div
                                      className="cricket-schedule-results-item-match-time convert-utc-to-local">
                                      22 Apr, 07:30 PM</div>
                                  </div>
                                </div>
                                <div className="schedule-results-item-team-info">
                                  <img src="assets/images/flag/lucknow-super-giants.webp"
                                    height="25" width="25" alt="" />
                                  <div className="schedule-results-item-team-name">LSG</div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="schedule-results-item">
                            <a href="ipl-schedule.php">
                              <div className="schedule-results-item-wrapper">
                                <div className="schedule-results-item-team-info">
                                  <img src="assets/images/flag/chennai-super-kings.webp"
                                    height="25" width="25" alt="" />
                                  <div className="schedule-results-item-team-name">CSK</div>
                                </div>
                                <div className="schedule-results-item-content">
                                  <div className="schedule-results-item-upcoming-content">
                                    <div
                                      className="cricket-schedule-results-item-match-number">
                                      Match 33</div>
                                    <div
                                      className="cricket-schedule-results-item-match-time convert-utc-to-local">
                                      22 Apr, 07:30 PM</div>
                                  </div>
                                </div>
                                <div className="schedule-results-item-team-info">
                                  <img src="assets/images/flag/gujarat-titans.webp"
                                    height="25" width="25" alt="" />
                                  <div className="schedule-results-item-team-name">GT</div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div id="results" className={`icc-rankings-panel ${ActiveTab2(2, 'ur-active')}`}>
                        <div className="schedule-results-tab-content">
                          <div className="schedule-results-item">
                            <a href="ipl-result.php">
                              <div className="schedule-results-item-wrapper">
                                <div className="schedule-results-item-team-info">
                                  <img src="assets/images/flag/rajasthan-royals.webp"
                                    height="25" width="25" alt="" />
                                  <div className="schedule-results-item-team-name">RR</div>
                                </div>
                                <div className="schedule-results-scores">
                                  <div className="sroces-masters-info">
                                    <div className="score-result-info">127/10</div>
                                    <div className="total-over-play">(20 ov)</div>
                                  </div>
                                  <div className="match-play-by">Vs</div>
                                  <div className="sroces-masters-info">
                                    <div className="score-result-info">127/10</div>
                                    <div className="total-over-play">(20 ov)</div>
                                  </div>
                                </div>
                                <div className="schedule-results-item-team-info">
                                  <img src="assets/images/flag/lucknow-super-giants.webp"
                                    height="25" width="25" alt="" />
                                  <div className="schedule-results-item-team-name">LSG</div>
                                </div>
                              </div>
                            </a>
                          </div>

                        </div>
                      </div>

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

export default Ipl