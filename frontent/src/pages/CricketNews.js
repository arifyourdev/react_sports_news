import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carousel = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4-1.5
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

const CricketNews = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Cricket News</title>
            </Helmet>
            <Header />
            <div className="breadcrumb-container bc-2">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><Link to=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">Cricket <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">IPL 2023 Live Scores  </Link></li>
                            <li><Link to=""> <i className="fa fa-angle-right"></i> BREAKING: Bengal’s Sudip Gharami On KKR Radar For Shreyas Iyer Replacement In IPL 2023 </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="CricketmasterSection">
                <div className="container">
                    <div className="CustomContainer tabbedPanels" style={{ border: "none" }}>
                        <div className="cricketheading">
                            <h2 className="heading" style={{ fontWeight: 700 }}>
                                BREAKING: Bengal’s Sudip Gharami on KKR radar for Shreyas Iyer
                                replacement in IPL 2023
                            </h2>
                        </div>
                        <div className="story-user-actions">
                            <ul>
                                <li>
                                    <a href="">
                                        {" "}
                                        <img
                                            src="assets/images/follow-us.webp"
                                            className="follow-img"
                                            alt=""
                                        />{" "}
                                        Follow Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#comment">
                                        {" "}
                                        <i className="fa-regular fa-comment" /> Comment
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-solid fa-share" /> Share
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="cricket-intro">
                            <img src="assets/images/448ce-16807147374472-1920.avif" alt="" />
                            <figcaption className="sk-app-thumbnail">
                                Sudip Gharami (L) with Bengal captain Manoj Tiwary (R) during
                                2022/23 Ranji Trophy [Credits: CAB]
                            </figcaption>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <div className="container">
                    <div className="CustomContainer tabbedPanels" style={{ border: "none" }}>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="video-player-container">
                                    <p className="para">
                                        The Kolkata Knight Riders (KKR) are eyeing Bengal batter Sudip
                                        Kumar Gharami as a replacement for the injured Shreyas Iyer,
                                        Cricfeel has reliably learnt. The Knights have been left
                                        shortchanged after their incumbent skipper was on Tuesday
                                        confirmed to miss the entire IPL 2023.
                                    </p>
                                </div>
                                <div className="video-player-container mt-0">
                                    <h4 className="nd-title">
                                        IPL 2023, PBKS vs LSG Match Prediction: KL Rahul takes on his
                                        former franchise once again
                                    </h4>
                                    <img
                                        src="assets/images/img/b73e2-16825986151270-1920.avif"
                                        width="100%"
                                        alt=""
                                    />
                                    <figcaption>
                                        KL Rahul will need to fire against his former franchise
                                    </figcaption>
                                    <p className="para">
                                        LSG have one of the strongest rosters on paper in IPL 2023.
                                        Their multitude of all-round options, combined with the impact
                                        player rule, means that they can put out a variety of
                                        combinations according to the conditions on offer.
                                    </p>
                                    <div className="comments-count-container">
                                        <div className="comments-info-block">
                                            <span className="comments-count" id="comment">
                                                Be the first one to comment
                                            </span>
                                            <div className="story-user-actions mt-0 border-none">
                                                <ul>
                                                    <li>
                                                        <a href="">
                                                            <img
                                                                src="assets/images/follow-us.webp"
                                                                className="follow-img"
                                                                alt=""
                                                            />
                                                            Follow Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <i className="fa-solid fa-share" /> Share
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="vd-comments-input-holder comments-input-holder"
                                            style={{ borderBottom: "1px solid #e9e9e9" }} >
                                            <img src="assets/images/img/sk_avatar-45x45.png" alt="" />
                                            <input
                                                type="text"
                                                className="post-comment-box"
                                                rows={1}
                                                placeholder="Type your comment..."
                                                style={{ border: "solid 1px #41464b" }} />
                                            <button className="">
                                                <img src="assets/images/send-active.svg" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="trending-articles mt-3">
                                    <div className="sports-more-info">More from Cricfeel</div>
                                    <div className="story-wrapper">
                                        <div className="warpper-flex">
                                            <div className="warrper-img">
                                                <a href="cricket-news-breaking.php">
                                                    <img
                                                        src="assets/images/img/fbb55-16807528105308-1920.avif"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div className="right-wrapper">
                                                <a href="cricket-news-breaking.php">
                                                    <h6>
                                                        "Why did Ashwin go to open?" - Aakash Chopra questions
                                                        Rajasthan Royals' tactics in IPL 2023 loss to Punjab
                                                        Kings
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
                                                    <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                        <i className="fa-regular fa-comment" />{" "}
                                                        <span>Comment</span>
                                                    </a>
                                                    <a href="">
                                                        <i className="fa-solid fa-share" /> <span>Share</span>
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
                                                        src="assets/images/img/f463b-16826531604767-1920.avif"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div className="right-wrapper">
                                                <a href="cricket-news-breaking.php">
                                                    <h6>
                                                        “We don’t mess with things that are going well” -
                                                        Stephen Fleming on why CSK didn’t alter batting order
                                                        during chase vs RR
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
                                                    <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                        <i className="fa-regular fa-comment" />{" "}
                                                        <span>Comment</span>
                                                    </a>
                                                    <a href="">
                                                        <i className="fa-solid fa-share" /> <span>Share</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Video Section */}
                                <section className="feed-section first-border-section">
                                    <div className="video-feed-container py-0">
                                        <div className="video-feed-header cd-feed-h">
                                            <h4>
                                                <img src="assets/images/img/ic-star.svg" alt="" /> TIMELESS
                                                CLASSICS
                                            </h4>
                                            <div className="shuffle-icon">
                                                <button className="shuffle-button">
                                                    <img src="assets/images/img/shuffle-icon.svg" width={14} height={12} alt="shuffle icon" />
                                                    <span>Shuffle</span>
                                                </button>
                                            </div>
                                        </div>

                                        <Carousel responsive={carousel} className='for-button-class'>
                                            <div className="item">
                                                <div className="feed-carousel-item position-relative">
                                                    <a href="" className="item-cta" aria-label="video carousel item" />
                                                    <div className="thumbnails">
                                                        <img style={{ width: "100%" }} height={200} alt="Spurs vs Manchester "
                                                            src="assets/images/img/aa859-15872000003869-800.avif"
                                                            className="lazy-img-bg" />
                                                    </div>
                                                    <div className="cd-title-background-layer">
                                                        <h4>
                                                            3 IPL finals that were decided on the final ball
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="feed-carousel-item position-relative">
                                                    <a href="" className="item-cta" aria-label="video carousel item" />
                                                    <div className="thumbnails">
                                                        <img style={{ width: "100%" }} height={200} alt="Spurs vs Manchester" src="assets/images/img/3d964-15495013340203-800.avif"
                                                            className="lazy-img-bg" />
                                                    </div>
                                                    <div className="cd-title-background-layer">
                                                        <h4>
                                                            ICC World Cup: A look at the significant stats from
                                                            India vs Pakistan matches at the showpiece event
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="feed-carousel-item position-relative">
                                                    <a href="" className="item-cta" aria-label="video carousel item" />
                                                    <div className="thumbnails">
                                                        <img style={{ width: "100%" }} height={200} alt="Spurs vs Manchester "
                                                            src="assets/images/img/aa859-15872000003869-800.avif"
                                                            className="lazy-img-bg" />
                                                    </div>
                                                    <div className="cd-title-background-layer">
                                                        <h4>
                                                            3 IPL finals that were decided on the final ball
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel>
                                    </div>

                                </section>
                                {/* End Video Section */}
                                <div className="story-wrapper">
                                    <div className="warpper-flex">
                                        <div className="warrper-img">
                                            <a href="cricket-news-breaking.php">
                                                <img
                                                    src="assets/images/img/fbb55-16807528105308-1920.avif"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="right-wrapper">
                                            <a href="cricket-news-breaking.php">
                                                <h6>
                                                    "Why did Ashwin go to open?" - Aakash Chopra questions
                                                    Rajasthan Royals' tactics in IPL 2023 loss to Punjab Kings
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
                                                <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                    <i className="fa-regular fa-comment" />{" "}
                                                    <span>Comment</span>
                                                </a>
                                                <a href="">
                                                    <i className="fa-solid fa-share" /> <span>Share</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="trending-section mt-3">
                                    <div className="story-link-overlay ">
                                        <a href="">No one is doubting 😌</a>
                                    </div>
                                    <div className="t20-page-scroll-section">
                                        <a href="" className="scroll-section"></a>
                                        <div className="single-social-wrapper">
                                            <a href="" className="scroll-section"></a>
                                            <div className="tweet-container">
                                                <a href="" className="scroll-section">
                                                    <div className="tweet-header">
                                                        <div className="tweet-user-image">
                                                            <img
                                                                src="assets/images/img/vzRouYvh_normal.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="tweet-user-info">
                                                            <div className="tweet-username-block">
                                                                <span className="tweet-user-name">Cricfeel</span>
                                                                <div
                                                                    className="verified"
                                                                    title="Verified Profile"
                                                                />
                                                            </div>
                                                            <span className="tweet-user-handle">@Cricfeel</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="socila-twitter">
                                                    <a href="" className="scroll-section"></a>
                                                    <a href="">
                                                        <span>
                                                            <i className="fab fa-twitter" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="singlemedia-tweet">
                                                <span>King Kohli Rules</span>
                                                <div className="hashtag-social">
                                                    <a href="">#IPL2023 #cricket #RCB</a>
                                                </div>
                                            </div>
                                            <div className="tweet-images">
                                                <img
                                                    src="assets/images/img/f1c00-16819783856414-1920.avif"
                                                    alt=""
                                                    width="100%"
                                                />
                                            </div>
                                        </div>
                                        <div className="social-buttom story-user-actions">
                                            <a id="likebutton" className="likebutton">
                                                <i className="fa-regular fa-thumbs-up" /> <span>Like</span>
                                            </a>
                                            <div
                                                id="imogies-content"
                                                className="imogies-content social-reaction-icon"
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
                                            <a data-bs-toggle="offcanvas" data-bs-target="#comments">
                                                <i className="fa-regular fa-comment" /> <span>Comment</span>
                                            </a>
                                            <a href="">
                                                <i className="fa-solid fa-share" /> <span>Share</span>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-4" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CricketNews