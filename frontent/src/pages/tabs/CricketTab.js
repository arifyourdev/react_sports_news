import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import '../cricket.css';
import '../style.css';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import SriIcon from '../../images/flag/lk.svg';
import NzIcon from '../../images/flag/nz.svg';
 

const CricketTab = () => {

    const [ToggleCricket, setToggleCricket] = useState(1);

    const toggleTab = (index) => {
        setToggleCricket(index);
    };

    const getActiveClass = (index, className3) =>  
        ToggleCricket === index ? className3 : "";
    

    return (
        <>
            <ul className='cricket-tabs'>
                <li className={`tabs ${getActiveClass(1, "active-tabs")}`} onClick={() => toggleTab(1)} >Featured</li>
                <li className={`tabs ${getActiveClass(2, "active-tabs")}`} onClick={() => toggleTab(2)} >IPL 2023</li>
                <li className={`tabs ${getActiveClass(3, "active-tabs")}`} onClick={() => toggleTab(3)} >WPL</li>
                <li className={`tabs ${getActiveClass(4, "active-tabs")}`} onClick={() => toggleTab(4)} >WI vs SA</li>
                <li className={`tabs ${getActiveClass(5, "active-tabs")}`} onClick={() => toggleTab(5)} >PSL</li>
                <li className={`tabs ${getActiveClass(6, "active-tabs")}`} onClick={() => toggleTab(6)} >NZ vz SL</li>
                <li className={`tabs ${getActiveClass(7, "active-tabs")}`} onClick={() => toggleTab(7)} >BAN vs IRE</li>
            </ul>
            <div className="panelContainer">
                <div className={`content ${getActiveClass(1, "active-content")}`}>
                   <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        freeMode={true}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 50,
                            },
                          }}
                        navigation={true} modules={[Navigation]}
                        className="mySwiper">
                         <SwiperSlide>
                            <div className="item">
                                <Link to="/live-cricket-score" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={SriIcon}
                                                        alt=""/> <span> SL</span></div>
                                                    <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={NzIcon}
                                                        alt=""/> <span> NZ</span></div>
                                                    <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                </div>
                                                <div className="live keeda-descript">
                                                    <span><button class="Livebtn">Live</button> NZ need 78 runs in
                                                        26.4 remaining over</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabBoxfooter">
                                            <Link to="/cricket-schedule">Schedule <i
                                                class="fa-solid fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <a href="live-cricket-score.php" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={SriIcon}
                                                        alt=""/> <span> SL</span></div>
                                                    <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={NzIcon}
                                                        alt=""/> <span> NZ</span></div>
                                                    <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                </div>
                                                <div className="live keeda-descript">
                                                    <span><button class="Livebtn">Live</button> NZ need 78 runs in
                                                        26.4 remaining over</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabBoxfooter">
                                            <a href="cricket-schedule.php">Schedule <i
                                                class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <a href="live-cricket-score.php" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={SriIcon}
                                                        alt=""/> <span> SL</span></div>
                                                    <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={NzIcon}
                                                        alt=""/> <span> NZ</span></div>
                                                    <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                </div>
                                                <div className="live keeda-descript">
                                                    <span><button class="Livebtn">Live</button> NZ need 78 runs in
                                                        26.4 remaining over</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabBoxfooter">
                                            <a href="cricket-schedule.php">Schedule <i
                                                class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <a href="live-cricket-score.php" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={SriIcon}
                                                        alt=""/> <span> SL</span></div>
                                                    <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={NzIcon}
                                                        alt=""/> <span> NZ</span></div>
                                                    <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                </div>
                                                <div className="live keeda-descript">
                                                    <span><button class="Livebtn">Live</button> NZ need 78 runs in
                                                        26.4 remaining over</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabBoxfooter">
                                            <a href="cricket-schedule.php">Schedule <i
                                                class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <a href="live-cricket-score.php" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={SriIcon}
                                                        alt=""/> <span> SL</span></div>
                                                    <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={NzIcon}
                                                        alt=""/> <span> NZ</span></div>
                                                    <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                </div>
                                                <div className="live keeda-descript">
                                                    <span><button class="Livebtn">Live</button> NZ need 78 runs in
                                                        26.4 remaining over</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabBoxfooter">
                                            <a href="cricket-schedule.php">Schedule <i
                                                class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <a href="live-cricket-score.php" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={SriIcon}
                                                        alt=""/> <span> SL</span></div>
                                                    <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={NzIcon}
                                                        alt=""/> <span> NZ</span></div>
                                                    <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                </div>
                                                <div className="live keeda-descript">
                                                    <span><button class="Livebtn">Live</button> NZ need 78 runs in
                                                        26.4 remaining over</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabBoxfooter">
                                            <a href="cricket-schedule.php">Schedule <i
                                                class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <a href="live-cricket-score.php" className="keramasterBox">
                                    <div className="tabBox">
                                        <div className="tabBoxPadding">
                                            <div className="matchShedule">
                                                <span className="upcomingMatch">Match 1 | Today 07:30 PM</span>
                                            </div>
                                            <div className="keeda-cricket-widget">
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={SriIcon}
                                                        alt=""/> <span> SL</span></div>
                                                    <div className="keeda-scoreBoard">167/10 (41.2 ov)</div>
                                                </div>
                                                <div className="keeda-series">
                                                    <div className="keedaFlags"><img src={NzIcon}
                                                        alt=""/> <span> NZ</span></div>
                                                    <div className="keeda-scoreBoard">100/4 (23.2 ov)</div>
                                                </div>
                                                <div className="live keeda-descript">
                                                    <span><button class="Livebtn">Live</button> NZ need 78 runs in
                                                        26.4 remaining over</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabBoxfooter">
                                            <a href="cricket-schedule.php">Schedule <i
                                                class="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
 
                </div>
            </div>
        </>
    )
}

export default CricketTab