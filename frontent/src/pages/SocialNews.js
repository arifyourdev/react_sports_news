import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css';

const SocialNews = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Social News</title>
            </Helmet>
    
            <Header />
            <div className="breadcrumb-container bc-2">
            <div className="conatainer">
                <div className="wrapper-container">
                    <ul>
                        <li><Link to=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="">Cricket News <i className="fa fa-angle-right"></i></Link></li>
                        <li><Link to="">Social</Link></li>
                      
                    </ul>
                </div>
            </div>
        </div>
        <section className="CricketmasterSection">
            <div className="container">
                <div className="CustomContainer ContainerSocial">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <section className="trending-section">
                                <div className="story-link-overlay "><a href="">No one is doubting 😌</a></div>
                              <div className="t20-page-scroll-section">
                                <a href="" className="scroll-section">
                                    <div className="single-social-wrapper">
                                        <div className="tweet-container">
                                            <div className="tweet-header">
                                                     <div className="tweet-user-image">
                                                        <img src="assets/images/img/vzRouYvh_normal.jpg" alt=""/>
                                                    </div>
                                                     <div className="tweet-user-info">
                                                         <div className="tweet-username-block"><span className="tweet-user-name">Cricfeel</span>
                                                            <div className="verified" title="Verified Profile"></div>
                                                        </div>
                                                        <span className="tweet-user-handle">@Cricfeel</span>
                                                    </div>
                                             </div>
                                            <div className="socila-twitter">
                                               <a href=""><span><i className="fab fa-twitter"></i></span></a>
                                            </div>
                                        </div>
                                         <div className="singlemedia-tweet">
                                          <span>King Kohli Rules
                                           </span>
                                           <div className="hashtag-social">
                                             <a href="">#IPL2023 #cricket #RCB</a>
                                           </div>
                                        </div>
                                        <div className="tweet-images">
                                           <img src="assets/images/img/f1c00-16819783856414-1920.avif" alt="" width="100%"/>
                                        </div>
                                     </div>
                                </a>
                                   <div className="social-buttom story-user-actions">
                                      <a id="likebutton" className="likebutton"><i className="fa-regular fa-thumbs-up"></i> <span>Like</span></a>
                                        <div id="imogies-content" className="imogies-content social-reaction-icon">
                                        <button><img src="assets/images/imogies/reaction-like.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-excited.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-happy.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-anxious.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-angry.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-sad.svg" alt=""/></button>
                                    </div>
                                        <a data-bs-toggle="offcanvas" data-bs-target="#comments"><i className="fa-regular fa-comment"></i> <span>Comment</span></a>
                                        <a href=""><i className="fa-solid fa-share"></i> <span>Share</span></a>
                                    </div>
                             </div>
                            </section>
                            <section className="trending-section">
                                <div className="story-link-overlay "><a href="">Big Statement from King Kohli 😍</a></div>
                              <div className="t20-page-scroll-section">
                                <a href="" className="scroll-section">
                                    <div class="single-social-wrapper">
                                        <div class="tweet-container">
                                            <div class="tweet-header">
                                                     <div class="tweet-user-image">
                                                        <img src="assets/images/img/vzRouYvh_normal.jpg" alt=""/>
                                                    </div>
                                                     <div class="tweet-user-info">
                                                         <div class="tweet-username-block"><span class="tweet-user-name">Cricfeel</span>
                                                            <div class="verified" title="Verified Profile"></div>
                                                        </div>
                                                        <span class="tweet-user-handle">@Cricfeel</span>
                                                    </div>
                                             </div>
                                            <div class="socila-twitter">
                                               <a href=""><span><i class="fab fa-twitter"></i></span></a>
                                            </div>
                                        </div>
                                         <div class="singlemedia-tweet">
                                          <span>Two greats of the best league in the world </span>
                                           <div class="hashtag-social">
                                             <a href="">#IPL2023 #cricket #RCB</a>
                                           </div>
                                        </div>
                                        <div class="tweet-images">
                                           <img src="assets/images/img/e5dba-16819820158659-1920.avif" alt="" width="100%"/>
                                        </div>
                                     </div>
                                </a>
                                   <div class="social-buttom story-user-actions">
                                      <a id="likebutton" class="likebutton"><i class="fa-regular fa-thumbs-up"></i> <span>Like</span></a>
                                        <div id="imogies-content" class="imogies-content social-reaction-icon">
                                        <button><img src="assets/images/imogies/reaction-like.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-excited.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-happy.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-anxious.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-angry.svg" alt=""/></button>
                                        <button><img src="assets/images/imogies/reaction-sad.svg" alt=""/></button>
                                    </div>
                                        <a data-bs-toggle="offcanvas" data-bs-target="#comments"><i class="fa-regular fa-comment"></i> <span>Comment</span></a>
                                        <a href=""><i class="fa-solid fa-share"></i> <span>Share</span></a>
                                    </div>
                             </div>
                            </section>
                        </div>
                        <div class="col-lg-4"></div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default SocialNews