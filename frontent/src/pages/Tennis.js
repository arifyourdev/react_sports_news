import { React, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

const Tennis = () => {

  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className2) =>
    ToggleState === index ? className2 : "";

  return (
    <>
      <Helmet>
        <title>Cricfeel | Tennis</title>
      </Helmet>
      <Header />
      <section className="Navbar">
        <div className="primary-navigation">
          <div className="nav-items">
            <div className="secondary-navigation">
              <div className="nav-group">
                <div className="active-item" style={{ FontSize: '14px' }}>Tennis</div>
              </div>
            </div>
            <div className="separator"></div>
            <div className="primary-nav-items">
              <ul>
                <li className="active"><Link to="/tennis">Home</Link> </li>
                <li className=""><Link to="/tennis-schedule">Tennis Calendar</Link></li>
                <li className=""><Link to="/tennis-single-page">Madrin Open 2023</Link></li>
                <li className=""><Link to="/tennis-single-page">ATP Barcelona Open 2023</Link></li>
                <li className=""><Link to="/tennis-schedule">ATP Rankings</Link></li>
                <li className=""><Link to="/tennis-schedule">WTA Rankings</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div class="breadcrumb-container">
        <div class="conatainer">
          <div class="wrapper-container">
            <ul>
              <li><a href=""><i class="fa fa-home"></i> <i class="fa fa-angle-right"></i></a></li>
              <li><a href="tennis">Tennis <i class="fa fa-angle-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-20 margin-top3rems">
        <div className="container CustomContainer">
          <div className="scroll-bar-keeda">
            <ul>
              <li>
                <Link to="/tennis-schedule" className='anchor'>Tennis calendar</Link>
              </li>
              <li>
                <Link to="/tennis-single-pag" className='anchor'>Monte Carlo Masters 2023</Link>
              </li>
              <li>
                <Link to="/tennis-schedule" className='anchor'>Monte Carlo Masters Schedule</Link>
              </li>
              <li>
                <Link to="tennis-schedule" className='anchor'>ATP Ranking</Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="cricket-events">
                <h2>Tennis</h2>
              </div>
              <section className="cricket-sec">
                <div className="cricket-tabs-master">
                  <ul className="cricket-tabs">
                     <li  className={`tabs ${getActiveClass(1, "active")}`} onClick={() => toggleTab(1)} > 
                        <i className="fa-solid fa-file" /> Recommended
                     </li>
                     <li  className={`tabs ${getActiveClass(2, "active")}`} onClick={() => toggleTab(2)} >
                         <i className="fa-solid fa-fire" /> Latest
                     </li>
                     <li  className={`tabs ${getActiveClass(3, "active")}`} onClick={() => toggleTab(3)} >
                         <i className="fa-brands fa-youtube" /> Videos
                     </li>
                    <div className="right-feedback">
                      <a href="">Give Feedback</a>
                    </div>
                  </ul>
                  <div className="cricket-tabs-content mb-5">
                    {/* Recommended */}
                    <div id="recommended"  className={`cricket-panel contents ${getActiveClass(1, "active-content")}`} >
                      <div className="cr-content mt-2">
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <div className="warrper-img">
                              <a href="cricket-news-breaking.php">
                                <img
                                  src="assets/images/img/c66fa-16817895214043-1920.avif"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="cricket-news-breaking.php">
                                <h6>
                                  Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Debitis, explicabo error unde consectetur
                                  necessitatibus cupiditate recusandae distinctio
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />{" "}
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
                                  <i className="fa-regular fa-comment" />{" "}
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />{" "}
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
                                <img
                                  src="assets/images/img/8d65f-16817925377971-1920.avif"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="">
                                <h6>
                                  Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Deleniti impedit incidunt ea similique quos
                                  voluptate magni accusantium dolore possimus sequi
                                  quam am.
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />{" "}
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
                                  <i className="fa-regular fa-comment" />{" "}
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />{" "}
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
                    <div id="latest"  className={`cricket-panel contents ${getActiveClass(2, "active-content")}`} >
                      <div className="cr-content mt-2">
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <div className="warrper-img">
                              <a href="cricket-news-breaking.php">
                                <img
                                  src="assets/images/img/c66fa-16817895214043-1920.avif"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="cricket-news-breaking.php">
                                <h6>
                                  Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Debitis, explicabo error unde consectetur
                                  necessitatibus cupiditate recusandae distinctio
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />{" "}
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
                                  <i className="fa-regular fa-comment" />{" "}
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />{" "}
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
                                <img
                                  src="assets/images/img/c66fa-16817895214043-1920.avif"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="right-wrapper">
                              <a href="cricket-news-breaking.php">
                                <h6>
                                  Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Debitis, explicabo error unde consectetur
                                  necessitatibus cupiditate recusandae distinctio
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />{" "}
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
                                  <i className="fa-regular fa-comment" />{" "}
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />{" "}
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
                    <div id="videos"  className={`cricket-panel contents ${getActiveClass(3, "active-content")}`} >
                      <div className="cr-content mt-2">
                        <div className="story-wrapper">
                          <div className="warpper-flex">
                            <a href="">
                              <div className="warrper-img video-icon">
                                <img
                                  src="assets/images/img/thumbnail.0000003.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div className="right-wrapper">
                              <a href="">
                                <h6>
                                  Lorem ipsum dolor sit amet consectetur adipisicing
                                  elit. Laudantium
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />{" "}
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
                                  href=""
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#comments"
                                >
                                  <i className="fa-regular fa-comment" />{" "}
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />{" "}
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
                                <img
                                  src="assets/images/img/thumbnail.0000006 (1).jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <div className="right-wrapper">
                              <a href="">
                                <h6>
                                  it is not possible to have another edition in the
                                  same year" - Arun Dhumal
                                </h6>
                              </a>
                              <div className="social-buttom">
                                <a id="likebutton2" className="likebutton">
                                  <i className="fa-regular fa-thumbs-up" />{" "}
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
                                  href=""
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#comments"
                                >
                                  <i className="fa-regular fa-comment" />{" "}
                                  <span>Comment</span>
                                </a>
                                <a href="">
                                  <i className="fa-solid fa-share" />{" "}
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

export default Tennis