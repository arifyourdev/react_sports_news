import React, { useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const responsives = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Football = () => {
  const [FootballTab, setFootballTab] = useState(1);
  const FootballToggleTab = (index) => {
    setFootballTab(index);
  }
  const ActiveFootball = (index, fclass) =>
    FootballTab === index ? fclass : "";

  const [Ftab, setFtab] = useState(1);
  const FtabToggle = (index) => {
    setFtab(index);
  }
  const ActiveFtab = (index, ftclass) =>
    Ftab === index ? ftclass : "";

  return (
    <>
      <Helmet>
        <title>Cricfeel | Football</title>
      </Helmet>
      <Header />
      <section className="Navbar">
        <div className="primary-navigation">
          <div className="nav-items">
            <div className="secondary-navigation">
              <div className="nav-group">
                <div className="active-item" style={{ fontSize: 14 }}>Football</div>
              </div>
            </div>
            <div className="separator"></div>
            <div className="primary-nav-items">
              <ul>
                <li className="active"><Link to="/epl">Home</Link> </li>
                <li className=""><Link to="/newsletters">Newsletters</Link></li>
                <li className=""><Link to="/football-schedule">Schedule</Link></li>
                <li className=""><Link to="/epl">EPL</Link></li>
                <li><Link to="/football-detail-pages">Champions League</Link></li>
                <li><Link to="/nations-league">National League</Link></li>
                <li className=""><Link to="/la-liga">La Liga</Link></li>
                <li className=""><Link to="/football-detail-pages">League 1</Link></li>
                <li className=""><Link to="/football-detail-pages">MLS</Link></li>
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
              <li><Link to="">Football <i className="fa fa-angle-right"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="main-sections">
        <div className="container">
          <div className="tabbedPanels CustomContainer">
            <div>
              <ul class="tabs football">
                <li className={`${ActiveFootball(1, 'active')}`} onClick={() => FootballToggleTab(1)}>EPL</li>
                <li className={`${ActiveFootball(2, 'active')}`} onClick={() => FootballToggleTab(2)}>Champions League</li>
                <li>Nations League</li>
                <li>La Liga</li>
                <li>Lique 1</li>
                <li>MLS </li>
                <li>Bundesliga </li>
                <div class="hero_fix_tag"><Link to="/football-schedule"><span id="fix_a_tag" class="fix_a_tag">All Fixtures</span></Link> </div>
              </ul>
            </div>
            <div className="panelContainer">
              <div id="epl" className={`panel ${ActiveFootball(1, 'football-active')}`}>
                <Carousel responsive={responsive} className='for-button-class'>
                  <div className="item">
                    <Link href="/live-football-score" className="keramasterBox">
                      <div className="tabBox">
                        <div className="tabBoxPadding PremierPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Round 50</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/manchester-city.webp" alt="" />
                                <span>
                                  MCI</span>
                              </div>
                              <div className="keeda-scoreBoard">2</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/liverpool.webp" alt="" /> <span
                                  className="least-team"> LIV</span></div>
                              <div className="keeda-scoreBoard">1</div>
                            </div>
                            <div className="live keeda-descript keed-pre-desc">
                              <span>Ft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="/live-football-score" className="keramasterBox">
                      <div className="tabBox">
                        <div className="tabBoxPadding PremierPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Round 50</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/manchester-city.webp" alt="" />
                                <span>
                                  MCI</span>
                              </div>
                              <div className="keeda-scoreBoard">2</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/liverpool.webp" alt="" /> <span
                                  className="least-team"> LIV</span></div>
                              <div className="keeda-scoreBoard">1</div>
                            </div>
                            <div className="live keeda-descript keed-pre-desc">
                              <span>Ft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="/live-football-score" className="keramasterBox">
                      <div className="tabBox">
                        <div className="tabBoxPadding PremierPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Round 50</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/manchester-city.webp" alt="" />
                                <span>
                                  MCI</span>
                              </div>
                              <div className="keeda-scoreBoard">2</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/liverpool.webp" alt="" /> <span
                                  className="least-team"> LIV</span></div>
                              <div className="keeda-scoreBoard">1</div>
                            </div>
                            <div className="live keeda-descript keed-pre-desc">
                              <span>Ft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="/live-football-score" className="keramasterBox">
                      <div className="tabBox">
                        <div className="tabBoxPadding PremierPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Round 50</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/manchester-city.webp" alt="" />
                                <span>
                                  MCI</span>
                              </div>
                              <div className="keeda-scoreBoard">2</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/liverpool.webp" alt="" /> <span
                                  className="least-team"> LIV</span></div>
                              <div className="keeda-scoreBoard">1</div>
                            </div>
                            <div className="live keeda-descript keed-pre-desc">
                              <span>Ft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="/live-football-score" className="keramasterBox">
                      <div className="tabBox">
                        <div className="tabBoxPadding PremierPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Round 50</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/manchester-city.webp" alt="" />
                                <span>
                                  MCI</span>
                              </div>
                              <div className="keeda-scoreBoard">2</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/liverpool.webp" alt="" /> <span
                                  className="least-team"> LIV</span></div>
                              <div className="keeda-scoreBoard">1</div>
                            </div>
                            <div className="live keeda-descript keed-pre-desc">
                              <span>Ft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="/live-football-score" className="keramasterBox">
                      <div className="tabBox">
                        <div className="tabBoxPadding PremierPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Round 50</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/manchester-city.webp" alt="" />
                                <span>
                                  MCI</span>
                              </div>
                              <div className="keeda-scoreBoard">2</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/liverpool.webp" alt="" /> <span
                                  className="least-team"> LIV</span></div>
                              <div className="keeda-scoreBoard">1</div>
                            </div>
                            <div className="live keeda-descript keed-pre-desc">
                              <span>Ft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="/live-football-score" className="keramasterBox">
                      <div className="tabBox">
                        <div className="tabBoxPadding PremierPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Round 50</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/manchester-city.webp" alt="" />
                                <span>
                                  MCI</span>
                              </div>
                              <div className="keeda-scoreBoard">2</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage"><img
                                src="assets/images/flag/liverpool.webp" alt="" /> <span
                                  className="least-team"> LIV</span></div>
                              <div className="keeda-scoreBoard">1</div>
                            </div>
                            <div className="live keeda-descript keed-pre-desc">
                              <span>Ft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Carousel>
              </div>
              {/* IPL Tab */}
              <div id="champiom_league" className={`panel ${ActiveFootball(2, 'football-active')}`}>
                <div id="football-owlCarousel2" className="owl-carousel owl-theme Own-nav" >
                  {/* Box Start */}
                  <div className="item">
                    <a href="live-football-score.php" className="keramasterBox">
                      <div className="tabBox">
                        <div className="tabBoxPadding PremierPadding">
                          <div className="matchShedule">
                            <span className="upcomingMatch">Round 500</span>
                          </div>
                          <div className="keeda-cricket-widget">
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage">
                                <img
                                  src="assets/images/flag/manchester-city.webp"
                                  alt=""
                                />
                                <span>MCI</span>
                              </div>
                              <div className="keeda-scoreBoard">2</div>
                            </div>
                            <div className="keeda-series">
                              <div className="keedaFlags PLeage">
                                <img src="assets/images/flag/liverpool.webp" alt="" />{" "}
                                <span className="least-team"> LIV</span>
                              </div>
                              <div className="keeda-scoreBoard">1</div>
                            </div>
                            <div className="live keeda-descript keed-pre-desc">
                              <span>Ft</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* Box End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container CustomContainer">
          <div className="scroll-bar-keeda">
            <ul>
              <li><Link to="/newsletters">Newsletters</Link> </li>
              <li><Link to="/football-schedule">Schedule</Link> </li>
              <li><Link to="/epl">EPL</Link> </li>
              <li><Link to="/football-detail-pages">Champions League</Link> </li>
              <li><Link to="/nations-league">Nations League</Link> </li>
              <li><Link to="/la-liga">La Liga</Link></li>
              <li><Link to="/la-liga">Ligue 1</Link></li>
              <li><Link to="/football-detail-pages">MLS</Link></li>
              <li><Link to="/football-detail-pages">Bundesliga</Link></li>
              <li><Link to="/football-detail-pages">Serie A</Link></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="cricket-events">
                <h2>Football</h2>
              </div>
              <section className="cricket-sec">
                <div className="cricket-tabs-master">
                  <ul className="cricket-tabs">
                    <li className={`tabs ${ActiveFtab(1, 'active')}`} onClick={() => FtabToggle(1)}><i className="fa-solid fa-file" /> Recommended </li>
                    <li className={`tabs ${ActiveFtab(2, 'active')}`} onClick={() => FtabToggle(2)}><i className="fa-solid fa-fire" /> Latest</li>
                    <li className={`tabs ${ActiveFtab(3, 'active')}`} onClick={() => FtabToggle(3)}><i className="fa-brands fa-youtube" /> Videos </li>
                    <div className="right-feedback">
                      <a href>Give Feedback</a>
                    </div>
                  </ul>
                  <div className="cricket-tabs-content mb-5">
                    {/* Recommended */}
                    <div id="recommended" className={`cricket-panel ${ActiveFtab(1, 'tab-active')}`}>
                      <div className="cr-content mt-2">
                        <div className="sport-light">
                          <div className="spotlight-header">
                            <img
                              src="assets/images/ic-pinned.svg"
                              alt="star"
                              height={18}
                              width={18}
                            />
                            <span> PINNED</span>
                          </div>

                          <Carousel responsive={responsives}  className='for-button-class'>
                            <div className="item">
                              <Link to="/football-details-news" className="keramasterBox">
                                <div className="one-story">
                                  <div className="tabBoxPadding">
                                    <div className="keeda-cricket-widget">
                                      <div className="keeda-series">
                                        <div className="">
                                          <img src="assets/images/img/a02c5-16813325259002-1920.avif" alt="" style={{ width: "100%" }}/>
                                        </div>
                                        <div className="title-background-layer">
                                          <h4 className="line-clamp">Real Madrid 2-0
                                            Chelsea: 5 Talking Points as Los
                                            <span className="d-none">
                                              Blancos dominate Blues in easy
                                              victory | UEFA Champions League
                                              2022-23</span></h4>
                                          <div className="author-details">
                                            <Link className="author-name" to="">
                                              Vishal Ravi </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="item">
                              <Link to="/football-details-news" className="keramasterBox">
                                <div className="one-story">
                                  <div className="tabBoxPadding">
                                    <div className="keeda-cricket-widget">
                                      <div className="keeda-series">
                                        <div className="">
                                          <img src="assets/images/img/a02c5-16813325259002-1920.avif" alt="" style={{ width: "100%" }}/>
                                        </div>
                                        <div className="title-background-layer">
                                          <h4 className="line-clamp">Real Madrid 2-0
                                            Chelsea: 5 Talking Points as Los
                                            <span className="d-none">
                                              Blancos dominate Blues in easy
                                              victory | UEFA Champions League
                                              2022-23</span></h4>
                                          <div className="author-details">
                                            <Link className="author-name" to="">
                                              Vishal Ravi </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="item">
                              <Link to="/football-details-news" className="keramasterBox">
                                <div className="one-story">
                                  <div className="tabBoxPadding">
                                    <div className="keeda-cricket-widget">
                                      <div className="keeda-series">
                                        <div className="">
                                          <img src="assets/images/img/a02c5-16813325259002-1920.avif" alt="" style={{ width: "100%" }}/>
                                        </div>
                                        <div className="title-background-layer">
                                          <h4 className="line-clamp">Real Madrid 2-0
                                            Chelsea: 5 Talking Points as Los
                                            <span className="d-none">
                                              Blancos dominate Blues in easy
                                              victory | UEFA Champions League
                                              2022-23</span></h4>
                                          <div className="author-details">
                                            <Link className="author-name" to="">
                                              Vishal Ravi </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="item">
                              <Link to="/football-details-news" className="keramasterBox">
                                <div className="one-story">
                                  <div className="tabBoxPadding">
                                    <div className="keeda-cricket-widget">
                                      <div className="keeda-series">
                                        <div className="">
                                          <img src="assets/images/img/a02c5-16813325259002-1920.avif" alt="" style={{ width: "100%" }}/>
                                        </div>
                                        <div className="title-background-layer">
                                          <h4 className="line-clamp">Real Madrid 2-0
                                            Chelsea: 5 Talking Points as Los
                                            <span className="d-none">
                                              Blancos dominate Blues in easy
                                              victory | UEFA Champions League
                                              2022-23</span></h4>
                                          <div className="author-details">
                                            <Link className="author-name" to="">
                                              Vishal Ravi </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </Carousel>

                        </div>
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <div className="warrper-img">
                              <a href="football-details-news.php">
                                <img
                                  src="assets/images/img/44b55-16813804198968-1920.avif"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="football-details-news.php">
                                <h6>
                                  5 most underrated football players in the world this
                                  season (2022-23)
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div id="imogies-content" className="imogies-content">
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-like.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-excited.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-happy.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-anxious.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-angry.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-sad.svg"
                                      alt=""
                                    />
                                  </button>
                                </div>
                                <a
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#comments"
                                >
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href>
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Recommended */}
                    {/* Start Latest */}
                    <div id="latest" className={`cricket-panel ${ActiveFtab(2, 'tab-active')}`}>
                      <div className="cr-content mt-2">
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <div className="warrper-img">
                              <a href="football-details-news.php">
                                <img
                                  src="assets/images/img/fbb55-16807528105308-1920.avif"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href>
                                <h6>
                                  "Why did Ashwin go to open?" - Aakash Chopra
                                  questions Rajasthan Royals' tactics in IPL 2023 loss
                                  to Punjab Kings
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div
                                  id="imogies-content2"
                                  className="imogies-content"
                                >
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-like.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-excited.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-happy.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-anxious.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-angry.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-sad.svg"
                                      alt=""
                                    />
                                  </button>
                                </div>
                                <a
                                  href
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#comments"
                                >
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href>
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
                              <a href>
                                <img
                                  src="assets/images/img/7bca8-16810981215694-1920.avif"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href>
                                <h6>
                                  "Given the format of the IPL that we have, it is not
                                  possible to have another edition in the same year" -
                                  Arun Dhumal
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div
                                  id="imogies-content2"
                                  className="imogies-content"
                                >
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-like.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-excited.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-happy.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-anxious.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-angry.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-sad.svg"
                                      alt=""
                                    />
                                  </button>
                                </div>
                                <a
                                  href
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#comments"
                                >
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href>
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Latest */}
                    {/* Video tab */}
                    <div id="videos" className={`cricket-panel ${ActiveFtab(3, 'tab-active')}`}>
                      <div className="cr-content mt-2">
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <a href>
                              <div className="warrper-img video-icon">
                                <img
                                  src="assets/images/img/b54e7-16792098283557-1920.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div className="right-wrapper">
                              <a href>
                                <h6>The Bundesliga Show FT. Fans</h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div
                                  id="imogies-content2"
                                  className="imogies-content"
                                >
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-like.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-excited.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-happy.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-anxious.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-angry.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-sad.svg"
                                      alt=""
                                    />
                                  </button>
                                </div>
                                <a
                                  href
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#comments"
                                >
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href>
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <a href>
                              <div className="warrper-img video-icon">
                                <img
                                  src="assets/images/img/b54e7-16792098283557-1920.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div className="right-wrapper">
                              <a href>
                                <h6>The Bundesliga Show FT. Fans </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />
                                  <span>Like</span>
                                </a>
                                <div
                                  id="imogies-content2"
                                  className="imogies-content"
                                >
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-like.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-excited.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-happy.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-anxious.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-angry.svg"
                                      alt=""
                                    />
                                  </button>
                                  <button>
                                    <img
                                      src="assets/images/imogies/reaction-sad.svg"
                                      alt=""
                                    />
                                  </button>
                                </div>
                                <a
                                  href
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#comments"
                                >
                                  <i className="fa-regular fa-comment" />
                                  <span>Comment</span>
                                </a>
                                <a href>
                                  <i className="fa-solid fa-share" />
                                  <span>Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Video */}
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

export default Football