import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from './Navbar'
import './style.css';
import './cricket.css';
import './responsive.css';

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

const Videos = () => {
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
                            <div className="container">
                                <div className="CustomContainer">
                                    <section>
                                        <div id="video-carousel" className="owl-carousel default-owl-icon">
                                            <Carousel responsive={responsive}>
                                                <div>Item 1</div>
                                                <div>Item 2</div>
                                                <div>Item 3</div>
                                                <div>Item 4</div>
                                            </Carousel>;
                                            {/* <div className="items position-relative">
                                                <a href="video-details.php">
                                                    <img
                                                        src="assets/images/img/cc364-16824761464464-1920.jpg"
                                                        alt=""
                                                    />
                                                    <div className="inner-text">
                                                        <span className="video-title">
                                                            IPL 2023 : पुरानी टीम से Warner ने लिया बदला, SRH के
                                                            खिलाफ Axar Patel छाये | Mukesh Kumar | Points Table |
                                                            Pushpa
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="items position-relative">
                                                <a href="video-details.php">
                                                    <img
                                                        src="assets/images/img/c5051-16823896253911-1920.jpg"
                                                        alt=""
                                                    />
                                                    <div className="inner-text">
                                                        <div className="inner-text">
                                                            <span className="video-title">
                                                                IPL 2023 : पुरानी टीम से Warner ने लिया बदला, SRH के
                                                                खिलाफ Axar Patel छाये | Mukesh Kumar | Points Table |
                                                                Pushpa
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div> */}
                                        </div>
                                    </section>
                                    <section>
                                        <div className="video-grids row mt-4">
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="video-details.php" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="video-details.php" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="video-details.php" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/a65dd-16809195514740-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="video-details.php" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/a65dd-16809195514740-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="video-details.php" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                        </div>
                                    </section>
                                    <section>
                                        <div className="mt-3">
                                            <div className="row mt-4">
                                                <div className="col-lg-6 g-1">
                                                    <div className="channel-videos-holder">
                                                        <div className="videos-heading-holder">
                                                            <div className="videos-heading">
                                                                <img
                                                                    className="channel-image"
                                                                    src="assets/images/img/9b00d-16328980583564-800.avif"
                                                                    width={40}
                                                                    height={40}
                                                                    alt="SK Tales"
                                                                />
                                                                <div className="channel-heading">SK Tales</div>
                                                            </div>
                                                            <a href="video-details.php">
                                                                <span>
                                                                    View All <i className="fa fa-angle-right" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="channel-items">
                                                            <a href="">
                                                                <div className="sport-feed-video-item-secondary">
                                                                    <div className="video-duration-img">
                                                                        <img
                                                                            src="assets/images/img/64b4f-16548056944029-1920.jpg"
                                                                            width={100}
                                                                            height={70}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="video-duration-container">
                                                                        <span className="video-duration">3:03</span>
                                                                    </div>
                                                                    <div className="video-d-content">
                                                                        When Shoaib Akhtar Interacted with a Young AB de
                                                                        Villiers | SK Tales
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="channel-items">
                                                            <a href="video-details.php">
                                                                <div className="sport-feed-video-item-secondary">
                                                                    <div className="video-duration-img">
                                                                        <img
                                                                            src="assets/images/img/643c2-16221192705152-800.jpg"
                                                                            width={100}
                                                                            height={70}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="video-duration-container">
                                                                        <span className="video-duration">3:03</span>
                                                                    </div>
                                                                    <div className="video-d-content">
                                                                        When Shoaib Akhtar Interacted with a Young AB de
                                                                        Villiers | SK Tales
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="channel-items">
                                                            <a href="video-details.php">
                                                                <div className="sport-feed-video-item-secondary">
                                                                    <div className="video-duration-img">
                                                                        <img
                                                                            src="assets/images/img/64b4f-16548056944029-1920.jpg"
                                                                            width={100}
                                                                            height={70}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="video-duration-container">
                                                                        <span className="video-duration">3:03</span>
                                                                    </div>
                                                                    <div className="video-d-content">
                                                                        When Shoaib Akhtar Interacted with a Young AB de
                                                                        Villiers | SK Tales
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 g-1">
                                                    <div className="channel-videos-holder">
                                                        <div className="videos-heading-holder">
                                                            <div className="videos-heading">
                                                                <img
                                                                    className="channel-image"
                                                                    src="assets/images/img/9b00d-16328980583564-800.avif"
                                                                    width={40}
                                                                    height={40}
                                                                    alt="SK Tales"
                                                                />
                                                                <div className="channel-heading">Top-5</div>
                                                            </div>
                                                            <a href="">
                                                                <span>
                                                                    View All <i className="fa fa-angle-right" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <div className="channel-items">
                                                            <a href="">
                                                                <div className="sport-feed-video-item-secondary">
                                                                    <div className="video-duration-img">
                                                                        <img
                                                                            src="assets/images/img/64b4f-16548056944029-1920.jpg"
                                                                            width={100}
                                                                            height={70}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="video-duration-container">
                                                                        <span className="video-duration">3:03</span>
                                                                    </div>
                                                                    <div className="video-d-content">
                                                                        When Shoaib Akhtar Interacted with a Young AB de
                                                                        Villiers | SK Tales
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="channel-items">
                                                            <a href="">
                                                                <div className="sport-feed-video-item-secondary">
                                                                    <div className="video-duration-img">
                                                                        <img
                                                                            src="assets/images/img/643c2-16221192705152-800.jpg"
                                                                            width={100}
                                                                            height={70}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="video-duration-container">
                                                                        <span className="video-duration">3:03</span>
                                                                    </div>
                                                                    <div className="video-d-content">
                                                                        When Shoaib Akhtar Interacted with a Young AB de
                                                                        Villiers | SK Tales
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="channel-items">
                                                            <a href="">
                                                                <div className="sport-feed-video-item-secondary">
                                                                    <div className="video-duration-img">
                                                                        <img
                                                                            src="assets/images/img/643c2-16221192705152-800.jpg"
                                                                            width={100}
                                                                            height={70}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="video-duration-container">
                                                                        <span className="video-duration">3:03</span>
                                                                    </div>
                                                                    <div className="video-d-content">
                                                                        When Shoaib Akhtar Interacted with a Young AB de
                                                                        Villiers | SK Tales
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section>
                                        <div className="video-grids row mt-4">
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/a65dd-16809195514740-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/a65dd-16809195514740-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                            {/* Item Start */}
                                            <div className="col-lg-3">
                                                <a href="" className="video-templates">
                                                    <div className="video-thamnail">
                                                        <img
                                                            src="assets/images/img/b39a1-16810420302933-1920.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="video-click-icon">
                                                        <img
                                                            src="assets/images/ic-play.svg"
                                                            className="v-img"
                                                            alt=""
                                                        />
                                                        <div className="video-meta-duration">0:50</div>
                                                    </div>
                                                    <div className="meta-video-cont">
                                                        <h6>
                                                            ‘When Kohli scores runs, everyone’s happy’- Wasim Jaffer
                                                            | Sar Utha Ke Jiyo Moments | HDFC Life
                                                        </h6>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Item End */}
                                        </div>
                                        <div className="pagination-container">
                                            <span className="pagination-number disabled">Back</span>
                                            <div className="pagination-numbers">
                                                <a className="pagination-number selected" href="?page=1">
                                                    1
                                                </a>
                                                <a className="pagination-number " href="?#">
                                                    2
                                                </a>
                                                <a className="pagination-number " href="#">
                                                    3
                                                </a>
                                                <a className="pagination-number " href="#">
                                                    4
                                                </a>
                                                <a className="pagination-number " href="#">
                                                    5
                                                </a>
                                            </div>
                                            <a className="pagination-number" href="#">
                                                Next
                                            </a>
                                        </div>
                                    </section>
                                </div>
                            </div>
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

export default Videos