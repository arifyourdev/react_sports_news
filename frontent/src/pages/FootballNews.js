import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

const FootballNews = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Football Schedule</title>
            </Helmet>
            <Header />
            <div className="breadcrumb-container bc-2">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><Link to=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">Football <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">Epl 2022-2023</Link></li>
                            <li><Link to=""> <i className="fa fa-angle-right"></i> Premier League Club Plotting Move To Sign Arsenal Star This Summer - Reports  </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <>
                <section className="CricketmasterSection">
                    <div className="container">
                        <div className="CustomContainer tabbedPanels" style={{ border: "none" }}>
                            <div className="cricketheading">
                                <h2 className="heading" style={{ fontWeight: 700 }}>
                                    Premier League club plotting move to sign Arsenal star this summer -
                                    Reports
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
                                <img src="assets/images/img/fe412-16816614505691-1920.avif" alt="" />
                                <figcaption className="sk-app-thumbnail">
                                    Brighton are interested in Arsenal's Reiss Nelson (not in pic).
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
                                            Brighton &amp; Hove Albion are reportedly looking to seal the
                                            arrival of Reiss Nelson from Arsenal in the summer.
                                        </p>
                                        <p className="para">
                                            According to the Daily Mail, Brighton are keen on signing
                                            Nelson, 23, whose contract expires at the end of the season. The
                                            Gunners have opened talks with the English winger, but his
                                            future at the Emirates is uncertain.
                                        </p>
                                        <blockquote className="blockquote">
                                            "I always saw the potential. The talent and the desire for him
                                            to do it, but he’s at a different level right now. I think
                                            emotionally, the experiences that he had helped him."
                                        </blockquote>
                                        <hr />
                                        <br /> <br />
                                        <h3>
                                            Arsenal's William Saliba not spotted in training ahead of West
                                            Ham clash
                                        </h3>
                                        <figure className="image">
                                            <img
                                                className="sk-app-thumbnail"
                                                alt="William Saliba (middle) was absent from training."
                                                src="assets/images/img/fbb5544-16807528105308-1920.avif"
                                                style={{ width: "100%" }}
                                            />
                                            <figcaption>
                                                William Saliba (middle) was absent from training.
                                            </figcaption>
                                        </figure>
                                        <p className="para">
                                            Saliba was not spotted in Arsenal's training session on
                                            Thursday, meaning Arteta may have to rely on Rob Holding once
                                            more. The English defender has filled in for Saliba during his
                                            absence.
                                        </p>
                                        <section id="comment">
                                            <div className="">
                                                <h4>Arsenal's title hopes in tatters?</h4>
                                                <p>
                                                    Until last weekend, Arsenal held a healthy eight-point
                                                    advantage over Manchester City. However, following
                                                    back-to-back draws, that has now trimmed to four, with the
                                                    holders also having a game in hand. What's even more damning
                                                    is that the Gunners threw away a two-goal lead in
                                                    consecutive games - Arsenal raced to a 2-0 lead quite early
                                                    against both Liverpool and West Ham - only to end both games
                                                    2-2.
                                                </p>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <div className="col-lg-4" />
                            </div>
                        </div>
                    </div>
                </section>
            </>

            <Footer />
        </>
    )
}

export default FootballNews