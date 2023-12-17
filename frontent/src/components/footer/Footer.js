import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import FacebookIcon from '../../images/favicon/facebook.svg';
import InstaIcon from '../../images/favicon/instagram.svg';
import SpapIcon from '../../images/favicon/snapchat.svg';
import YoutubeIcon from '../../images/favicon/youtube.svg';
import TwitterIcon from '../../images/favicon/twitter.svg';
import GoogleIcon from '../../images/favicon/google.svg';

const Footer = () => {
  return (
    <>
    <footer>
    <div className="footer-container">
        <div className="footer">
            <div className="trending-topics-container">
                <div className="heading">Trending Topics</div>
                <div className="trending-topics-holder">
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                    <span className="footer-bullet">• <a className="trending-topic" href="">IPL 2023 Live Score</a></span>
                </div>
            </div>
            <div className="footer-right">
                <div className="important-links">
                    <div className="heading">Important Links</div>
                    <div className="quick-links-container">
                        <Link className="quick-link" to="about-us">About Us</Link>
                        <Link className="quick-link" to="career">Careers</Link>
                        <Link className="quick-link" to="">Contact Us</Link>
                        <Link className="quick-link" to="privacy-policy">Policies</Link>
                    </div>
                </div>
                <div className="social-media-links">
                    <a aria-label="SK Facebook Page" href="https://www.facebook.com">
                        <img src={FacebookIcon} loading="lazy" height="32" width="32" alt="facebook icon"/></a>
                    <a aria-label="SK Twitter Page" href="https://twitter.com">
                        <img src={TwitterIcon} loading="lazy" height="32" width="32" alt="twitter icon"/></a>
                    <a aria-label="SK Google News Page"href="https://news.google.com">
                        <img src={GoogleIcon} loading="lazy"height="32" width="32" alt="google publication icon"/></a>
                    <a aria-label="SK Snapchat Page" href="https://story.snapchat.com">
                        <img src={SpapIcon} loading="lazy" height="32"width="32" alt="snapchat icon"/></a>
                    <a aria-label="SK Youtube Page" href="https://www.youtube.com">
                        <img src={YoutubeIcon} loading="lazy" height="32" width="32" alt="youtube icon"/></a>
                    <a aria-label={InstaIcon} href="https://www.instagram.com">
                        <img src={InstaIcon} loading="lazy" height="32"  width="32" alt="instagram icon"/></a>
                </div>
                <div className="terms-conditions"> Cricfeel's <Link to="/terms-of-use">Terms</Link> and <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    </div>
     <div className="footer-bootom">Copyright @2023 Cricfeel</div>
</footer>
    </>
  )
}

export default Footer