import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'


const Result = () => {
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
                                    <li className="active"><Link to="">EPL</Link></li>
                                    <li><Link to="">Schedule</Link></li>
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
                                <li className=""><Link to="/clean-sheets">EPL Clean Sheets</Link></li>
                                <li className="active"><Link to="/result">EPL Results</Link></li>
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
                            <li><Link to=""><i className="fa fa-home"></i> <i className="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">Football <i class="fa fa-angle-right"></i></Link></li>
                            <li><Link to="">Result</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="mt-200 mb-4">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8">
                            <section className="Feedsection">
                                <div className="epl-resultbox">
                                    <div className="row py-3">
                                        <div className="col-lg-1" />
                                        <div className="col-lg-5">
                                            {" "}
                                            <a href="">
                                                <i className="fa fa-angle-left" />
                                            </a>
                                        </div>
                                        <div className="col-lg-6">
                                            {" "}
                                            <span className="eplrounds">Round 51</span>
                                        </div>
                                    </div>
                                    <table className="custom-table">
                                        <tbody>
                                            <tr className="epl-result-tr">
                                                <td>
                                                    <span className="eplrft">FT</span>
                                                </td>
                                                <td>
                                                    <div className="sheet-team-logo epl-r-logo">
                                                        <a href="">
                                                            <img
                                                                className="team-logo"
                                                                title="Newcastle"
                                                                src="assets/images/flag/bournemouth.webp"
                                                            />
                                                            BRN
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>0 - 2</td>
                                                <td>
                                                    <div className="sheet-team-logo epl-r-logo">
                                                        <a href="">
                                                            {" "}
                                                            <span> BRN</span>{" "}
                                                            <img
                                                                className="team-logo"
                                                                title="Newcastle"
                                                                src="assets/images/flag/brighton-hove-albion.webp"
                                                            />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="epl-result-tr">
                                                <td>
                                                    <span className="eplrft">FT</span>
                                                </td>
                                                <td>
                                                    <div className="sheet-team-logo epl-r-logo">
                                                        <a href="">
                                                            <img
                                                                className="team-logo"
                                                                title="Newcastle"
                                                                src="assets/images/flag/bournemouth.webp"
                                                            />
                                                            BRN
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>3 - 2</td>
                                                <td>
                                                    <div className="sheet-team-logo epl-r-logo">
                                                        <a href="">
                                                            {" "}
                                                            <span> BRN</span>{" "}
                                                            <img
                                                                className="team-logo"
                                                                title="Newcastle"
                                                                src="assets/images/flag/brighton-hove-albion.webp"
                                                            />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="epl-result-tr">
                                                <td>
                                                    <span className="eplrft">FT</span>
                                                </td>
                                                <td>
                                                    <div className="sheet-team-logo epl-r-logo">
                                                        <a href="">
                                                            <img
                                                                className="team-logo"
                                                                title="Newcastle"
                                                                src="assets/images/flag/bournemouth.webp"
                                                            />
                                                            BRN
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>0 - 2</td>
                                                <td>
                                                    <div className="sheet-team-logo epl-r-logo">
                                                        <a href="">
                                                            {" "}
                                                            <span> BRN</span>{" "}
                                                            <img
                                                                className="team-logo"
                                                                title="Newcastle"
                                                                src="assets/images/flag/bournemouth.webp"
                                                            />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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

export default Result