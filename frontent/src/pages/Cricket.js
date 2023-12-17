import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const Cricket = () => {

  const [ToggleCricket, setToggleCricket] = useState(1);
  const CricketTab = (index) => {
    setToggleCricket(index);
  };

  const ActiveClass = (index, className3) =>
    ToggleCricket === index ? className3 : "";


  const [ToggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className2) =>
    ToggleState === index ? className2 : "";

  // Fetch Api  
  const [match, setMatch] = useState([]);
  const fetchData = async () => {
    const res = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=480b18c4-a331-45b6-833f-2b521f7d5f1e')
    const data = await res.json();
    setMatch(data.data)
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Helmet>
        <title>Cricfeel | Cricket</title>
      </Helmet>
      <Header />

      <section className="Navbar Only-Mobile">
        <div className="primary-navigation">
          <div className="nav-items">
            <div className="primary-nav-items only-mobile-nav-items">
              <ul>
                <li className="active"><Link href="/ipl">Home</Link> </li>
                <li className=""><Link href="/cricket">Cricket</Link></li>
                <li className=""><Link href="/ipl">IPL 2023</Link></li>
                <li className=""><Link href="/football">Football</Link></li>
                <li className=""><Link href="/tennis">Tennis</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className='main-section'>
        <div className="container">
          <div className="tabbedPanels CustomContainer">
            <ul class="tabs">
              <li className={`tabss ${ActiveClass(1, "active")}`} onClick={() => CricketTab(1)} >Featured</li>
              <li className={`tabss ${ActiveClass(2, "active")}`} onClick={() => CricketTab(2)} >IPL 2023</li>
              <li className={`tabss ${ActiveClass(3, "active")}`} onClick={() => CricketTab(3)} >WPL</li>
              <li className={`tabss ${ActiveClass(4, "active")}`} onClick={() => CricketTab(4)} >WI vs SA</li>
              <li className={`tabss ${ActiveClass(5, "active")}`} onClick={() => CricketTab(5)} >PSL</li>
              <li className={`tabss ${ActiveClass(6, "active")}`} onClick={() => CricketTab(6)} >NZ vz SL</li>
              <li className={`tabss ${ActiveClass(7, "active")}`} onClick={() => CricketTab(7)} >BAN vs IRE</li>
            </ul>
            <div className="panelContainer">
              <div id="Featured" className={`panel ${ActiveClass(1, "active-content")}`}>
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

                  {match.map((match_data) => (
                    <SwiperSlide>
                      <div className="item home-item" key={match_data.id}>
                        <Link to="/live-cricket-score" className="keramasterBox">
                          <div className="tabBox">
                            <div className="tabBoxPadding">
                              <div className="matchShedule">
                                <span className="upcomingMatch">{match_data.name.slice(25,).toUpperCase()} | {match_data.date}</span>
                              </div>
                              <div className="keeda-cricket-widget">
                                <div className="keeda-series">
                                  <div className="keedaFlags"><img src={match_data.teamInfo[0].img} alt="" />
                                    <span> {match_data.teamInfo[0].shortname}</span></div>
                                  <div className="keeda-scoreBoard">120/10 (20ov)</div>
                                </div>
                                <div className="keeda-series">
                                  <div className="keedaFlags"><img src={match_data.teamInfo[1].img}
                                    alt="" /> <span> {match_data.teamInfo[1].name}</span></div>
                                  <div className="keeda-scoreBoard">122/4 (18.4ov)</div>
                                </div>
                                <div className="live keeda-descript">
                                  <span><button className="Livebtn">{match_data.matchEnded == false ? "Live" : ``}</button> {match_data.status}</span>
                                </div>
                              </div>
                            </div>
                            <div className="tabBoxfooter">
                              <Link to="/cricket-schedule">Schedule <i
                                className="fa-solid fa-angle-right"></i></Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}


                </Swiper>
              </div>
              <div id="Featured" className={`panel ${ActiveClass(2, "active-content")}`}>
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
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  navigation={true} modules={[Navigation]}
                  className="mySwiper">
                  <SwiperSlide>
                    <div className="item">
                      <Link to="/live-cricket-score" className="keramasterBox">
                        <div className="tabBox">
                          <div className="tabBoxPadding">
                            <div className="matchShedule">
                              <span className="upcomingMatch">Match 8 | 5 Apr</span>
                            </div>
                            <div className="keeda-cricket-widget">
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/399c2-16181330934470-800.avif"
                                  alt="" style={{ width: "100%" }} /> <span> PBKS</span></div>
                                <div className="keeda-scoreBoard">197/4 (20 ov)</div>
                              </div>
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/b4510-16375673376001-1920.avif"
                                  alt="" style={{ width: "100%" }} /> <span> RR</span></div>
                                <div className="keeda-scoreBoard">192/7 (20 ov)</div>
                              </div>
                              <div className="live keeda-descript">
                                <span>PBKS won by 5 runs</span>
                              </div>
                            </div>
                          </div>
                          <div className="tabBoxfooter">
                            <Link to="/cricket-schedule">Schedule <i
                              className="fa-solid fa-angle-right"></i></Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <Link to="/live-cricket-score" className="keramasterBox">
                        <div className="tabBox">
                          <div className="tabBoxPadding">
                            <div className="matchShedule">
                              <span className="upcomingMatch">Match 8 | 5 Apr</span>
                            </div>
                            <div className="keeda-cricket-widget">
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/399c2-16181330934470-800.avif"
                                  alt="" style={{ width: "100%" }} /> <span> PBKS</span></div>
                                <div className="keeda-scoreBoard">197/4 (20 ov)</div>
                              </div>
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/b4510-16375673376001-1920.avif"
                                  alt="" style={{ width: "100%" }} /> <span> RR</span></div>
                                <div className="keeda-scoreBoard">192/7 (20 ov)</div>
                              </div>
                              <div className="live keeda-descript">
                                <span>PBKS won by 5 runs</span>
                              </div>
                            </div>
                          </div>
                          <div className="tabBoxfooter">
                            <Link to="/cricket-schedule">Schedule <i
                              className="fa-solid fa-angle-right"></i></Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <Link href="/live-cricket-score" className="keramasterBox">
                        <div className="tabBox">
                          <div className="tabBoxPadding">
                            <div className="matchShedule">
                              <span className="upcomingMatch">Match 8 | 5 Apr</span>
                            </div>
                            <div className="keeda-cricket-widget">
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/399c2-16181330934470-800.avif"
                                  alt="" style={{ width: "100%" }} /> <span> PBKS</span></div>
                                <div className="keeda-scoreBoard">197/4 (20 ov)</div>
                              </div>
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/b4510-16375673376001-1920.avif"
                                  alt="" style={{ width: "100%" }} /> <span> RR</span></div>
                                <div className="keeda-scoreBoard">192/7 (20 ov)</div>
                              </div>
                              <div className="live keeda-descript">
                                <span>PBKS won by 5 runs</span>
                              </div>
                            </div>
                          </div>
                          <div className="tabBoxfooter">
                            <Link to="/cricket-schedule">Schedule <i
                              className="fa-solid fa-angle-right"></i></Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <Link href="/live-cricket-score" className="keramasterBox">
                        <div className="tabBox">
                          <div className="tabBoxPadding">
                            <div className="matchShedule">
                              <span className="upcomingMatch">Match 8 | 5 Apr</span>
                            </div>
                            <div className="keeda-cricket-widget">
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/399c2-16181330934470-800.avif"
                                  alt="" style={{ width: "100%" }} /> <span> PBKS</span></div>
                                <div className="keeda-scoreBoard">197/4 (20 ov)</div>
                              </div>
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/b4510-16375673376001-1920.avif"
                                  alt="" style={{ width: "100%" }} /> <span> RR</span></div>
                                <div className="keeda-scoreBoard">192/7 (20 ov)</div>
                              </div>
                              <div className="live keeda-descript">
                                <span>PBKS won by 5 runs</span>
                              </div>
                            </div>
                          </div>
                          <div className="tabBoxfooter">
                            <Link to="/cricket-schedule">Schedule <i
                              className="fa-solid fa-angle-right"></i></Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <Link href="/live-cricket-score" className="keramasterBox">
                        <div className="tabBox">
                          <div className="tabBoxPadding">
                            <div className="matchShedule">
                              <span className="upcomingMatch">Match 8 | 5 Apr</span>
                            </div>
                            <div className="keeda-cricket-widget">
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/399c2-16181330934470-800.avif"
                                  alt="" style={{ width: "100%" }} /> <span> PBKS</span></div>
                                <div className="keeda-scoreBoard">197/4 (20 ov)</div>
                              </div>
                              <div className="keeda-series">
                                <div className="keedaFlags"><img
                                  src="assets/images/flag/b4510-16375673376001-1920.avif"
                                  alt="" style={{ width: "100%" }} /> <span> RR</span></div>
                                <div className="keeda-scoreBoard">192/7 (20 ov)</div>
                              </div>
                              <div className="live keeda-descript">
                                <span>PBKS won by 5 runs</span>
                              </div>
                            </div>
                          </div>
                          <div className="tabBoxfooter">
                            <Link to="/cricket-schedule">Schedule <i
                              className="fa-solid fa-angle-right"></i></Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='mt-200 mt-3'>
        <div className='container CustomContainer'>

          <Carousel responsive={responsive} className='for-button-class'>
            <Link to="/cricket-schedule" class="buttons-items">Schedule</Link>
            <Link to="/ipl" class="buttons-items">IPL 2023</Link>
            <Link to="/cricket-single-page" class="buttons-items">NZ vs PAK</Link>
            <Link to="/cricket-single-page" class="buttons-items">GT vs CSK</Link>
            <Link to="/cricket-single-page" class="buttons-items">BAN vs IRE</Link>
            <Link to="" class="buttons-items">ECS T10 Gibraltar</Link>
            <Link to="" class="buttons-items">Plunket Sheild</Link>
            <Link to="" class="buttons-items">ICCA Arabian T20</Link>
            <Link to="" class="buttons-items">IPL 2023</Link>
            <Link to="" class="buttons-items">IPL 2023</Link>
            <Link to="" class="buttons-items">IPL 2023</Link>
          </Carousel>

          <div className='row'>
            <div className='col-lg-8'>
              <div className='cricket-events'>
                <h2>Cricket</h2>
              </div>
              <div className='cricket-sec'>
                <div className='cricket-tabs-master'>

                  <ul className="cricket-tabs">
                    <li className={`tabs ${getActiveClass(1, "active")}`}
                      onClick={() => toggleTab(1)} > <i class="fa-solid fa-file"></i> Recommended </li>
                    <li className={`tabs ${getActiveClass(2, "active")}`} onClick={() => toggleTab(2)}>
                      <i class="fa-solid fa-fire"></i> Latest
                    </li>
                    <li className={`tabs ${getActiveClass(3, "active")}`} onClick={() => toggleTab(3)} >
                      <i class="fa-brands fa-youtube"></i> Videos
                    </li>
                    <div class="right-feedback">
                      <a href="" className='anchor-tag'>Give Feedback</a>
                    </div>
                  </ul>
                  <div className="cricket-tabs-content">
                    <div className={`cricket-panel contents ${getActiveClass(1, "active-content")}`} >
                      <div className="cr-content mt-2">
                        <div className="sport-light">
                          <div className="spotlight-header">
                            <img src="assets/images/ic-pinned.svg" alt="star" height={18} width={18} />
                            <span> PINNED</span>
                          </div>
                          <div className="sports-light-story">
                            <a href="cricket-news-breaking.php"></a>
                            <div
                              className="background-layer"
                              style={{
                                backgroundImage:
                                  'url("assets/images/img/448ce-16807147374472-1920.avif")'
                              }}
                            >
                              <a href="cricket-news-breaking.php"></a>
                              <div className="title-background-layer">
                                <a href="cricket-news-breaking.php">
                                  <h4 className="line-clamp">
                                    BREAKING: Bengal’s Sudip Gharami on KKR radar for Shreyas Iyer
                                    replacement in IPL 2023
                                  </h4>
                                </a>
                                <div className="author-details">
                                  <a href="cricket-news-breaking.php"></a>
                                  <a className="author-name" href="cricket-news-breaking.php">
                                    <img src="assets/images/edit-pen.svg" alt="pen" />
                                    Srinjoy Sanyal
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <div className="warrper-img">
                              <a href="cricket-news-breaking.php">
                                <img src="assets/images/img/fbb55-16807528105308-1920.avif" alt="" />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="cricket-news-breaking.php">
                                <h6>
                                  "Why did Ashwin go to open?" - Aakash Chopra questions Rajasthan
                                  Royals' tactics in IPL 2023 loss to Punjab Kings
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div id="imogies-content" className="imogies-content">
                                  <button>
                                    <img src="assets/images/imogies/reaction-like.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-excited.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-happy.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-anxious.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-angry.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-sad.svg" alt="" />
                                  </button>
                                </div>
                                <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <div className="warrper-img">
                              <a href="cricket-news-breaking.php">
                                <img src="assets/images/img/19ff5-16817074634953-1920.avif" alt="" />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="">
                                <h6>
                                  "Whenever the ball is in his zone, he hits a six" - Harbhajan Singh
                                  lauds Shimron Hetmyer's match-winning knock for Rajasthan Royals vs
                                  Gujarat Titans
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div id="imogies-content" className="imogies-content">
                                  <button>
                                    <img src="assets/images/imogies/reaction-like.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-excited.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-happy.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-anxious.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-angry.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-sad.svg" alt="" />
                                  </button>
                                </div>
                                <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="story-wrapper d-none">
                          <div className="wr-header">
                            <a href=""> Shocking 🤯</a>
                          </div>
                          <div className="warpper-flexs ">
                            <div className="second-wrapper">
                              <div className="warrper-img">
                                <a href="">
                                  <img
                                    src="assets/images/img/4938e-16807608155329-1920.avif"
                                    alt=""
                                    style={{ width: "100%" }}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="right-wrapper">
                              <a href="">
                                <h6></h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div id="imogies-content" className="imogies-content">
                                  <button>
                                    <img src="assets/images/imogies/reaction-like.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-excited.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-happy.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-anxious.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-angry.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-sad.svg" alt="" />
                                  </button>
                                </div>
                                <a href="" data-bs-toggle="offcanvas" data-bs-target="#comments">
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className={`contents ${getActiveClass(2, "active-content")}`}>
                      <div className="cr-content mt-2">
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <div className="warrper-img">
                              <a href="">
                                <img src="assets/images/img/fbb55-16807528105308-1920.avif" alt="" />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="">
                                <h6>
                                  "Why did Ashwin go to open?" - Aakash Chopra questions Rajasthan
                                  Royals' tactics in IPL 2023 loss to Punjab Kings
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div id="imogies-content2" className="imogies-content">
                                  <button>
                                    <img src="assets/images/imogies/reaction-like.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-excited.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-happy.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-anxious.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-angry.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-sad.svg" alt="" />
                                  </button>
                                </div>
                                <a href="" data-bs-toggle="offcanvas" data-bs-target="#comments">
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <div className="warrper-img">
                              <a href="">
                                <img src="assets/images/img/7bca8-16810981215694-1920.avif" alt="" />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="">
                                <h6>
                                  "Given the format of the IPL that we have, it is not possible to
                                  have another edition in the same year" - Arun Dhumal
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div id="imogies-content2" className="imogies-content">
                                  <button>
                                    <img src="assets/images/imogies/reaction-like.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-excited.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-happy.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-anxious.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-angry.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-sad.svg" alt="" />
                                  </button>
                                </div>
                                <a href="" data-bs-toggle="offcanvas" data-bs-target="#comments">
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className={`contents ${getActiveClass(3, "active-content")}`}>
                      <div className="cr-content mt-2">
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <a href="">
                              <div className="warrper-img video-icon" style={{ background: 'url("assets/images/ic-play.svg")' }}>
                                <img src="assets/images/img/eeb35-16810942597062-1920.jpg" alt="" />
                              </div>
                            </a>
                            <div className="right-wrapper">
                              <a href="">
                                <h6>
                                  "Why did Ashwin go to open?" - Aakash Chopra questions Rajasthan
                                  Royals' tactics in IPL 2023 loss to Punjab Kings
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div id="imogies-content2" className="imogies-content">
                                  <button>
                                    <img src="assets/images/imogies/reaction-like.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-excited.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-happy.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-anxious.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-angry.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-sad.svg" alt="" />
                                  </button>
                                </div>
                                <a href="" data-bs-toggle="offcanvas" data-bs-target="#comments">
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <a href="">
                              <div className="warrper-img video-icon">
                                <img src="assets/images/img/eeb35-16810942597062-1920.jpg" alt="" />
                              </div>
                            </a>
                            <div className="right-wrapper">
                              <a href="">
                                <h6>
                                  "Given the format of the IPL that we have, it is not possible to
                                  have another edition in the same year" - Arun Dhumal
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div id="imogies-content2" className="imogies-content">
                                  <button>
                                    <img src="assets/images/imogies/reaction-like.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-excited.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-happy.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-anxious.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-angry.svg" alt="" />
                                  </button>
                                  <button>
                                    <img src="assets/images/imogies/reaction-sad.svg" alt="" />
                                  </button>
                                </div>
                                <a href="" data-bs-toggle="offcanvas" data-bs-target="#comments">
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>

            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div className="bottom-navbar">
        <Link to="/cricket" className="active">
          <img src="assets/images/img/ic-home-v2.svg" alt="" />
          <span>Home</span>
        </Link>
        <Link to="/cricket-schedule">
          <img src="assets/images/img/ic-bat-ball-outline.svg" alt="" />
          <span>Matches</span>
        </Link>
        <Link to="/fantasy-cricket-mantra">
          <img src="assets/images/img/ic-trophy-v2.svg" alt="" />
          <span>Fantasy</span>
        </Link>
        <Link to="">
          <img src="assets/images/img/ic-fantasy-v2.svg" alt="" />
          <span>Series</span>
        </Link>
      </div>
    </>
  )
}

export default Cricket