import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Navbar from './Navbar'
import './style.css';
import './cricket.css';
import './responsive.css';

const Iplnews = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | IPL News</title>
            </Helmet>
            <Header />
            <Navbar />
            <section className="mt-20">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mt-0">
                            <section className="feed-section first-border-section">
                                <div className="sportKeedaFeed">
                                    <a className="sports-feed-item" href="#">
                                        <img
                                            src="assets/images/img/1e94d-16811227074376-1920.avif"
                                            alt="Shikhar"
                                        />
                                        <div className="sports-feed-item-element-meta">
                                            <div className="sports-primary-title">
                                                Picking the best fielder in each IPL 2023 team
                                            </div>
                                        </div>
                                    </a>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/e543b-16811231008635-1920.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/miller.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="feed-item-secondary">
                                        <a className="cover-link-tag" href="">
                                            <div className="sports-feed-item-secondary-element">
                                                <img
                                                    className="feed-element-img lazy-img-bg"
                                                    src="assets/images/img/miller.avif"
                                                    alt="Miller"
                                                />
                                                <div className="sports-feed-item-secondary-meta">
                                                    <div className="sports-item-title">
                                                        5 star players who are missing the start of IPL 2023
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
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

export default Iplnews