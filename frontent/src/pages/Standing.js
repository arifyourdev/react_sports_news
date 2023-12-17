import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

const Standing = () => {
    return (
        <>
            <Helmet>
                <title>Cricfeel | Points Tables</title>
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
                                <li className=""><Link to="/result">EPL Results</Link></li>
                                <li className=""><Link to="/plf">Premier League Fixtures</Link></li>
                                <li className="active"><Link to="/standings">EPL Points Table 2022-23</Link></li>
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
                            <li><a href="">EPL <i class="fa fa-angle-right"></i></a></li>
                            <li><a href="">Points Tables </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="mt-200 mb-4">
                <div className="container CustomContainer">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="Feedsection">
                                <div className="feed-header">
                                    <h3>Premier League Fixtures 2022-23</h3>
                                    <span>
                                        {" "}
                                        <img src="assets/images/ic-share-gray.svg" alt="" /> Share
                                    </span>
                                </div>
                                <div className="table_scroll">
                                    <table className="_table_stands mb-3 points-tables">
                                        <tbody>
                                            <tr>
                                                <th style={{ width: "5%" }}>#</th>
                                                <th style={{ width: "42%" }}>Team</th>
                                                <th>P</th>
                                                <th>W</th>
                                                <th>D</th>
                                                <th>L</th>
                                                <th>GF</th>
                                                <th>GA</th>
                                                <th>GD</th>
                                                <th>Pts</th>
                                            </tr>
                                            <tr>
                                                <td className="keeda_football_table_position green">1</td>
                                                <td className="team-name-points-table">
                                                    <a href="">
                                                        <div className="keeda_widget_football_flag">
                                                            <img src="assets/images/arsenal.webp" alt="" />
                                                            <span className="keda_span_text">Arsenal</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>30</td>
                                                <td>23</td>
                                                <td>4</td>
                                                <td>3</td>
                                                <td>72</td>
                                                <td>29</td>
                                                <td>4</td>
                                                <td>
                                                    <b>73</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="keeda_football_table_position green">2</td>
                                                <td className="team-name-points-table">
                                                    <a href="">
                                                        <div className="keeda_widget_football_flag">
                                                            <img src="assets/images/arsenal.webp" alt="" />
                                                            <span className="keda_span_text">Arsenal</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>30</td>
                                                <td>23</td>
                                                <td>4</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>
                                                    <b>73</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="keeda_football_table_position green">3</td>
                                                <td className="team-name-points-table">
                                                    <a href="">
                                                        <div className="keeda_widget_football_flag">
                                                            <img src="assets/images/arsenal.webp" alt="" />
                                                            <span className="keda_span_text">Arsenal</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>30</td>
                                                <td>23</td>
                                                <td>4</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>
                                                    <b>73</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="keeda_football_table_position green">4</td>
                                                <td className="team-name-points-table">
                                                    <a href="">
                                                        <div className="keeda_widget_football_flag">
                                                            <img src="assets/images/arsenal.webp" alt="" />
                                                            <span className="keda_span_text">Arsenal</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>30</td>
                                                <td>23</td>
                                                <td>4</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>
                                                    <b>73</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="keeda_football_table_position blue">5</td>
                                                <td className="team-name-points-table">
                                                    <a href="">
                                                        <div className="keeda_widget_football_flag">
                                                            <img
                                                                src="assets/images/tottenham-hotspur.webp"
                                                                alt=""
                                                            />
                                                            <span className="keda_span_text">Tottenham</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>30</td>
                                                <td>23</td>
                                                <td>4</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>
                                                    <b>73</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="keeda_football_table_position">
                                                    6
                                                    <span className="ups" />
                                                </td>
                                                <td className="team-name-points-table">
                                                    <a href="">
                                                        <div className="keeda_widget_football_flag">
                                                            <img
                                                                src="assets/images/tottenham-hotspur.webp"
                                                                alt=""
                                                            />
                                                            <span className="keda_span_text">Tottenham</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>30</td>
                                                <td>23</td>
                                                <td>4</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>
                                                    <b>73</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="keeda_football_table_position red">
                                                    7
                                                    <span className="ups" />
                                                </td>
                                                <td className="team-name-points-table">
                                                    <a href="">
                                                        <div className="keeda_widget_football_flag ">
                                                            <img src="assets/images/nottingham.webp" alt="" />
                                                            <span className="keda_span_text"> Nottingham</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>30</td>
                                                <td>23</td>
                                                <td>4</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>
                                                    <b>73</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="keeda_football_table_position red">
                                                    7
                                                    <span className="ups" />
                                                </td>
                                                <td className="team-name-points-table">
                                                    <a href="">
                                                        <div className="keeda_widget_football_flag ">
                                                            <img src="assets/images/nottingham.webp" alt="" />
                                                            <span className="keda_span_text"> Nottingham</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>30</td>
                                                <td>23</td>
                                                <td>4</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>73</td>
                                                <td>
                                                    <b>73</b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="points-block-contain">
                                    <table className="points-block">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="point_table_legend green" />
                                                </td>
                                                <td>Champions League</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span />
                                                </td>
                                                <td>Europa League</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span />
                                                </td>
                                                <td>Relegation</td>
                                            </tr>
                                            <tr>
                                                <td>P</td>
                                                <td>Matches Played</td>
                                            </tr>
                                            <tr>
                                                <td>W</td>
                                                <td>Matches Won</td>
                                            </tr>
                                            <tr>
                                                <td>D&gt;</td>
                                                <td>Matches Drawn</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Standing