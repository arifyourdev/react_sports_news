import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

const CleanSheet = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Football Schedule</title>
            </Helmet>
            <Header />
            <section className="Navbar">
                <div className="primary-navigation">
                    <div className="nav-items">
                        <div className="secondary-navigation">
                            <div className="nav-group">
                                <div className="active-item">EPL</div>
                                <div className="secondary-nav-items-indicator"></div>
                            </div>
                            <div className="secondary-nav-items">
                                <ul>
                                    <li><Link to="/football">Football Home</Link> </li>
                                    <li><Link to="">Newsletters</Link></li>
                                    <li className=""><Link to="">EPL</Link></li>
                                    <li className="active"><Link to="">Schedule</Link></li>
                                    <li><Link to="">FIFA WC</Link></li>
                                    <li><Link to="">Nations League</Link></li>
                                    <li><Link to="">La Liga</Link></li>
                                    <li><Link to="">Ligue 1</Link></li>
                                    <li><Link to="">Champions League</Link></li>
                                    <li><Link to="">MLS </Link></li>
                                    <li><Link to="">Bundesliga </Link></li>
                                    <li><Link to="">Serie A </Link></li>
                                    <li><Link to="">Netherlands vs USA live score</Link></li>
                                    <li><Link to="">Argentina vs Australia live score</Link></li>
                                    <li><Link to="">France vs Poland Live Score</Link></li>
                                    <li><Link to="">England vs Senegal Live Score</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="primary-nav-items">
                            <ul>
                                <li className=""><Link to="/epl">Home</Link> </li>
                                <li className=""><Link to="/news">News</Link></li>
                                <li className="active"><Link to="/clean-sheets">EPL Clean Sheets</Link></li>
                                <li className=""><Link to="/result">EPL Results</Link></li>
                                <li className=""><Link to="/plf">Premier League Fixtures</Link></li>
                                <li className=""><Link to="/standings">EPL Points Table 2022-23</Link></li>
                                <li className=""><Link to="/top-scorers">EPL Top Scorers</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="breadcrumb-container">
                <div className="conatainer">
                    <div className="wrapper-container">
                        <ul>
                            <li><a href=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></a></li>
                            <li><a href="">Football <i class="fa fa-angle-right"></i></a></li>
                            <li><a href="">EPL 2023 </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="mt-200 mb-4">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8">
                            <section className="Feedsection">
                                <div className="feed-header">
                                    <h3>Premier League Clean Sheets 2022-23</h3>
                                    <span>
                                        {" "}
                                        <img src="assets/images/ic-share-gray.svg" alt="" /> Share
                                    </span>
                                </div>
                                <div className="table_scroll">
                                    <table className="custom-table mt-3">
                                        <tbody>
                                            <tr className="table-header-tr">
                                                <td className="table-header-td" style={{ textAlign: "left" }}>
                                                    PLAYER
                                                </td>
                                                <td className="table-header-td">APPS (SUBS)</td>
                                                <td className="table-header-td">CLEAN SHEETS</td>
                                                <td className="table-header-td">MINS PLAYED</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="sheet-team-logo">
                                                        <img
                                                            className="team-logo"
                                                            title="Newcastle"
                                                            src="assets/images/flag/52.png"
                                                        />
                                                        <a href="/player/nick-pope">Nick Pope</a>
                                                    </div>
                                                </td>
                                                <td>27 (0)</td>
                                                <td>7</td>
                                                <td>2366</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="sheet-team-logo">
                                                        <img
                                                            className="team-logo"
                                                            title="Newcastle"
                                                            src="assets/images/flag/55.png"
                                                        />
                                                        <a href="/player/nick-pope">Nick Pope</a>
                                                    </div>
                                                </td>
                                                <td>27 (0)</td>
                                                <td>7</td>
                                                <td>2366</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="sheet-team-logo">
                                                        <img
                                                            className="team-logo"
                                                            title="Newcastle"
                                                            src="assets/images/flag/52.png"
                                                        />
                                                        <a href="/player/nick-pope">Nick Pope</a>
                                                    </div>
                                                </td>
                                                <td>27 (0)</td>
                                                <td>7</td>
                                                <td>2366</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="sheet-team-logo">
                                                        <img
                                                            className="team-logo"
                                                            title="Newcastle"
                                                            src="assets/images/flag/55.png"
                                                        />
                                                        <a href="/player/nick-pope">Nick Pope</a>
                                                    </div>
                                                </td>
                                                <td>27 (0)</td>
                                                <td>7</td>
                                                <td>2366</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <section className="cs-section">
                                    <div className="clear-sheet">
                                        <h4 className="sheet-titlle">
                                            Premier League Clean Sheets 2021-22
                                        </h4>
                                    </div>
                                    <div className="cs-paragraphs">
                                        <p>
                                            The 2021/22 Premier League season ended up being a two horse
                                            race as Manchester City's and Liverpool's title quest went down
                                            to the wire. The champions were crowned on the last day of the
                                            season and in the end it was Manchester City who won the PL
                                            title with just a single point lead over Liverpool.
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <div className="clear-sheet">
                                            <h4 className="sheet-titlle">
                                                Liverpool- Alisson Becker (20 Clean sheets from 3,240 minutes
                                                played)
                                            </h4>
                                        </div>
                                        <div className="cs-paragraphs">
                                            <img
                                                src="assets/images/img/15873-16540588228895-1920.avif"
                                                alt=""
                                            />
                                            <p>
                                                Liverpool superstar Alisson Becker yet again proved to the
                                                whole world that he is a world class GK. During the 2021-22
                                                season, Alisson managed to secure 20 clean sheets for his team
                                                which was certainly instrumental for their PL title chase. The
                                                Brazilian showed himself to to be a good performer in clutch
                                                situations as he made some cucial saves to put his team in the
                                                front foot.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                        <div className="col-lg-4 mt-3"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CleanSheet