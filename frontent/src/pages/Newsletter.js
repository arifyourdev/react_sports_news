import { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'
import axios from 'axios';

const Newsletter = () => {
    const [news, setNews] = useState([]);


    const newApi = async () => {
        const {data} = await axios.get("http://localhost:8080/api/newsletter")
        console.log(data.newsletter)
        setNews(data.newsletter)
    }
    useEffect(() => {
        newApi();
    }, [])

    return (
        <>
            <Helmet>
                <title>Cricfeel | Newsletter</title>
            </Helmet>
            <Header />

            <div className="newsletter">
                <section className="newsletter-hero-portal">
                    <div className="hero-portal-container">
                        <div className="content-section">
                            <h1>The hottest sporting updates, straight to your mail!</h1>
                            <span className="content-desc">Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
                                text used in design when creating content. It helps designers plan out where the content
                                will sit</span>
                        </div>
                        <div className="image-section">
                            <img src="assets/images/img/hero-banner-image.webp" width="350" height="350" alt="banner" />
                        </div>
                    </div>
                </section>

                <section className="newsletter-content-portal">
                    <h1>Cricfeel <span>Newsletters</span></h1>
                    <div className="container CustomContainer">
                        <div className="newsletter-lists">
                             
                            {news.map((news_data) => (
                                <div className="single-list" key={news_data.id}>
                                    <div className="plan-type">
                                        <span className="plan-type-text">{news_data.badge}</span>
                                        <img src="assets/images/img/football-landing-card.avif" width="328" height="142"
                                            alt="Football News Round Up" />
                                    </div>
                                    <div className="title-desc">
                                        <span className="news-title">{news_data.title.replace().slice(0, 20).toUpperCase()}</span>
                                        <span className="news-desc">{news_data.description.slice(0, 100)} ..</span>
                                    </div>
                                    <div className="subscribe">
                                        <button type="button" data-bs-toggle="modal" data-bs-target={`#newsletter${news_data.id}`}>
                                            <span>Subscribe Now</span>
                                        </button>
                                    </div>
                                    <div className="modal" id={`newsletter${news_data.id}`}>
                                        <div className="modal-dialog modal-lg newsmodel-dialog">
                                            <div className="modal-content news-modal-content">
                                                <div className="news-modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                <div className="news-modal-body">
                                                    <div className="single-list" id="newsletter-info">
                                                        <div className="plan-type">
                                                            <span className="plan-type-text" id="modal-digest-type">daily </span>
                                                        </div>
                                                        <div className="modal-title-desc">
                                                            <span className="news-title" id="modal-title">{news_data.title.replace(`${news_data.title}`,`Football News`)} <span>Round Up {news_data.id}</span></span>
                                                            <span id="modal-content" className="news-desc">Get Cricfeel's daily Football News  News Round Up
                                                                Newsletter straight to your inbox.</span>
                                                        </div>
                                                        <div className="text-input">
                                                            <input type="email" placeholder="Enter your email" id="newsletter-email" name="email"
                                                                required="" />
                                                            <span className="error" id="email-error"></span>
                                                        </div>
                                                        <div className="subscribe">
                                                            <button id="subscribe-button" type="button" disabled="">Subscribe Free</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>



            <Footer />
        </>
    )
}

export default Newsletter